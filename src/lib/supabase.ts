import { createClient } from '@supabase/supabase-js';

/**
 * Supabase Client con Soporte Multi-Tenant
 * Este cliente incluye helpers para manejar el `tenant_id` automáticamente
 * y asegurar que los datos estén aislados por empresa.
 */

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper para obtener el Tenant ID actual del usuario logueado
export const getCurrentTenantId = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    return user?.user_metadata?.tenant_id || 'default_tenant';
};

/**
 * Hook/Helper para consultas con RLS forzado
 * Uso: const { data } = await supabaseFromTenant('leads').select('*')
 */
export const supabaseFromTenant = (table: string) => {
    return supabase.from(table); // El RLS en Supabase se encargará del filtrado por tenant_id
};
