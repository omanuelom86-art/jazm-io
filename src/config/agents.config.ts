export interface AIAgent {
    id: string;
    name: string;
    role: string;
    specialty: string;
    personality: string;
    avatar: string;
    status: 'active' | 'learning' | 'dormant';
}

export const virtualTeam: AIAgent[] = [
    {
        id: 'agent-mkt-01',
        name: 'Aria',
        role: 'Experta en Marketing & Funnels',
        specialty: 'Optimización de conversión y segmentación de leads',
        personality: 'Analítica, creativa y orientada a resultados',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aria',
        status: 'active'
    },
    {
        id: 'agent-sales-01',
        name: 'Leo',
        role: 'Closer de Ventas IA',
        specialty: 'Manejo de objeciones y cierre en WhatsApp',
        personality: 'Persuasivo, empático y persistente',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Leo',
        status: 'learning'
    },
    {
        id: 'agent-support-01',
        name: 'Kira',
        role: 'Soporte Técnico 24/7',
        specialty: 'Resolución de dudas y documentación dinámica',
        personality: 'Paciente, servicial y precisa',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kira',
        status: 'active'
    }
];

export const teamManager = {
    id: 'manager-antigravity',
    name: 'Antigravity (Manager)',
    role: 'Arquitecto de Sistemas & Director de Operaciones IA',
    responsibility: 'Coordinar a los agentes virtuales y asegurar el cumplimiento de objetivos del SuperAdmin (Oscar).'
};
