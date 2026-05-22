import http from 'http';
import fs from 'fs';
import path from 'path';

export function startServer(port = 3000) {
    const server = http.createServer((req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');

        if (req.url === '/api/report') {
            try {
                const reportData = fs.readFileSync('./conflict_report.json', 'utf-8');
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(reportData);
            } catch (e) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Report not found. Run analysis first.' }));
            }
        } else if (req.url === '/' || req.url === '/index.html') {
            try {
                const htmlPath = path.join(process.cwd(), 'public', 'index.html');
                const html = fs.readFileSync(htmlPath, 'utf-8');
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(html);
            } catch (e) {
                res.writeHead(500);
                res.end('Error loading dashboard UI');
            }
        } else {
            res.writeHead(404);
            res.end('Not found');
        }
    });

    server.listen(port, () => {
        console.log(`\n[Web Dashboard] is running at http://localhost:${port}`);
        console.log(`Open this link in your browser to view the results.`);
    });
}