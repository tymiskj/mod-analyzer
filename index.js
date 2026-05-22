import { scanDirectory } from './src/scanner.js';
import { findConflicts } from './src/analyzer.js';
import { generateReport } from './src/report.js';

const testFolder = './test_mods';
const reportFile = './conflict_report.json';

try {
    const allFiles = scanDirectory(testFolder);
    const conflicts = findConflicts(allFiles, testFolder);
    
    console.log(`Total relevant files scanned: ${allFiles.length}`);
    console.log(`Conflicts found: ${conflicts.length}`);
    
    if (conflicts.length > 0) {
        generateReport(conflicts, reportFile);
        console.log(`\nReport saved to: ${reportFile}`);
    } else {
        console.log('\nNo conflicts found! Your modpack is safe.');
    }
} catch (e) {
    console.log('Error during analysis:', e.message);
}