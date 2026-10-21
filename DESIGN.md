---
name: NiKu Chemie
description: "Private-Label-Hersteller aus Veitsbronn, gesetzt als Druckbogen zur Etikettenfreigabe: kühles Papierweiß, Anthrazit als Druckschwarz, Logo-Orange als Vollton und Stanzkontur."
colors:
  ink: "#2e3133"
  ink-2: "#565b5f"
  ink-3: "#8a8f93"
  ink-deep: "#111314"
  paper: "#ffffff"
  paper-2: "#f2f3f3"
  product-ground: "#e6e8e9"
  rule: "#d9dcde"
  rule-strong: "#c9cdd0"
  orange: "#ec6e3e"
  orange-ink: "#b84a24"
  on-orange: "#1f2223"
  night: "#24272a"
  night-muted: "#b9bdc0"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.375rem, 1.4rem + 3vw, 4rem)"
    fontWeight: 720
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  closing:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.3rem + 3vw, 4.25rem)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.3rem + 2.2vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  title-lg:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 1.2rem + 1vw, 2.125rem)"
    fontWeight: 680
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 680
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  figure:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 1.1rem + 1.3vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
    fontFeature: "tabular-nums"
  lead:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.35vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.55
  intro:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 650
    lineHeight: 1
  nav:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.975rem"
    fontWeight: 550
    lineHeight: 1.6
  slug:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 650
    lineHeight: 1.6
    letterSpacing: "0.01em"
    fontVariation: "\"wdth\" 78"
    fontFeature: "tabular-nums"
rounded:
  none: "0"
  die: "10px"
spacing:
  wrap: "1280px"
  gutter: "clamp(16px, 4vw, 40px)"
  section: "clamp(80px, 10vw, 140px)"
  header: "76px"
  bleed: "22px"
  block-gap: "clamp(48px, 6vw, 72px)"
  split-gap: "clamp(40px, 6vw, 96px)"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.on-orange}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-primary-lg:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.on-orange}"
    rounded: "{rounded.none}"
    padding: "0 28px"
    height: "58px"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 28px"
    height: "58px"
  button-ink-hover:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.paper}"
  button-nav:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.on-orange}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "44px"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  text-link-hover:
    textColor: "{colors.orange-ink}"
  site-header:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    height: "{spacing.header}"
  die-note:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.slug}"
    padding: "6px 12px 6px 0"
  process-field:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.on-orange}"
    padding: "{spacing.section} 0"
  step-marker:
    textColor: "{colors.on-orange}"
    rounded: "{rounded.none}"
    size: "34px"
  close-sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(40px, 6vw, 88px) clamp(24px, 5vw, 80px)"
  section-tint:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
  site-footer:
    backgroundColor: "{colors.night}"
    textColor: "{colors.night-muted}"
---

# Design System: NiKu Chemie

## Overview

**Creative North Star: "Der Druckbogen zur Freigabe"**

Die Seite liest sich wie ein Andruck, den die Druckerei zur Etikettenfreigabe schickt: kühles Papierweiß, Anthrazit als Druckschwarz, Logo-Orange als Vollton und als gestrichelte Stanzkontur. Druckmarken tragen die Welt: Schnittmarken außen an den Bildecken, ein Passkreuz pro Bogen, ein Farbkontrollstreifen, ein Lineal mit Teilstrichen für die Gebinde. Die Botschaft dahinter ist die des Produkts: NiKu füllt ab, der Kunde liefert die Druckdaten für sein Etikett.

Die Dichte ist ruhig und technisch. Große Sektionsabstände (bis 140px), eine einzige Schriftfamilie in zwei Breiten, keine Ecken außer der Stanzkontur. Gliederung entsteht durch Linien (Haarlinie, 2px-Oberkante, gestrichelte Trenner) und durch Flächenwechsel Weiß, Hellgrau, ein einziges Orangefeld für den Ablauf und das dunkle Fußband. Der Abschluss ist kein Farbblock, sondern der letzte Bogen: ein gerahmtes weißes Blatt mit Schnittmarken und Passkreuz. Bewegung gibt es einmal beim Laden, wenn Marken und Stanzkontur sich einzeichnen; danach nur Hover.

