#!/usr/bin/env python3
"""
Prépare automatiquement ta photo pour le portfolio et le CV.

Usage :
    python3 scripts/add_photo.py chemin/vers/ta-photo.jpg

Ce script génère, à partir d'une seule photo :
    public/images/photo.jpg        → portrait 4/5  (section d'accueil)
    public/images/photo-about.jpg  → carré 1/1     (section « À propos »)
    public/images/photo-cv.jpg     → carré 1/1     (CV)

Puis il met à jour les chemins dans src/data/portfolio.js.

Dépendance :  pip install pillow
"""

import re
import sys
from pathlib import Path

try:
    from PIL import Image, ImageOps
except ImportError:
    sys.exit("❌ Pillow manquant. Installe-le avec :  pip install pillow")

ROOT = Path(__file__).resolve().parent.parent
IMAGES = ROOT / "public" / "images"

# (nom de sortie, ratio largeur/hauteur, largeur finale)
TARGETS = [
    ("photo.jpg", 4 / 5, 900),
    ("photo-about.jpg", 1 / 1, 900),
    ("photo-cv.jpg", 1 / 1, 600),
]


def crop_to_ratio(img: Image.Image, ratio: float) -> Image.Image:
    """Recadre au centre-haut (pour garder le visage) selon le ratio voulu."""
    w, h = img.size
    target_h = w / ratio
    if target_h <= h:
        new_w, new_h = w, int(target_h)
    else:
        new_w, new_h = int(h * ratio), h
    left = (w - new_w) // 2
    # on garde le haut de l'image : le visage est rarement centré verticalement
    top = int((h - new_h) * 0.12)
    return img.crop((left, top, left + new_w, top + new_h))


def main() -> None:
    if len(sys.argv) < 2:
        sys.exit("Usage : python3 scripts/add_photo.py chemin/vers/ta-photo.jpg")

    src = Path(sys.argv[1]).expanduser()
    if not src.exists():
        sys.exit(f"❌ Fichier introuvable : {src}")

    IMAGES.mkdir(parents=True, exist_ok=True)
    img = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
    print(f"📷 Source : {src.name} ({img.width}×{img.height})")

    for name, ratio, width in TARGETS:
        out = crop_to_ratio(img, ratio)
        out = out.resize((width, int(width / ratio)), Image.LANCZOS)
        path = IMAGES / name
        out.save(path, "JPEG", quality=88, optimize=True, progressive=True)
        print(f"  ✅ {name}  {out.width}×{out.height}  ({path.stat().st_size // 1024} Ko)")

    # mise à jour des chemins dans le fichier de données
    data = ROOT / "src" / "data" / "portfolio.js"
    text = data.read_text(encoding="utf-8")
    text = re.sub(r'photo: "/images/photo\.\w+"', 'photo: "/images/photo.jpg"', text)
    text = re.sub(r'aboutPhoto: "/images/photo-about\.\w+"', 'aboutPhoto: "/images/photo-about.jpg"', text)
    data.write_text(text, encoding="utf-8")
    print("  ✅ Chemins mis à jour dans src/data/portfolio.js")

    # nettoyage des placeholders SVG
    for old in ("photo.svg", "photo-about.svg"):
        p = IMAGES / old
        if p.exists():
            p.unlink()
            print(f"  🗑️  Placeholder supprimé : {old}")

    print("\n🎉 Terminé ! Régénère le CV avec :  python3 scripts/generate_cv.py")


if __name__ == "__main__":
    main()
