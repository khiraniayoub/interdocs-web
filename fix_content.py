import os
import re

file_path = r"c:\Users\Ayoub\Desktop\Visita_a_domicilio\visita-domicilio\src\data\content.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Find the start of the BLOG_POSTS export
start_idx = content.find("export const BLOG_POSTS: BlogPost[] = [")

if start_idx != -1:
    # Now find the // ROUTE MAP HELPERS section which comes immediately after BLOG_POSTS
    end_marker = "// ────────────────────────────────────────────────────────────\n// ROUTE MAP HELPERS"
    end_idx = content.find(end_marker, start_idx)
    
    if end_idx != -1:
        new_content = content[:start_idx] + "export const BLOG_POSTS: BlogPost[] = blogPostsData as BlogPost[];\n\n" + content[end_idx:]
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print("Fixed content.ts!")
    else:
        print("Could not find end marker")
else:
    # It might already be corrupted and we don't have the original start marker. Let's look for where the interface ends
    interface_end = content.find("export interface BlogPost {\n  slug: string;\n  localeSlugs: Record<Locale, string>;\n  title: Record<Locale, string>;\n  excerpt: Record<Locale, string>;\n  metaTitle: Record<Locale, string>;\n  metaDesc: Record<Locale, string>;\n  date: string;\n  dateModified: string;\n  readTime: number;\n  content: Record<Locale, string>;\n}")
    
    if interface_end != -1:
        # Find where it ends and ROUTE MAP HELPERS begins
        end_marker = "// ────────────────────────────────────────────────────────────\n// ROUTE MAP HELPERS"
        end_idx = content.find(end_marker)
        if end_idx != -1:
            # Reconstruct the file
            safe_end = interface_end + len("export interface BlogPost {\n  slug: string;\n  localeSlugs: Record<Locale, string>;\n  title: Record<Locale, string>;\n  excerpt: Record<Locale, string>;\n  metaTitle: Record<Locale, string>;\n  metaDesc: Record<Locale, string>;\n  date: string;\n  dateModified: string;\n  readTime: number;\n  content: Record<Locale, string>;\n}")
            new_content = content[:safe_end] + "\n\nexport const BLOG_POSTS: BlogPost[] = blogPostsData as BlogPost[];\n\n" + content[end_idx:]
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(new_content)
            print("Fixed content.ts via interface boundary!")
        else:
            print("Could not find end marker (2)")
    else:
        print("Could not find interface end")
