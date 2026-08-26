from pathlib import Path
import shutil

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "kc-endodontics-referral-form.pdf"
PUBLIC_COPY = ROOT / "public" / "files" / "2020" / "02" / "PV-referral-form.pdf"

PAGE_WIDTH, PAGE_HEIGHT = letter
BLUE = colors.HexColor("#3F627E")
LIGHT_BLUE = colors.HexColor("#E8F0F5")
BURGUNDY = colors.HexColor("#790000")
INK = colors.HexColor("#454242")
MUTED = colors.HexColor("#676363")
BORDER = colors.HexColor("#B8BEC3")


def section_box(c: canvas.Canvas, title: str, top: float, height: float) -> None:
    bottom = top - height
    c.setFillColor(colors.white)
    c.setStrokeColor(BORDER)
    c.roundRect(36, bottom, PAGE_WIDTH - 72, height, 8, fill=1, stroke=1)
    c.setFillColor(LIGHT_BLUE)
    c.roundRect(36, top - 24, PAGE_WIDTH - 72, 24, 8, fill=1, stroke=0)
    c.rect(36, top - 24, PAGE_WIDTH - 72, 12, fill=1, stroke=0)
    c.setFillColor(BLUE)
    c.setFont("Helvetica-Bold", 10)
    c.drawString(48, top - 16, title.upper())


def text_field(
    c: canvas.Canvas,
    name: str,
    label: str,
    x: float,
    y: float,
    width: float,
    height: float = 20,
    multiline: bool = False,
) -> None:
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 7.5)
    c.drawString(x, y + height + 4, label)
    c.acroForm.textfield(
        name=name,
        tooltip=label,
        x=x,
        y=y,
        width=width,
        height=height,
        borderStyle="solid",
        borderWidth=0.8,
        borderColor=BORDER,
        fillColor=colors.white,
        textColor=INK,
        fontName="Helvetica",
        fontSize=9,
        forceBorder=True,
        fieldFlags="multiline" if multiline else "",
    )


def check_option(c: canvas.Canvas, name: str, label: str, x: float, y: float) -> None:
    c.acroForm.checkbox(
        name=name,
        tooltip=label,
        x=x,
        y=y - 2,
        size=11,
        buttonStyle="check",
        borderWidth=0.8,
        borderColor=BORDER,
        fillColor=colors.white,
        textColor=BLUE,
        checked=False,
        forceBorder=True,
    )
    c.setFillColor(INK)
    c.setFont("Helvetica", 8)
    c.drawString(x + 16, y, label)


def build_pdf(path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(path), pagesize=letter)
    c.setTitle("KC Endodontics Dental Referral Form")
    c.setAuthor("KC Endodontics")
    c.setSubject("Printable and fillable dental referral form")

    c.setFillColor(BLUE)
    c.roundRect(36, PAGE_HEIGHT - 92, PAGE_WIDTH - 72, 56, 10, fill=1, stroke=0)
    c.setFillColor(colors.white)
    c.setFont("Times-Bold", 20)
    c.drawString(52, PAGE_HEIGHT - 61, "KC Endodontics")
    c.setFont("Helvetica", 8.5)
    c.drawString(52, PAGE_HEIGHT - 77, "J. Eric Moore, DDS  |  Endodontic specialist")
    c.setFont("Helvetica-Bold", 8.5)
    c.drawRightString(PAGE_WIDTH - 52, PAGE_HEIGHT - 58, "913-642-3636")
    c.setFont("Helvetica", 8)
    c.drawRightString(PAGE_WIDTH - 52, PAGE_HEIGHT - 72, "Fax 913-642-5066")
    c.drawRightString(PAGE_WIDTH - 52, PAGE_HEIGHT - 84, "3700 W. 83rd St., Suite 106  |  Prairie Village, KS 66208")

    c.setFillColor(INK)
    c.setFont("Times-Bold", 18)
    c.drawString(36, PAGE_HEIGHT - 122, "Dental Referral Form")
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 8)
    c.drawRightString(PAGE_WIDTH - 36, PAGE_HEIGHT - 119, "Complete electronically or print and write clearly")

    section_box(c, "Patient information", 646, 74)
    text_field(c, "patient_name", "Patient name", 48, 586, 250)
    text_field(c, "date_of_birth", "Date of birth", 310, 586, 100)
    text_field(c, "patient_phone", "Phone", 422, 586, 142)

    section_box(c, "Referring office", 558, 114)
    text_field(c, "referring_doctor", "Referring doctor", 48, 494, 250)
    text_field(c, "practice_name", "Practice name", 310, 494, 254)
    text_field(c, "office_phone", "Office phone", 48, 455, 250)
    text_field(c, "office_fax", "Office fax", 310, 455, 254)

    section_box(c, "Referral details", 430, 238)
    text_field(c, "tooth_or_area", "Tooth or area", 48, 366, 250)
    text_field(c, "preferred_timing", "Preferred timing", 310, 366, 254)

    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 7.5)
    c.drawString(48, 348, "REQUESTED SERVICE")
    check_option(c, "service_consult", "Consultation / diagnosis", 48, 329)
    check_option(c, "service_treat", "Evaluate and treat as indicated", 310, 329)
    check_option(c, "service_retreatment", "Retreatment evaluation", 48, 309)
    check_option(c, "service_surgery", "Surgical evaluation", 310, 309)
    check_option(c, "service_trauma", "Dental trauma", 48, 289)
    check_option(c, "service_other", "Other", 310, 289)

    text_field(
        c,
        "clinical_notes",
        "Clinical findings, symptoms, relevant history, restorative considerations, and records provided",
        48,
        215,
        516,
        height=48,
        multiline=True,
    )

    section_box(c, "Follow-up", 178, 95)
    check_option(c, "followup_report", "Send diagnostic / treatment report", 48, 139)
    check_option(c, "followup_call", "Please call to discuss this case", 310, 139)
    check_option(c, "followup_restore", "Return patient for final restoration", 48, 119)
    text_field(c, "referring_signature", "Referring signature", 310, 96, 170)
    text_field(c, "referral_date", "Date", 492, 96, 72)

    c.setStrokeColor(BURGUNDY)
    c.setLineWidth(1.5)
    c.line(36, 68, PAGE_WIDTH - 36, 68)
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 7.2)
    c.drawString(36, 55, "This form does not submit information online. Confirm a secure delivery method before sending patient records.")
    c.drawString(36, 43, "For urgent pain, swelling, or dental trauma, call the office rather than relying on the form alone.")
    c.drawRightString(PAGE_WIDTH - 36, 43, "KC Endodontics referral form  |  1 of 1")

    c.showPage()
    c.save()


def main() -> None:
    build_pdf(OUTPUT)
    PUBLIC_COPY.parent.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(OUTPUT, PUBLIC_COPY)
    print(OUTPUT)
    print(PUBLIC_COPY)


if __name__ == "__main__":
    main()
