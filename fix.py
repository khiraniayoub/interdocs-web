import re

content = open('src/data/content.ts', 'r', encoding='utf-8').read()

# Replace any occurrence of TWO consecutive ambulance blocks with just ONE
pattern = r'(\{\s*icon:\s*"ambulance"[^\}]+\},?\s*)\{\s*icon:\s*"ambulance"[^\}]+\},?'
new_content = re.sub(pattern, r'\1', content)

with open('src/data/content.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)
print("Removed duplicates")