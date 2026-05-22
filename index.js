import { scanDirectory } from './src/scanner.js';
import { findConflicts } from './src/analyzer.js';
import { generateReport } from './src/report.js';
import { withLogging } from './src/logger.js';
import { AuthProxy } from './src/apiProxy.js';
import { startServer } from './src/server.js';

const testFolder = './test_mods';
const reportFile = './conflict_report.json';

const loggedScan = withLogging(scanDirectory, 'INFO');
const loggedAnalyze = withLogging(findConflicts, 'INFO');

try {
    console.log('--- Starting Analysis ---');
    const allFiles = loggedScan(testFolder);
    const conflicts = loggedAnalyze(allFiles, testFolder);
    
    generateReport(conflicts, reportFile);
    console.log(`Analysis complete. Found ${conflicts.length} conflicts. Report saved.\n`);

    startServer(3000);

} catch (e) {
    console.log('Fatal error:', e.message);
}