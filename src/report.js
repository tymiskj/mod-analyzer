import fs from 'fs';

export function generateReport(conflicts, outputPath) {
    const reportData = {
        analyzedAt: new Date().toISOString(),
        totalConflicts: conflicts.length,
        conflicts: conflicts
    };

    fs.writeFileSync(outputPath, JSON.stringify(reportData, null, 2), 'utf-8');
}