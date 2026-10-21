---
name: NiKu Chemie
description: Klassischer B2B-Herstellerauftritt für Private Label Reinigungsmittel aus Veitsbronn, hell, sachlich, mit Orange als Markierung.
colors:
  anthrazit: "#2e3133"
  schiefer: "#5b6064"
  linie: "#e2e4e6"
  weiss: "#ffffff"
  nebelgrau: "#f3f4f5"
  logo-orange: "#ec6e3e"
  rostorange: "#b84a24"
  rostorange-tief: "#993d1c"
  auf-dunkel-gedaempft: "#b9bdc0"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.125rem, 1.3rem + 2.4vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.25rem + 1.5vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  figure:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.1rem + 1vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
    fontFeature: "tabular-nums"
  lead:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.005em"
  meta:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  base: "6px"
  full: "50%"
spacing:
  gutter: "clamp(16px, 4vw, 32px)"
  section: "clamp(64px, 9vw, 112px)"
  wrap: "1240px"
  header: "72px"
  head-gap: "clamp(32px, 4vw, 48px)"
  grid-gap: "clamp(24px, 3vw, 40px)"
  split-gap: "clamp(32px, 5vw, 80px)"
components:
  button-primary:
    backgroundColor: "{colors.rostorange}"
    textColor: "{colors.weiss}"
    typography: "{typography.label}"
    rounded: "{rounded.base}"
    padding: "0 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.rostorange-tief}"
    textColor: "{colors.weiss}"
  button-light:
    backgroundColor: "{colors.weiss}"
    textColor: "{colors.anthrazit}"
    typography: "{typography.label}"
    rounded: "{rounded.base}"
    padding: "0 22px"
    height: "48px"
  button-light-hover:
    backgroundColor: "{colors.nebelgrau}"
    textColor: "{colors.anthrazit}"
  button-nav:
    backgroundColor: "{colors.rostorange}"
    textColor: "{colors.weiss}"
    rounded: "{rounded.base}"
    padding: "0 18px"
    height: "42px"
  text-link:
    textColor: "{colors.rostorange}"
    typography: "{typography.label}"
  text-link-hover:
    textColor: "{colors.rostorange-tief}"
  site-header:
    backgroundColor: "{colors.weiss}"
    textColor: "{colors.anthrazit}"
    height: "{spacing.header}"
  step-marker:
    backgroundColor: "{colors.weiss}"
    textColor: "{colors.anthrazit}"
    rounded: "{rounded.full}"
    size: "48px"
  aside-note:
    backgroundColor: "{colors.nebelgrau}"
    textColor: "{colors.anthrazit}"
    rounded: "{rounded.base}"
    padding: "22px 26px"
  site-footer:
    backgroundColor: "{colors.anthrazit}"
    textColor: "{colors.auf-dunkel-gedaempft}"
---

# Design System: NiKu Chemie

## Overview

**Creative North Star: "Das saubere Werksdatenblatt"**

Die Seite wirkt wie ein gut gesetztes technisches Datenblatt eines deutschen Herstellers: weißer, kühler Grund, Anthrazit als Schrift, Haarlinien als Ordnungsmittel und Orange nur dort, wo etwas markiert werden soll. Information steht in Zeilen und Spalten, nicht in Kacheln. Zahlen, Gebinde und Mindestmengen bekommen eigene, tabellarisch gesetzte Felder, weil sie das Vertrauen tragen.

Die Dichte ist ruhig: großzügige Sektionsabstände (bis 112px), eine einzige Schriftfamilie in vier Schnitten, ein einziger Radius. Getönte Sektionen in Nebelgrau wechseln sich mit weißen ab und gliedern die Seite ohne Karten oder Schatten. Den Abschluss bildet eine anthrazitfarbene Fußfläche mit Anfrage, Telefon und E-Mail. Bewegung bleibt zurückhaltend: das Heldenbild setzt sich einmal beim Laden, alles andere reagiert nur auf Hover.

Abgelehnt ist laut Richtungsvertrag die überladene Branchenseite mit Kachelwand, Laborstock und Werbefloskeln.

