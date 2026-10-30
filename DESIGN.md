---
name: NiKu Chemie
description: "Private-Label-Hersteller aus Veitsbronn, gesetzt als Abperleffekt: helles Weiß und kühles Glanzgrau, große Makrobilder von Schaum und Wasserperlen, weiche Formen und Logo-Orange als Tropfen, Pille und Abschlussfläche."
colors:
  ink: "#2e3133"
  ink-2: "#545a5e"
  ink-deep: "#151718"
  white: "#ffffff"
  glanz: "#eef2f4"
  glanz-2: "#dfe6ea"
  orange: "#ec6e3e"
  orange-ink: "#b84a24"
  on-orange: "#1f2223"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.5rem + 3vw, 4.125rem)"
    fontWeight: 720
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  closing:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.4rem + 3vw, 4.25rem)"
    fontWeight: 720
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.125rem, 1.4rem + 2.4vw, 3.5rem)"
    fontWeight: 720
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1.15rem + 0.6vw, 1.75rem)"
    fontWeight: 720
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  statement:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.2rem + 1.9vw, 2.875rem)"
    fontWeight: 450
    lineHeight: 1.26
    letterSpacing: "-0.02em"
  figure:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.1rem + 1.2vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
    fontFeature: "tabular-nums"
  lead:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.1875rem, 1.1rem + 0.35vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.55
  intro:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
  question:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.3vw, 1.25rem)"
    fontWeight: 650
    lineHeight: 1.55
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 650
    lineHeight: 1
  nav:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 550
    lineHeight: 1.55
  meta:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.55
    fontFeature: "tabular-nums"
rounded:
  focus: "6px"
  thumb: "12px"
  die: "14px"
  item: "16px"
  r: "20px"
  panel-sm: "24px"
  r-lg: "32px"
  pill: "999px"
spacing:
  wrap: "1280px"
  gutter: "clamp(16px, 4vw, 40px)"
  section: "clamp(80px, 10vw, 136px)"
  header: "72px"
  inset: "clamp(0px, 1.6vw, 24px)"
  head-gap: "clamp(40px, 5vw, 64px)"
  grid-gap: "clamp(24px, 3vw, 40px)"
  split-gap: "clamp(40px, 6vw, 96px)"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.on-orange}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  button-primary-lg:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.on-orange}"
    rounded: "{rounded.pill}"
    padding: "0 30px"
    height: "60px"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 30px"
    height: "60px"
  button-ink-hover:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.white}"
  button-nav:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.on-orange}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  text-link-hover:
    textColor: "{colors.orange-ink}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
  nav-link-hover:
    backgroundColor: "{colors.glanz}"
  site-header:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    height: "{spacing.header}"
  submenu-panel:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.panel-sm}"
    padding: "10px"
    width: "440px"
  hero-panel:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.r-lg}"
    padding: "clamp(28px, 4vw, 56px) clamp(24px, 4vw, 56px) clamp(28px, 3.5vw, 48px)"
  die-note:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  step-drop:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "64px"
  meta-pill:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.meta}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  faq-item:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.question}"
    rounded: "{rounded.r}"
    padding: "22px 22px 22px 28px"
  faq-plus:
    backgroundColor: "{colors.glanz}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "40px"
  faq-plus-open:
    backgroundColor: "{colors.orange}"
  close-panel:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.on-orange}"
    rounded: "{rounded.r-lg}"
    padding: "clamp(40px, 6vw, 88px)"
  site-footer:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-2}"
---

# Design System: NiKu Chemie

Quelle: Startseite `index.html` mit `assets/css/site.css`, `assets/js/main.js` (Mobilmenü) und `assets/js/site.js` (Untermenü, Gebinde-Füllung). Alle Unterseiten bauen auf diesem System auf. Die verworfene Variante Druckbogen ist unter `archiv/druckbogen/` archiviert (eigenes Stylesheet `assets/css/styles.css`, noindex) und gilt nicht mehr.

