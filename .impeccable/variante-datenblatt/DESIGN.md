---
name: NiKu Chemie, Variante Datenblatt
description: "Alternative Startseite als technisches Datenblatt des Herstellers: weißes Blatt, Anthrazit für Schrift, Tabellenköpfe und Rubrik-Linien, Haarlinien als Tabellenraster, Logo-Orange nur für Handlungen und die Abschlussfläche."
colors:
  ink: "#2e3133"
  ink-2: "#555a5e"
  ink-deep: "#151718"
  sheet: "#ffffff"
  sheet-2: "#f3f4f4"
  grid: "#cfd3d5"
  orange: "#ec6e3e"
  orange-ink: "#b84a24"
  on-orange: "#1f2223"
  night: "#24272a"
  night-muted: "#b9bdc0"
typography:
  display:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.5rem + 3.4vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
  closing:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.5rem + 3.2vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
  rubric:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.3rem + 1.4vw, 2.625rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "0"
  title:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.1875rem, 1.1rem + 0.35vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
  value:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.55
    fontFeature: "tabular-nums"
  table-head:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    letterSpacing: "0.02em"
  field-name:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    letterSpacing: "0.01em"
  nav:
    fontFamily: "Barlow Condensed, Barlow, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    letterSpacing: "0.01em"
  button:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1
  caption:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
rounded:
  none: "0"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  rubric-block: "clamp(72px, 9vw, 120px)"
  column-gap: "clamp(40px, 6vw, 96px)"
  cell-x: "16px"
  rule-offset: "18px"
  block: "32px"
  section-inset: "44px"
  wrap: "1280px"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.on-orange}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
  button-primary-lg:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.on-orange}"
    rounded: "{rounded.none}"
    padding: "0 28px"
    height: "58px"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 28px"
    height: "58px"
  button-ink-hover:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.sheet}"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  text-link-hover:
    textColor: "{colors.orange-ink}"
  table-head:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
    typography: "{typography.table-head}"
    rounded: "{rounded.none}"
    padding: "11px 16px"
  spec-caption:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
    typography: "{typography.table-head}"
    padding: "12px 16px"
  spec-row:
    textColor: "{colors.ink}"
    typography: "{typography.value}"
    padding: "13px 16px"
  rubric-title:
    textColor: "{colors.ink}"
    typography: "{typography.rubric}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.nav}"
  nav-link-hover:
    textColor: "{colors.orange-ink}"
  close-field:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.on-orange}"
    padding: "clamp(72px, 9vw, 120px) 0"
  footer:
    backgroundColor: "{colors.night}"
    textColor: "{colors.night-muted}"
---

# Design System: NiKu Chemie, Variante Datenblatt

Geltungsbereich: ausschließlich `variante-datenblatt/index.html` mit `assets/css/datenblatt.css`. Die Hauptseite (Druckbogen) ist in der Wurzel-`DESIGN.md` beschrieben; beide Welten teilen Logo, Anthrazit und Logo-Orange, aber nicht Schrift, Raster oder Formensprache.

## Overview

**Creative North Star: "Das technische Datenblatt"**

Die Seite liest sich wie das Datenblatt eines Herstellers: Kennwerte zuerst, Rubriken am Rand, jede Aussage in einer Tabellenzeile nachprüfbar. Ein Einkäufer soll die harten Bedingungen (Mindestmenge, Gebinde, Lieferzeit, Muster) sehen, bevor er ein Bild sieht. Die Seite ist hell, dicht im Tabellenteil und großzügig zwischen den Rubriken.

Die Struktur trägt alles: Rubrik-Titel stehen in einer linken Randspalte unter einer 3 px dicken anthrazitfarbenen Linie und laufen beim Scrollen als Sticky-Marke mit. Inhalte stehen rechts davon auf Haarlinien. Tabellenköpfe sind anthrazitfarbene Balken mit weißer Schmalschrift. Fotos sind Abbildungen mit Nummer ("Abb. 1") und sachlicher Unterschrift, keine Stimmungsbilder.

Orange ist ein Signal, keine Fläche: es markiert, was man tun kann (Button, Link-Unterstrich, Fokus) und füllt genau eine Fläche, den Abschluss mit der Anfrage. Keine Verläufe, keine Schatten, keine Rundungen.

**Key Characteristics:**
- Weißes Blatt, Anthrazit als Druckfarbe für Schrift, Tabellenköpfe und Rubrik-Linien
- Zweispaltiges Rubrik-Raster: Titel links (sticky), Inhalt rechts
- Zwei Linienstärken: 3 px Anthrazit für Anfang und Ende, 1 px Haarlinie für alles dazwischen
- Barlow für Text und Werte, Barlow Condensed für Rubriken, Tabellenköpfe, Feldnamen und Navigation
- Radius 0 überall
- Abbildungen mit "Abb. n"-Unterschrift
- Orange nur für Handlungen und die Abschlussfläche

