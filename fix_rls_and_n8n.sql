-- 1. Asegurar Esquema N8N
CREATE SCHEMA IF NOT EXISTS n8n;

-- 2. Corregir RLS en public.profiles
-- Primero eliminamos las políticas existentes que son demasiado restrictivas para el Admin
DROP POLICY IF EXISTS "Admin Full Access" ON public.profiles;
DROP POLICY IF EXISTS "Self View" ON public.profiles;
DROP POLICY IF EXISTS "Allow individual read" ON public.profiles;
DROP POLICY IF EXISTS "Allow individual update" ON public.profiles;

-- Política para que el Admin vea TODO
CREATE POLICY "Admin Full Access" ON public.profiles
    FOR ALL
    USING (
        auth.uid() = id OR 
        (SELECT rol FROM public.profiles WHERE id = auth.uid()) = 'admin'
    );

-- Política para que usuarios normales vean su propio perfil
CREATE POLICY "Self View" ON public.profiles
    FOR SELECT
    USING (auth.uid() = id);

-- Aseguramos que RLS esté habilitado
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- 3. Crear el resto de tablas si no existen (Inyectamos el esquema faltante)
-- (Repetimos parte de schema_setup.sql por seguridad si falló)
CREATE TABLE IF NOT EXISTS public.companies (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), name TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS public.deals (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), name TEXT NOT NULL, stage_id UUID, contact_id UUID);
-- ... y el resto de la estructura según schema_setup.sql si fuera necesario.
