-- Ejecuta este código en el SQL Editor de tu Dashboard de Supabase

CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID REFERENCES auth.users(id),
    column_id TEXT NOT NULL DEFAULT 'prospeccion',
    title TEXT NOT NULL,
    subtitle TEXT,
    amount TEXT,
    tag_text TEXT,
    tag_class TEXT,
    energy INTEGER,
    energy_color TEXT
);

-- Habilitar Seguridad (RLS) para que nadie pueda ver los leads de otras empresas/usuarios
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own leads"
ON public.leads
FOR ALL 
TO authenticated 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);
