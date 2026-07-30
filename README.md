# Handoff: Animació del logo lligada al scroll

## Overview
Animació d'entrada del logo per a una web: quan la secció del logo entra a la pantalla mentre l'usuari fa scroll, l'anell verd gira fins a col·locar-se al seu lloc i el ninotet central apareix, escalant-se. El moviment està lligat directament a la posició de scroll (no és un temporitzador): més has baixat, més avançada està l'animació. Un cop completada, es queda fixa — no torna enrere si l'usuari torna a pujar.

## About the Design Files
Els fitxers d'aquest paquet (`reference.html`) són una **referència de disseny feta en HTML/CSS/JS pla** — mostren l'aspecte i comportament exactes, no codi per copiar tal qual. La tasca és **recrear aquest comportament dins l'entorn real de la web** (el framework, sistema de build i patrons que ja s'hi facin servir). Si la web és HTML/CSS/JS pla, `reference.html` es pot adaptar gairebé directament.

## Fidelity
**Alta fidelitat (hifi)**: valors de rotació, escala, opacitat i els paràmetres del mask CSS són finals i s'han de respectar.

## Comportament de l'animació
- **Disparador**: posició de scroll de la secció que conté el logo respecte al viewport (no un IntersectionObserver d'un sol tret — és contínuament proporcional al scroll dins d'una finestra definida).
- **Finestra de progrés**: comença quan la vora superior de la secció entra per baix del viewport; es completa (`progress = 1`) quan s'ha baixat un 55% de l'alçada de la secció (`rect.height * 0.55` a `reference.html`). Ajustable segons quant "recorregut" de scroll es vulgui.
- **Monotonicitat**: es guarda el `progress` màxim assolit; si l'usuari torna a pujar, l'animació NO reverteix — es queda mostrada. Això compleix el requisit "un sol cop, i es queda quiet".
- **Anell** (`ring-layer`): `opacity 0→1`, `rotate(-150deg → 0deg)`, `scale(0.8 → 1)`, tot interpolat linealment amb `progress`.
- **Ninotet** (`figure-layer`): `opacity 0→1`, `scale(0.8 → 1)`, també interpolat amb `progress` (sense rotació — es queda sempre dret).
- No hi ha `transition`/`animation` CSS: els valors s'escriuen directament cada frame de scroll (via `requestAnimationFrame` implícit al listener), perquè el moviment segueixi el dit/ratolí sense retard.

## Com se separen l'anell i el ninotet (una sola imatge PNG)
El logo és un únic PNG (`logo.png`, 584×666px, fons transparent) amb l'anell i el ninotet ja composats. Per poder-los animar per separat sense re-dibuixar-los, es fa servir la MATEIXA imatge dues vegades, superposada, i cada còpia es retalla amb un `mask-image` circular:

```css
/* Capa de l'anell: amaga el centre (deixa només la banda exterior) */
mask-image: radial-gradient(circle, transparent 0%, transparent 40%, black 46%, black 100%);

/* Capa del ninotet: amaga la banda exterior (deixa només el cercle central) */
mask-image: radial-gradient(circle, black 0%, black 42%, transparent 48%, transparent 100%);
```

Els percentatges (40/46 i 42/48%) estan ajustats a ull sobre aquest logo concret. Si es canvia el fitxer del logo o la seva proporció d'anell/figura, cal reajustar-los mirant el resultat en pantalla (el marge 40→46% i 42→48% és una vora suau per amagar el tall).

## Design Tokens
- Mida del logo mostrat: 260×296px (relació d'aspecte 584:666 de l'original — mantenir-la sempre).
- Rotació inicial de l'anell: `-150deg`.
- Escala inicial (ambdues capes): `0.8`.
- Opacitat inicial (ambdues capes): `0`.
- Finestra de progrés: `0.55 × alçada de la secció` (ajustable).

## Assets
- `logo.png` — logo original pujat per l'usuari (584×666px, PNG amb transparència). No modificat.

## Files
- `reference.html` — implementació completa i funcional en HTML/CSS/JS pla, llesta per obrir directament al navegador i fer scroll per veure-la funcionar. Usar-la com a referència de comportament pixel/frame a frame.
- `logo.png` — l'asset del logo.

## Notes per a Claude Code
- Si la web ja és React/Vue/etc., recrear la lògica de `update()` com un listener de scroll (o `IntersectionObserver` + `scrollY` si es prefereix evitar listeners globals), aplicant els estils via ref/state en lloc de `document.getElementById`.
- Si cal que funcioni bé en mòbil, considerar limitar el listener amb `requestAnimationFrame`-throttle per rendiment.
- Si la secció ha de ser més curta o llarga, només cal canviar `height: 220vh` de `.logo-section` i el multiplicador `0.55`.
