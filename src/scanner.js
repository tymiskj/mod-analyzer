import fs from 'fs';
import path from 'path';

export function scanDirectory(dirPath) {
    let results = [];
    const files = fs.readdirSync(dirPath);
    
    for (const file of files) {
        const fullPath = path.join(dirPath, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            results = results.concat(scanDirectory(fullPath));
        } else {
            results.push(fullPath);
        }
    }
    return results;
}