**Key Characteristics:**
- Weiß und Nebelgrau als Flächen, Anthrazit als Schrift und als einzige dunkle Fläche (Footer).
- Logo-Orange nur als Markierung: Linien, Icons, Schrittkreise, Navigationsunterstrich.
- Rostorange für alles Klickbare (Buttons, Links, Fokusring).
- Linien statt Karten: Haarlinien (1px) gliedern Fakten, Gebinde, FAQ; eine 2px-Oberkante führt die Produktlinien.
- Archivo 400 bis 700, kein Serif, enge Laufweite in Überschriften.
- Ein Radius (6px) für Buttons, Bildrahmen und Hinweisflächen.

## Colors

Kühles Neutralgrau mit einem einzigen warmen Akzent in zwei Funktionsstufen.

### Primary
- **Rostorange** (#b84a24): Füllung der Primärbuttons, Textlinks, Fokusring, FAQ-Plus-Icon und Hover-Farbe der FAQ-Frage. Abgedunkelte Fassung des Logo-Orange, damit Text auf Weiß (5.2:1) und auf Nebelgrau (4.7:1) AA erreicht.
- **Rostorange tief** (#993d1c): Hover-Zustand von Primärbutton und Textlink.

### Secondary
- **Logo-Orange** (#ec6e3e): Markenfarbe aus dem Logo, ausschließlich als Markierung ohne Text: Unterstrich der Navigation bei Hover, Schrittlinie und Schrittkreise, Check-, Palette- und Punkt-Icons, Oberkante der Produktlinien bei Hover, Fokusring im Footer, Selektion (22% Deckkraft).

### Neutral
- **Anthrazit** (#2e3133): Fließtext und Überschriften, Fläche des Footers, Oberkante der Produktlinien in Ruhe, Skip-Link.
- **Schiefer** (#5b6064): Sekundärtext, Leadtexte, Beschriftungen in Faktenzeile und Gebinde-Raster, Meta-Zeilen.
- **Linie** (#e2e4e6): Alle Haarlinien: Header-Unterkante, Faktenzeile, Gebinde-Raster, FAQ-Trenner, Grundspur der Schrittlinie.
- **Weiß** (#ffffff): Seitengrund, Header (88% mit Unschärfe), Füllung des hellen Buttons.
- **Nebelgrau** (#f3f4f5): Getönte Sektionen, Bildhintergründe und Hinweisfläche.
- **Auf Dunkel gedämpft** (#b9bdc0): Fließtext im Footer (6.9:1 auf Anthrazit); Überschriften und Links im Footer sind Weiß, Trennlinien dort Weiß mit 14% Deckkraft.

### Named Rules
**The Zwei-Orange Rule.** Logo-Orange markiert, Rostorange handelt. Text oder Buttonflächen in Logo-Orange gibt es nicht, weil es auf Weiß nur 3.1:1 erreicht.

**The Eine-dunkle-Fläche Rule.** Anthrazit als Fläche erscheint nur im Footer. Alle anderen Sektionen sind Weiß oder Nebelgrau im Wechsel.

**The Etikettenfarben Rule.** Die Produktfarben der Etiketten (z. B. Lila, Blau) gehören zu den Produkten und erscheinen nur in Produktfotos, nie als Website-Farbe.

## Typography

**Display Font:** Archivo (mit system-ui, sans-serif)
**Body Font:** Archivo (mit system-ui, sans-serif)

**Character:** Eine sachliche Grotesk in vier lokal gehosteten Schnitten (400, 500, 600, 700). Hierarchie entsteht über Größe und Gewicht, nicht über eine zweite Familie.

### Hierarchy
- **Display** (700, clamp 2.125rem bis 3.25rem, 1.08): Nur die H1 im Hero, maximal 16ch breit auf Desktop, ab 860px ohne Breitenlimit. Die globale H1-Regel (clamp 2.25rem bis 3.5rem) ist im Hero überschrieben.
- **Headline** (700, clamp 1.75rem bis 2.5rem, 1.15): Sektionsüberschriften H2, auch im Footer (dort Weiß, max. 20ch).
- **Title** (600, 1.25rem, 1.3): H3 für Schritte, Produktlinien. Säulenüberschriften etwas größer (clamp 1.375rem bis 1.625rem); Footer-Spaltentitel 1rem.
- **Figure** (700, clamp 1.5rem bis 2rem, 1.1, tabellarische Ziffern): Zahlen der Faktenzeile. Gebindewerte nutzen 600 bei 1.25rem, ebenfalls tabellarisch.
- **Lead** (400, 1.1875rem, Schiefer, max. 58ch): Subtext unter H1 und H2 in Split-Sektionen; unter 600px 1.0625rem.
- **Body** (400, 1.0625rem, 1.6): Fließtext; unter 600px 1rem. Sektionseinleitungen max. 680px, Säulentexte 52ch, FAQ-Antworten 62ch.
- **Label** (600, 1rem, 1, Laufweite 0.005em): Buttons und Textlinks. Navigation 500 bei 0.975rem.
- **Meta** (400, 0.95rem, Schiefer): Beschriftungen unter Zahlen, Gebindebezeichnungen, Produktanzahl der Linien. Rechtliches im Footer 0.9rem.

### Named Rules
**The Enge-Überschrift Rule.** H1 und H2 laufen mit -0.02em und `text-wrap: balance`; H3 mit -0.01em. Fließtext bleibt bei normaler Laufweite mit `text-wrap: pretty`.

**The Tabellarische-Zahl Rule.** Jede Zahl, die ein Faktum trägt (Faktenzeile, Gebinde, Schrittnummer, Produktanzahl), steht in tabellarischen Ziffern.

## Layout

Zentrierter Container von 1240px mit fluider Seitenzone (16px bis 32px). Sektionen haben vertikal clamp(64px, 9vw, 112px); der Sektionskopf (max. 680px) hält clamp(32px, 4vw, 48px) Abstand zum Inhalt. Der Hero hat eigene, kleinere Abstände (oben 40px bis 72px, unten 48px bis 80px), die erste Sektion danach beginnt ohne Oberabstand, sodass Faktenzeile und Säulen zusammenhängen.

Wiederkehrende Raster:
- **Hero-Split** 1.12fr zu 1fr, Bild im Format 5:4, vertikal zentriert.
- **Split** 1fr zu 1fr mit Abstand clamp(32px, 5vw, 80px) für Gebinde und Produktion; Bildformat 4:3.
- **Säulen** zwei gleiche Spalten, Bildformat 16:10.
- **Produktlinien** 1.15fr zu 1fr, die Hauptlinie über zwei Zeilen, zwei Nebenlinien als Zeilen mit Bild links (42%).
- **FAQ** 0.8fr zu 1.2fr, Einleitung links, Fragen rechts.
- **Footer** CTA-Zeile 1.3fr zu 1fr, darunter drei Spalten 1.4fr / 1fr / 1fr.

Responsive Regeln:
- **bis 1080px:** Produktlinien zweispaltig, Hauptlinie über volle Breite (16:9), Nebenlinien gestapelt mit Bild oben (16:10).
- **bis 960px:** Navigation klappt hinter einen 44px-Menüknopf; das Panel öffnet unter dem 72px-Header mit gestapelten Links (14px Polster, Haarlinie dazwischen) und vollbreitem Button.
- **bis 860px:** Alle Splits, Säulen, FAQ und Footer-CTA einspaltig; Faktenzeile 2 x 2 mit Haarlinien; Schrittlinie wird senkrecht; Gebindebild rückt unter den Text; Footer-Spalten 2-spaltig mit Logo über volle Breite.
- **bis 600px:** Body 1rem, Produktlinien und Gebinde-Raster einspaltig, Hero-Button vollbreit.

Der Header ist sticky; Ankersprünge halten 88px Abstand nach oben.

## Elevation & Depth

Die Welt ist flach. Tiefe entsteht durch tonale Schichtung (Weiß gegen Nebelgrau gegen Anthrazit) und durch Haarlinien, nicht durch Schatten. Der Header trennt sich mit einer 1px-Linie und einem leicht durchscheinenden, unscharfen Weiß. Einziger Schatten ist das aufgeklappte Mobilmenü, das über dem Inhalt liegt.

### Shadow Vocabulary
- **Overlay** (`box-shadow: 0 1px 2px rgba(46, 49, 51, 0.06), 0 8px 24px -12px rgba(46, 49, 51, 0.18)`): nur für Ebenen, die über dem Inhalt aufklappen (Mobilmenü).

### Named Rules
**The Linie-statt-Karte Rule.** Inhalte werden mit Haarlinien und Flächenwechseln gegliedert. Keine Karten mit Rahmen und Schatten; eine Gruppe bekommt höchstens eine Oberkante oder eine Nebelgrau-Fläche.

## Shapes

Ein Radius für alles Rechteckige: sanft abgerundete Ecken (6px) an Buttons, Bildrahmen, Hinweisfläche, Menüknopf und Skip-Link. Einzige Ausnahme sind die kreisrunden Schrittmarken (48px). Linien sind entweder Haarlinien (1px, Linie) oder Führungslinien (2px: Schrittlinie, Oberkante der Produktlinien, Navigationsunterstrich). Bilder liegen immer in einem Rahmen mit festem Seitenverhältnis und Nebelgrau als Grund; freigestellte Produktfotos stehen per `object-fit: contain` mit Innenabstand darin.

**The Ein-Radius Rule.** 6px oder kreisrund, sonst nichts.

## Components

### Buttons
Fest, rechteckig, ruhig.
- **Shape:** sanft gerundet (6px), Mindesthöhe 48px, Polster 0 22px, Pfeil-Icon 18px mit 10px Abstand.
- **Primary:** Rostorange mit weißer Schrift.
- **Light:** Weiß mit Anthrazit, nur auf dem dunklen Footer; Hover Nebelgrau.
- **Nav-Variante:** Primary mit 42px Höhe, 18px Polster, 0.95rem; im Mobilmenü wieder 48px.
- **Hover / Focus:** Farbwechsel in 0.2s, Pfeil rückt 3px nach rechts; Active drückt 1px nach unten. Fokus als 2px Rostorange-Ring mit 3px Abstand.

### Text Links
- **Style:** Rostorange, 600, ohne Unterstrich, mit nachgestelltem Pfeil (18px, 8px Abstand). Pfeil rückt bei Hover 3px nach rechts, Farbe wird Rostorange tief.
- **Fließtextlinks** (Standard `a`): Rostorange, Unterstrich 1px mit 0.2em Abstand.

### Navigation
- **Desktop:** Logo links (38px hoch), fünf Links in Anthrazit (500, 0.975rem, 28px Abstand), dann Primary-Button. Hover zeichnet einen 2px-Unterstrich in Logo-Orange von links nach rechts (0.25s).
- **Mobil (bis 960px):** 44px-Menüknopf mit 1px-Rahmen; Panel in Weiß mit Overlay-Schatten, Links als Liste mit Haarlinien; Escape und Linkklick schließen.

### Faktenzeile
Vier Zahlen direkt unter dem Hero, oben von einer Haarlinie begrenzt und durch senkrechte Haarlinien getrennt. Zahl in Figure-Stil, darunter Meta-Beschriftung. Ab 860px 2 x 2 mit zusätzlicher waagerechter Linie.

### Säulen
Zwei gleichwertige Spalten: Bild (16:10, 6px), H3, Text in Schiefer, Textlink. Bild zoomt bei Hover der Säule auf 1.03 in 0.6s. Produktbilder stehen freigestellt (contain, multiply) auf Nebelgrau. Darunter optional eine **Hinweisfläche** in Nebelgrau (6px, 22px 26px) für Nebenthemen mit Textlink rechts.

### Schrittlinie (Signatur)
Nummerierte Liste in drei Spalten. Kreise 48px mit 2px Logo-Orange-Rand, Füllung in Sektionsfarbe, Ziffer 700 tabellarisch. Dahinter eine 2px-Linie auf Höhe der Kreismitte von Kreis 1 bis Kreis 3, in Logo-Orange über grauer Grundspur. Ab 860px wird die Linie senkrecht links neben den Kreisen. Darunter ein Fußbereich mit 1px-Linie, Check-Liste (Icons in Logo-Orange) und Primary-Button.

### Gebinde-Raster
Definitionsliste in zwei Spalten mit Haarlinien oben, unten und in der Mitte: Bezeichnung in Meta, Wert 600 bei 1.25rem tabellarisch. Unter 600px einspaltig. Ergänzt durch eine **Inline-Fakt**-Zeile: Icon in Logo-Orange (22px), fett gesetzter Satzanfang in Anthrazit, Rest in Schiefer.

### Produktlinien mit Oberkante
Ganze Karte ist ein Link ohne Rahmen und Fläche, nur mit 2px-Oberkante in Anthrazit und 20px Abstand darunter. Bild in 6px-Rahmen, darunter H3, Text, Meta-Zeile und Textlink. Hover: Oberkante wird Logo-Orange, Bild zoomt auf 1.03, Linktext Rostorange tief.

### Punkteliste
Raster aus 28px Iconspalte und Text: Icon 24px in Logo-Orange, fetter Titel in Anthrazit, Erläuterung in Schiefer, 22px Zeilenabstand.

### FAQ
Native `details`-Elemente zwischen Haarlinien. Frage 600 bei 1.125rem mit 22px Polster, Plus-Icon in Rostorange rechts, dreht sich offen um 45 Grad (0.25s). Hover färbt die Frage Rostorange. Antwort in Schiefer, max. 62ch.

### Footer
Anthrazit-Fläche in drei Bändern, getrennt durch Weiß mit 14% Deckkraft: CTA-Band (H2 weiß, Light-Button, Telefon und E-Mail mit Logo-Orange-Icons), Spaltenband (weißes Logo 40px, Adresse, zwei Linklisten), Rechtszeile in 0.9rem. Links weiß ohne Unterstrich, Hover mit Unterstrich; Fokusring dort Logo-Orange.

### Motion
Eine Kurve für alles: `cubic-bezier(0.16, 1, 0.3, 1)`. Das Heldenbild setzt sich beim Laden einmal (Skalierung 1.06 auf 1, Sättigung 0.85 auf 1, 1.4s). Sonst nur Hover-Reaktionen zwischen 0.15s und 0.6s. Bei `prefers-reduced-motion: reduce` entfallen Hero-Animation und weiches Scrollen.

## Do's and Don'ts

### Do:
- **Do** setze Buttons und Textlinks in Rostorange (#b84a24) und Logo-Orange (#ec6e3e) nur für Linien, Icons und Markierungen.
- **Do** gliedere mit Haarlinien (1px, #e2e4e6) und dem Wechsel Weiß / Nebelgrau statt mit Karten.
- **Do** setze Zahlen, Mengen und Gebinde in tabellarischen Ziffern und gib ihnen ein eigenes Feld.
- **Do** verwende 6px für jede Ecke und lege Bilder in Rahmen mit festem Seitenverhältnis auf Nebelgrau.
- **Do** halte Bewegung auf Hover und das einmalige Setzen des Heldenbilds beschränkt, mit der Kurve cubic-bezier(0.16, 1, 0.3, 1).

### Don't:
- **Don't** baue eine Kachelwand oder überladene Branchenseite mit Laborstock und Werbefloskeln (Richtungsvertrag).
- **Don't** setze Text oder Buttonflächen in Logo-Orange; es erreicht auf Weiß nur 3.1:1.
- **Don't** nutze Schatten für ruhende Flächen; der Overlay-Schatten gehört nur aufklappenden Ebenen.
- **Don't** füge eine Serifenschrift oder zweite Familie hinzu.
- **Don't** übernimm Etikettenfarben einzelner Produkte als Website-Farben.
