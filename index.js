import { scanDirectory } from './src/scanner.js';

const testFolder = './test_mods'; 

try {
    const allFiles = scanDirectory(testFolder);
    console.log(`Found ${allFiles.length} files.`);
} catch (e) {
    console.log('Error reading folder, maybe it does not exist yet');
}