## Overview

**Creative North Star: "Abperleffekt"**

Die Seite zeigt zuerst, was die Produkte leisten: Schaum, Wasserperlen, sauberer Glanz in großen Makrobildern. Erst danach kommen Fakten. Die Welt ist hell, luftig und weich: reines Weiß und ein kühles Glanzgrau als Flächen, Anthrazit als Schrift, Logo-Orange als Farbe für alles, was man drücken, füllen oder abschließen kann. Rundungen sind durchgehend weich, Kreise sind das wiederkehrende Tropfen-Motiv.

Die Dichte ist niedrig. Sektionen atmen mit großem Abstand, Überschriften sind kräftig und eng, Fließtext ist groß (1.125rem) und ruhig in Schiefer. Bilder tragen die Stimmung, Text trägt die Fakten. Das Produkt selbst (die freigestellte Flasche mit gestrichelter Etikettenfläche) verbindet beides: Hier steht später Ihre Marke.

Abgelehnt sind: Tabellenseite und Datenblatt-Optik, Laborstock, dunkle Hochglanz-Detailingseite, Eyebrows über Überschriften, Verlaufs-Overlays auf Fotos, Tabellen als Gestaltungsmittel.

**Key Characteristics:**
- Helles Weiß und Glanzgrau im Sektionswechsel, keine dunklen Flächen außer dem Ink-Button
- Archivo (variabel) für alle Texte, Gewichte zwischen den Stufen (450, 550, 650, 720)
- Logo-Orange als Fläche, Pille, Tropfen und Stanzlinie; orange Schrift immer in Orange-Tinte
- Weiche Radien: 20px Bilder und Karten, 32px große Flächen, Pillen für Buttons und Chips
- Kreise als Tropfen-Motiv, die sich beim Hineinscrollen füllen
- Makrobilder groß, ohne Overlay; Text sitzt auf weißen Flächen neben oder über den Bildern

## Colors

Kühles Weiß-Grau mit genau einem warmen Akzent aus dem Logo.

### Primary
- **Logo-Orange** (orange): Hauptbutton, Füllung der Tropfen (Schritte, Gebinde), Rand der Tropfen, gestrichelte Stanzlinie und Strich am Etikett-Hinweis, große Abschlussfläche, Unterstreichung im Lohnabfüllungs-Hinweis, Plus-Kreis im geöffneten FAQ, Textauswahl.
- **Orange-Tinte** (orange-ink): jede orange Schrift und jedes orange Icon auf Hell: Textlinks im Fließtext, Pfeile in Textlinks, Hover-Farbe von Links und Produktlinien-Titeln, Fokusring, Cursor.
- **Auf Orange** (on-orange): Schrift auf Logo-Orange (Buttons, Abschlussfläche, Zahl im voll gefüllten dritten Schritt).

### Neutral
- **Anthrazit** (ink): Überschriften, Fließtext-Grundfarbe, Navigation, Ink-Button, Hover des Hauptbuttons, Skip-Link.
- **Tiefanthrazit** (ink-deep): nur Hover des Ink-Buttons.
- **Schiefer** (ink-2): Lead, Sektionseinleitungen, Beschreibungen, Statement-Grundton, FAQ-Antworten, Footer-Text.
- **Weiß** (white): Seitengrund, Header, Hero-Textfläche, Karten auf Glanzgrau (FAQ, Ablauf-Fuß, Meta-Pillen, Produktfeld der Produktlinie), Untermenü.
- **Glanzgrau** (glanz): Sektionsgrund im Wechsel, Bildplatzhalter, Nav-Hover, Menüknopf, Plus-Kreise, „Alle Produkte"-Feld, Produktbühne der Säule.
- **Glanzgrau dunkel** (glanz-2): Linien: Verbindungslinie der Schritte, Trenner im Mobilmenü, Footer-Oberkante und Legal-Trenner.

