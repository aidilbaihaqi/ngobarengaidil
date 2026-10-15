"""Render demo.html into the /fossday-2026 demo video, frame by frame.

demo.html exposes seek(t) and DURATION; every frame is drawn from t alone, so
the output is deterministic. Needs Playwright (chromium) and an ffmpeg binary
(e.g. `python -c "import imageio_ffmpeg; print(imageio_ffmpeg.get_ffmpeg_exe())"`).

  python render.py demo.html preview <out_dir> 4 22 60        # stills at t=4s, 22s, 60s
  python render.py demo.html video <ffmpeg> ../../public/fossday-2026/demo.mp4
"""
import sys, subprocess, pathlib
from playwright.sync_api import sync_playwright
html = pathlib.Path(sys.argv[1]).resolve().as_uri()
mode = sys.argv[2]
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width": 1920, "height": 1080})
    pg.goto(html, wait_until="networkidle")
    pg.evaluate("document.fonts.ready")
    pg.wait_for_timeout(800)
    if mode == "preview":
        out = sys.argv[3]
        for t in [float(x) for x in sys.argv[4:]]:
            pg.evaluate(f"seek({t})")
            pg.screenshot(path=f"{out}/f{t:05.1f}.png")
    else:
        ffmpeg, out, fps = sys.argv[3], sys.argv[4], 30
        dur = pg.evaluate("DURATION")
        proc = subprocess.Popen([ffmpeg, "-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", str(fps), "-c:v", "mjpeg", "-i", "-",
                                 "-vf", "scale=in_range=pc:out_range=tv,format=yuv420p", "-c:v", "libx264", "-preset", "slow", "-crf", "20", "-movflags", "+faststart", out],
                                stdin=subprocess.PIPE)
        for i in range(int(dur * fps)):
            pg.evaluate(f"seek({i / fps})")
            proc.stdin.write(pg.screenshot(type="jpeg", quality=92))
        proc.stdin.close(); proc.wait()
    b.close()
