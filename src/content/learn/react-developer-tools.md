---
title: React Developer Tools
---

<Intro>

React Developer Tools (vývojářské nástroje pro React) slouží k prozkoumávání React [komponent](/learn/your-first-component), k úpravám [vlastností](/learn/passing-props-to-a-component) a [stavů](/learn/state-a-components-memory), a k detekování možných problémů s výkonem aplikace.

</Intro>

<YouWillLearn>

* Jak si nainstalovat React Developer Tools

</YouWillLearn>

## Rozšíření prohlížeče {/*browser-extension*/}

Nejjednodušší způsob, jak ladit webové stránky vytvořené pomocí Reactu, je nainstalovat si React Developer Tools jako rozšíření do prohlížeče. Tyto nástroje jsou k dispozici pro následující prohlížeče:

* [Instalovat pro **Chrome**](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
* [Instalovat pro **Firefox**](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
* [Instalovat pro **Edge**](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil)

Nyní, když po instalaci navštívíte jakoukoliv webovou stránku **vytvořenou v Reactu,** uvidíte panely s názvy _Components_ a _Profiler_.

![React Developer Tools extension](/images/docs/react-devtools-extension.png)

### Safari a jiné prohlížeče {/*safari-and-other-browsers*/}
Pro další prohlížeče (jako například Safari) si nainstalujte npm balíček [`react-devtools`](https://www.npmjs.com/package/react-devtools):
```bash
# Yarn
yarn global add react-devtools

# Npm
npm install -g react-devtools
```

Poté otevřte tyto nástroje pomocí terminálu:
```bash
react-devtools
```

A dále je napojte do vaší stránky přídáním `<script>` tagu na začátek `<head>`:
```html {3}
<html>
  <head>
    <script src="http://localhost:8097"></script>
```

Nyní obnovte stránku v prohlížeči a nástroje se vám zobrazí.
![React Developer Tools standalone](/images/docs/react-devtools-standalone.png)

<<<<<<< HEAD
## Mobilní prostředí (React Native) {/*mobile-react-native*/}
React Developer Tools lze zároveň využít i k prozkoumávání aplikací vytvořených za pomocí [React Native](https://reactnative.dev/).

Nejjednodušší způsob je nainstalovat tyto nástroje globálně:
```bash
# Yarn
yarn global add react-devtools
=======
## Mobile (React Native) {/*mobile-react-native*/}

To inspect apps built with [React Native](https://reactnative.dev/), you can use [React Native DevTools](https://reactnative.dev/docs/react-native-devtools), the built-in debugger that deeply integrates React Developer Tools. All features work identically to the browser extension, including native element highlighting and selection.
>>>>>>> d34c6a2c6fa49fc6f64b07aa4fa979d86d41c4e8

[Learn more about debugging in React Native.](https://reactnative.dev/docs/debugging)

<<<<<<< HEAD
Poté nástroje otevřte v terminálu:
```bash
react-devtools
```

Nástroje se nyní samy spojí s vaší React Native aplikací, která běží v lokálním prostředí.

> Zkuste obnovit aplikaci pokud se nástroje po několika sekundách nepřipojí samy.

[Zjistit více o ladění React Native.](https://reactnative.dev/docs/debugging)
=======
> For versions of React Native earlier than 0.76, please use the standalone build of React DevTools by following the [Safari and other browsers](#safari-and-other-browsers) guide above.
>>>>>>> d34c6a2c6fa49fc6f64b07aa4fa979d86d41c4e8
