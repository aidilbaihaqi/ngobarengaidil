import html
import pathlib
import re
import sys

from playwright.sync_api import sync_playwright

sys.path.insert(0, str(pathlib.Path(__file__).parent))
from content import QA, SLIDES  # noqa: E402

OUT_PDF = sys.argv[1]
HERE = pathlib.Path(__file__).parent


def inline(s: str) -> str:
    s = html.escape(s, quote=False)
    s = re.sub(r"\[\[(.+?)\]\]", r'<span class="fill">\1</span>', s)
    return s


def body(src: str) -> str:
    out = []
    for raw in src.strip().splitlines():
        line = raw.strip()
        if not line:
            continue
        if line.startswith("> "):
            out.append(f'<p class="dir">{inline(line[2:])}</p>')
        elif line == "K" or line.startswith("K "):
            rest = line[2:].strip()
            out.append(f'<p class="say"><span class="klik">klik</span>{inline(rest)}</p>' if rest
                       else '<p class="say"><span class="klik">klik</span><span class="dirinline">punchline muncul</span></p>')
        elif line.startswith("! "):
            out.append(f'<p class="note">{inline(line[2:])}</p>')
        else:
            m = re.match(r"^\((\d:\d\d)\)\s*(.*)$", line)
            if m:
                out.append(f'<p class="say"><span class="ts">{m.group(1)}</span>{inline(m.group(2))}</p>')
            else:
                out.append(f'<p class="say">{inline(line)}</p>')
    return "\n".join(out)


def slide(s: dict) -> str:
    jeda = s["fase"] == "Jeda"
    klik = f'{s["klik"]} klik' if s["klik"] else "tanpa klik"
    return f"""
<section class="slide{' jeda' if jeda else ''}">
  <header>
    <div class="no">{s['no']:02d}</div>
    <div class="head">
      <div class="meta">{inline(s['fase'])} · {s['t']} · {s['dur']} · {klik}</div>
      <h2>{inline(s['title'])}</h2>
    </div>
  </header>
  <div class="screen"><span>Di layar</span>{inline(s['layar'])}</div>
  {body(s['naskah'])}
</section>"""


rows = "\n".join(
    f"<tr class=\"{'j' if s['fase'] == 'Jeda' else ''}\"><td class=\"n\">{s['no']:02d}</td><td>{inline(s['title'])}</td>"
    f"<td>{inline(s['fase'])}</td><td class=\"n\">{s['t']}</td><td class=\"n\">{s['klik'] or '–'}</td></tr>"
    for s in SLIDES
)

qa = "\n".join(
    f'<div class="qa"><p class="q">{inline(q)}</p><p class="a">{inline(a)}</p></div>' for q, a in QA
)

