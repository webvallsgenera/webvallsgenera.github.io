# Paquet de disseny per a Joomla (Flex-VG-J5)

Aquesta carpeta conté el sistema visual del prototip, empaquetat de manera
independent de Joomla, perquè es pugui incorporar a la plantilla `Flex-VG-J5`
en quant en tinguem els fitxers.

## Contingut

- `disseny-vallsgenera.css` — colors, tipografies, menú desplegable, targetes
  i altres components, tal com es fan servir al prototip.
- `disseny-vallsgenera.js` — el comportament del menú desplegable (obrir amb
  clic) i l'aparició suau dels blocs en fer scroll.

## Com s'integrarà (pendent de veure la plantilla real)

1. Copiar `disseny-vallsgenera.css` i `.js` dins la carpeta de la plantilla
   filla (per exemple `templates/flex-vg-j5/css/` i `.../js/`).
2. Enllaçar-los des de l'`index.php` de la plantilla, després dels estils
   propis de Flex (perquè els nostres puguin sobreescriure'ls on calgui).
3. Adaptar les classes (`nav-item`, `nav-toggle`, `nav-dropdown`, etc.) a
   l'HTML real que genera el mòdul de menú de Joomla/Flex — això és el que
   falta per veure un cop tinguem accés als fitxers o al zip de la plantilla.
4. Provar-ho amb la previsualització només-per-admin abans de publicar-ho.

Aquest pas 3 és l'únic que no es pot fer a cegues: cal veure l'HTML real
que genera Flex per als menús i mòduls per connectar-hi aquestes classes.