Abgelehnt wurden laut Nutzer die Vorversion "bildstark und modern" (Eyebrows über jeder Sektion, Verlaufs-Fotokacheln, nummerierte Kicker, Glasleiste) sowie die Laborstock-Herstellerseite und die dunkle Detailing-Hochglanzseite.

**Key Characteristics:**
- Papierweiß und Hellgrau als Flächen, Anthrazit als Schrift; Orange als Vollton genau einmal (Ablauf) und sonst als Button, Stanzkontur, Marke und Linie.
- Druckmarken als Ordnungsmittel: Schnittmarken, Passkreuz, Farbkontrollstreifen, Lineal.
- Radius 0 überall; einzige Rundung ist die Stanzkontur um die Etikettenfläche (10px).
- Archivo variabel in Normalbreite und Condensed (78%); Condensed nur für kurze Bogenbeschriftungen.
- Orangefarbener Button mit dunkler Schrift; auf Orange und auf Weiß im Abschluss wird der Button anthrazit.
- Keine Eyebrows, keine Kicker über Überschriften: jede Sektion beginnt direkt mit ihrer H2.

## Colors

Kühles Papiergrau in vier Stufen, ein Druckschwarz und ein warmer Akzent in zwei Funktionen: Vollton und lesbare Textfarbe.

### Primary
- **Logo-Orange** (orange): Markenfarbe aus dem Logo. Füllung des Primärbuttons (mit dunkler Schrift), die eine Volltonfläche des Ablaufs, Stanzkontur, Hinweisstrich am Etikett, Lineal-Marken der Gebinde, Unterstriche von Navigation und Textlinks, Textauswahl, Linkhover und Fokusring im Footer (4.9:1 auf Night).
- **Orange-Tinte** (orange-ink): Abgedunkelte Fassung für alles, was als Text oder Icon auf hellem Grund orange sein muss: Fließtextlinks, Fokusring, Pfeile, Icons der Punkteliste, FAQ-Plus, Hover-Farbe von Namen und Links, Eingabemarke. 5.2:1 auf Papier, 4.7:1 auf Hellgrau.
- **Auf Orange** (on-orange): Druckschwarz auf Orange (5.2:1): Buttonschrift, Text, Schrittmarken, Trennlinien im Ablauf.

### Neutral
- **Anthrazit** (ink): Fließtext, Überschriften, Druckmarken (Schnittmarken, Passkreuz), Lineal, 2px-Oberkanten von Produktindex und FAQ, Fläche des Ink-Buttons, Skip-Link.
- **Schiefer** (ink-2): Sekundärtext, Lead, Sektionseinleitungen, Erläuterungen (6.9:1 auf Papier).
- **Teilstrich** (ink-3): Nur nicht-textliche Feinmarken: kleine Teilstriche im Lineal, senkrechte Trenner der Faktenzeile, Scrollbalken. Nie für Text (3.3:1).
- **Tiefschwarz** (ink-deep): Hover des Ink-Buttons.
- **Papier** (paper): Seitengrund, Header, Mobilmenü, Abschlussbogen.
- **Hellgrau** (paper-2): Getönte Sektionen (Produktlinien, FAQ), Grund der Produktbühne in den Säulen.
- **Produktgrund** (product-ground): Bildgrund freigestellter Produkte im Produktindex.
- **Linie** (rule): Haarlinien: Header-Unterkante, Hinweiszeile, Punkteliste, Rahmen des Abschlussbogens, Mobilmenü.
- **Linie kräftig** (rule-strong): Zeilentrenner im Produktindex und in der FAQ.
- **Night** (night): Fläche des Footers.
- **Night gedämpft** (night-muted): Fließtext im Footer (7.9:1); Überschriften und Links dort Weiß, Trennlinie Weiß mit 14% Deckkraft.