doc = f"""<!doctype html>
<html lang="id"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600&family=Space+Grotesk:wght@400;500&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=block" rel="stylesheet">
<style>
  @page {{ size: A4; margin: 20mm 18mm 20mm 18mm; }}
  @page :first {{ margin: 0; }}
  :root {{ --navy:#10163A; --ink:#0B1028; --cream:#F4EFE3; --amber:#F2C46D; --amberd:#9A6B12; --teal:#2E8E89; --brick:#B9472F; --muted:#5B6180; }}
  * {{ box-sizing:border-box; }}
  body {{ margin:0; font-family:'IBM Plex Sans',sans-serif; color:var(--navy); font-size:11.4pt; line-height:1.6; -webkit-print-color-adjust:exact; print-color-adjust:exact; }}
  .mono {{ font-family:'JetBrains Mono',monospace; font-variant-ligatures:none; }}
  h1,h2,h3 {{ font-family:'Space Grotesk',sans-serif; font-weight:500; letter-spacing:-0.02em; margin:0; }}

  .cover {{ width:210mm; height:297mm; display:flex; flex-direction:column; justify-content:space-between; page-break-after:always;
           background:var(--navy); color:var(--cream); padding:24mm 22mm; overflow:hidden; }}
  .cover .ev {{ font-family:'JetBrains Mono',monospace; font-size:10pt; letter-spacing:.16em; text-transform:uppercase; opacity:.6; }}
  .cover h1 {{ font-size:46pt; line-height:.95; letter-spacing:-0.045em; margin-top:58mm; }}
  .cover h1 span {{ color:var(--amber); }}
  .cover .sub {{ margin-top:8mm; font-family:'JetBrains Mono',monospace; font-size:12pt; opacity:.85; }}
  .cover .sub i {{ font-family:'IBM Plex Sans'; font-style:italic; opacity:.6; }}
  .cover .kind {{ font-family:'Space Grotesk'; font-size:20pt; color:var(--amber); }}
  .cover .foot {{ display:flex; justify-content:space-between; align-items:flex-end; font-family:'JetBrains Mono',monospace; font-size:10pt; opacity:.75;
                  border-top:1px solid rgb(244 239 227 / .2); padding-top:6mm; }}

  .page {{ page-break-after:always; }}
  h1.sec {{ font-size:24pt; margin-bottom:6mm; }}
  .kicker {{ font-family:'JetBrains Mono',monospace; font-size:8.5pt; letter-spacing:.16em; text-transform:uppercase; color:var(--muted); margin-bottom:2mm; }}
  .lead {{ font-size:13pt; line-height:1.5; }}
  .big {{ font-family:'Space Grotesk'; font-size:19pt; line-height:1.25; letter-spacing:-0.02em; border-left:3px solid var(--amber); padding-left:5mm; margin:6mm 0 8mm; }}
  .legend {{ display:grid; grid-template-columns:34mm 1fr; gap:3mm 6mm; margin:5mm 0 8mm; font-size:10.5pt; align-items:start; }}
  .keys {{ font-size:10pt; }}
  .keys td {{ padding:1.4mm 4mm 1.4mm 0; vertical-align:top; }}
  kbd {{ font-family:'JetBrains Mono'; font-size:9pt; border:1px solid #c9ccd8; border-bottom-width:2px; border-radius:3px; padding:0 1.6mm; background:#fafafa; }}

  table.map {{ width:100%; border-collapse:collapse; font-size:9pt; line-height:1.25; }}
  table.map th {{ text-align:left; font-family:'JetBrains Mono'; font-weight:400; font-size:8pt; letter-spacing:.12em; text-transform:uppercase; color:var(--muted); border-bottom:1.5px solid var(--navy); padding:2mm 2mm; }}
  table.map td {{ padding:0.85mm 2mm; border-bottom:1px solid #e3e4ea; }}
  table.map td.n {{ font-family:'JetBrains Mono'; font-size:9pt; white-space:nowrap; }}
  table.map tr.j td {{ color:var(--muted); font-style:italic; }}

  section.slide {{ margin-bottom:10mm; }}
  section.slide header {{ display:flex; gap:5mm; align-items:flex-end; border-bottom:2px solid var(--navy); padding-bottom:2.5mm; margin-bottom:3.5mm; break-after:avoid; }}
  section.slide .no {{ font-family:'JetBrains Mono'; font-weight:300; font-size:30pt; line-height:.85; color:var(--navy); }}
  section.slide.jeda .no {{ color:var(--amberd); }}
  section.slide .meta {{ font-family:'JetBrains Mono'; font-size:8.3pt; color:var(--muted); letter-spacing:.04em; }}
  section.slide h2 {{ font-size:17pt; line-height:1.15; }}
  .screen {{ background:var(--cream); border-radius:3px; padding:2.6mm 4mm; font-size:9.6pt; line-height:1.5; color:#30365a; margin-bottom:4mm; break-inside:avoid; break-after:avoid; }}
  .screen span {{ display:block; font-family:'JetBrains Mono'; font-size:7.5pt; letter-spacing:.16em; text-transform:uppercase; color:var(--muted); margin-bottom:.6mm; }}
  p {{ margin:0 0 3mm; break-inside:avoid; orphans:3; widows:3; }}
  p.dir {{ font-style:italic; color:var(--muted); font-size:10pt; padding-left:4mm; border-left:2px solid #d5d7e1; }}
  p.note {{ font-size:9.6pt; color:var(--brick); background:#fbefe9; border-left:2px solid var(--brick); padding:1.8mm 3.5mm; }}
  p.note::before {{ content:'Catatan  '; font-family:'JetBrains Mono'; font-size:7.5pt; letter-spacing:.14em; text-transform:uppercase; }}
  .klik {{ display:inline-block; font-family:'JetBrains Mono'; font-size:7.6pt; letter-spacing:.14em; text-transform:uppercase; background:var(--navy); color:var(--amber); border-radius:2px; padding:.3mm 1.8mm; margin-right:2.5mm; vertical-align:1px; }}
  .ts {{ display:inline-block; font-family:'JetBrains Mono'; font-size:8.5pt; color:var(--teal); border:1px solid var(--teal); border-radius:2px; padding:0 1.4mm; margin-right:2.5mm; vertical-align:1px; }}
  .dirinline {{ font-style:italic; color:var(--muted); font-size:10pt; }}
  .fill {{ background:#fbe7bd; padding:0 1mm; border-radius:2px; font-style:italic; }}

  .qa {{ margin-bottom:5mm; break-inside:avoid; }}
  .qa .q {{ font-family:'Space Grotesk'; font-size:12.5pt; font-weight:500; margin-bottom:1.4mm; }}
  .qa .a {{ padding-left:5mm; border-left:2px solid var(--amber); }}
  ul.check {{ list-style:none; padding:0; margin:0; }}
  ul.check li {{ padding:2mm 0 2mm 8mm; border-bottom:1px solid #e3e4ea; position:relative; break-inside:avoid; }}
  ul.check li::before {{ content:''; position:absolute; left:0; top:3.3mm; width:3.6mm; height:3.6mm; border:1.4px solid var(--navy); border-radius:1px; }}
</style></head>
<body>

<!--COVER--><div class="cover">
  <div class="ev">FOSS Day · Batam Linux User Group</div>
  <div>
    <div class="kind">Naskah pemaparan</div>
    <h1>Life of a Feature<br>in the Age of<br><span>AI Agents</span></h1>
    <div class="sub">The Magic Behind Software · <i>When Code Becomes a Creature</i></div>
  </div>
  <div class="foot"><span>Aidil Baihaqi</span><span>35 menit · 32 slide · aidilbaihaqi.id/fossday-2026</span></div>
</div><!--/COVER-->

<div class="page">
  <div class="kicker">Sebelum mulai</div>
  <h1 class="sec">Cara memakai naskah ini</h1>
  <p class="lead">Naskah ini ditulis untuk diucapkan, bukan dibaca kata per kata. Pakai sebagai pegangan waktu latihan. Di panggung, cukup ingat kalimat pembuka dan penutup tiap slide; sisanya biarkan mengalir dengan bahasamu sendiri.</p>
  <div class="kicker" style="margin-top:7mm">Satu kalimat yang harus dibawa pulang audiens</div>
  <div class="big">AI mempercepat menulis kode. Memahami sistem dari ujung ke ujung yang membuatmu tetap relevan.</div>

  <div class="kicker">Tanda di naskah</div>
  <div class="legend">
    <div><span class="klik">klik</span></div><div>Tekan <kbd>→</kbd> atau <kbd>Space</kbd>, lalu ucapkan kalimat sesudahnya. Jumlah klik per slide ada di baris meta.</div>
    <div><p class="dir" style="margin:0">miring</p></div><div>Arahan panggung. Tidak diucapkan.</div>
    <div><span class="ts">0:14</span></div><div>Timestamp video demo di slide 21. Ucapkan saat video sampai di detik itu.</div>
    <div><span class="fill">disorot</span></div><div>Bagian yang harus kamu isi sendiri sebelum tampil.</div>
    <div><p class="note" style="margin:0;padding:1mm 2mm">&nbsp;</p></div><div>Catatan untuk pembicara: titik rawan molor, bagian yang boleh dilewati, atau fakta yang perlu dicek ulang.</div>
  </div>

  <div class="kicker">Kontrol deck (/fossday-2026)</div>
  <table class="keys">
    <tr><td><kbd>→</kbd> <kbd>Space</kbd></td><td>Maju satu langkah. Slide dengan build-in berjalan dulu sebelum pindah slide.</td></tr>
    <tr><td><kbd>←</kbd></td><td>Mundur. Slide sebelumnya muncul dalam keadaan lengkap.</td></tr>
    <tr><td><kbd>F</kbd> &nbsp; <kbd>B</kbd></td><td>Layar penuh &nbsp;·&nbsp; layar hitam (supaya audiens fokus ke pembicara).</td></tr>
    <tr><td><kbd>Home</kbd> <kbd>End</kbd></td><td>Lompat ke slide pertama atau terakhir. URL <span class="mono">#14</span> membuka slide 14 langsung.</td></tr>
  </table>
</div>

<div class="page">
  <div class="kicker">Peta waktu</div>
  <h1 class="sec">35 menit, 32 slide</h1>
  <p>Enam slide jeda (baris miring) masing-masing sekitar 15 detik dan diambil dari jatah tahap di sekitarnya. Kalau waktu mepet, slide 15, 25, 26, dan 28 bisa dilewati tanpa merusak alur.</p>
  <table class="map">
    <tr><th>#</th><th>Slide</th><th>Bagian</th><th>Target</th><th>Klik</th></tr>
    {rows}
  </table>
</div>

<div class="kicker">Naskah</div>
<h1 class="sec">Pemaparan per slide</h1>
{''.join(slide(s) for s in SLIDES)}

<div style="page-break-before:always"></div>
<div class="kicker">Tanya jawab</div>
<h1 class="sec">Pertanyaan yang mungkin muncul</h1>
<p class="lead" style="margin-bottom:7mm">Jawaban ini titik berangkat, bukan hafalan. Kalau ada pertanyaan yang tidak kamu tahu jawabannya, bilang saja, lalu tawarkan diskusi setelah sesi.</p>
{qa}

<div style="page-break-before:always"></div>
<div class="kicker">Hari H</div>
<h1 class="sec">Checklist sebelum tampil</h1>
<ul class="check">
  <li>Buka <span class="mono">/fossday-2026</span> di laptop yang dipakai tampil. Cek font, animasi, dan video slide 21 di proyektor venue.</li>
  <li>Simpan salinan offline <span class="mono">demo.mp4</span> di laptop, kalau internet venue bermasalah.</li>
  <li>Isi bagian yang disorot: kalimat tentang Lyceum Indonesia dan Tim WAT (slide 4), angka ukuran image dari build sendiri (slide 23), dan tools yang kamu pakai (tanya jawab).</li>
  <li>Cek ulang status pengelolaan MCP dan AGENTS.md (slide 12).</li>
  <li>Latih pre-opening tanpa melihat slide. Enam puluh detik pertama menentukan perhatian audiens.</li>
  <li>Latihan dengan timer. Titik rawan molor: slide 4, 10, 21, dan setiap jeda (jangan lebih dari 15 detik).</li>
  <li>Baca ulang naskah dan pastikan tidak ada metafora penyihir, sihir, atau makhluk yang terselip, kecuali di judul resmi.</li>
  <li>Siapkan air minum. Jeda meme adalah waktu yang pas untuk minum.</li>
</ul>
</body></html>
"""

