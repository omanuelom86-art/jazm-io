import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;
const distPath = path.join(__dirname, 'dist');

console.log(`Checking Assets at: ${distPath}`);
import fs from 'fs';
if (fs.existsSync(path.join(distPath, 'index.html'))) {
    console.log('✅ dist/index.html found!');
} else {
    console.error('❌ dist/index.html NOT FOUND!');
}

app.use(express.static(distPath));

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});
