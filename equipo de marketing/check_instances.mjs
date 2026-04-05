const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
const fs = require('fs');

const envPath = '.env';
if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
}

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkInstances() {
    const { data, error } = await supabase
        .from('whatsapp_instances')
        .select('*');

    if (error) {
        console.error('Error fetching instances:', error);
    } else {
        console.log('WhatsApp Instances:', JSON.stringify(data, null, 2));
    }
}

checkInstances();
