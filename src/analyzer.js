import path from 'path';

export function findConflicts(filePaths, baseFolder) {
    const fileMap = new Map();
    const conflicts = [];

    for (const filePath of filePaths) {
        const relative = path.relative(baseFolder, filePath);
        const pathParts = relative.split(path.sep);
        
        if (pathParts.length < 2) continue;

        const modName = pathParts[0]; 
        const internalPath = pathParts.slice(1).join(path.sep); 

        if (!fileMap.has(internalPath)) {
            fileMap.set(internalPath, []);
        }

        fileMap.get(internalPath).push(modName);
    }

    for (const [internalPath, mods] of fileMap.entries()) {
        if (mods.length > 1) {
            conflicts.push({
                file: internalPath,
                mods: mods
            });
        }
    }

    return conflicts;
}