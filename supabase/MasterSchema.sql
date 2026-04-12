-- EJECUTAR ESTO EN EL SQL EDITOR DE SUPABASE

-- Tabla de Empleados Inteligentes (AI Agents)
CREATE TABLE IF NOT EXISTS public.ai_agents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID REFERENCES auth.users(id),
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    status TEXT DEFAULT 'Activo',
    system_prompt TEXT,
    avatar_icon TEXT DEFAULT 'smart_toy',
    color_class TEXT
);

-- Habilitar Reglas de Privacidad RLS
ALTER TABLE public.ai_agents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own agents"
ON public.ai_agents
FOR ALL TO authenticated 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Tabla de Conexiones de WhatsApp y Redes
CREATE TABLE IF NOT EXISTS public.whatsapp_connections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID REFERENCES auth.users(id),
    channel TEXT NOT NULL,
    identifier TEXT NOT NULL,
    agent_assigned_id UUID REFERENCES public.ai_agents(id),
    status TEXT DEFAULT 'Desconectado'
);
ALTER TABLE public.whatsapp_connections ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage their own connections" ON public.whatsapp_connections FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
