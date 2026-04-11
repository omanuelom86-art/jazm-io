import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, 'dist');
// Railway provides the PORT environment variable. If not, fallback to 8080.
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    console.log(`[REQ] ${req.method} ${req.url}`);

    // Railway Healthcheck
    if (req.url === '/health') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('OK');
        return;
    }

    // SPA Routing: Ignore query params for file lookup
    const urlWithoutQuery = req.url.split('?')[0];
    let filePath = path.join(distPath, urlWithoutQuery === '/' ? 'index.html' : urlWithoutQuery);

    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        filePath = path.join(distPath, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon',
        '.woff': 'font/woff',
        '.woff2': 'font/woff2',
        '.ttf': 'font/ttf',
    };

    const contentType = mimeTypes[ext] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            res.writeHead(500);
            res.end(`Internal Server Error: ${error.code}`);
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

process.on('uncaughtException', (err) => {
    console.error('💥 Uncaught Exception:', err);
});
process.on('unhandledRejection', (reason, promise) => {
    console.error('💥 Unhandled Rejection at:', promise, 'reason:', reason);
});

server.listen(port, () => {
    console.log(`🚀 STATIC SERVER LIVE ON PORT ${port} (IPv4+IPv6 Dual Stack)`);
    console.log(`Assets Root: ${distPath}`);
});
