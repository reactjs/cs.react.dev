---
title: Importování a exportování komponent
---

<Intro>

Krása komponent spočívá v jejich znovupoužitelnosti, můžete vytvořit komponentu, která je složená z dalších komponent. Občas dává smysl, že jakmile začnete přidávat více a více komponent, je dobré je rozdělit do více souborů. Toto vede ke snazšímu čtení kódu a větší znovupoužitelnosti jednotlivých komponent.

</Intro>

<YouWillLearn>

* Co je to kořenová komponenta
* Jak importovat a exportovat komponenty
* Kdy použít výchozí a kdy jmenný import a export
* Jak importovat a exportovat vícero komponent z jednoho souboru
* Jak rozdělit komponenty do dalších souborů

</YouWillLearn>

## Kořenová komponenta {/*the-root-component-file*/}

V kapitole [Vaše první komponenta](/learn/your-first-component), byly vytvořeny komponenty `Profile` a `Gallery`, která ji rendruje:

<Sandpack>

```js
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

```css
img { margin: 0 10px 10px 0; height: 90px; }
```

</Sandpack>

V tomto příkladě jsou komponenty v ***kořenovém souboru*** jménem `App.js`. V [Create React App](https://create-react-app.dev/), je aplikace umístěna do `src/App.js`. V závislosti na projektu může být kořenová komponenta v úplně jiném souboru. Pokud používáte framework s navigací založenou na souborovém systému, jako je třeba Next.js, bude vaše kořenová komponenta jiná pro každou stránku.

## Export a import komponent {/*exporting-and-importing-a-component*/}

Představte si, že chcete na úvodní stránce zobrazit seznam učebnic. Nebo vložit seznam profilů někam jinam. Teď dává smysl přesunout `Gallery` a `Profile` mimo kořenový soubor. Tyto komponenty tak budou více modulární a znovupoužitelné i v dalších souborech. Komponenty můžete přesouvat pomocí těchto tří kroků:

1. **Vytvořte** nový JS soubor pro komponenty.
2. **Exportujte** vaši funkcionální komponentu z tohoto souboru (použitím buď [výchozího](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/export#using_the_default_export) nebo [jmenného](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/export#using_named_exports) exportu).
3. **Importujte** ji do souboru, kde se chystáte tuto komponentu použít (použitím korespondující techniky pro import [výchozí](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/import#importing_defaults) nebo [jmenný](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/import#import_a_single_export_from_a_module) import).

Obě komponenty, `Profile` a `Gallery`, byly přesunuty mimo soubor `App.js` do nového souboru `Gallery.js`. Nyní můžete upravit `App.js` aby importoval `Gallery` z `Gallery.js`:

<Sandpack>

```js App.js
import Gallery from './Gallery.js';

export default function App() {
  return (
    <Gallery />
  );
}
```

```js Gallery.js
function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

```css
img { margin: 0 10px 10px 0; height: 90px; }
```

</Sandpack>

Všimněte si, jak je tento příklad rozdělen do dvou souborů:

1. `Gallery.js`:
     - Definuje `Profile` komponentu, která je použita pouze uvnitř tohoto souboru a není exportována.
     - Exportuje `Gallery` komponentu jako **výchozí export.**
2. `App.js`:
     - Importuje `Gallery` přes **výchozí import** z `Gallery.js`.
     - Exportuje kořenovou komponentu `App` jako **výchozí export.**


<Note>

Můžete si povšimnout, že soubory postrádají příponu `.js` například tady:

```js
import Gallery from './Gallery';
```

Obě `'./Gallery.js'` nebo `'./Gallery'` budou fungovat s Reactem, přestože první je blíže tomu, jak [nativní ES Moduly](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Modules) fungují.

</Note>

<DeepDive>

#### Výchozí vs. jmenné exporty {/*default-vs-named-exports*/}

Máme dva hlavní způsoby jak exportovat hodnoty v JavaScriptu, výchozí a jmenný export. Prozatím jsme v našich příkladech používali pouze výchozí exporty. V jednom souboru můžeme použít jeden nebo oba způsoby. **Soubor může mít pouze jeden _výchozí_ export, ale může mít několik _jmenných_ exportů.**

![Výchozí a jmenné exporty](/images/docs/illustrations/i_import-export.svg)

Druh exportu komponenty určuje jak ji musíte naimportovat. V případě, že se pokusíte importovat výchozí export jako jmenný, dostanete error! Tato tabulka vám pomůže s určením typu:

| Syntaxe           | Výraz pro export                           | Výraz pro import                          |
| -----------      | -----------                                | -----------                               |
| Výchozí  | `export default function Button() {}` | `import Button from './Button.js';`     |
| Jmenný    | `export function Button() {}`         | `import { Button } from './Button.js';` |

S _výchozím_ importem můžete za klíčové slovo `import` vložit jakékoliv jméno. Například můžete napsat `import Banana from './Button.js'` a stále dostane výchozí export. Na rozdíl od jmenných importů, kde musí jméno odpovídat na obou stranách. Proto se jim říká _jmenné_ importy!

**Výchozí export se většinou používá pokud soubor exportuje pouze jednu komponentu. Naopak jmenný export se používá tam, kde se exportuje více komponent nebo hodnot z jednoho souboru.** Nehledě jaký programátorský styl preferujete, dávejte komponentám a souborům které je obsahují smysluplné názvy. Bezejmenná komponenta, například `export default () => {}`, je nežádoucí protože je těžké ji debugovat.

