#!/usr/bin/env python3
"""
Génère public/files/cv.pdf (A4, 1 page) au même design que le portfolio :
colonne latérale sombre + contenu principal sur fond gris clair, accent orange.

Usage :  python3 scripts/generate_cv.py
Dépendance :  pip install reportlab
"""

from pathlib import Path

from reportlab.lib.colors import HexColor, Color
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader, simpleSplit
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfgen import canvas

# ---------------------------------------------------------------- constantes
MM = 72 / 25.4
W, H = A4
SIDEBAR_W = W * 0.34

ACCENT = HexColor("#ff6a00")
ACCENT_LIGHT = HexColor("#ff9b52")
DARK = HexColor("#14171c")
DARK_2 = HexColor("#1d2128")
PAGE_BG = HexColor("#f4f5f7")
TEXT = HexColor("#16181d")
MUTED = HexColor("#54585f")
META = HexColor("#787d86")
LINE = HexColor("#d4d8de")
WHITE = HexColor("#ffffff")
SIDE_TEXT = HexColor("#e7e9ec")

REG, BOLD = "Helvetica", "Helvetica-Bold"

# ------------------------------------------------------------------ contenu
NAME_1, NAME_2 = "KOGHENE", "MAKEUNE DIANE"
ROLE = "Élève ingénieure en Génie Informatique • Développement web, mobile & desktop"
INTRO = (
    "Élève ingénieure en 4e année de Génie Informatique à l'École Nationale Supérieure "
    "Polytechnique de Yaoundé, intégrée au niveau 3 après réussite au concours d'entrée. "
    "Je conçois et développe des systèmes d'information et des applications web, mobiles "
    "et desktop, de la modélisation jusqu'à la mise en production, avec une attention "
    "particulière portée à la qualité du code, à la performance et à l'expérience utilisateur."
)

HIGHLIGHTS = [("4e", "Année ENSPY"), ("5+", "Projets réalisés"), ("Fullstack", "Web • Mobile • Desktop")]

CONTACT = [
    ("Email", "makeunediane@gmail.com"),
    ("Téléphone", "+237 672 71 57 35"),
    ("Localisation", "Yaoundé, Cameroun"),
    ("GitHub", "github.com/Koghene"),
    ("WhatsApp", "wa.me/237672715735"),
]

SKILLS = [
    "React", "JavaScript", "Spring Boot", "Java", "Python", "Kotlin",
    "Node.js", "API REST", "JavaFX", "PostgreSQL", "MySQL",
    "UML / Merise", "Cryptographie", "Git", "Figma",
]

LANGUAGES = [("Français", "Courant"), ("Anglais", "Intermédiaire")]

QUALITIES = [
    "Esprit d'analyse et résolution de problèmes",
    "Rigueur, autonomie et sens du détail",
    "Travail en équipe et communication claire",
    "Curiosité technique et apprentissage rapide",
]

EDUCATION = [
    (
        "École Nationale Supérieure Polytechnique de Yaoundé (ENSPY)",
        "Depuis 2025 • Cycle ingénieur, Génie Informatique — 4e année",
        ["Admise au niveau 3 sur concours d'entrée. Génie logiciel, systèmes d'information, "
         "bases de données, réseaux, cryptographie et conduite de projets informatiques."],
    ),
    (
        "Université de Yaoundé I",
        "2023 – 2025 • Informatique, niveaux 1 et 2",
        ["Fondamentaux de l'informatique et des mathématiques : algorithmique, programmation, "
         "structures de données, logique et analyse."],
    ),
]

EXPERIENCE = [
    (
        "Kratos Financials INC",
        "2026 • Stagiaire — Développement logiciel",
        [
            "Développement et intégration de fonctionnalités applicatives en environnement professionnel.",
            "Tests, correction d'anomalies et participation aux revues de code.",
            "Collaboration en équipe agile et suivi des livrables.",
        ],
    ),
]

