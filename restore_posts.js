const fs = require('fs');
const { execSync } = require('child_process');

// Get the content.ts from HEAD
const oldContent = execSync('git show HEAD:src/data/content.ts', { encoding: 'utf-8' });

// We can extract the BLOG_POSTS array by isolating it.
// The easiest way is to write it to a temp TS file, strip the types, and run it.
const startMarker = 'export const BLOG_POSTS: BlogPost[] = [';
const endMarker = '];\n\n// ────────────────────────────────────────────────────────────\n// ROUTE MAP HELPERS';

const startIdx = oldContent.indexOf(startMarker);
const endIdx = oldContent.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
    let arrayStr = oldContent.substring(startIdx + 'export const BLOG_POSTS: BlogPost[] = '.length, endIdx + 2);
    
    // Write a small script to evaluate and output JSON
    const evalScript = `
        const posts = ${arrayStr};
        console.log(JSON.stringify(posts, null, 2));
    `;
    
    fs.writeFileSync('temp_eval.js', evalScript);
    try {
        const jsonOutput = execSync('node temp_eval.js', { encoding: 'utf-8' });
        fs.writeFileSync('src/data/posts.json', jsonOutput);
        console.log("Successfully restored 3 original posts to posts.json");
    } catch(e) {
        console.log("Failed to evaluate: " + e.message);
    }
} else {
    console.log("Could not find boundaries in old content");
}
