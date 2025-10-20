---
title: Přidání Reactu do existujícího projektu
---

<Intro>

Pokud máte v plánu přidat interaktivitu do existujícího projektu, není nutné celý projekt přepracovat do Reactu. Můžete jednoduše začlenit React mezi již použité technologie a umístit interaktivní React komponenty, kamkoliv je potřeba.

</Intro>

<Note>

**Pro vývoj v lokálním prostředí je nutné mít nainstalovaný [Node.js](https://nodejs.org/en/).** I když máte možnost si [vyzkoušet React](/learn/installation#try-react) online nebo na jednoduché HTML stránce, realita je taková, že většina JavaScriptových nástrojů, které budete chtít použít pro vývoj, vyžaduje Node.js.

</Note>

## Implementace Reactu do segmentu cesty vaší existující webové stránky {/*using-react-for-an-entire-subroute-of-your-existing-website*/}

Představme si, že máte existující webovou aplikaci na adrese `example.com`, která byla vytvořena za pomocí jiné serverové technologie (např. Rails) a chcete , aby všechny cesty začínající s `example.com/obchod/` byly plně implementované pomocí Reactu.

Zde je náš doporučený postup:

<<<<<<< HEAD
1. **Vytvořte část aplikace** pomocí některého z [frameworků založených na Reactu](/learn/start-a-new-react-project).
2. **Nastavte `/obchod` jako *základní cestu*** v konfiguraci vašeho frameworku (zde je návod pro: [Next.js](https://nextjs.org/docs/api-reference/next.config.js/basepath) a [Gatsby](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/path-prefix/)).
3. **Nakonfigurujte svůj server nebo proxy server** tak, aby všechny požadavky na cestu `/obchod/` zpracovávala vaše aplikace v Reactu.

Tímto zajistíte, že část vaší aplikace napsaná Reactu bude využívat [osvědčené postupy a praktiky](/learn/start-a-new-react-project#can-i-use-react-without-a-framework), které jsou součástí těchto frameworků.
=======
1. **Build the React part of your app** using one of the [React-based frameworks](/learn/start-a-new-react-project).
2. **Specify `/some-app` as the *base path*** in your framework's configuration (here's how: [Next.js](https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath), [Gatsby](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/path-prefix/)).
3. **Configure your server or a proxy** so that all requests under `/some-app/` are handled by your React app.

This ensures the React part of your app can [benefit from the best practices](/learn/build-a-react-app-from-scratch#consider-using-a-framework) baked into those frameworks.
>>>>>>> f8c81a0f4f8e454c850f0c854ad054b32313345c

Mnoho frameworků založených na Reactu je full-stack, což umožňuje vaší React aplikaci využít server. Tento přístup můžete uplatnit i v případě, kdy nemůžete nebo nechcete na serveru používat JavaScript. V takové situaci místo toho zpřístupníte export HTML/CSS/JS ([output v `next export`](https://nextjs.org/docs/advanced-features/static-html-export) pro Next.js, default pro Gatsby) na adresářové cestě `/obchod/`.

## Implementace Reactu do konkrétní části vaší existující webové stránky {/*using-react-for-a-part-of-your-existing-page*/}

Předpokládejme, že máte existující stránku, která byla vytvořena s využitím jiné technologie, ať už serverové (např. Rails) nebo klientské (jako je Backbone), a chcete na ní implementovat interaktivní komponenty React. Tento postup je běžnou formou integrace Reactu. Ve skutečnosti se React takto používal řadu let ve společnosti Meta!

Tento postup lze provést ve dvou krocích:

1. **Nakonfigurujte si JavaScriptové prostředí** tak, ať vám dovolí používat [syntaxi JSX](/learn/writing-markup-with-jsx), rozdělit kód do modulů pomocí syntaxe [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) / [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) a používat balíčky (např. React) z registru balíčků [npm](https://www.npmjs.com/).
2. **Vyrendrujte React komponenty** tam, kde je chcete na stránce zobrazit.

Přesný postup se bude lišit v závislosti na vašem existujícím nastavení stránky, takže se podíváme na některé detaily.

### Krok 1: Nastavení modulárního prostředí JavaScriptu {/*step-1-set-up-a-modular-javascript-environment*/}

Modulární prostředí JavaScriptu umožňuje psát React komponenty v jednotlivých souborech, na rozdíl od psaní celého kódu v jednom souboru. Modulární prostředí navíc nabízí možnost využít různé balíčky od jiných vývojářů, které jsou publikovány v [npm](https://www.npmjs.com/) registru - včetně samotného Reactu! Způsob implementace bude zcela záviset na vašem existujícím nastavení:

* **Pokud je vaše aplikace již rozdělena do souborů využívajících příkazy `import`,** můžete vyzkoušet existující nastavení. Ujistěte se, že zápis `<div />` ve vašem JavaScript kód nezpůsobuje syntaktickou chybu. Pokud to syntaktickou chybu způsobí, bude možná nutné použít [nástroj Babel k transformaci vašeho JavaScriptového kódu](https://babeljs.io/setup) a aktivovat [předvolbu Babel React](https://babeljs.io/docs/babel-preset-react) pro použití JSX.

<<<<<<< HEAD
* **Pokud vaše aplikace nemá již existující nastavení pro kompilaci JavaScriptových modulů,** nastavte jej pomocí [Vite](https://vitejs.dev/). Komunita Vite se stará o [řadu integrací s backendovými frameworky](https://github.com/vitejs/awesome-vite#integrations-with-backends), včetně Rails, Django a Laravel. Pokud váš backendový framework není v seznamu uveden, [postupujte podle tohoto návodu](https://vitejs.dev/guide/backend-integration.html) a manuálně integrujte Vite do vašeho backendu.
=======
* **If your app doesn't have an existing setup for compiling JavaScript modules,** set it up with [Vite](https://vite.dev/). The Vite community maintains [many integrations with backend frameworks](https://github.com/vitejs/awesome-vite#integrations-with-backends), including Rails, Django, and Laravel. If your backend framework is not listed, [follow this guide](https://vite.dev/guide/backend-integration.html) to manually integrate Vite builds with your backend.
>>>>>>> f8c81a0f4f8e454c850f0c854ad054b32313345c

Pokud chcete ověřit, zda je vaše nastavení funkční, spusťte následující příkaz v adresáři projektu:

<TerminalBlock>
npm install react react-dom
</TerminalBlock>

Poté přidejte následující řádky kódu na začátek svého hlavního JavaScriptového souboru (jméno souboru může být `index.js`nebo `main.js`):

<Sandpack>

```html public/index.html hidden
<!DOCTYPE html>
<html>
  <head><title>My app</title></head>
  <body>
<<<<<<< HEAD
    <!-- Váš stávající obsah stránky (v tomto příkladu bude nahrazen) -->
=======
    <!-- Your existing page content (in this example, it gets replaced) -->
    <div id="root"></div>
>>>>>>> f8c81a0f4f8e454c850f0c854ad054b32313345c
  </body>
</html>
```

```js src/index.js active
import { createRoot } from 'react-dom/client';

// Nahradí existující obsah HTML
document.body.innerHTML = '<div id="app"></div>';

// Do něj nyní vyrendrujeme React komponentu
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);
```

</Sandpack>

Pokud byl celý obsah stránky nahrazen nápisem "Hello, world", vše funguje správně! Pokračujte ve čtení.

<Note>

<<<<<<< HEAD
První integrace modulárního prostředí JavaScriptu do existujícího projektu může působit zastrašujícím dojmem, ale výsledky stojí za to! Pokud narazíte na problémy, využijte naše [komunitní zdroje ](/community) nebo se obrate na [Vite Chat](https://chat.vitejs.dev/).
=======
Integrating a modular JavaScript environment into an existing project for the first time can feel intimidating, but it's worth it! If you get stuck, try our [community resources](/community) or the [Vite Chat](https://chat.vite.dev/).
>>>>>>> f8c81a0f4f8e454c850f0c854ad054b32313345c

</Note>

### Krok 2: Vyrendrujte React komponenty na libovolném místě na stránce {/*step-2-render-react-components-anywhere-on-the-page*/}

V předchozím kroku jste tento kód umístili na začátek hlavního souboru:

```js
import { createRoot } from 'react-dom/client';

// Nahradí existující obsah HTML
document.body.innerHTML = '<div id="app"></div>';

// Do něj nyní vyrendrujeme React komponentu
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);
```

Samozřejmě, v reálném případě nebudete chtít existující obsah HTML vymazat!

Tento kód odstraňte.

Spíše než rendrovat celou stránku pomocí Reactu, budete chtít vyrendrovat React komponenty na specifických místech v HTML. Otevřete svou HTML stránku (nebo serverové šablony, které ji generují) a přidejte například unikátní atribut [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) k libovolnému tagu:

```html
<!-- ... někde v html ... -->
<nav id="navigation"></nav>
<!-- ... více html ... -->
```

Toto vám umožní vyhledat tento HTML prvek pomocí funkce [`document.getElementById`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) a předat ho do funkce [`createRoot`](/reference/react-dom/client/createRoot), abyste v něm mohli následně vyrendrovat vlastní komponentu React:

<Sandpack>

```html public/index.html
<!DOCTYPE html>
<html>
  <head><title>My app</title></head>
  <body>
    <p>Tento odstavec je součástí HTML.</p>
    <nav id="navigation"></nav>
    <p>Tento odstavec je také součástí HTML.</p>
  </body>
</html>
```

```js src/index.js active
import { createRoot } from 'react-dom/client';

function NavigationBar() {
  // TODO: Implementovat navigační lištu
  return <h1>Hello from React!</h1>;
}

const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(<NavigationBar />);
```

</Sandpack>

Všimněte si, že původní obsah HTML ze souboru `index.html` zůstává nezměněn, zatímco vaše vlastní React komponenta `NavigationBar` se nyní zobrazuje uvnitř `<nav id="navigation">` v rámci vašeho HTML. Pro hlubší pochopení rendrování React komponentů uvnitř existující HTML stránky, doporučujeme prostudovat dokumentaci k funkci [`createRoot`](/reference/react-dom/client/createRoot#rendering-a-page-partially-built-with-react).

Běžným postupem při implementaci Reactu do existujícího projektu je začít s malými interaktivními komponenty (např. tlačítky) a postupně "postupovat nahoru", dokud celou stránku netvoří komponenty React. Pokud někdy dosáhnete tohoto bodu, doporučujeme hned poté přejít na [React framework](/learn/start-a-new-react-project), abyste z něj mohli vytěžit maximum.

## Implementace React Native do existující nativní mobilní aplikace {/*using-react-native-in-an-existing-native-mobile-app*/}

[React Native](https://reactnative.dev/) lze také postupně integrovat do existujících nativních aplikací. Pokud máte existující nativní aplikaci pro Android (Java nebo Kotlin) nebo iOS (Objective-C nebo Swift), [následujte tento návod](https://reactnative.dev/docs/integration-with-existing-apps) pro přidání obrazovky s React Native.
