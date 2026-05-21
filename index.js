import { scanDirectory } from './src/scanner.js';
import { findConflicts } from './src/analyzer.js';

const testFolder = './test_mods';

try {
    const allFiles = scanDirectory(testFolder);
    const conflicts = findConflicts(allFiles, testFolder);
    
    console.log(`Total files scanned: ${allFiles.length}`);
    console.log(`Conflicts found: ${conflicts.length}`);
    
    if (conflicts.length > 0) {
        console.log('\nConflict details:');
        console.log(JSON.stringify(conflicts, null, 2));
    }
} catch (e) {
    console.log('Error during analysis:', e.message);
}