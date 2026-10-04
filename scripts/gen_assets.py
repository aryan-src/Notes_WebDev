#!/usr/bin/env python3
"""Generates real, local placeholder media so every live example in the
mind map / lesson previews actually renders something instead of a broken
icon or a blocked iframe. Run with: python3 gen_assets.py
"""
import math, os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

FONT_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FONT_REG = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"

OUT_ROOT = "."
OUT_IMAGES = "images"
os.makedirs(OUT_IMAGES, exist_ok=True)

def font(path, size):
    return ImageFont.truetype(path, size)

def vgradient(size, top, bottom):
    w, h = size
    img = Image.new("RGB", (1, h))
    for y in range(h):
        t = y / max(1, h - 1)
        r = round(top[0] + (bottom[0] - top[0]) * t)
        g = round(top[1] + (bottom[1] - top[1]) * t)
        b = round(top[2] + (bottom[2] - top[2]) * t)
        img.putpixel((0, y), (r, g, b))
    return img.resize((w, h))

def caption(draw, size, text, fg="#ffffff", bar=(15, 23, 42, 150), fsize=None):
    w, h = size
    fsize = fsize or max(14, h // 12)
    f = font(FONT_BOLD, fsize)
    bbox = draw.textbbox((0, 0), text, font=f)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    bar_h = th + 22
    draw.rectangle([0, h - bar_h, w, h], fill=bar)
    draw.text(((w - tw) / 2, h - bar_h + (bar_h - th) / 2 - bbox[1]), text, font=f, fill=fg)

def save(img, name, quality=85):
    path_root = os.path.join(OUT_ROOT, name)
    path_images = os.path.join(OUT_IMAGES, name)
    kwargs = {}
    if name.lower().endswith((".jpg", ".jpeg")):
        img = img.convert("RGB")
        kwargs = {"quality": quality}
    img.save(path_root, **kwargs)
    img.save(path_images, **kwargs)
    print("wrote", path_root, "and", path_images)

# ---------------------------------------------------------------- mountain
def make_mountain(size=(640, 420)):
    w, h = size
    img = vgradient(size, (111, 171, 214), (226, 240, 247))
    d = ImageDraw.Draw(img, "RGBA")
    # sun
    d.ellipse([w - 150, 40, w - 70, 120], fill=(255, 240, 200))
    # back ridge
    d.polygon([(0, h * 0.62), (w * 0.22, h * 0.32), (w * 0.42, h * 0.60), (w * 0.60, h * 0.30),
               (w * 0.82, h * 0.58), (w, h * 0.40), (w, h), (0, h)], fill=(142, 168, 165))
    # front ridge
    d.polygon([(0, h * 0.82), (w * 0.18, h * 0.50), (w * 0.38, h * 0.80), (w * 0.58, h * 0.46),
               (w * 0.80, h * 0.78), (w, h * 0.58), (w, h), (0, h)], fill=(78, 110, 110))
    # snow caps
    d.polygon([(w * 0.14, h * 0.58), (w * 0.18, h * 0.50), (w * 0.22, h * 0.58)], fill=(255, 255, 255))
    d.polygon([(w * 0.54, h * 0.54), (w * 0.58, h * 0.46), (w * 0.62, h * 0.54)], fill=(255, 255, 255))
    caption(d, size, "Mountain")
    return img

def make_picture_mountain():
    save(make_mountain(), "picture.jpg")
    save(make_mountain(), "picture1.jpg")
    save(make_mountain(), "img_mountain.jpg")

# ---------------------------------------------------------------- girl portrait
def make_girl(size=(500, 600)):
    w, h = size
    img = vgradient(size, (233, 196, 215), (250, 235, 224))
    d = ImageDraw.Draw(img, "RGBA")
    cx = w / 2
    # jacket / shoulders
    d.polygon([(cx - 150, h), (cx - 90, h * 0.62), (cx + 90, h * 0.62), (cx + 150, h)], fill=(214, 71, 126))
    # neck
    d.rectangle([cx - 24, h * 0.50, cx + 24, h * 0.62], fill=(236, 188, 160))
    # head
    d.ellipse([cx - 78, h * 0.26, cx + 78, h * 0.52], fill=(240, 196, 168))
    # hair
    d.pieslice([cx - 90, h * 0.20, cx + 90, h * 0.50], 180, 360, fill=(90, 62, 48))
    d.polygon([(cx - 88, h * 0.34), (cx - 70, h * 0.58), (cx - 50, h * 0.40)], fill=(90, 62, 48))
    d.polygon([(cx + 88, h * 0.34), (cx + 70, h * 0.58), (cx + 50, h * 0.40)], fill=(90, 62, 48))
    caption(d, size, "Girl in a Jacket")
    return img

# ---------------------------------------------------------------- Chania (flowers + harbour)
def make_chania(size=(640, 420)):
    w, h = size
    img = vgradient(size, (120, 176, 214), (230, 240, 244))
    d = ImageDraw.Draw(img, "RGBA")
    d.rectangle([0, h * 0.62, w, h], fill=(46, 99, 140))  # harbour water
    # waterfront buildings
    colors = [(234, 168, 98), (221, 120, 110), (236, 201, 140), (198, 150, 171)]
    bx = 0
    i = 0
    while bx < w:
        bw = 70 + (i * 37) % 60
        bh = 90 + (i * 53) % 70
        d.rectangle([bx, h * 0.62 - bh, bx + bw, h * 0.62], fill=colors[i % len(colors)])
        d.rectangle([bx, h * 0.60 - bh, bx + bw, h * 0.62 - bh + 10], fill=(255, 255, 255, 90))
        bx += bw + 4
        i += 1
    # flowers in foreground
    import random
    random.seed(7)
    for _ in range(26):
        fx = random.uniform(0, w)
        fy = random.uniform(h * 0.80, h * 0.97)
        r = random.uniform(5, 10)
        petal = random.choice([(214, 71, 126), (236, 110, 70), (248, 201, 70), (255, 255, 255)])
        for a in range(5):
            ang = a * (360 / 5)
            px = fx + r * math.cos(math.radians(ang))
            py = fy + r * math.sin(math.radians(ang))
            d.ellipse([px - r * 0.6, py - r * 0.6, px + r * 0.6, py + r * 0.6], fill=petal)
        d.ellipse([fx - 3, fy - 3, fx + 3, fy + 3], fill=(248, 201, 70))
    caption(d, size, "Flowers in Chania")
    return img

# ---------------------------------------------------------------- Trulli (Puglia)
def make_trulli(size=(640, 420)):
    w, h = size
    img = vgradient(size, (173, 213, 232), (240, 231, 210))
    d = ImageDraw.Draw(img, "RGBA")
    d.rectangle([0, h * 0.70, w, h], fill=(214, 195, 150))  # ground
    def trullo(cx, base_y, scale=1.0):
        bw, bh = 90 * scale, 70 * scale
        d.rectangle([cx - bw / 2, base_y - bh, cx + bw / 2, base_y], fill=(238, 232, 219))
        d.polygon([(cx - bw / 2 - 8, base_y - bh), (cx, base_y - bh - 55 * scale), (cx + bw / 2 + 8, base_y - bh)],
                   fill=(132, 94, 72))
        d.ellipse([cx - 7, base_y - bh - 65 * scale, cx + 7, base_y - bh - 51 * scale], fill=(90, 62, 48))
        d.rectangle([cx - 10, base_y - 26, cx + 10, base_y], fill=(90, 62, 48))
    trullo(w * 0.28, h * 0.70, 1.15)
    trullo(w * 0.52, h * 0.72, 0.9)
    trullo(w * 0.73, h * 0.70, 1.0)
    caption(d, size, "Trulli, Italy")
    return img

# ---------------------------------------------------------------- London / Thames
def make_london(size=(640, 420)):
    w, h = size
    img = vgradient(size, (168, 196, 214), (232, 236, 230))
    d = ImageDraw.Draw(img, "RGBA")
    d.rectangle([0, h * 0.66, w, h], fill=(96, 130, 150))  # river
    # skyline
    d.rectangle([w * 0.10, h * 0.40, w * 0.16, h * 0.66], fill=(90, 100, 112))
    d.rectangle([w * 0.20, h * 0.30, w * 0.27, h * 0.66], fill=(70, 80, 95))
    # big ben-ish tower
    tx = w * 0.46
    d.rectangle([tx - 16, h * 0.22, tx + 16, h * 0.66], fill=(120, 110, 96))
    d.polygon([(tx - 20, h * 0.22), (tx, h * 0.12), (tx + 20, h * 0.22)], fill=(90, 80, 68))
    d.rectangle([tx - 8, h * 0.28, tx + 8, h * 0.34], fill=(236, 201, 140))
    # ferris wheel-ish circle (London Eye)
    ex, ey, er = w * 0.72, h * 0.42, 70
    d.ellipse([ex - er, ey - er, ex + er, ey + er], outline=(70, 80, 95), width=6)
    for a in range(0, 360, 45):
        px = ex + er * math.cos(math.radians(a))
        py = ey + er * math.sin(math.radians(a))
        d.line([ex, ey, px, py], fill=(70, 80, 95), width=3)
    caption(d, size, "The River Thames, London")
    return img

# ---------------------------------------------------------------- brand logos
def make_brand(name, label, grad):
    size = (360, 220)
    w, h = size
    img = vgradient(size, grad[0], grad[1])
    d = ImageDraw.Draw(img, "RGBA")
    badge_w, badge_h = 150, 90
    d.rounded_rectangle([(w - badge_w) / 2, (h - badge_h) / 2 - 10, (w + badge_w) / 2, (h + badge_h) / 2 - 10],
                         radius=16, fill=(255, 255, 255, 235))
    f = font(FONT_BOLD, 40)
    text = "</>"
    bbox = d.textbbox((0, 0), text, font=f)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    d.text(((w - tw) / 2, (h - badge_h) / 2 - 10 + (badge_h - th) / 2 - bbox[1]), text, font=f, fill=grad[1])
    caption(d, size, label)
    save(img, name)

# ---------------------------------------------------------------- smiley
def make_smiley(name, size=(160, 160)):
    w, h = size
    img = Image.new("RGBA", size, (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.ellipse([6, 6, w - 6, h - 6], fill=(255, 205, 60), outline=(120, 86, 10), width=4)
    eye_y = h * 0.40
    d.ellipse([w * 0.30, eye_y, w * 0.30 + 12, eye_y + 14], fill=(90, 62, 20))
    d.ellipse([w * 0.70 - 12, eye_y, w * 0.70, eye_y + 14], fill=(90, 62, 20))
    d.arc([w * 0.25, h * 0.42, w * 0.75, h * 0.82], start=20, end=160, fill=(120, 86, 10), width=7)
    img.convert("RGB").save(os.path.join(OUT_ROOT, name))
    img.convert("RGB").save(os.path.join(OUT_IMAGES, name))
    print("wrote", name)

# ---------------------------------------------------------------- html5 badge
def make_html5(name="html5.gif", size=(160, 160)):
    w, h = size
    img = Image.new("RGB", size, (255, 255, 255))
    d = ImageDraw.Draw(img)
    d.polygon([(24, 10), (w - 24, 10), (w - 34, h - 30), (w / 2, h - 10), (34, h - 30)], fill=(230, 76, 38))
    d.polygon([(24, 10), (w - 24, 10), (w - 34, h - 30), (w / 2, h - 10), (34, h - 30)], outline=(170, 50, 20), width=3)
    f = font(FONT_BOLD, 34)
    text = "5"
    bbox = d.textbbox((0, 0), text, font=f)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    d.text(((w - tw) / 2, h * 0.42 - th / 2 - bbox[1]), text, font=f, fill=(255, 255, 255))
    img.save(os.path.join(OUT_ROOT, name))
    img.save(os.path.join(OUT_IMAGES, name))
    print("wrote", name)

# ---------------------------------------------------------------- search icon (transparent PNG)
def make_search_icon(name="search.png", size=(64, 64)):
    w, h = size
    img = Image.new("RGBA", size, (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.ellipse([12, 12, 40, 40], outline=(55, 65, 81, 255), width=6)
    d.line([38, 38, 54, 54], fill=(55, 65, 81, 255), width=7)
    img.save(os.path.join(OUT_ROOT, name))
    img.save(os.path.join(OUT_IMAGES, name))
    print("wrote", name)

# ---------------------------------------------------------------- generic card photo
def make_card(name="card.jpg", size=(360, 220)):
    w, h = size
    img = vgradient(size, (118, 160, 196), (219, 207, 180))
    d = ImageDraw.Draw(img, "RGBA")
    d.ellipse([w * 0.62, 24, w * 0.62 + 44, 68], fill=(255, 236, 180))
    d.polygon([(0, h * 0.68), (w * 0.3, h * 0.42), (w * 0.55, h * 0.68)], fill=(96, 138, 110))
    d.polygon([(w * 0.35, h * 0.72), (w * 0.68, h * 0.38), (w, h * 0.72)], fill=(70, 112, 88))
    caption(d, size, "Card")
    save(img, name)

# ---------------------------------------------------------------- computer man (programming.gif)
def make_programming(name="programming.gif", size=(96, 96)):
    w, h = size
    img = Image.new("RGB", size, (255, 255, 255))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([14, 20, w - 14, h * 0.62], radius=6, fill=(55, 65, 81))
    d.rectangle([18, 24, w - 18, h * 0.56], fill=(99, 179, 237))
    d.line([20, 34, 44, 34], fill=(255, 255, 255), width=3)
    d.line([20, 42, 54, 42], fill=(255, 255, 255), width=3)
    d.polygon([(w * 0.5 - 30, h * 0.62), (w * 0.5 + 30, h * 0.62), (w * 0.5 + 40, h * 0.72), (w * 0.5 - 40, h * 0.72)],
               fill=(30, 41, 59))
    img.save(os.path.join(OUT_ROOT, name))
    img.save(os.path.join(OUT_IMAGES, name))
    print("wrote", name)

# ---------------------------------------------------------------- divider.svg (hand-written, not PIL)
def make_divider_svg(name="divider.svg"):
    svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
  <circle cx="10" cy="10" r="4" fill="#d6477e"/>
</svg>'''
    for p in (os.path.join(OUT_ROOT, name), os.path.join(OUT_IMAGES, name)):
        with open(p, "w") as f:
            f.write(svg)
    print("wrote", name)

# ---------------------------------------------------------------- video poster frame
def make_poster(name="poster.jpg", size=(640, 360)):
    w, h = size
    img = vgradient(size, (30, 41, 59), (15, 23, 42))
    d = ImageDraw.Draw(img, "RGBA")
    cx, cy, r = w / 2, h / 2, 46
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(255, 255, 255, 230))
    d.polygon([(cx - 14, cy - 24), (cx - 14, cy + 24), (cx + 22, cy)], fill=(30, 41, 59))
    caption(d, size, "Lesson Video")
    save(img, name)

if __name__ == "__main__":
    make_picture_mountain()
    save(make_girl(), "img_girl.jpg")
    save(make_chania(), "img_chania.jpg")
    save(make_trulli(), "pic_trulli.jpg")
    save(make_london(), "london.jpg")
    make_brand("w3schools.jpg", "W3Schools", ((214, 71, 126), (99, 102, 241)))
    make_brand("w3schools_green.jpg", "W3Schools.com", ((34, 139, 98), (16, 90, 70)))
    make_smiley("happy.gif")
    make_smiley("smiley.gif")
    make_html5()
    make_search_icon()
    make_card()
    make_programming()
    make_divider_svg()
    make_poster()
    print("All image/icon assets generated.")