PROJECTS = [
    (
        "Système d'information — Sécurité sociale",
        "Conception • Modélisation UML / Merise",
        ["Modélisation complète du système : assurés, cotisations, prestations et droits.",
         "Gestion des rôles, tableaux de bord de suivi et production de rapports."],
    ),
    (
        "Plateforme de gestion de cours",
        "Développement web • Mise en production",
        ["Publication des supports, inscriptions et gestion des emplois du temps.",
         "Suivi des étudiants et déploiement de la plateforme en production."],
    ),
    (
        "Allocation des ressources en restauration",
        "Modélisation • Optimisation • Desktop",
        ["Modélisation mathématique du problème d'allocation des ressources.",
         "Implémentation d'une solution optimisant tables, personnel et stocks."],
    ),
    (
        "Plateforme de gestion académique — École primaire",
        "Développement web • Mise en production",
        ["Gestion des élèves, des notes et génération automatique des bulletins.",
         "Espaces dédiés à l'administration et aux parents, mis en production."],
    ),
    (
        "Chiffrement post-quantique SDITH",
        "Cryptographie • Analyse et implémentation",
        ["Étude du schéma SDITH (Syndrome Decoding in the Head), signature post-quantique.",
         "Implémentation et analyse des performances de la solution cryptographique."],
    ),
]


# ------------------------------------------------------------------ helpers
def wrap(c, text, font, size, width):
    c.setFont(font, size)
    return simpleSplit(text, font, size, width)


def draw_para(c, text, x, y, width, font, size, color, leading):
    c.setFillColor(color)
    for line in wrap(c, text, font, size, width):
        c.setFont(font, size)
        c.drawString(x, y, line)
        y -= leading
    return y


