const fs = require('fs');

let content = fs.readFileSync('src/data/content.ts', 'utf-8');

// The file got corrupted because the replace command messed up the array.
// But we know that the ROUTE MAP HELPERS section comes right after BLOG_POSTS.
// Let's see if we can find ROUTE MAP HELPERS in the file.
const endMarker = "// ────────────────────────────────────────────────────────────\n// ROUTE MAP HELPERS";
let endIdx = content.indexOf(endMarker);

if (endIdx === -1) {
    console.log("ROUTE MAP HELPERS not found, it got deleted! We need to restore it from git diff.");
} else {
    console.log("ROUTE MAP HELPERS found!");
}