### Named Rules
**The Tinte-für-Text Rule.** Orangefarbener Text und Icons auf Hell sind immer Orange-Tinte. Logo-Orange erscheint nur als Fläche, Rand oder Linie, nie als Schrift auf Weiß.

**The Ein-Akzent Rule.** Orange ist die einzige Farbe neben den Neutralen. Die Etikettenfarben der Produkte (Lila, Blau) erscheinen nur in Produktfotos, nie als Website-Farbe.

**The Weiß-auf-Glanz Rule.** Auf Glanzgrau liegen Karten und Pillen in Weiß; auf Weiß liegen Platzhalter und Hover in Glanzgrau. Beide Flächen tauschen die Rollen, es kommt keine dritte hinzu.

## Typography

**Display Font:** Archivo (mit system-ui, sans-serif)
**Body Font:** Archivo (mit system-ui, sans-serif)

**Character:** Eine einzige lokal gehostete variable Grotesk (`assets/fonts/archivo-variable.woff2`, Gewicht 100 bis 900, Breite 62% bis 125%, `font-display: swap`, vorgeladen). Normalbreite überall. Überschriften kräftig (720) und eng, Fließtext groß und ruhig; Gewichte zwischen den Standardstufen.

### Hierarchy
- **Display** (720, clamp 2.5rem bis 4.125rem, 0.98, -0.035em): nur die H1 in der Hero-Fläche, `&shy;` für lange Komposita.
- **Closing** (720, clamp 2.25rem bis 4.25rem, 1, -0.03em): H2 der orangen Abschlussfläche, max. 13ch.
- **Headline** (720, clamp 2.125rem bis 3.5rem, 1.02, -0.03em): Sektions-H2.
- **Title** (720, clamp 1.375rem bis 1.75rem, 1.12, -0.02em): H3 in Wegen, Schritten, Produktlinien. Footer-Spaltentitel 1.0625rem.
- **Statement** (450, clamp 1.75rem bis 2.875rem, 1.26, -0.02em, Schiefer, max. 30ch): der Zahlenabsatz unter dem Hero; Kennzahlen darin 700 in Anthrazit.
- **Figure** (700, clamp 1.5rem bis 2.25rem, 1.05, -0.03em, tabellarisch): Gebindewerte unter den Kreisen.
- **Lead** (400, clamp 1.1875rem bis 1.375rem, 1.55, Schiefer, max. 46ch): Subtext unter der H1.
- **Intro** (400, 1.1875rem, 1.55, Schiefer, max. 54ch): Einleitung unter Sektions-H2, Produktionstext (max. 52ch). Abschlussfläche 1.25rem, max. 40ch.
- **Body** (400, 1.125rem, 1.55): Grundtext; unter 600px 1.0625rem. Beschreibungen in Schiefer, max. 32 bis 64ch je nach Spalte.
- **Question** (650, clamp 1.125rem bis 1.25rem): FAQ-Fragen.
- **Label** (650, 1.0625rem, 1): Buttons (groß 1.125rem, Navigation 1rem) und Textlinks.
- **Nav** (550, 1rem): Hauptnavigation; mobil 1.25rem.
- **Meta** (600, 0.9375rem, tabellarisch): Pillen mit Produktanzahl und Gebinden; im Untermenü 0.875rem in Schiefer.

### Named Rules
**The Enge-Überschrift Rule.** Überschriften laufen negativ (H1 -0.035em, H2 -0.03em, H3 -0.02em) mit `text-wrap: balance`; Fließtext bleibt bei normaler Laufweite mit `text-wrap: pretty`.

**The Tabellarische-Zahl Rule.** Zahlen, die ein Faktum tragen (Gebinde, Produkt-Meta, Untermenü-Angaben), stehen in tabellarischen Ziffern. Mengen und Einheiten bleiben mit geschütztem Leerzeichen zusammen.

**The Keine-Eyebrow Rule.** Über Überschriften steht nichts: keine Kicker, keine Nummern, keine Versal-Labels. Die H2 eröffnet die Sektion selbst.

