# Mod Conflict Analyzer (Coursework Project)

Automated system for detecting conflicts and dependency overlaps in modular architectures (Proof of Concept using gaming modifications).

## Features
- **Recursive File Scanning:** Efficiently maps deep directory structures.
- **Smart Filtering:** Ignores media files, focusing only on scripts (`.lua`, `.json`, etc.).
- **Conflict Detection:** Identifies exact files that multiple modules attempt to overwrite.
- **Web Dashboard:** Native Node.js HTTP server for visual report representation.
- **Logging Decorator:** Measures execution time for analysis functions.
- **Auth Proxy Mock:** Prepared architecture for API integration (e.g., Steam Workshop).

## How to run
1. Create a `test_mods` folder in the root and place your modular folders inside.
2. Run `node index.js`.
3. Open `http://localhost:3000` in your browser to view the dashboard.