## Colors

Eine fast unbunte Anthrazit-Skala auf Weiß, dazu ein einziger warmer Akzent in zwei Stufen.

### Primary
- **Logo-Orange** (orange): Füllung des Primär-Buttons, der Abschlussfläche und der Textauswahl; Unterstrichfarbe von Textlinks und Notiz-Links. Nie Fließtext auf Weiß.
- **Gebranntes Orange** (orange-ink): die textfähige Orange-Stufe. Linkfarbe, Hover-Farbe von Navigation, Produktzeilen und FAQ, Pfeil-Icons in Textlinks, FAQ-Plus, Fokusring (2 px, Abstand 3 px), Cursor.
- **Druckschwarz auf Orange** (on-orange): Schrift auf Orange, auch die 3 px Oberkante der Kontakttabelle in der Abschlussfläche. Haarlinien dort sind dieselbe Farbe mit 35 % Deckkraft.

### Neutral
- **Anthrazit** (ink): Schrift, Rubrik-Linien, Header-Unterkante, Tabellenköpfe, Kennwerte-Caption, Schrittnummern, Hover-Fläche des Primär-Buttons, Füllung des Ink-Buttons.
- **Tiefanthrazit** (ink-deep): nur Hover des Ink-Buttons.
- **Schiefer** (ink-2): Sekundärtext, Lead, Feldnamen der Kennwerte, Bildunterschriften, Beschreibungsspalten.
- **Blattweiß** (sheet): Seitengrund, Header, Schrift auf Anthrazit, Bildplatte in getönten Rubriken.
- **Blattgrau** (sheet-2): Tönung jeder zweiten Rubrik und Bildgrund hinter freigestellten Produkten.
- **Rasterlinie** (grid): alle 1 px Haarlinien in Tabellen, Listen, Produktzeilen, FAQ und mobilem Menü.
- **Nachtgrau** (night) mit **Nachtschrift** (night-muted): Footer; Links darin weiß, Hover Logo-Orange, Trennlinie Weiß mit 14 %.

### Named Rules
**Die Signalfarben-Regel.** Orange erscheint nur dort, wo man handeln kann, plus genau eine Fläche: der Abschluss. Kein oranger Kennwert, keine orange Überschrift, kein oranger Hintergrund in Rubriken.

**Die Zwei-Stufen-Regel.** Volles Orange füllt Flächen und Unterstriche, gebranntes Orange färbt Text und Icons. Auf Weiß steht nie volles Orange als Schrift.

## Typography

**Display Font:** Barlow (mit system-ui)
**Body Font:** Barlow (mit system-ui)
**Label Font:** Barlow Condensed (mit Barlow, system-ui)

**Character:** Barlow steht in der DIN-Tradition technischer Beschriftung, nüchtern und gut lesbar in Werten. Barlow Condensed übernimmt alles, was ein Datenblatt beschriftet statt erzählt: Rubriken, Tabellenköpfe, Feldnamen, Navigation. Beide Schnitte sind lokal eingebunden (Barlow 400 bis 700, Condensed 500 bis 700).

### Hierarchy
- **Display** (700, clamp 2.5 bis 4.5rem, Zeilenhöhe 1, -0.02em): nur die H1 im Hero.
- **Closing** (700, clamp 2.5 bis 4.5rem, Zeilenhöhe 1, -0.02em, max. 13ch): Überschrift der Abschlussfläche.
- **Rubric** (Condensed 700, clamp 1.75 bis 2.625rem, Zeilenhöhe 1.05, ohne Laufweite): Rubrik-Titel in der Randspalte, also alle H2 außer dem Abschluss.
- **Title** (700, 1.5rem, Zeilenhöhe 1.15): Angebote und Produktlinien (H3).
- **Lead** (400, clamp 1.1875 bis 1.375rem): Hero-Lead (Schiefer, max. 44ch) und Rubrik-Einleitung (Anthrazit, Zeilenhöhe 1.5, max. 46ch). FAQ-Fragen nutzen dieselbe Größe in 700.
- **Body** (400, 1.125rem, Zeilenhöhe 1.55; unter 700 px 1.0625rem): Fließtext, FAQ-Antworten max. 62ch.
- **Value** (600, 1.125rem, Tabellenziffern): Kennwerte. Füllmengen in der Gebinde-Tabelle 700 in 1.375rem; Zeilenköpfe in Tabellen 700 in 1.1875rem.
- **Table-head** (Condensed 600, 1.0625rem, 0.02em): Tabellenköpfe und Kennwerte-Caption (dort 1.125rem).
- **Field-name** (Condensed 600, 1.0625rem, 0.01em, Schiefer): Feldnamen der Kennwerte; Kennzahl-Labels in Produktzeilen in 0.9375rem.
- **Caption** (400, 0.9375rem, Schiefer): Bildunterschrift; die Nummer "Abb. n" davor in Condensed 700, Anthrazit, 0.02em.

