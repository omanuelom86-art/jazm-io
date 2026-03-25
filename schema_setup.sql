-- 1. Asegurar Esquemas
CREATE SCHEMA IF NOT EXISTS evolution_api;

-- 2. Tabla de Empresas (Multi-tenancy)
CREATE TABLE IF NOT EXISTS public.companies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    domain TEXT,
    config JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Tabla de Pipelines (Embudos)
CREATE TABLE IF NOT EXISTS public.pipelines (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Etapas de Pipeline
CREATE TABLE IF NOT EXISTS public.pipeline_stages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    pipeline_id UUID REFERENCES public.pipelines(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    color TEXT DEFAULT '#cbd5e1',
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Contactos (Clientes)
CREATE TABLE IF NOT EXISTS public.contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    status TEXT DEFAULT 'open',
    last_interaction TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Deals (Oportunidades/Leads)
CREATE TABLE IF NOT EXISTS public.deals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    pipeline_id UUID REFERENCES public.pipelines(id) ON DELETE CASCADE,
    stage_id UUID REFERENCES public.pipeline_stages(id) ON DELETE SET NULL,
    contact_id UUID REFERENCES public.contacts(id) ON DELETE SET NULL,
    name TEXT NOT NULL,
    value DECIMAL(12,2) DEFAULT 0,
    status TEXT DEFAULT 'open',
    source TEXT DEFAULT 'manual',
    probability INTEGER DEFAULT 50,
    notes TEXT,
    email TEXT,
    phone TEXT,
    cedula TEXT,
    income DECIMAL(12,2),
    profile TEXT,
    credit_type TEXT,
    actividad_economica TEXT,
    ai_score INTEGER,
    custom_fields JSONB DEFAULT '{}',
    assigned_to TEXT,
    stage_updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. Notas e Interacciones
CREATE TABLE IF NOT EXISTS public.notes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    deal_id UUID REFERENCES public.deals(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    type TEXT DEFAULT 'note', -- note, chat, call
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. Tareas
CREATE TABLE IF NOT EXISTS public.tasks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    deal_id UUID REFERENCES public.deals(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    due_date DATE,
    priority TEXT DEFAULT 'Media',
    assigned_to TEXT,
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 9. Perfiles de Usuario (RBAC)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    company_id UUID REFERENCES public.companies(id) ON DELETE SET NULL,
    full_name TEXT,
    avatar_url TEXT,
    rol TEXT DEFAULT 'agent' CHECK (rol IN ('admin', 'manager', 'agent')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Eliminar políticas antiguas si existen
DROP POLICY IF EXISTS "Admin Full Access" ON public.profiles;
DROP POLICY IF EXISTS "Self View" ON public.profiles;

-- Nueva política Admin: Puede ver y editar TODO si su propio rol es 'admin'
CREATE POLICY "Admin Full Access" ON public.profiles
    FOR ALL
    USING (
        (SELECT rol FROM public.profiles WHERE id = auth.uid()) = 'admin'
    );

-- Nueva política Self: Puede ver su propio perfil
CREATE POLICY "Self View" ON public.profiles
    FOR SELECT
    USING (auth.uid() = id);

-- Nueva política Self Update: Puede editar su propio perfil
CREATE POLICY "Self Update" ON public.profiles
    FOR UPDATE
    USING (auth.uid() = id);

-- 10. Configuraciones de API (n8n, Evolution, etc)
CREATE TABLE IF NOT EXISTS public.api_configurations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    provider TEXT UNIQUE NOT NULL, -- whatsapp_bot, n8n, etc
    config JSONB DEFAULT '{}',
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 11. Tablas Adicionales para el CRM
CREATE TABLE IF NOT EXISTS public.crm_fields (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), name TEXT, label TEXT, type TEXT, is_system BOOLEAN DEFAULT FALSE);
CREATE TABLE IF NOT EXISTS public.stage_fields (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), stage_id UUID, field_key TEXT, is_required BOOLEAN DEFAULT FALSE);
CREATE TABLE IF NOT EXISTS public.crm_tags (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), name TEXT, color TEXT);
CREATE TABLE IF NOT EXISTS public.document_templates (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), name TEXT, content TEXT);
CREATE TABLE IF NOT EXISTS public.bot_conversations (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), deal_id UUID, platform TEXT, status TEXT, created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW());

-- Disparadores para updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_profiles_modtime BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

