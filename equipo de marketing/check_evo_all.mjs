import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';

const envPath = '.env';
if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
}

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkInstances() {
    try {
        const { data: instances, error: e1 } = await supabase
            .from('whatsapp_instances')
            .select('*');

        const { data: configs, error: e2 } = await supabase
            .from('api_configurations')
            .select('*')
            .eq('provider', 'whatsapp_bot');

        console.log('WhatsApp Instances:', JSON.stringify(instances, null, 2));
        console.log('API Configurations:', JSON.stringify(configs, null, 2));
    } catch (err) {
        console.error(err);
    }
}

checkInstances();
