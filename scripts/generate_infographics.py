import os
import subprocess
import base64

def get_base64_image(image_path):
    if os.path.exists(image_path):
        with open(image_path, "rb") as img_file:
            b64 = base64.b64encode(img_file.read()).decode('utf-8')
            ext = os.path.splitext(image_path)[1].replace('.', '')
            if ext == 'webp':
                return f"data:image/webp;base64,{b64}"
            return f"data:image/png;base64,{b64}"
    return ""

def render_html_to_image(html_content, output_image_path):
    temp_html = os.path.abspath("scripts/temp_post.html")
    with open(temp_html, "w", encoding="utf-8") as f:
        f.write(html_content)
    
    edge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
    abs_output = os.path.abspath(output_image_path)
    file_url = "file:///" + temp_html.replace("\\", "/")
    
    cmd = [
        edge_path,
        "--headless=new",
        f"--screenshot={abs_output}",
        "--window-size=1080,1080",
        "--hide-scrollbars",
        "--default-background-color=00000000",
        file_url
    ]
    subprocess.run(cmd, check=True)
    if os.path.exists(temp_html):
        os.remove(temp_html)
    print(f"Rendered: {output_image_path} ({os.path.getsize(abs_output)} bytes)")

logo_b64 = get_base64_image("public/mi_logo.webp")

# Template 2: Swimmer's Ear / Otitis Externa Focus
html_post_otitis = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
  
  * {{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
  }}

  body {{
    width: 1080px;
    height: 1080px;
    background: radial-gradient(circle at 15% 15%, #0369a1 0%, #0f172a 60%, #020617 100%);
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 60px;
    position: relative;
    overflow: hidden;
  }}

  .bg-grid {{
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: 
      linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
  }}

  .flare {{
    position: absolute;
    width: 600px;
    height: 600px;
    top: -200px;
    left: -100px;
    background: radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, rgba(56, 189, 248, 0) 70%);
    pointer-events: none;
  }}

  .header {{
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
  }}

  .brand {{
    display: flex;
    align-items: center;
    gap: 18px;
  }}

  .brand img {{
    height: 64px;
    width: auto;
    filter: drop-shadow(0 4px 12px rgba(14, 165, 233, 0.4));
  }}

  .brand-text h1 {{
    font-size: 26px;
    font-weight: 800;
    letter-spacing: -0.5px;
    color: #ffffff;
  }}

  .brand-text p {{
    font-size: 13px;
    font-weight: 600;
    color: #38bdf8;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }}

  .badge-urgent {{
    background: rgba(239, 68, 68, 0.15);
    border: 1.5px solid rgba(239, 68, 68, 0.5);
    color: #fca5a5;
    padding: 10px 20px;
    border-radius: 9999px;
    font-size: 14px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 10px;
  }}

  .urgent-dot {{
    width: 10px;
    height: 10px;
    background: #ef4444;
    border-radius: 50%;
    box-shadow: 0 0 10px #ef4444;
  }}

  .main {{
    z-index: 10;
    margin-top: 10px;
  }}

  .pretitle {{
    color: #38bdf8;
    font-size: 17px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 12px;
  }}

  .title {{
    font-size: 52px;
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -1.5px;
    margin-bottom: 16px;
    max-width: 950px;
  }}

  .title span {{
    color: #38bdf8;
  }}

  .subtitle {{
    font-size: 21px;
    font-weight: 500;
    color: #94a3b8;
    margin-bottom: 30px;
    max-width: 880px;
    line-height: 1.4;
  }}

  .steps-container {{
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 10px;
  }}

  .step-row {{
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 18px;
    padding: 16px 22px;
    display: flex;
    align-items: center;
    gap: 20px;
    backdrop-filter: blur(10px);
  }}

  .step-num {{
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
    color: #ffffff;
    font-size: 20px;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }}

  .step-info h3 {{
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 3px;
  }}

  .step-info p {{
    font-size: 14px;
    color: #94a3b8;
  }}

  .footer {{
    z-index: 10;
    background: rgba(15, 23, 42, 0.9);
    border: 1.5px solid rgba(56, 189, 248, 0.3);
    border-radius: 24px;
    padding: 24px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4);
  }}

  .cta-left {{
    display: flex;
    flex-direction: column;
    gap: 4px;
  }}

  .cta-left p {{
    font-size: 13px;
    color: #94a3b8;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }}

  .cta-left .url {{
    font-size: 20px;
    color: #ffffff;
    font-weight: 700;
  }}

  .whatsapp-btn {{
    background: #25D366;
    color: #000000;
    font-size: 22px;
    font-weight: 800;
    padding: 16px 30px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-shadow: 0 8px 24px rgba(37, 211, 102, 0.35);
  }}

  .areas-bar {{
    position: absolute;
    bottom: 20px;
    left: 60px;
    right: 60px;
    text-align: center;
    font-size: 13px;
    color: #64748b;
    font-weight: 600;
  }}
</style>
</head>
<body>
  <div class="bg-grid"></div>
  <div class="flare"></div>

  <div class="header">
    <div class="brand">
      <img src="{logo_b64}" alt="Interdocs Medical">
      <div class="brand-text">
        <h1>INTERDOCS MEDICAL</h1>
        <p>Hotel & Home Medical Care</p>
      </div>
    </div>
    <div class="badge-urgent">
      <div class="urgent-dot"></div>
      RAPID RESPONSE 24/7
    </div>
  </div>

  <div class="main">
    <div class="pretitle">Holiday Ear Pain & Acute Otitis</div>
    <div class="title">
      Swimmer's Ear ruining your trip?<br>
      <span>Instant relief in your hotel room.</span>
    </div>
    <div class="subtitle">
      Pool and beach water can cause severe ear infections in hours. Don't spend your vacation suffering in crowded emergency rooms.
    </div>

    <div class="steps-container">
      <div class="step-row">
        <div class="step-num">1</div>
        <div class="step-info">
          <h3>Send a Quick WhatsApp Message</h3>
          <p>Share your hotel name and room number. Immediate medical triage in English.</p>
        </div>
      </div>

      <div class="step-row">
        <div class="step-num">2</div>
        <div class="step-info">
          <h3>Doctor Arrives in Under 45 Minutes</h3>
          <p>Full otoscopic examination, gentle ear cleaning & pain-relief prescription.</p>
        </div>
      </div>

      <div class="step-row">
        <div class="step-num">3</div>
        <div class="step-info">
          <h3>Official Insurance Claim Report</h3>
          <p>We provide full medical documentation for 100% travel insurance reimbursement.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="footer">
    <div class="cta-left">
      <p>Direct WhatsApp Emergency Line</p>
      <div class="url">www.interdocsmedical.com</div>
    </div>
    <div class="cta-right">
      <div class="whatsapp-btn">
        <span>💬</span>
        <span>+34 637 255 224</span>
      </div>
    </div>
  </div>

  <div class="areas-bar">
    📍 Marbella • Puerto Banús • Málaga • Torremolinos • Benalmádena • Fuengirola • Estepona
  </div>
</body>
</html>
"""

render_html_to_image(html_post_otitis, "public/infografia-otitis-costa-del-sol.png")
