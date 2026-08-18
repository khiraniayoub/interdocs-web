const fs = require('fs');

const file = 'src/data/content.ts';
let content = fs.readFileSync(file, 'utf-8');

const startMarker = 'export const BLOG_POSTS: BlogPost[] = [';
const startIdx = content.indexOf(startMarker);

if (startIdx !== -1) {
    const endMatch = content.substring(startIdx).match(/ROUTE MAP HELPERS/);
    
    if (endMatch) {
        const endIdx = startIdx + endMatch.index;
        // Find the last '];' before the endIdx
        const sub = content.substring(startIdx, endIdx);
        const lastBracket = sub.lastIndexOf('];');
        
        if (lastBracket !== -1) {
            const absoluteEndIdx = startIdx + lastBracket + 2;
            const newContent = content.substring(0, startIdx) + 
                               'export const BLOG_POSTS: BlogPost[] = blogPostsData as BlogPost[];' + 
                               content.substring(absoluteEndIdx);
            
            // Also ensure the import is at the top
            if (!newContent.includes('import blogPostsData')) {
                const importStr = '\nimport blogPostsData from "./posts.json";\n';
                const localeLine = 'export type Locale = "en" | "es" | "de" | "fr" | "fi" | "ar" | "no" | "da" | "sv";';
                const newContentWithImport = newContent.replace(localeLine, localeLine + importStr);
                fs.writeFileSync(file, newContentWithImport, 'utf-8');
            } else {
                fs.writeFileSync(file, newContent, 'utf-8');
            }
            console.log("Success!");
        } else {
            console.log("Could not find ];");
        }
    } else {
        console.log("Could not find endSection");
    }
} else {
    console.log("Could not find startMarker");
}
