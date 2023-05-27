---
title: Přidání Reactu do stávajícího projektu
---

<Intro>

Pokud máte v plánu přidat interaktivitu do svého současného projektu, není nutné celý projekt přepracovat do Reactu. Můžete jednoduše začlenit React do své stávající technologické sady a umístit interaktivní React komponenty kamkoliv je potřeba.

</Intro>

<Note>

**Pro vývoj v lokálním prostředí je nutné mít nainstalovaný [Node.js](https://nodejs.org/en/).** I když máte možnost si [vyzkoušet React](/learn/installation#try-react) online nebo na jednoduché HTML stránce, realita je taková, že většina JavaScriptových nástrojů, které budete pravděpodobně chtít použít pro vývoj, vyžaduje Node.js.

</Note>

## Implementace Reactu do adresářové cesty vaší stávající webové stránky {/*using-react-for-an-entire-subroute-of-your-existing-website*/}

Představme si, že máte existující webovou aplikaci na adrese `domena.cz`, která byla vytvořena za pomocí jiné serverové technologie (např. Rails) a chcete všechny cesty začínající na `domena.cz/obchod/` plně implementovat pomocí Reactu.

Doporučený postup, jak to nastavit:

1. **Vytvořte část aplikace** pomocí některého z [frameworků založených na Reactu](/learn/start-a-new-react-project).
2. **Nastavte `/obchod` jako *základní cestu*** v konfiguraci vašeho frameworku (zde je návod pro: [Next.js](https://nextjs.org/docs/api-reference/next.config.js/basepath) a [Gatsby](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/path-prefix/)).
3. **Nakonfigurujte svůj server nebo proxy server** tak, aby všechny požadavky na cestu `/obchod/` zpracovávala vaše aplikace v Reactu.

Takto zajistíte, že část vaší aplikace napsaná Reactu bude moci využít [osvědčené postupy a praktiky](/learn/start-a-new-react-project#can-i-use-react-without-a-framework), které jsou součástí těchto frameworků.

Mnoho frameworků založených na Reactu je full-stack, což umožňuje vaší React aplikaci využít server. Tento přístup můžete uplatnit i v případě, kdy nemůžete nebo nechcete na serveru používat JavaScript. V takové situaci místo toho naservírujte export HTML/CSS/JS ([output v `next export`](https://nextjs.org/docs/advanced-features/static-html-export) pro Next.js, default pro Gatsby) na adresářové cestě `/obchod/`.

## Implementace Reactu do konkrétní části vaší stávající webové stránky {/*using-react-for-a-part-of-your-existing-page*/}

Předpokládejme, že máte stávající stránku, která byla vytvořena s využitím jiné technologie, ať už serverové (např. Rails) nebo klientské (jako je Backbone), a chcete na ní implementovat interaktivní komponenty React. Tento postup je běžnou formou integrace Reactu. Ve skutečnosti se React takto používal řadu let v Metě!

Tento postup lze provést ve dvou krocích:

1. **Nakonfigurujte si JavaScriptové prostředí** tak, ať vám umožňí používat [syntaxi JSX](/learn/writing-markup-with-jsx), rozdělit kód do modulů pomocí syntaxe [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) / [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) a používat balíčky (např. React) z registru balíčků [npm](https://www.npmjs.com/).
2. **Vykreslete React komponenty** tam, kde je chcete na stránce zobrazit.

Přesný postup se bude lišit v závislosti na vašem současném nastavení stránky, takže se podíváme na některé detaily.

### Krok 1: Nastavení modulárního prostředí JavaScriptu {/*step-1-set-up-a-modular-javascript-environment*/}

Modulární prostředí JavaScriptu umožňuje psát React komponenty v jednotlivých souborech, na rozdíl od psaní celého kódu v jednom souboru. Modulární prostředí navíc nabízí možnost využít různé balíčky od jiných vývojářů, které jsou publikovány v [npm](https://www.npmjs.com/) registru - včetně samotného Reactu! Způsob implementace bude zcela záviset na vašem současném nastavení:

* **If your app is already split into files that use `import` statements,** try to use the setup you already have. Check whether writing `<div />` in your JS code causes a syntax error. If it causes a syntax error, you might need to [transform your JavaScript code with Babel](https://babeljs.io/setup), and enable the [Babel React preset](https://babeljs.io/docs/babel-preset-react) to use JSX.

* **Pokud vaše aplikace nemá již existující nastavení pro kompilaci JavaScriptových modulů,** nastavte jej pomocí [Vite](https://vitejs.dev/). Komunita Vite se stará o [řadu integrací s backendovými frameworky](https://github.com/vitejs/awesome-vite#integrations-with-backends), včetně Rails, Django a Laravel. Pokud váš backendový framework není v seznamu uveden, [postupujte podle tohoto návodu](https://vitejs.dev/guide/backend-integration.html) a manuálně integrujte Vite do vašeho backendu.

Pokud chcete ověřit, zda je vaše nastavení funkční, spusťte následující příkaz v adresáři projektu:

<TerminalBlock>
npm install react react-dom
</TerminalBlock>

Poté přidejte následující řádky kódu na začátek svého hlavního JavaScriptového souboru (jméno souboru může být `index.js`nebo `main.js`):

<Sandpack>

```html index.html hidden
<!DOCTYPE html>
<html>
  <head><title>My app</title></head>
  <body>
    <!-- Váš stávající obsah stránky (v tomto příkladu bude nahrazen) -->
  </body>
</html>
```

```js index.js active
import { createRoot } from 'react-dom/client';

// Nahradí stávající obsah HTML
document.body.innerHTML = '<div id="app"></div>';

// Namísto něj vykreslíme React komponent
const root = createRoot(document.getElementById('app'));
root.render(<h1>Ahoj světe</h1>);
```

</Sandpack>

Pokud byl celý obsah stránky nahrazen nápisem "Ahoj světe", vše funguje správně! Čtěte dál.

<Note>

První integrace modulárního prostředí JavaScriptu do stávajícího projektu může působit zastrašujícím dojmem, ale výsledky stojí za to! Pokud narazíte na problémy, využijte naše [komunitní zdroje ](/community) nebo se obrate na [Vite Chat](https://chat.vitejs.dev/).

</Note>

### Krok 2: Vykreslení React komponentu na libovolném místě na stránce {/*step-2-render-react-components-anywhere-on-the-page*/}

V předchozím kroku jste tento kód umístili na začátek hlavního souboru:

```js
import { createRoot } from 'react-dom/client';

// Nahradí stávající obsah HTML
document.body.innerHTML = '<div id="app"></div>';

// Namísto něj vykreslíme React komponent
const root = createRoot(document.getElementById('app'));
root.render(<h1>Ahoj světe</h1>);
```

Samozřejmě, v reálném scénáři nebudete chtít vymazat existující obsah HTML!

Tento kód odstraňte.

Spíše než vykreslovat celou stránku pomocí Reactu, budete pravděpodobně chtít vykreslit React komponenty na specifických místech v HTML. Otevřete svou HTML stránku (nebo serverové šablony, které ji generují) a přidejte například unikátní atribut [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) k libovolnému tagu:

```html
<!-- ... někde v html ... -->
<nav id="navigation"></nav>
<!-- ... další html ... -->
```

Toto vám umožní vyhledat tento HTML prvek pomocí funkce [`document.getElementById`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) předat jej do funkce [`createRoot`](/reference/react-dom/client/createRoot) abyste v něm mohli vykreslit vlastní komponentu Reactu:

<Sandpack>

```html index.html
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

```js index.js active
import { createRoot } from 'react-dom/client';

function NavigationBar() {
  // TODO: Implementovat navigační lištu
  return <h1>Ahoj z Reactu!</h1>;
}

const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(<NavigationBar />);
```

</Sandpack>

Všimněte si, že původní obsah HTML ze souboru `index.html` zůstává nezměněn, zatímco vaše vlastní Reactu komponenta `NavigationBar` se nyní zobrazuje uvnitř `<nav id="navigation">` v rámci vašeho HTML. Pro více informací o vykreslování React komponent uvnitř existující HTML stránky se podívejte na dokumentaci k [`createRoot`](/reference/react-dom/client/createRoot#rendering-a-page-partially-built-with-react).

Běžným postupem při implementaci Reactu do existujícího projektu je začít s malými interaktivními komponenty (např. tlačítky) a postupně "postupovat nahoru", dokud celou stránku netvoří komponenty React. Pokud někdy dosáhnete tohoto bodu, doporučujeme hned poté přejít na [React framework](/learn/start-a-new-react-project), abyste z něj mohli vytěžili maximum.

## Implementace React Native do existující nativní mobilní aplikace {/*using-react-native-in-an-existing-native-mobile-app*/}

[React Native](https://reactnative.dev/) lze také postupně integrovat do stávajících nativních aplikací. Pokud máte existující nativní aplikaci pro Android (Java nebo Kotlin) nebo iOS (Objective-C nebo Swift), [následujte tento návod](https://reactnative.dev/docs/integration-with-existing-apps) pro přidání obrazovky s React Native.