## Layout

Zentrierter Container (wrap) mit fluider Seitenzone (gutter). Sektionen haben oben und unten den Sektionsabstand und wechseln zwischen Weiß und Glanzgrau. Ein Sektionskopf ist gestapelt (H2, darunter Intro), max. 760px breit, mit head-gap zum Inhalt. Rasterlücken liegen bei grid-gap, zweispaltige Splits bei split-gap.

Vollbreite Bildflächen (Hero-Bild, Bildband) sitzen nicht randlos, sondern mit kleinem Einzug (inset) zum Viewport und runden Ecken.

Wiederkehrende Raster:
- **Hero** Bild vollbreit (clamp 380px bis 600px hoch, 52vh), nur unten gerundet. Darunter die Bühne: weiße Textfläche (max. 720px) überlappt die Bildunterkante um clamp 110px bis 180px; rechts die freigestellte Flasche (clamp 140px bis 210px breit), die mit ihrem unteren Ende 20px bis 40px unter die Bühne ragt.
- **Statement** ein Absatz, eigener Oberabstand clamp 72px bis 120px, unten 0.
- **Wege** 1.5fr zu 1fr, unten bündig: Foto 16:11 links, Produktbühne in Glanzgrau (1:1.1) mit zwei Flaschen rechts.
- **Schritte** drei Spalten auf einer 2px-Linie durch die Kreismitten; darunter der Ablauf-Fuß als weiße Karte mit Text und Button.
- **Bildband** volle Breite mit inset, clamp 260px bis 480px hoch, Abstand nach oben clamp 48px bis 80px.
- **Gebinde** vier Spalten 1 / 1.1 / 1.35 / 1.8, unten bündig, Kreise wachsen mit der Spalte.
- **Produktlinien** 1.3fr zu 1fr: Leitlinie links über zwei Zeilen (Bild 4:3.6), zwei Linien rechts gestapelt (Bild 16:9).
- **Produktion** 1.1fr zu 1fr, Bild 4:4.4 links, Text rechts vertikal zentriert.
- **FAQ** 0.8fr zu 1.2fr, H2 links, Fragen rechts mit 12px Abstand.
- **Abschluss** orange Fläche im wrap, innen 1.2fr zu 1fr, unten bündig.
- **Footer** 1.6fr / 1fr / 1fr / 1.2fr, darunter die Legal-Zeile.

Responsive Regeln:
- **bis 1000px:** Navigation hinter 48px-Menüknopf (Pille, Glanzgrau); Panel unter dem Header in voller Höhe, Links 1.25rem als Liste mit Glanzgrau-dunkel-Trennern, Button 56px. Seite scrollt bei offenem Menü nicht.
- **bis 960px:** alle Splits einspaltig; Leitlinie 16:10; Schritte senkrecht (Kreis 64px links, Linie senkrecht durch die Kreise); Gebinde als Liste mit 140px-Kreisspalte; Footer zweispaltig.
- **bis 600px:** Body 1.0625rem; Hero-Bild 340px ohne Einzug, Radius 24px; Textfläche überlappt 64px, Radius 24px; Flasche 112px unter der Textfläche; Buttons in Hero, Ablauf-Fuß und Abschluss vollbreit; Footer einspaltig.

Der Header ist sticky (72px); Ankersprünge halten 88px Abstand.

### Named Rules
**The Weiß-trägt-Text Rule.** Text liegt nie direkt auf einem Foto. Wo Bild und Text sich treffen, steht der Text auf einer weißen Fläche, die das Bild überlappt.

## Elevation & Depth

Weiche, tiefe Schatten mit großer negativer Ausbreitung, immer in Anthrazit-Transparenz. Schatten gibt es nur dort, wo etwas über einem Bild oder über der Seite schwebt; Karten auf Glanzgrau liegen flach und heben sich nur durch Weiß ab. Der Header ist halbtransparent mit Unschärfe.

