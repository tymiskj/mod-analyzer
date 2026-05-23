import { scanDirectory } from './src/scanner.js';
import { findConflicts } from './src/analyzer.js';
import { generateReport } from './src/report.js';
import { startServer } from './src/server.js';

const testFolder = './test_mods';
const reportFile = './conflict_report.json';

try {
    console.log('--- Starting Mod Analysis ---');
    const allFiles = scanDirectory(testFolder);
    const conflicts = findConflicts(allFiles, testFolder);
    
    console.log(`Total relevant files scanned: ${allFiles.length}`);
    console.log(`Conflicts found: ${conflicts.length}`);
    
    generateReport(conflicts, reportFile);
    console.log(`Report saved to: ${reportFile}`);

    // Запускаємо веб-сервер
    startServer(3000);

} catch (e) {
    console.log('Error during analysis:', e.message);
}