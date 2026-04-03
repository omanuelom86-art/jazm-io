-- Actualización de Esquema para Proyecto Nexus AI

-- 1. Agregar campos a pipeline_stages
ALTER TABLE public.pipeline_stages 
ADD COLUMN IF NOT EXISTS ia_active BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS max_time_in_stage INTEGER DEFAULT 3; -- Días por defecto

-- 2. Enriquecer la tabla de empresas con configuración de IA
ALTER TABLE public.companies
ADD COLUMN IF NOT EXISTS system_prompt TEXT,
ADD COLUMN IF NOT EXISTS knowledge_base TEXT;

-- 3. Asegurar que la tabla de deals tenga los campos necesarios para IA
ALTER TABLE public.deals
ADD COLUMN IF NOT EXISTS manual_attention_required BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS ai_insight TEXT;

-- 4. Nueva tabla para historial de interacciones de IA (para auditoría)
CREATE TABLE IF NOT EXISTS public.ai_interactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE,
    deal_id UUID REFERENCES public.deals(id) ON DELETE CASCADE,
    prompt TEXT,
    response TEXT,
    tokens_used INTEGER,
    model TEXT DEFAULT 'llama-3.3-70b-versatile',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Comentario de versión
COMMENT ON SCHEMA public IS 'Esquema actualizado para Nexus AI v1.0 - Orquestación n8n/Groq';