### Shadow Vocabulary
- **Hero-Fläche** (`box-shadow: 0 30px 60px -36px rgba(46, 49, 51, 0.35)`): weiße Textfläche über der Bildkante.
- **Hero-Flasche** (`filter: drop-shadow(0 30px 28px rgba(46, 49, 51, 0.32))`): freigestellte Flasche über der Bildkante.
- **Produktbühne** (`filter: drop-shadow(0 20px 20px rgba(46, 49, 51, 0.2))`, Produktlinie `0 16px 16px`): freigestellte Flaschen auf Glanzgrau oder Weiß.
- **Etikett-Hinweis** (`box-shadow: 0 10px 24px -14px rgba(46, 49, 51, 0.45)`): Pille „Ihr Etikett".
- **Untermenü** (`box-shadow: 0 24px 60px -28px rgba(46, 49, 51, 0.45), 0 0 0 1px rgba(46, 49, 51, 0.05)`): Dropdown am Desktop.
- **Header** (`background: rgba(255, 255, 255, 0.82); backdrop-filter: blur(14px) saturate(160%)`, ohne Unterstützung 0.94 Weiß): sticky, ohne Linie und ohne Schatten.

### Named Rules
**The Schweben-nur-über-Bild Rule.** Schatten bekommt nur, was über einem Foto oder über dem Inhalt schwebt (Hero-Fläche, Flasche, Etikett-Hinweis, Untermenü). Karten in einer Sektion bleiben schattenlos.

## Shapes

Alles ist weich gerundet, nichts ist scharfkantig. Radien nach Größe: 12px kleine Vorschaubilder, 16px Untermenü-Einträge, 20px Bilder und Karten, 24px Untermenü-Panel und mobile Hero-Flächen, 32px große Flächen (Hero-Fläche, Hero-Bild unten, Bildband, Produktionsbild, Abschlussfläche), Pille für Buttons, Chips, Menüknopf, Nav-Hover und Skip-Link.

Der Kreis ist das Tropfen-Motiv: Schrittnummern, Gebinde-Kreise und FAQ-Plus sind Kreise. Tropfen haben einen 2px-Rand in Logo-Orange und füllen sich von unten mit Orange (`clip-path: inset(...)`).

Die einzige Linie mit Bedeutung ist die Stanzlinie: 2px gestrichelt in Logo-Orange, 14px Radius, um die Etikettenfläche der Flasche. Sonstige Linien sind 1px bis 2px Glanzgrau dunkel und nur Trenner.

### Named Rules
**The Weich-nach-Größe Rule.** Je größer die Fläche, desto größer der Radius (12 / 16 / 20 / 24 / 32px). Bedienelemente sind immer Pillen.

**The Tropfen-füllt-sich Rule.** Ein Kreis mit orangem Rand zeigt eine Menge oder einen Fortschritt durch seinen Füllstand. Er ist nie nur Dekoration.

## Components

### Buttons
Satt, rund, mit Pfeil.
- **Shape:** Pille, Mindesthöhe 48px (groß 60px, Navigation 44px, mobil im Menü 56px), Polster 0 24px (groß 0 30px), Pfeil 18px mit 12px Abstand.
- **Primary:** Logo-Orange mit Auf-Orange-Schrift. Hover: Anthrazit mit Weiß.
- **Ink:** Anthrazit mit Weiß, nur auf der orangen Abschlussfläche. Hover: Tiefanthrazit.
- **Hover / Focus / Active:** Farbwechsel 0.25s, Pfeil 4px nach rechts, Druck `scale(0.98)`; Fokusring 2px Orange-Tinte, 3px Abstand.

### Text Links
Label-Schrift in Anthrazit mit 20px-Pfeil in Orange-Tinte und 10px Abstand; Hover färbt den Text in Orange-Tinte und schiebt den Pfeil 4px. Ist die ganze Karte ein Link, reagiert der Textlink auf Hover der Karte. Links im Fließtext: Orange-Tinte, 1px unterstrichen, 0.22em Abstand; Hervorhebungslinks (Lohnabfüllungs-Hinweis) in Anthrazit 600 mit 2px-Unterstreichung in Logo-Orange.