### Named Rules
**Die Beschriftungs-Regel.** Condensed beschriftet, Barlow erzählt. Was ein Feld, eine Spalte oder eine Rubrik benennt, steht in Condensed; was ein Wert oder ein Satz ist, steht in Barlow.

**Die Tabellenziffern-Regel.** Jede Tabelle und jede Kennzahl setzt `tabular-nums`, damit Werte untereinander stehen.

## Layout

Inhaltsbreite 1280 px mit seitlichem Rand clamp(16 px, 4vw, 40 px). Der Header ist sticky, 72 px hoch, mit 3 px anthrazitfarbener Unterkante; Anker springen mit 88 px Versatz.

Jede Rubrik ist ein zweispaltiges Raster (1 : 2.4) mit Spaltenabstand clamp(40 px, 6vw, 96 px) und vertikalem Innenabstand clamp(72 px, 9vw, 120 px). Der Titel links ist sticky bei 104 px; rechts beginnt der Inhalt auf einer Haarlinie mit 18 px Abstand, auf derselben Höhe wie die dicke Linie über dem Titel. Getönte und weiße Rubriken wechseln sich ab.

Der Hero ist zweispaltig (1.25 : 1): links H1, Lead und Handlungen, rechts die Kennwerte-Tabelle. Darunter folgt eine Abbildung in voller Inhaltsbreite im Format 21 : 8. Innerhalb der Rubriken gibt es Zweispalter für Angebote (1.2 : 1), Gebinde (1.1 : 1), Produktion (1 : 1) und Produktzeilen (Bild 0.9 : Text 1.1).

Rhythmus: 18 px zwischen Linie und Inhalt, 32 px zwischen Blöcken, 44 px vor Listen und Kacheln innerhalb einer Rubrik, 16 px Zelleninnenabstand horizontal.

Responsiv: unter 1000 px klappt die Navigation in ein Vollhöhen-Menü mit Haarlinien zwischen den Einträgen. Unter 960 px werden alle Raster einspaltig, der Rubrik-Titel verliert die Sticky-Position, die Inhaltsspalte ihre Haarlinie. Unter 700 px werden Angebote und Produktzeilen einspaltig, Buttons volle Breite, die Schritt-Tabelle stapelt Zeilenkopf über Beschreibung und blendet den Tabellenkopf aus.

## Elevation & Depth

Das System ist vollständig flach. Es gibt keine Schatten und keine Verläufe. Tiefe entsteht nur durch Linien und Tönung: 3 px Anthrazit öffnet und schließt einen Block, 1 px Rasterlinie teilt ihn, Blattgrau setzt eine Rubrik ab, die Abschlussfläche ist die einzige farbige Fläche.

### Named Rules
**Die Zwei-Linien-Regel.** Es gibt genau zwei Linienstärken. 3 px Anthrazit (auf Orange: Druckschwarz) markiert Anfang oder Ende: Header-Unterkante, Rubrik-Titel, Beginn der Produktliste und Faktenliste, letzte Zeile jeder Tabelle, letzte FAQ-Frage. 1 px Rasterlinie trennt alles dazwischen.

## Shapes

Radius 0 ohne Ausnahme: Buttons, Menü-Schalter, Tabellen, Bildrahmen, Schrittnummern. Bilder werden in feste Seitenverhältnisse beschnitten (21 : 8 Hero, 4 : 3 Angebote, 3 : 2 Produktzeilen, 4 : 5 Produktion) und sitzen ohne Rahmen auf dem Blatt. Freigestellte Produkte stehen auf Blattgrau, in getönten Rubriken auf einer weißen Bildplatte. Schrittnummern sind 30 px große anthrazitfarbene Quadrate mit weißer Condensed-Ziffer.

## Components

