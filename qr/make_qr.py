"""Generate the table QR code for the Kedai Putri menu.

Usage: make_qr.py <project_dir> <url>
Writes into <project_dir>/qr/:
  menu-qr.svg   vector QR (for printing / designers)
  menu-qr.png   2000px QR with logo in the centre
  menu-card.png A6 table card, 300 dpi (1240x1748)
"""
import sys
from pathlib import Path

import segno
from PIL import Image, ImageDraw, ImageFont

proj, url = Path(sys.argv[1]), sys.argv[2]
out = proj / 'qr'
out.mkdir(exist_ok=True)

INK = (43, 26, 22)
BRAND = (168, 29, 38)
GOLD = (242, 176, 30)
CREAM = (251, 245, 236)

# Error correction H (30%) so the logo in the middle doesn't break scanning
qr = segno.make(url, error='h', micro=False)
qr.save(out / 'menu-qr.svg', scale=10, border=4, dark='#2b1a16')


def qr_image(size):
    """QR as PIL image of ~size px, with the round logo in the centre."""
    modules = qr.symbol_size(border=4)[0]
    scale = max(1, size // modules)
    tmp = out / '_tmp.png'
    qr.save(tmp, scale=scale, border=4, dark='#2b1a16')
    img = Image.open(tmp).convert('RGB')
    tmp.unlink()
    logo = Image.open(proj / 'img' / 'logo.png').convert('RGBA')
    d = int(img.width * 0.20)  # logo diameter: 20% of QR width (H level tolerates it)
    ring = int(d * 0.09)
    pad = Image.new('RGBA', (d + 2 * ring, d + 2 * ring), (0, 0, 0, 0))
    ImageDraw.Draw(pad).ellipse((0, 0, pad.width - 1, pad.height - 1), fill=(255, 255, 255, 255))
    pad.alpha_composite(logo.resize((d, d), Image.LANCZOS), (ring, ring))
    img.paste(pad, ((img.width - pad.width) // 2, (img.height - pad.height) // 2), pad)
    return img


qr_png = qr_image(2000)
qr_png.save(out / 'menu-qr.png')

# ---------- Table card (A6 portrait, 300 dpi) ----------
FONT_BOLD = '/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc'
FONT_REG = '/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc'


def font(path, size):
    # pick the Simplified Chinese face of the collection (covers Latin + Cyrillic too)
    for i in range(10):
        f = ImageFont.truetype(path, size, index=i)
        if 'SC' in f.getname()[0]:
            return f
    return ImageFont.truetype(path, size)


W, H = 1240, 1748
card = Image.new('RGB', (W, H), CREAM)
dr = ImageDraw.Draw(card)


def center(text, y, f, fill):
    w = dr.textlength(text, font=f)
    dr.text(((W - w) / 2, y), text, font=f, fill=fill)


# red header band with logo + name
band = 380
dr.rectangle((0, 0, W, band), fill=BRAND)
logo = Image.open(proj / 'img' / 'logo.png').convert('RGBA').resize((190, 190), Image.LANCZOS)
lx, ly = (W - 190) // 2, 46
dr.ellipse((lx - 10, ly - 10, lx + 200, ly + 200), fill=GOLD)
card.paste(logo, (lx, ly), logo)
center('Kedai Putri', 262, font(FONT_BOLD, 74), (255, 255, 255))

# QR
qs = 760
q = qr_png.resize((qs, qs), Image.LANCZOS)
qx, qy = (W - qs) // 2, band + 75
dr.rounded_rectangle((qx - 30, qy - 30, qx + qs + 30, qy + qs + 30), radius=40, fill=(255, 255, 255))
card.paste(q, (qx, qy))

# captions
y = qy + qs + 65
center('MENU', y, font(FONT_BOLD, 84), BRAND)
y += 120
lines = [
    'Scan untuk melihat menu',
    'Scan to see the menu',
    'Отсканируйте, чтобы открыть меню',
    '扫码查看菜单',
]
f = font(FONT_REG, 42)
for t in lines:
    center(t, y, f, INK)
    y += 60

card.save(out / 'menu-card.png', dpi=(300, 300))
print('written:', *sorted(p.name for p in out.iterdir()))
