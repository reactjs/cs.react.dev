---
title: Importování a exportování komponent
---

<Intro>

Krása komponent tkví v jejich znovupoužitelnosti: můžete vytvořit komponentu, která bude složena z dalších komponent. Občas dává smysl, že jakmile začnete přidávat více a více kompoentnt, je dobré je rozdělit do dalších souborů. Toto vede ke snažšímu čtení souborů a větší znovupoužitelnosti samostatných komponent.

</Intro>

<YouWillLearn>

* Co je kořenová komponenta
* Jak importovat a exportovat komponenty
* Kdy použít výchozí a kdy jmený import a export
* Jak importovat a exportovat vícero komponent z jednoho souboru
* Jak rozdělit komponenty do dalších souborů

</YouWillLearn>

## Kořenová komponenta {/*the-root-component-file*/}

V kapitole [Vaše první komponenta](/learn/your-first-component), byla vytvořena komponenta `Profile` a komponenta `Gallery` ji rendruje:

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

V tomto příkladě jsou komponenty v ***kořenovém souboru*** jménem `App.js`. V [Create React App](https://create-react-app.dev/), je aplikace umístěna do `src/App.js`.V závislosti na projektu může být kořenová kompoenenta v úplně jiném souboru. Pokud používáte framework s navigací založenou na souborovém systému jako je třeba Next.js, bude vaše kořenová komponenta jiná pro každou stránku.

## Export a import komponent {/*exporting-and-importing-a-component*/}

Představte si, že chcete na úvodní stránce zobrazit seznam učebnic? Nebo vložit seznam profilů někam jinam? Dává smysl přesunout `Gallery` a `Profile` mimo kořenový soubor. Tyto kompoenty tak budou více modulární a znovupoužitelné i v dalších souborech. Komponenty můžete přesouvat pomocí těchto tří kroků:

1. **Vytvořte** nový JS soubor pro komponenty.
2. **Exportujte** vaši funkcionální komponentu z tohoto souboru (použitím buď [defaultního](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/export#using_the_default_export) nabo [jmeného](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/export#using_named_exports) exportu).
3. **Importujte** ji do souboru, kde se chystáte tuto komponentu použít (použitím korespondující techniky pro import [defaultní](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/import#importing_defaults) nebo [jmenný](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/import#import_a_single_export_from_a_module) import).

Zde obě komponenty `Profile` a `Gallery` byly přesunuty mimo soubor `App.js` do nového souboru `Gallery.js`. Nyný můžete upravit `App.js` aby importoval `Gallery` z `Gallery.js`:

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

Všimněte si jak je tento příklad rozdělen do dvou souborů:

1. `Gallery.js`:
     - Definuje `Profile` komponentu, která je použita pouze uvnitř tohoto souboru a není exportována.
     - Exportuje `Gallery` komponentu jako **výchozí export.**
2. `App.js`:
     - Importuje `Gallery` přes **defaultní import** z `Gallery.js`.
     - Exportuje kořenovou komponentu `App` jako **defaultní export.**


<Note>

Můžete si povšimnout, že soubory postrádají koncovku `.js` například tady:

```js
import Gallery from './Gallery';
```

Obě `'./Gallery.js'` nebo `'./Gallery'` boudou fungovat s Reactem, ikdyž první je blíže tomu jak [nativní ES Moduly](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Modules) fungují.

</Note>

<DeepDive>

#### Defaultní vs jmenné exporty {/*default-vs-named-exports*/}

Máme dva hlavní způsoby, jak exportovat hodnoty v JavaScriptu, defaultní a jmenný export. Pro zatím jsme v našich příkladech používali pouze defaultní exporty. Můžete použít jeden nebo oba způsoby ve stejném souboru. **Soubor může mít pouze jeden _defaultní_ export, ale může mít několik _jmenných_ exportů.**

![Defaultní a jmenné exporty](/images/docs/illustrations/i_import-export.svg)

Druh exportu komponenty určuje jak ji musíte naimportovat. V případě, že se pokusíte importovat defaultní export jako jmenný, dostanete error! Tato tabulka vám pomůže s určením typu:

| Syntaxe           | Výraz pro export                           | Výraz pro import                          |
| -----------      | -----------                                | -----------                               |
| Defalutní  | `export default function Button() {}` | `import Button from './Button.js';`     |
| Jmenný    | `export function Button() {}`         | `import { Button } from './Button.js';` |

S _defaultním_ importem můžete za `import` vložit jakékoliv jméno. Na příklad můžete napsat `import Banana from './Button.js'` a stále dostane defaulutní export. Na rozdíl, v případě jmenných importů, musí jméno odpovídat na obou stranách. Proto se jim říká _jmenné_ importy!

**Defaultní export se většinou používá pokud soubor exportuje pouze jednu komponentu. Naopak jmenný export se většinou používá tam kde se exportuje více komponent nebo hodnot z jednoho souboru.** Nehledě jaký programaátorský styl preferujete, dávejte komponentám a souborům které je obsahují smysluplné názvy. Komponenty bez jmen, například `export default () => {}`, jsou nežádoucí protože je těžší je deubgovat.

</DeepDive>

## Exportování a importování vícero komponent ze stejného souboru {/*exporting-and-importing-multiple-components-from-the-same-file*/}

Co když chceme zobrazit pouze `Profile` namísto galerie? Komponentu `Profile` můžete vyexportovat také. Ale soubor `Gallery.js` již má *defaultní* export a nemůže mít _two_ defaultní exporty. Můžete vytvořit nový soubor s defaultním exportem, nebo můžete přidat jmenný export pro komponentu `Profile`. **Soubor může mít pouze jeden defaultní export, ale může mít vícero jmenných exportů!**

<Note>

To reduce the potential confusion between default and named exports, some teams choose to only stick to one style (default or named), or avoid mixing them in a single file. Do what works best for you!

</Note>

First, **export** `Profile` from `Gallery.js` using a named export (no `default` keyword):

```js
export function Profile() {
  // ...
}
```

Then, **import** `Profile` from `Gallery.js` to `App.js` using a named import (with the curly braces):

```js
import { Profile } from './Gallery.js';
```

Finally, **render** `<Profile />` from the `App` component:

```js
export default function App() {
  return <Profile />;
}
```

Now `Gallery.js` contains two exports: a default `Gallery` export, and a named `Profile` export. `App.js` imports both of them. Try editing `<Profile />` to `<Gallery />` and back in this example:

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

Now you're using a mix of default and named exports:

* `Gallery.js`:
  - Exports the `Profile` component as a **named export called `Profile`.**
  - Exports the `Gallery` component as a **default export.**
* `App.js`:
  - Imports `Profile` as a **named import called `Profile`** from `Gallery.js`.
  - Imports `Gallery` as a **default import** from `Gallery.js`.
  - Exports the root `App` component as a **default export.**

<Recap>

On this page you learned:

* What a root component file is
* How to import and export a component
* When and how to use default and named imports and exports
* How to export multiple components from the same file

</Recap>



<Challenges>

#### Další rozdělení kopmponent {/*split-the-components-further*/}

Aktuálně, `Gallery.js` exportuje obě komponenty `Profile` a `Gallery`, což je trochu matoucí.

Přesuňte komponentu `Profile` vlastního souboru `Profile.js` a změňte komponentu `App`, aby rendrovala obě komponenty `<Profile />` a `<Gallery />` v tomto pořadí.

Můžete použít buďto defaultní nebo jmenný export pro `Profile`, ale ujistěte se, že použijete korespondující syntaxy pro import v obou soborech `App.js` a `Gallery.js`! Můžete se podívat na tabulku z rozboru výše:

| Syntaxe           | Výraz pro export                           | Výraz pro import                          |
| -----------      | -----------                                | -----------                               |
| Defalutní  | `export default function Button() {}` | `import Button from './Button.js';`     |
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

Toto je řešení s využitím defaultních exportů:

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
