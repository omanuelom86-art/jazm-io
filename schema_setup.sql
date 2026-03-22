-- 1. Crear Esquemas
CREATE SCHEMA IF NOT EXISTS crm;
CREATE SCHEMA IF NOT EXISTS n8n;
CREATE SCHEMA IF NOT EXISTS evolution_api;

-- 2. Tabla de Empresas (Multi-tenancy)
CREATE TABLE IF NOT EXISTS crm.companies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nombre TEXT NOT NULL,
    dominio TEXT,
    config JSONB DEFAULT '{}',
    creado_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Tabla de Clientes (Customers)
CREATE TABLE IF NOT EXISTS crm.customers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID REFERENCES crm.companies(id) ON DELETE CASCADE,
    nombre TEXT NOT NULL,
    email TEXT UNIQUE,
    telefono TEXT NOT NULL,
    estado TEXT DEFAULT 'lead', -- lead, contacto, cliente, inactivo
    origen TEXT, -- facebook, instagram, whatsapp, web
    notas TEXT,
    creado_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    actualizado_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Tabla de Interacciones (Registro de Comunicación)
CREATE TABLE IF NOT EXISTS crm.interactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    cliente_id UUID REFERENCES crm.customers(id) ON DELETE CASCADE,
    tipo TEXT NOT NULL, -- whatsapp, email, llamada, reunión
    direccion TEXT DEFAULT 'saliente', -- entrante, saliente
    contenido TEXT,
    metadata JSONB, -- almacenar datos específicos del proveedor
    creado_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Tabla de Oportunidades (Pipeline de Ventas)
CREATE TABLE IF NOT EXISTS crm.opportunities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID REFERENCES crm.companies(id) ON DELETE CASCADE,
    cliente_id UUID REFERENCES crm.customers(id) ON DELETE CASCADE,
    titulo TEXT NOT NULL,
    valor DECIMAL(12,2) DEFAULT 0,
    etapa TEXT DEFAULT 'prospeccion', -- prospeccion, calificado, propuesta, negociacion, cerrado_ganado, cerrado_perdido
    prioridad TEXT DEFAULT 'media', -- baja, media, alta
    creado_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    actualizado_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Tabla de Configuración de Empresa / IA
CREATE TABLE IF NOT EXISTS crm.company_config (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID UNIQUE REFERENCES crm.companies(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    nombre_empresa TEXT,
    logo_url TEXT,
    tono_ia TEXT DEFAULT 'profesional',
    reglas_ia TEXT,
    creado_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    actualizado_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. Perfiles de Usuario y RBAC
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    company_id UUID REFERENCES crm.companies(id) ON DELETE SET NULL,
    nombre_completo TEXT,
    avatar_url TEXT,
    rol TEXT DEFAULT 'agent' CHECK (rol IN ('admin', 'manager', 'agent')),
    creado_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    actualizado_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Función auxiliar para actualizado_at
CREATE OR REPLACE FUNCTION actualizar_columna_modificacion()
RETURNS TRIGGER AS $$
BEGIN
    NEW.actualizado_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 6. Aplicar disparadores (triggers) para actualizado_at
DROP TRIGGER IF EXISTS actualizar_crm_customers_modtime ON crm.customers;
CREATE TRIGGER actualizar_crm_customers_modtime BEFORE UPDATE ON crm.customers FOR EACH ROW EXECUTE PROCEDURE actualizar_columna_modificacion();

DROP TRIGGER IF EXISTS actualizar_public_profiles_modtime ON public.profiles;
CREATE TRIGGER actualizar_public_profiles_modtime BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE PROCEDURE actualizar_columna_modificacion();

DROP TRIGGER IF EXISTS actualizar_crm_opportunities_modtime ON crm.opportunities;
CREATE TRIGGER actualizar_crm_opportunities_modtime BEFORE UPDATE ON crm.opportunities FOR EACH ROW EXECUTE PROCEDURE actualizar_columna_modificacion();

DROP TRIGGER IF EXISTS actualizar_crm_company_config_modtime ON crm.company_config;
CREATE TRIGGER actualizar_crm_company_config_modtime BEFORE UPDATE ON crm.company_config FOR EACH ROW EXECUTE PROCEDURE actualizar_columna_modificacion();

-- 7. Seguridad de Nivel de Fila (RLS) básica - Ejemplo
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Los usuarios pueden ver su propio perfil" ON public.profiles;
CREATE POLICY "Los usuarios pueden ver su propio perfil" ON public.profiles FOR SELECT USING (auth.uid() = id);

DROP POLICY IF EXISTS "Los administradores pueden ver todos los perfiles" ON public.profiles;
CREATE POLICY "Los administradores pueden ver todos los perfiles" ON public.profiles FOR ALL USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND rol = 'admin')
);
