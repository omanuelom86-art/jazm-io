import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;
const distPath = path.join(__dirname, 'dist');

console.log(`Checking Assets at: ${distPath}`);
if (fs.existsSync(path.join(distPath, 'index.html'))) {
    console.log('✅ dist/index.html found!');
} else {
    console.error('❌ dist/index.html NOT FOUND!');
}

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - IP: ${req.ip}`);
    next();
});

app.use(express.static(distPath));

app.get('/health', (req, res) => {
    console.log('💓 Healthcheck request received');
    res.status(200).send('OK');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

const server = app.listen(port, '0.0.0.0', () => {
    console.log(`🚀 Server LIVE on port ${port}`);
    console.log(`Serving assets from: ${distPath}`);
});

server.on('error', (err) => {
    console.error('❌ Server Error:', err);
});