### Chips (Meta-Pille)
- **Style:** Weiße Pille auf Glanzgrau, 6px 14px, Meta-Schrift, tabellarisch. Trägt Produktanzahl und Gebindebereich einer Produktlinie.

### Cards / Containers
- **Bildkarten (Wege, Produktlinien):** Die ganze Karte ist ein Link ohne Rahmen und ohne Hintergrund. Bild mit 20px Radius, darunter H3, Beschreibung in Schiefer, Textlink oder Meta-Pille. Hover: Bild zoomt auf 1.04 (0.8s); bei Produktlinien färbt sich der Titel in Orange-Tinte; freigestellte Flaschen heben sich 6px.
- **Produktbühne:** Feld in Glanzgrau (auf Glanzgrau-Sektion in Weiß) mit freigestellten Flaschen, `object-fit: contain`, unten bündig, zweite Flasche 86% hoch.
- **Weiße Karte auf Glanzgrau:** Ablauf-Fuß und FAQ-Einträge, 20px Radius, ohne Schatten, ohne Rahmen.

### Navigation
- **Desktop:** Logo 38px links, Links in Nav-Schrift mit 6px Abstand als Pillen (8px 14px), Hover Glanzgrau; rechts davon mit 32px Abstand der Primary-Button (44px).
- **Untermenü Produkte:** Neben dem Link sitzt ein 30px-Kreisknopf mit Pfeil nach unten. Am Desktop (ab 1001px) öffnet bei Hover, Fokus oder Klick ein weißes Panel (440px, 24px Radius, 10px Polster, Untermenü-Schatten) 14px unter dem Link, zentriert; es blendet ein und steigt 8px auf (0.25s / 0.35s). Einträge: 76 × 56px Vorschaubild (12px Radius, Glanzgrau, Foto oder freigestellte Flasche), Name 650 und Meta 0.875rem in Schiefer, 16px Radius. Am Ende „Alle Produkte" als Glanzgrau-Feld mit Pfeil in Orange-Tinte. Escape und Klick außerhalb schließen.
- **Mobil (bis 1000px):** 48px-Menüknopf (Liste / X). Panel weiß in voller Höhe, Links als Liste. Das Untermenü wird zum Akkordeon: 44px-Kreisknopf in Glanzgrau rechts neben „Produkte", Einträge darunter ohne Trenner.

### Hero mit Etikettenfläche (Signatur)
Vollbreites Makrobild (Wasserperlen), unten mit 32px gerundet. Die weiße Hero-Fläche überlappt die Unterkante links mit H1, Lead, großem Primary-Button und Textlink. Rechts steht die freigestellte Produktflasche über der Bildkante. Auf ihrer Etikettenfläche (41% bis 97% der Höhe) liegt die Stanzlinie; links daneben die weiße Pille „Ihr Etikett" mit einem 34px-Strich in Logo-Orange, der in die Stanzlinie läuft. Laden: Bild setzt sich aus Unschärfe (1.6s), Fläche und Flasche steigen auf (0.9s / 1s), Stanzlinie und Hinweis erscheinen ab 1s bzw. 1.25s.

### Statement
Ein großer Absatz in Statement-Schrift, Schiefer, Kennzahlen in Anthrazit 700. Ersetzt Zahlenkacheln.

### Schritte mit Tropfen (Signatur)
Drei Schritte auf einer 2px-Linie in Glanzgrau dunkel. Jeder Schritt hat einen 64px-Tropfen mit 2px-Rand in Logo-Orange und der Nummer innen (700, 1.375rem). Der Füllstand steigt mit dem Schritt (20%, 55%, 100%); im voll gefüllten Tropfen steht die Nummer in Auf-Orange.

