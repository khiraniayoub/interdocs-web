# -*- coding: utf-8 -*-
import re

content = open('src/data/content.ts', 'r', encoding='utf-8').read()

ambulance_translations = {
    'en': {'title': 'Ambulance Transfer', 'desc': 'Safe and fast medical transport to the nearest hospital.'},
    'es': {'title': 'Traslado en Ambulancia', 'desc': 'Transporte médico seguro y rápido al hospital más cercano.'},
    'de': {'title': 'Krankentransport', 'desc': 'Sicherer und schneller medizinischer Transport zum nächsten Krankenhaus.'},
    'fr': {'title': 'Transfert en Ambulance', 'desc': 'Transport médical sûr et rapide vers l\'hôpital le plus proche.'},
    'fi': {'title': 'Ambulanssikuljetus', 'desc': 'Turvallinen ja nopea lääketieteellinen kuljetus lähimpään sairaalaan.'},
    'ar': {'title': 'نقل بسيارة الإسعاف', 'desc': 'نقل طبي آمن وسريع إلى أقرب مستشفى.'},
    'no': {'title': 'Ambulansetransport', 'desc': 'Sikker og rask medisinsk transport til nærmeste sykehus.'},
    'da': {'title': 'Ambulancetransport', 'desc': 'Sikker og hurtig medicinsk transport til det nærmeste hospital.'},
    'sv': {'title': 'Ambulanstransport', 'desc': 'Säker och snabb medicinsk transport till närmaste sjukhus.'}
}

locales = ['en', 'es', 'de', 'fr', 'fi', 'ar', 'no', 'da', 'sv']

# Regex to match the gp block, whether it's multiline or single line.
# It matches from `{ icon: "gp"` up to the closing `}`
pattern = r'(\{\s*icon:\s*"gp"[^\}]+\}(,?))'

matches = list(re.finditer(pattern, content))

if len(matches) == 9:
    new_content = ""
    last_end = 0
    for i, match in enumerate(matches):
        locale = locales[i]
        trans = ambulance_translations[locale]
        
        replacement = match.group(1)
        if not match.group(2):
            replacement += "," # ensure comma
            
        replacement += f'''
        {{
          icon: "ambulance",
          title: "{trans['title']}",
          desc: "{trans['desc']}",
        }},'''
        
        new_content += content[last_end:match.start()] + replacement
        last_end = match.end()
        
    new_content += content[last_end:]
    
    with open('src/data/content.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully updated content.ts")
else:
    print(f"Found {len(matches)} gp blocks instead of 9.")