# Maturity Scan Digitaal Toetsen

Interactieve zelfscan (statische site, geen backend nodig) waarmee een team
in circa 14 minuten de volwassenheid van het eigen digitale toetsproces in
kaart brengt op zeven thema's uit het *Handboek Digitaal Toetsen*.

## Inhoud & bronnen

- **Handboek Digitaal Toetsen** (SURF / Community Digitaal toetsen en
  ontwikkelen) — zes van de zeven thema's en de teksten per niveau zijn
  gebaseerd op de hoofdstukindeling van
  <https://sig-dt.github.io/handboek-digitaal-toetsen/>.
- **AI & toetsing** (7e thema) — een aanvullend thema over generatieve AI
  en toetsing, aansluitend bij hoofdstuk 9 (Innovaties) van het handboek en
  geïnspireerd op de toolkit *AI-Bestendig Toetsen* (HAN, maart 2025).
- **Toetsweb-Scan** (HAN, methodiek "De Toetsing Getoetst") —
  <https://toetsweb.netlify.app> diende als inspiratie voor de vraagstelling
  en het idee van positie- en ambitiebepaling per team.
- **Innovatie Maturity Scan** (TIM Foundation) —
  <https://www.innovatiematurityscan.nl> diende als voorbeeld voor de opzet:
  een korte scan met een spinnenwebdiagram als resultaat.

## Huisstijl

De visuele stijl is gebaseerd op het Npuls PowerPoint-sjabloon
(`Npuls_PPT_template_2024.potx`):

- **Kleuren**: oranje `#DD784B` (primair), blauw `#3D68EC`, teal `#00AF81`,
  geel `#F4D74B`, roze `#F4D9DC` en inkt `#231F20`, rechtstreeks overgenomen
  uit het kleurenschema van het sjabloon. De zeven thema's hebben elk een
  kleur uit deze familie (sommige verdonkerd voor voldoende contrast met
  tekst).
- **Typografie**: General Sans (via Fontshare), met Plus Jakarta Sans als
  webfont-fallback — dezelfde lettertypefamilie als het sjabloon
  (`General Sans` / `General Sans Semibold`).
- **Beeldmerk**: het Npuls-stippenmerk (uitgesneden uit het sjabloon) in de
  header, en het concentrische-bogenmotief uit de rechter onderhoek van de
  sjabloondia's, hergebruikt op het introscherm en het resultatenscherm.
- Het beeldmerk staat ook als los bestand in `assets/npuls-mark.png`.

## Structuur

```
index.html      Eén-pagina app-shell
css/style.css   Volledige styling (geen framework)
js/data.js      Thema's, stellingen per niveau A–E, aanbevelingen
js/app.js       Applicatielogica: navigatie, opslag, radarchart, delen
```

Geen build-stap, geen externe JS-afhankelijkheden (alleen Google Fonts via
CDN). Werkt direct als statische site.

## Functionaliteit

- Zeven thema's × vijf stellingen (35 in totaal), elk met een 5-niveau
  schaal (A–E) met toelichting per niveau (info-knop).
- Voortgang en antwoorden worden opgeslagen in `localStorage`, zodat een
  team later verder kan.
- Resultaatpagina met een SVG-spinnenwebdiagram, score per thema en
  concrete aanknopingspunten met verwijzing naar het bijbehorende
  handboekhoofdstuk.
- Deelbare link: antwoorden worden base64-gecodeerd in de URL-hash gezet
  (`#s=...`), zodat een resultaat zonder server gedeeld kan worden.
- Printvriendelijk (Bewaar als PDF via de browser-printfunctie).

## Hosten op GitHub Pages

1. Zet de inhoud van deze map in de root van een GitHub-repository (of in
   een `docs/`-map).
2. Ga naar **Settings → Pages** in de repository.
3. Kies als bron de branch en map waarin `index.html` staat (bijv. `main`
   / `/root` of `main` / `/docs`).
4. Na enkele minuten is de scan bereikbaar op
   `https://<gebruikersnaam>.github.io/<repository-naam>/`.

Geen verdere configuratie nodig — het is een volledig statische site.

## Aanpassen

- Thema's, stellingen en niveauteksten staan in `js/data.js`.
- Kleuren, typografie en lay-out staan in `css/style.css`
  (CSS-variabelen bovenaan het bestand).

## Bekende beperking

Het originele Excel-instrument van SURF
(`maturitydiagramSURF.xlsx`, gekoppeld vanuit hoofdstuk 2 van het handboek)
was niet bereikbaar tijdens het bouwen van deze tool en is daarom niet
direct verwerkt; de vijf SURF-thema's (beleid en visie, organisatie,
deskundigheid, voorzieningen, implementatiestrategie) zijn wel als
inspiratie gebruikt naast de hoofdstukindeling van het handboek.