Der Farbkontrollstreifen zeigt vier Orange-Stufen (Orange, #f19b78, #f7c8b4, #fbe4da) und vier Grau-Stufen (Anthrazit, #6d7174, #abaeb0, #dcdedf) als 22px-Felder. Diese Töne sind Teil der Marke, keine Systemfarben.

### Named Rules
**The Ein-Vollton Rule.** Orange als große Fläche gibt es genau einmal pro Seite: das Ablauf-Feld. Alle anderen Sektionen sind Papier oder Hellgrau, der Footer Night.

**The Dunkel-auf-Orange Rule.** Auf Orange steht immer Druckschwarz (on-orange), voll deckend. Weiß auf Orange erreicht nur 3.1:1 und kommt nicht vor.

**The Tinte-für-Text Rule.** Orangefarbener Text und Icons auf hellem Grund sind immer Orange-Tinte. Logo-Orange erscheint auf Hell nur als Fläche, Linie oder Marke ohne Text.

**The Etikettenfarben Rule.** Die Produktfarben der Etiketten (z. B. Lila, Blau) gehören zu den Produkten und erscheinen nur in Produktfotos, nie als Website-Farbe.

## Typography

**Display Font:** Archivo (mit system-ui, sans-serif)
**Body Font:** Archivo (mit system-ui, sans-serif)
**Label Font:** Archivo Condensed über die Breitenachse (font-stretch 78%)

**Character:** Eine einzige lokal gehostete variable Grotesk (Gewicht 100 bis 900, Breite 62% bis 125%). Normalbreite trägt Überschriften und Text, die schmale Breite die Beschriftungen des Bogens, wie Angaben am Rand eines Andrucks. Gewichte sitzen zwischen den Standardstufen (550, 650, 680, 720).

### Hierarchy
- **Display** (720, clamp 2.375rem bis 4rem, 1.02, -0.035em): Nur die H1 im Hero; unter 860px max. 14ch, Silbentrennung nur manuell.
- **Closing** (700, clamp 2.25rem bis 4.25rem, 1.06): H2 des Abschlussbogens, max. 14ch.
- **Headline** (700, clamp 2rem bis 3.25rem, 1.06, -0.03em): Sektionsüberschriften H2, max. 20ch.
- **Title large** (680, clamp 1.625rem bis 2.125rem, 1.2): H3 der zwei Säulen. Produktnamen im Index 700 bei clamp 1.375rem bis 1.875rem, Schritte im Ablauf clamp 1.375rem bis 1.75rem.
- **Title** (680, 1.375rem, 1.2): Standard-H3. Footer-Spaltentitel 650 bei 1rem.
- **Figure** (700, clamp 1.625rem bis 2.5rem, 1.05, tabellarisch): Gebindewerte am Lineal.
- **Lead** (400, clamp 1.125rem bis 1.3125rem, 1.55, Schiefer, max. 46ch): Subtext unter der H1.
- **Intro** (400, 1.1875rem, 1.55, Schiefer, max. 54ch): Sektionseinleitung unter der H2; auch Text im Abschlussbogen.
- **Body** (400, 1.0625rem, 1.6): Fließtext; unter 600px 1rem. FAQ-Antworten max. 62ch.
- **Label** (650, 1rem, 1): Buttons (groß 1.0625rem, Navigation 0.95rem) und Textlinks.
- **Nav** (550, 0.975rem): Hauptnavigation; mobil 1.0625rem.
- **Slug** (650, 0.9375rem, Condensed 78%, +0.01em, tabellarisch): Stanzhinweis "Ihr Etikett", Begriffe der Konditionen, Meta der Produktlinien. Die Faktenzeile nutzt dieselbe Breite bei 560 und 1rem.

### Named Rules
**The Zwei-Breiten Rule.** Condensed (78%) ist nur für kurze, technische Bogenbeschriftungen da: Faktenzeile, Stanzhinweis, Konditionsbegriffe, Produkt-Meta. Nie für Überschriften, Fließtext oder Buttons.

**The Enge-Überschrift Rule.** Überschriften laufen negativ (H1 -0.035em, H2 -0.03em, H3 -0.015em) mit `text-wrap: balance`; Fließtext bleibt bei normaler Laufweite mit `text-wrap: pretty`.

**The Tabellarische-Zahl Rule.** Jede Zahl, die ein Faktum trägt (Faktenzeile, Gebinde, Schrittnummer, Produkt-Meta, Telefonnummer), steht in tabellarischen Ziffern.

## Layout

Zentrierter Container (wrap) mit fluider Seitenzone (gutter). Sektionen halten vertikal den Sektionsabstand; Blöcke unter einem Sektionskopf beginnen mit block-gap (Ablauf, Lineal, Säulen bis 80px, Produktindex 40px bis 64px). Der Hero hat eigenen Oberabstand (48px bis 88px) und schließt mit der Faktenzeile als Bogenrand ab: eine 1px-Anthrazitlinie oben, Einträge durch senkrechte 16px-Striche getrennt.

Wiederkehrende Raster:
- **Hero** 1fr zu 1fr, vertikal zentriert. Rechts der Bogen: Foto 4:3, um 12% nach rechts eingerückt, davor links unten die freigestellte Flasche (27% Breite), rechts unten der Farbkontrollstreifen.
- **Säulen** bewusst ungleich, 1.45fr zu 1fr: Private Label mit Foto 5:4 und Schnittmarken, Produktlinie als Hellgrau-Bühne 4:5 mit zwei Flaschen.
- **Ablauf** drei Spalten, getrennt durch 2px gestrichelte Linien.
- **Gebinde** Kopf 1fr zu 0.8fr mit Bild rechts, darunter das Lineal in vier Feldern (1 / 1 / 0.8 / 0.9).
- **Produktindex** Zeilen mit Bild 200px, Name, Beschreibung, Meta 160px, Pfeil 32px.
- **Produktion** 1.15fr zu 1fr, Bild 5:4 mit Schnittmarken links.
- **FAQ** 0.8fr zu 1.2fr.
- **Footer** 1.6fr / 1fr / 1fr / 1.2fr.

Responsive Regeln:
- **bis 1080px:** Produktindex ohne Beschreibung (160px / 1fr / 140px / 28px); Footer zweispaltig.
- **bis 1000px:** Navigation hinter einem 46px-Menüknopf mit 1px-Anthrazitrahmen; Panel unter dem Header, Links als Liste mit Haarlinien, Button 54px vollbreit.
- **bis 860px:** Alle Splits einspaltig; Ablauf gestapelt mit gestrichelten Trennern oben; Lineal 2 x 2 (zweite Reihe ohne orange Marke, mit Haarlinie); Abschlussbogen mit 8px Seitenrand.
- **bis 600px:** Body 1rem, Header 68px, Logo 34px; Hero-Button und Abschluss-Button vollbreit; Faktenzeile gestapelt ohne Trenner; Produktindex 96px Bild, Meta unter dem Namen; Farbfelder 16px.

Der Header ist sticky; Ankersprünge halten 88px Abstand.

### Named Rules
**The Beschnittzugabe Rule.** Jedes Bild mit Schnittmarken hält rundum den Bleed-Abstand (22px), damit die Marken außerhalb der Bildkante Platz haben. Auch der Abschlussbogen sitzt 22px eingerückt.

## Elevation & Depth

Die Welt ist Papier und liegt flach. Tiefe entsteht durch Flächenwechsel (Papier, Hellgrau, Orange, Night), durch Linien und durch das Überlappen der freigestellten Flasche über der Fotokante. Zwei weiche Schatten existieren, beide funktional.

### Shadow Vocabulary
- **Flaschenschatten** (`filter: drop-shadow(0 22px 22px rgba(46, 49, 51, 0.28))`): nur die freigestellte Produktflasche, die vor dem Bogen steht.
- **Menü-Overlay** (`box-shadow: 0 24px 32px -24px rgba(46, 49, 51, 0.3)`): nur das aufgeklappte Mobilmenü.

### Named Rules
**The Papier-liegt-flach Rule.** Flächen, Rahmen und Buttons haben keine Schatten. Eine Gruppe bekommt eine Linie oder eine Fläche, nie eine Karte mit Schatten.

## Shapes

Alles ist scharfkantig (Radius 0): Buttons, Bilder, Menüknopf, Schrittmarken, Abschlussbogen, Skip-Link. Die einzige Rundung ist die Stanzkontur um die Etikettenfläche der Flasche, eine 2px gestrichelte Orange-Linie mit 10px Radius, weil Etiketten so gestanzt werden. Der Kreis des Passkreuzes (18px, 1px Anthrazit, Fadenkreuz 6px überstehend) ist eine Druckmarke, keine Ecke.

Linien haben feste Rollen: 1px Haarlinie (Linie) gliedert, 1px Anthrazit bildet die Oberkante der Faktenzeile und die Fußlinie im Ablauf, 2px Anthrazit führt Produktindex und FAQ, 2px gestrichelt trennt Schritte (Druckschwarz 45%) und markiert die Stanzkontur (Orange). Schnittmarken sind 14px lange 1px-Striche, 22px außerhalb jeder Bildecke.

### Named Rules
**The Scharfe-Kante Rule.** Radius 0 für jede Fläche. Die 10px-Rundung gehört ausschließlich der Stanzkontur.

## Components

### Buttons
Rechteckig, satt, ohne Rundung.
- **Shape:** Radius 0, Mindesthöhe 48px (groß 58px), Polster 0 22px (groß 0 28px), Pfeil 18px mit 12px Abstand.
- **Primary:** Logo-Orange mit Druckschwarz. Hover wird der Button Anthrazit mit weißer Schrift.
- **Ink:** Anthrazit mit Weiß, auf dem Orangefeld des Ablaufs und im weißen Abschlussbogen. Hover Tiefschwarz.
- **Nav-Variante:** Primary bei 44px Höhe, 0 20px, 0.95rem; im Mobilmenü 54px.
- **Hover / Focus:** Farbwechsel 0.2s, Pfeil rückt 4px nach rechts (0.25s), Active drückt 1px nach unten. Fokus als 2px-Ring in Orange-Tinte mit 3px Abstand.

### Text Links
- **Style:** Anthrazit, 650, Unterstrich 2px in Logo-Orange mit 6px Abstand, Pfeil 18px in Orange-Tinte. Hover: Text Orange-Tinte, Pfeil 4px nach rechts.
- **Fließtextlinks:** Orange-Tinte mit 1px-Unterstrich (0.22em Abstand). In der Hinweiszeile Anthrazit 600 mit orangem 2px-Unterstrich.

### Navigation
- **Desktop:** Weißer Header 76px mit 1px-Haarlinie unten, Logo 40px, fünf Links (Nav-Stil, 30px Abstand), dann Primary-Button. Hover zieht einen 2px-Unterstrich in Logo-Orange von links auf (0.25s).
- **Mobil:** Siehe Layout; Escape und Linkklick schließen das Panel.

### Schnittmarken-Rahmen (Signatur)
Bilder im Bogen (Hero, Private-Label-Säule, Produktion) und der Abschlussbogen bekommen vier Schnittmarken in Anthrazit außerhalb der Ecken. Ein Passkreuz sitzt mittig über der Oberkante, nur beim Hero-Foto und beim Abschlussbogen.

### Stanzkontur mit Etikett-Hinweis (Signatur)
Über der Etikettenfläche der freigestellten Flasche liegt die gestrichelte Orange-Kontur (2px, 10px Radius). Rechts daneben führt ein 40px langer orangefarbener Strich zum Hinweis "Ihr Etikett" im Slug-Stil auf Papiergrund.

### Farbkontrollstreifen
Acht 22px-Quadrate ohne Abstand rechts unter dem Bogen, vier Orange- und vier Graustufen. Rein dekorativ (aria-hidden).

### Faktenzeile
Vier Fakten als Bogenrand unter dem Hero, 1px Anthrazit oben, Slug-Breite bei 560 und 1rem, getrennt durch 16px hohe Striche in Teilstrich-Grau.

### Ablauf-Feld
Die einzige Orangefläche. Drei Schritte mit quadratischer Nummernmarke (34px, 1.5px Druckschwarz-Rahmen, Ziffer 700 tabellarisch), getrennt durch 2px gestrichelte Linien. Darunter ein Fuß mit 1px-Linie in Druckschwarz, Konditionen als Definitionsliste (Begriff im Slug-Stil, Wert 600 bei 1.125rem) und Ink-Button.

### Gebinde-Lineal (Signatur)
2px-Anthrazitlinie oben, darunter Teilstriche: große alle 80px (22px hoch, Anthrazit), kleine alle 16px (10px hoch, Teilstrich-Grau). Jedes Gebindefeld beginnt mit einem 2px breiten, 34px hohen orangen Strich, darunter der Wert im Figure-Stil und die Bezeichnung in Schiefer.

### Produktindex
Liste mit 2px-Anthrazit-Oberkante und kräftigen Haarlinien zwischen den Zeilen. Jede Zeile ist ein Link: Bild 3:2 (Fotos cover, freigestellte Produkte contain auf Produktgrund), Name, Beschreibung, Meta im Slug-Stil, Pfeil in Orange-Tinte. Hover: Name Orange-Tinte, Pfeil 6px nach rechts, Bild zoomt auf 1.05 (0.6s).

### Punkteliste
Raster 36px Icon / Text mit Haarlinie oben je Zeile: Icon 26px in Orange-Tinte, Titel 680 bei 1.125rem, Erläuterung in Schiefer.

### FAQ
Native `details` unter 2px-Anthrazit-Oberkante, Trenner kräftige Haarlinie. Frage 650 bei clamp 1.125rem bis 1.3125rem, 24px Polster, Plus 24px in Orange-Tinte, dreht offen um 45 Grad (0.3s). Antwort in Schiefer, max. 62ch. Daneben die Telefonnummer groß (700, 1.375rem, tabellarisch).

### Abschlussbogen
Der letzte Bogen: weißes Blatt mit 1px-Haarlinienrahmen, Schnittmarken und Passkreuz, 22px eingerückt. Innen H2 im Closing-Stil links, rechts Intro-Text, Ink-Button und Kontaktzeilen (600, Icon in Orange-Tinte).

### Footer
Night-Fläche: Spalten mit weißem Logo (42px), Adresse und Linklisten, darunter die Rechtszeile (0.9rem) hinter Weiß mit 14% Deckkraft. Links Weiß ohne Unterstrich, Hover Logo-Orange; Fokusring dort Logo-Orange.

### Motion
Eine Kurve für alles: `cubic-bezier(0.16, 1, 0.3, 1)`. Beim Laden zeichnet sich der Hero-Bogen einmal ein: Foto setzt sich (1.2s), Flasche steigt auf (1s), Schnittmarken ziehen sich auf (0.7s ab 0.35s), Passkreuz und Farbfelder blenden gestaffelt ein, die Stanzkontur zieht sich zusammen (0.8s ab 0.85s), der Hinweis gleitet ein (ab 1.1s). Sonst nur Hover zwischen 0.15s und 0.6s. Bei `prefers-reduced-motion: reduce` entfallen Ladesequenz und weiches Scrollen.

## Do's and Don'ts

### Do:
- **Do** setze Primärbuttons in Logo-Orange mit Druckschwarz (on-orange) und wechsle auf Orange- und Abschlussflächen zum Ink-Button.
- **Do** halte jede Ecke scharf (Radius 0); 10px nur für die Stanzkontur.
- **Do** rahme Bogenbilder mit Schnittmarken und 22px Bleed; setze höchstens ein Passkreuz pro Bogen.
- **Do** nutze Condensed (78%) nur für kurze Bogenbeschriftungen und tabellarische Ziffern für jede Faktenzahl.
- **Do** setze orangen Text und orange Icons auf Hell in Orange-Tinte (#b84a24).
- **Do** gliedere mit Haarlinien, 2px-Oberkanten und gestrichelten Trennern statt mit Karten.

### Don't:
- **Don't** setze Eyebrows, Kicker oder nummerierte Überzeilen über Überschriften (vom Nutzer als KI-Template-Merkmal verworfen).
- **Don't** nutze Farbverläufe als Fläche oder Glasflächen mit Unschärfe.
- **Don't** setze weiße Schrift auf Logo-Orange (3.1:1) oder Text in Logo-Orange auf Weiß.
- **Don't** füge eine zweite Orangefläche neben dem Ablauf hinzu.
- **Don't** runde Buttons, Bilder oder Schrittmarken ab; keine Kreismarken außer dem Passkreuz.
- **Don't** füge eine Serifenschrift oder zweite Familie hinzu.
- **Don't** übernimm Etikettenfarben einzelner Produkte als Website-Farben.