### Gebinde als wachsende Kreise (Signatur)
Vier Kreise mit 2px-Rand in Logo-Orange, Größe nach Gebinde (16%, 34%, 62%, 100% der Spaltenbreite, mind. 34px), darunter Wert in Figure-Schrift und Gebindeart in Schiefer. Beim Hineinscrollen (35% sichtbar) füllen sie sich nacheinander von unten (1.1s, je +0.25s). Ohne JavaScript oder bei reduzierter Bewegung sind sie voll.

### Bildband
Ein einzelnes Makrobild in voller Breite mit inset und 32px Radius, ohne Text, dekorativ (`aria-hidden`). Setzt eine Pause zwischen zwei Sektionen.

### FAQ
Native `details` als weiße Karten (20px) auf Glanzgrau. Frage in Question-Schrift, rechts ein 40px-Plus-Kreis in Glanzgrau. Hover und geöffnet: Kreis in Logo-Orange, geöffnet um 45° gedreht (0.3s). Antwort in Schiefer, max. 64ch.

### Abschlussfläche
Orange Fläche (32px Radius) im Container: links Closing-H2, rechts Text, Ink-Button und Telefon und E-Mail in Auf-Orange 650.

### Footer
Hell und ruhig: Weiß, 1px-Oberkante in Glanzgrau dunkel, Text in Schiefer, Links in Anthrazit ohne Unterstreichung, Hover Orange-Tinte. Logo dunkel 38px mit Adresse, drei Linkspalten, Legal-Zeile 0.9375rem.

### Motion
Eine Kurve für alles: `cubic-bezier(0.16, 1, 0.3, 1)`. Hover 0.2s bis 0.25s (Farbe, Pfeil), Bildzoom 0.8s, Untermenü 0.25s / 0.35s. Ladeanimationen nur im Hero, Scroll-Animation nur bei den Gebinde-Kreisen. Alles Bewegte steht unter `prefers-reduced-motion: no-preference`.

## Do's and Don'ts

### Do:
- **Do** Sektionen zwischen Weiß und Glanzgrau wechseln lassen und Karten jeweils in der anderen Fläche setzen.
- **Do** Logo-Orange als Fläche, Rand, Tropfen und Stanzlinie einsetzen und orange Schrift immer in Orange-Tinte setzen.
- **Do** Buttons als Pillen mit Pfeil bauen: Primary orange, auf oranger Fläche Ink.
- **Do** Radien nach Größe wählen: 20px Bilder und Karten, 32px große Flächen und vollbreite Bilder.
- **Do** Mengen, Schritte und Fortschritte als Kreise mit orangem Rand zeigen, die sich von unten füllen.
- **Do** Makrobilder groß und ohne Overlay zeigen; Text auf weißen Flächen, die das Bild überlappen.
- **Do** die freigestellte Flasche mit gestrichelter Etikettenfläche nutzen, wo es um die eigene Marke geht.
- **Do** Sektionsköpfe gestapelt setzen: H2, darunter Intro in Schiefer.

### Don't:
- **Don't** Eyebrows, Kicker, Nummern oder Versal-Labels über Überschriften setzen.
- **Don't** Verlaufs-Overlays auf Fotos legen oder Text direkt auf Bilder setzen.
- **Don't** Tabellen als Gestaltungsmittel oder Datenblatt-Optik verwenden.
- **Don't** dunkle Sektionen oder eine Hochglanz-Detailing-Optik einführen.
- **Don't** Logo-Orange als Schriftfarbe auf Weiß oder Glanzgrau verwenden.
- **Don't** scharfe Ecken oder eckige Buttons setzen.
- **Don't** Karten in einer Sektion mit Schatten versehen.
- **Don't** Etikettenfarben der Produkte (Lila, Blau) als Website-Farben übernehmen.
- **Don't** Elemente aus der archivierten Druckbogen-Variante übernehmen (Schnittmarken, Passkreuz, Farbkontrollstreifen, Radius 0).