</DeepDive>

## Exportování a importování vícero komponent ze stejného souboru {/*exporting-and-importing-multiple-components-from-the-same-file*/}

Co když chceme zobrazit pouze `Profile` namísto galerie? Komponentu `Profile` lze také vyexportovat. Pozor, soubor `Gallery.js` již má *výchozí* export a nemůže mít _dva_ výchozí exporty. Můžete vytvořit nový soubor s výchozím exportem, nebo můžete přidat jmenný export pro komponentu `Profile`. **Soubor může mít pouze jeden výchozí export, ale může mít vícero jmenných exportů!**

<Note>

Pro zjednodušení, se některé týmy rozhodly používat pouze jeden styl (výchozí nebo jmenný) nebo nemíchat tyto styly v jednom souboru. Zařiďte se podle sebe!

</Note>

Nejprve **exportujte** `Profile` z `Gallery.js` použitím jmenného exportu (bez klíčového slova `default`):

```js
export function Profile() {
  // ...
}
```

Poté **importujte** `Profile` z `Gallery.js` do `App.js` použitím jmenného importu (se složenými závorkami):

```js
import { Profile } from './Gallery.js';
```

Nakonec **vyrenderujte** `<Profile />` v komponentě `App`:

```js
export default function App() {
  return <Profile />;
}
```

Nyní, `Gallery.js` obsahuje dva exporty, výchozí `Gallery` a jmenný `Profile`. `App.js` importuje oba dva. Zkuste upravit `<Profile />` na `<Gallery />`  a zpět v následujícím příkladu:

<Sandpack>

```js App.js
import Gallery from './Gallery.js';
import { Profile } from './Gallery.js';

export default function App() {
  return (
    <Profile />
  );
}
```

```js Gallery.js
export function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

```css
img { margin: 0 10px 10px 0; height: 90px; }
```

</Sandpack>

Nyní používáte mix výchozích a jmenných exportů:

* `Gallery.js`:
  - Exportuje komponentu `Profile` jako **jmenný export `Profile`.**
  - Exportuje komponentu `Gallery` jako **výchozí export.**
* `App.js`:
  - Importuje `Profile` jako **jmenný import `Profile`** z `Gallery.js`.
  - Importuje `Gallery` jako **výchozí import** z `Gallery.js`.
  - Exportuje kořenovou komponentu `App` jako **výchozí export.**

<Recap>

Na této stránce jste se naučili:

* Co je to soubor s kořenovou komponentou
* Jak importovat a exportovat komponentu
* Kdy a jak použít výchozí a jmenný import a export
* Jak exportovat vícero komponent z jednoho souboru

</Recap>



<Challenges>

#### Další rozdělení komponent {/*split-the-components-further*/}

Nyní, `Gallery.js` exportuje obě komponenty `Profile` a `Gallery` což je trochu matoucí.

Přesuňte komponentu `Profile` do vlastního souboru `Profile.js` a změňte komponentu `App` tak, aby rendrovala obě komponenty `<Profile />` a `<Gallery />` v tomto pořadí.

Můžete použít buďto výchozí nebo jmenný export pro `Profile`, ale ujistěte se, že použijete korespondující syntaxi pro import v obou souborech `App.js` a `Gallery.js`! Můžete se podívat na tabulku z rozboru výše:

| Syntaxe           | Výraz pro export                           | Výraz pro import                          |
| -----------      | -----------                                | -----------                               |
| Výchozí  | `export default function Button() {}` | `import Button from './Button.js';`     |
| Jmenný    | `export function Button() {}`         | `import { Button } from './Button.js';` |

<Hint>

Nezapomeňte naimportovat vaše komponenty tam, kde je voláte. Nepoužívá komponenta `Gallery` komponentu `Profile` také?

</Hint>

<Sandpack>

```js App.js
import Gallery from './Gallery.js';
import { Profile } from './Gallery.js';

export default function App() {
  return (
    <div>
      <Profile />
    </div>
  );
}
```

```js Gallery.js active
// Přesuň mne do Profile.js!
export function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

```js Profile.js
```

```css
img { margin: 0 10px 10px 0; height: 90px; }
```

</Sandpack>

Jakmile to zvládnete s jedním typem exportu, zkuste to i s druhým.

<Solution>

Toto je řešení s využitím jmenných exportů:

<Sandpack>

```js App.js
import Gallery from './Gallery.js';
import { Profile } from './Profile.js';

export default function App() {
  return (
    <div>
      <Profile />
      <Gallery />
    </div>
  );
}
```

```js Gallery.js
import { Profile } from './Profile.js';

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

```js Profile.js
export function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}
```

```css
img { margin: 0 10px 10px 0; height: 90px; }
```

</Sandpack>

Toto je řešení s využitím výchozí exportů:

<Sandpack>

```js App.js
import Gallery from './Gallery.js';
import Profile from './Profile.js';

export default function App() {
  return (
    <div>
      <Profile />
      <Gallery />
    </div>
  );
}
```

```js Gallery.js
import Profile from './Profile.js';

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

```js Profile.js
export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}
```

```css
img { margin: 0 10px 10px 0; height: 90px; }
```

</Sandpack>

</Solution>

</Challenges>