def main():
    root = Path(__file__).resolve().parent.parent
    out = root / "public" / "files" / "cv.pdf"
    out.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(out), pagesize=A4)
    c.setTitle("CV - Koghene Makeune Diane")
    c.setAuthor("Koghene Makeune Diane")
    c.setSubject("Élève ingénieure en Génie Informatique")

    # ---------------- fond
    c.setFillColor(PAGE_BG)
    c.rect(0, 0, W, H, stroke=0, fill=1)

    # cercle décoratif orange très pâle en haut à droite
    c.setFillColor(Color(1, 0.42, 0, alpha=0.08))
    c.circle(W - 10 * MM, H + 10 * MM, 62 * MM, stroke=0, fill=1)

    # ---------------- sidebar
    c.setFillColor(DARK)
    c.rect(0, 0, SIDEBAR_W, H, stroke=0, fill=1)
    c.setFillColor(DARK_2)
    c.rect(0, 0, SIDEBAR_W, H * 0.45, stroke=0, fill=1)

    sx = 8.5 * MM
    sw = SIDEBAR_W - 2 * sx
    y = H - 13 * MM

    # logo KD (image réelle sur pastille claire, coin arrondi)
    logo = Path(__file__).resolve().parent.parent / "public" / "images" / "logo-180.png"
    if logo.exists():
        c.saveState()
        clip = c.beginPath()
        clip.roundRect(sx, y - 12 * MM, 12 * MM, 12 * MM, 3.2 * MM)
        c.clipPath(clip, stroke=0, fill=0)
        c.setFillColor(WHITE)
        c.roundRect(sx, y - 12 * MM, 12 * MM, 12 * MM, 3.2 * MM, stroke=0, fill=1)
        c.drawImage(str(logo), sx + 0.5 * MM, y - 11.5 * MM, 11 * MM, 11 * MM, mask="auto")
        c.restoreState()
    else:
        c.setFillColor(ACCENT)
        c.roundRect(sx, y - 11 * MM, 11 * MM, 11 * MM, 3 * MM, stroke=0, fill=1)
        c.setFillColor(WHITE)
        c.setFont(BOLD, 13)
        c.drawCentredString(sx + 5.5 * MM, y - 7.7 * MM, "KD")
    c.setFillColor(WHITE)
    c.setFont(BOLD, 8)
    c.drawString(sx + 13.5 * MM, y - 4.6 * MM, "KOGHENE")
    c.drawString(sx + 13.5 * MM, y - 8.4 * MM, "MAKEUNE DIANE")
    y -= 18 * MM

    # photo ronde (utilise public/images/photo-cv.jpg si présente)
    photo_r = 17 * MM
    cx = SIDEBAR_W / 2
    c.setFillColor(HexColor("#262a31"))
    c.circle(cx, y - photo_r, photo_r, stroke=0, fill=1)

    photo = None
    for candidate in (
        "photo-cv.png", "photo-about.png", "photo-cv.jpg",
        "photo-about.jpg", "photo.jpg", "photo.png",
    ):
        path = Path(__file__).resolve().parent.parent / "public" / "images" / candidate
        if path.exists():
            photo = path
            break

    if photo:
        c.saveState()
        clip = c.beginPath()
        clip.circle(cx, y - photo_r, photo_r)
        c.clipPath(clip, stroke=0, fill=0)
        img = ImageReader(str(photo))
        iw, ih = img.getSize()
        box = 2 * photo_r
        scale = max(box / iw, box / ih)  # mode "cover" : remplit le cercle
        dw, dh = iw * scale, ih * scale
        # point focal à 22 % du haut (le visage), centré sur le cercle
        fx, fy = dw / 2, (1 - 0.22) * dh
        dx = cx - fx
        dy = (y - photo_r) - fy
        dy = max(min(dy, y - box), y - dh)  # clamp : aucun bord découvert
        c.drawImage(img, dx, dy, dw, dh, mask="auto")
        c.restoreState()
    else:
        c.setFillColor(HexColor("#8b9099"))
        c.setFont(REG, 6.5)
        c.drawCentredString(cx, y - photo_r - 1, "PHOTO")

    c.setStrokeColor(ACCENT)
    c.setLineWidth(1.4)
    c.circle(cx, y - photo_r, photo_r, stroke=1, fill=0)
    y -= 2 * photo_r + 8 * MM

    def side_title(label, yy):
        c.setFillColor(ACCENT)
        c.setFont(BOLD, 9.5)
        c.drawString(sx, yy, label.upper())
        return yy - 5.4 * MM

    # contact
    y = side_title("Contact", y)
    for label, value in CONTACT:
        c.setFillColor(ACCENT)
        c.setFont(BOLD, 6.2)
        c.drawString(sx, y, label.upper())
        y -= 3.4 * MM
        c.setFillColor(SIDE_TEXT)
        for line in wrap(c, value, REG, 7.8, sw):
            c.setFont(REG, 7.8)
            c.drawString(sx, y, line)
            y -= 3.3 * MM
        y -= 1.2 * MM
    y -= 2 * MM

    # compétences (puces arrondies)
    y = side_title("Compétences", y)
    px, pad, gap, th = sx, 2.2 * MM, 1.6 * MM, 4.6 * MM
    for skill in SKILLS:
        tw = pdfmetrics.stringWidth(skill, BOLD, 6.9)
        if px + tw + 2 * pad > sx + sw:
            px = sx
            y -= th + gap
        c.setFillColor(Color(1, 1, 1, alpha=0.07))
        c.setStrokeColor(Color(1, 1, 1, alpha=0.16))
        c.setLineWidth(0.5)
        c.roundRect(px, y - th, tw + 2 * pad, th, th / 2, stroke=1, fill=1)
        c.setFillColor(HexColor("#f5f5f5"))
        c.setFont(BOLD, 6.9)
        c.drawString(px + pad, y - th / 2 - 2.3, skill)
        px += tw + 2 * pad + gap
    y -= th + 7.5 * MM

    # langues
    y = side_title("Langues", y)
    for lang, level in LANGUAGES:
        c.setFillColor(SIDE_TEXT)
        c.setFont(REG, 7.8)
        c.drawString(sx, y, lang)
        c.setFillColor(ACCENT_LIGHT)
        c.setFont(BOLD, 7.8)
        c.drawRightString(sx + sw, y, level)
        y -= 4.4 * MM
    y -= 3.5 * MM

    # qualités
    y = side_title("Qualités", y)
    for q in QUALITIES:
        c.setFillColor(ACCENT)
        c.circle(sx + 0.8 * MM, y + 1.1 * MM, 0.8 * MM, stroke=0, fill=1)
        c.setFillColor(SIDE_TEXT)
        for i, line in enumerate(wrap(c, q, REG, 7.6, sw - 4 * MM)):
            c.setFont(REG, 7.6)
            c.drawString(sx + 4 * MM, y, line)
            y -= 3.4 * MM
        y -= 1.4 * MM

    # ---------------- colonne principale
    mx = SIDEBAR_W + 12 * MM
    mw = W - mx - 12 * MM
    y = H - 16 * MM

    c.setFillColor(TEXT)
    c.setFont(BOLD, 23)
    c.drawString(mx, y, NAME_1)
    y -= 9.5 * MM
    c.setFillColor(ACCENT)
    c.drawString(mx, y, NAME_2)
    y -= 7 * MM

    c.setFillColor(HexColor("#4a4f58"))
    for line in wrap(c, ROLE, BOLD, 9.5, mw):
        c.setFont(BOLD, 9.5)
        c.drawString(mx, y, line)
        y -= 4.6 * MM
    y -= 2 * MM

    y = draw_para(c, INTRO, mx, y, mw, REG, 8.1, MUTED, 4.05 * MM)
    y -= 3 * MM

    # encarts chiffres
    bw = (mw - 2 * 2.6 * MM) / 3
    bh = 11 * MM
    for i, (big, small) in enumerate(HIGHLIGHTS):
        bx = mx + i * (bw + 2.6 * MM)
        c.setFillColor(TEXT)
        c.roundRect(bx, y - bh, bw, bh, 2.6 * MM, stroke=0, fill=1)
        c.setFillColor(ACCENT)
        c.setFont(BOLD, 11)
        c.drawString(bx + 2.8 * MM, y - 5 * MM, big)
        c.setFillColor(HexColor("#f5f5f5"))
        c.setFont(BOLD, 6.4)
        c.drawString(bx + 2.8 * MM, y - 8.6 * MM, small)
    y -= bh + 6.5 * MM

    def main_title(label, yy):
        c.setFillColor(TEXT)
        c.setFont(BOLD, 10)
        c.drawString(mx, yy, label.upper())
        tw = pdfmetrics.stringWidth(label.upper(), BOLD, 10)
        c.setStrokeColor(LINE)
        c.setLineWidth(0.6)
        c.line(mx + tw + 3 * MM, yy + 1.1 * MM, mx + mw, yy + 1.1 * MM)
        return yy - 5.6 * MM

    def entries(items, yy):
        for title, meta, bullets in items:
            c.setFillColor(ACCENT)
            c.circle(mx + 1.2 * MM, yy + 1.2 * MM, 1.2 * MM, stroke=0, fill=1)
            tx = mx + 5.5 * MM
            tw = mw - 5.5 * MM
            c.setFillColor(TEXT)
            for line in wrap(c, title, BOLD, 9.4, tw):
                c.setFont(BOLD, 9.4)
                c.drawString(tx, yy, line)
                yy -= 4.1 * MM
            c.setFillColor(META)
            c.setFont(BOLD, 7.7)
            c.drawString(tx, yy, meta)
            yy -= 4 * MM
            c.setFillColor(MUTED)
            for b in bullets:
                prefix = "• " if len(bullets) > 1 else ""
                for j, line in enumerate(wrap(c, prefix + b, REG, 7.7, tw)):
                    c.setFont(REG, 7.7)
                    c.drawString(tx + (2.6 * MM if (prefix and j) else 0), yy, line)
                    yy -= 3.65 * MM
            yy -= 2.9 * MM
        return yy

    y = main_title("Formation", y)
    y = entries(EDUCATION, y)
    y -= 1 * MM

    y = main_title("Expérience professionnelle", y)
    y = entries(EXPERIENCE, y)
    y -= 1 * MM

    y = main_title("Projets sélectionnés", y)
    y = entries(PROJECTS, y)

    # pied de page
    c.setFillColor(HexColor("#8b9099"))
    c.setFont(REG, 6.5)
    c.drawRightString(W - 12 * MM, 7 * MM, "CV • Koghene Makeune Diane • makeunediane@gmail.com")

    c.showPage()
    c.save()
    print(f"✅ PDF généré : {out} ({out.stat().st_size // 1024} Ko)")


if __name__ == "__main__":
    main()