### Buttons
Kantig, ruhig und eindeutig: die einzigen farbigen Bedienelemente der Seite.
- **Shape:** rechtwinklig (0), Höhe 48 px, Innenabstand 0 22 px; groß 58 px und 0 28 px; in der Navigation 44 px.
- **Primary:** Logo-Orange mit Druckschwarz, Barlow 600; Pfeil-Icon 18 px rechts.
- **Hover / Focus:** Fläche wechselt zu Anthrazit mit weißer Schrift, der Pfeil rückt 4 px nach rechts; Druck verschiebt 1 px nach unten; Fokus als 2 px Ring in gebranntem Orange mit 3 px Abstand. Übergänge 0.2 s mit `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Ink:** Anthrazit mit Weiß, nur auf der orangen Abschlussfläche; Hover Tiefanthrazit.
- **Textlink:** Anthrazit, 600, 2 px Unterstrich in Logo-Orange mit 6 px Versatz, Pfeil in gebranntem Orange; Hover färbt den Text gebrannt orange.

### Kennwerte-Tabelle (Signatur)
- **Caption:** anthrazitfarbener Balken über der Tabelle, weiße Condensed 600.
- **Zeilen:** Feldname links (40 %, Condensed, Schiefer, Haarlinie rechts), Wert rechts (Barlow 600); Zusatz klein in 0.9375rem Schiefer.
- **Abschluss:** letzte Zeile mit 3 px Anthrazit.
- **Bewegung:** Caption und Zeilen bauen sich beim Laden nacheinander auf (0.5 s, 70 ms Versatz je Zeile, aus 40 % Deckkraft und 6 px Versatz); nur ohne reduzierte Bewegung.

### Datentabellen
- **Kopf:** anthrazitfarbener Balken, weiße Condensed 600, Innenabstand 11 px 16 px.
- **Zeilen:** Zeilenkopf Barlow 700, 18 px 16 px Innenabstand, Haarlinien zwischen den Zeilen, 3 px Anthrazit unter der letzten.
- **Varianten:** Schritt-Tabelle mit quadratischer Nummer im Zeilenkopf; Gebinde-Tabelle mit großen Füllmengen.

### Rubrik-Titel (Signatur)
- **Style:** Condensed 700 unter 3 px Anthrazit mit 18 px Abstand, in der linken Randspalte, sticky bei 104 px.
- **Mobil:** unter 960 px statisch über dem Inhalt.

### Abbildung
- **Style:** Bild ohne Rahmen, 10 px darunter die Unterschrift: "Abb. n" in Condensed 700 Anthrazit, danach die sachliche Beschreibung in Schiefer, 12 px Abstand.
- **Bewegung:** die breite Hero-Abbildung blendet in 1.2 s von 40 % auf.

### Produktzeile und Angebot
- **Style:** ganze Zeile ist ein Link; Bild in festem Format auf Blattgrau, Titel, Beschreibung in Schiefer, Kennzahlen als Definitionsliste mit Haarlinien (Label Condensed, Wert Barlow 700), Textlink.
- **Hover:** Bild skaliert in 0.6 s auf 104 %, Titel und Textlink werden gebrannt orange.

### FAQ
- **Style:** native Aufklapper auf Haarlinien, die letzte mit 3 px Anthrazit; Frage in 700 Lead-Größe, Plus-Icon 24 px in gebranntem Orange, das sich geöffnet um 45° dreht.

### Navigation
- **Style:** Condensed 600 1.125rem in Anthrazit, 30 px Abstand, Hover gebrannt orange, rechts der Primär-Button.
- **Mobil:** quadratischer Schalter 46 px mit 2 px Anthrazit-Rahmen; das Menü öffnet unter dem Header in Vollhöhe mit Einträgen in 1.25rem auf Haarlinien und einem 54 px hohen Button.

### Abschlussfläche
- **Style:** einzige Vollfläche in Logo-Orange, Druckschwarz als Schrift, zweispaltig; Ink-Button und eine Kontakttabelle mit 3 px Oberkante in Druckschwarz und Haarlinien in Druckschwarz 35 %.

## Do's and Don'ts

### Do:
- **Do** jede neue Sektion als Rubrik bauen: Titel in der Randspalte unter 3 px Anthrazit, Inhalt rechts auf einer Haarlinie.
- **Do** harte Angaben (Mengen, Gebinde, Zeiten) als Tabelle oder Definitionsliste mit anthrazitfarbenem Kopf und Tabellenziffern setzen, nicht als Fließtext.
- **Do** jede Fotografie als Abbildung mit "Abb. n" und sachlicher Unterschrift zeigen; Symbolbilder als solche kennzeichnen.
- **Do** Blöcke mit 3 px Anthrazit beginnen oder beenden und innen nur 1 px Rasterlinie verwenden.
- **Do** Orange für Text und Icons nur in der gebrannten Stufe einsetzen.

### Don't:
- **Don't** Orange außerhalb von Handlungen und der Abschlussfläche verwenden, weder für Kennwerte noch für Überschriften oder Rubrik-Hintergründe.
- **Don't** Ecken runden, Schatten oder Verläufe einsetzen.
- **Don't** Inhalte als Kachelwand aus gleichförmigen Karten anordnen; Reihen und Tabellen tragen die Seite.
- **Don't** Überzeilen oder Eyebrows über Überschriften setzen; die Rubrik-Spalte und Abbildungsnummern übernehmen die Orientierung.
- **Don't** Werte des Druckbogens (Archivo, dessen Farbstufen und Abstände) in diese Variante übernehmen oder umgekehrt.