head, rest = doc.split("<!--COVER-->", 1)
cover_html, body_rest = rest.split("<!--/COVER-->", 1)
tail = "</body></html>"
cover_doc = head + cover_html.replace('page-break-after:always', '') + tail
body_doc = head + body_rest
cover_doc = cover_doc.replace("@page :first { margin: 0; }", "")
body_doc = body_doc.replace("@page :first { margin: 0; }", "")
(HERE / "cover.html").write_text(cover_doc.replace("@page { size: A4; margin: 20mm 18mm 20mm 18mm; }", "@page { size: A4; margin: 0; }"), encoding="utf-8")
html_path = HERE / "naskah.html"
html_path.write_text(body_doc, encoding="utf-8")

footer = """<div style="width:100%;font-family:'JetBrains Mono',monospace;font-size:7.5pt;color:#8a8fa8;padding:0 18mm;display:flex;justify-content:space-between">
<span>Naskah · Life of a Feature in the Age of AI Agents</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>"""

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page()
    pg.goto(html_path.resolve().as_uri(), wait_until="networkidle")
    pg.evaluate("document.fonts.ready")
    pg.wait_for_timeout(600)
    pg.pdf(path=str(HERE / "body.pdf"), format="A4", print_background=True, prefer_css_page_size=True,
           display_header_footer=True, header_template="<span></span>", footer_template=footer)
    pg.goto((HERE / "cover.html").resolve().as_uri(), wait_until="networkidle")
    pg.evaluate("document.fonts.ready")
    pg.wait_for_timeout(600)
    pg.pdf(path=str(HERE / "cover.pdf"), format="A4", print_background=True, prefer_css_page_size=True)
    b.close()
import subprocess
subprocess.run(["gswin64c", "-q", "-dNOPAUSE", "-dBATCH", "-sDEVICE=pdfwrite", "-dPDFSETTINGS=/prepress",
                f"-sOutputFile={OUT_PDF}", str(HERE / "cover.pdf"), str(HERE / "body.pdf")], check=True)
print("ok", OUT_PDF)
