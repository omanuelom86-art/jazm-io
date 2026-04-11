/**
 * Resilience Gateway: Maneja la rotación de 3 APIs de IA para asegurar
 * que JAZM.IO nunca se detenga. Incluye lógica de failover y status global.
 */

type APIStatus = 'online' | 'error' | 'switching';

interface APIKey {
    id: string;
    key: string;
    provider: 'openai' | 'anthropic' | 'gemini';
    status: APIStatus;
}

class AIEngine {
    private keys: APIKey[] = [
        { id: 'primary', key: 'sk-...', provider: 'openai', status: 'online' },
        { id: 'secondary', key: 'sk-...', provider: 'anthropic', status: 'online' },
        { id: 'fallback', key: '...', provider: 'gemini', status: 'online' }
    ];

    private currentKeyIndex = 0;
    private statusListeners: ((status: APIStatus, provider: string) => void)[] = [];

    getCurrentKey() {
        return this.keys[this.currentKeyIndex];
    }

    onStatusChange(callback: (status: APIStatus, provider: string) => void) {
        this.statusListeners.push(callback);
    }

    private notifyListeners() {
        const current = this.getCurrentKey();
        this.statusListeners.forEach(cb => cb(current.status, current.provider));
    }

    async failover() {
        console.warn(`[AIEngine] Error detectado en ${this.keys[this.currentKeyIndex].provider}. Cambiando API...`);
        this.keys[this.currentKeyIndex].status = 'error';
        this.currentKeyIndex = (this.currentKeyIndex + 1) % this.keys.length;
        this.keys[this.currentKeyIndex].status = 'switching';
        this.notifyListeners();

        // Simular tiempo de reconexión
        await new Promise(resolve => setTimeout(resolve, 2000));
        this.keys[this.currentKeyIndex].status = 'online';
        this.notifyListeners();
    }
}

export const aiEngine = new AIEngine();
