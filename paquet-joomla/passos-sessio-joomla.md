# Passos per a la sessió a Joomla amb la Mònica

Guarda aquest full a mà (mòbil o imprès). Si en algun moment et quedes
sense poder consultar-me, pots parar en qualsevol pas sense cap risc —
res del que fem aquí es veu a la web real fins que ho decidim expressament
al final.

## 0. Abans de començar
- [ ] Ja sabem que el hosting fa còpies de seguretat automàtiques. No cal
      fer res més abans de començar.

## 1. Entrar a l'administrador
- [ ] Anar a `vostreweb.cat/administrator`
- [ ] Entrar amb l'usuari de la Mònica (o el temporal, si n'ha creat un)

## 2. Localitzar la plantilla
- [ ] Al menú, anar a **Sistema**
- [ ] Buscar **Plantilles** (pot sortir com "Plantilles del lloc")
- [ ] Dins hi haurà dues pestanyes: **Estils** i **Plantilles** — entra a
      **Plantilles** (la que llista fitxers, no configuracions)
- [ ] Clicar **Flex-VG-J5**

## 3. Duplicar-la (el pas de seguretat clau)
- [ ] A la part de dalt de la pantalla, buscar un botó **Copia** / **Duplica**
- [ ] Si hi és: clicar-lo i posar-li un nom clar, per exemple
      `flex-vg-j5-nou`
- [ ] **Si aquest botó NO hi és:** para aquí i avisa'm — ho farem d'una
      altra manera, no passa res

## 4. Explorar la còpia (només mirar, no cal entendre-ho tot)
- [ ] Entrar dins la còpia nova (`flex-vg-j5-nou`)
- [ ] Mirar quins fitxers i carpetes hi ha
- [ ] Fixar-te especialment si hi ha: un fitxer `index.php`, una carpeta
      `html`, una carpeta `css`
- [ ] Fes una captura de pantalla d'aquesta llista de fitxers i envia-me-la
      — amb això ja et puc dir els passos exactes següents

## 5. Connectar els nostres fitxers
(Els passos exactes els et diré un cop vegi la captura del pas 4, però en
general serà:)
- [ ] Pujar `disseny-vallsgenera.css` i `disseny-vallsgenera.js` a la
      carpeta corresponent de la còpia
- [ ] Afegir dues línies a `index.php` perquè es carreguin

## 6. Previsualitzar (sense que es vegi a fora)
- [ ] Anar a qualsevol pàgina de la web real
- [ ] Afegir al final de la URL: `?template=flex-vg-j5-nou`
- [ ] Mirar com queda — si es veu "trencat" en algun lloc, és normal al
      principi, no és cap error greu

## 7. Acabar la sessió (avui o quan calgui parar)
- [ ] No cal desfer res per parar. La còpia es queda esperant, ningú la
      veu fins que no l'assigneu expressament
- [ ] Si vau crear un usuari temporal i ja no el necessiteu més,
      **Usuaris → Gestiona**, seleccionar-lo i esborrar-lo

## Quan estigui tal com la voleu (últim pas, en un altre dia)
- [ ] Sistema → Plantilles → Estils → marcar la plantilla nova com a
      **Per defecte**
- [ ] Reversible en qualsevol moment: tornar a marcar l'antiga si mai cal
