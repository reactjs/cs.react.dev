---
title: Vývojářské nástroje Reactu
---

<Intro>

Vývojářské nástroje Reactu slouží k prozkoumávání React [komponent](/learn/your-first-component), k úpravám [vlastností](/learn/passing-props-to-a-component) a [stavů](/learn/state-a-components-memory), a k detekování možných problémů s výkonem aplikace.

</Intro>

<YouWillLearn>

* Jak nainstalovat Vývojářské nástroje Reactu

</YouWillLearn>

## Rozšíření prohlížeče {/*browser-extension*/}

Nejjednodušší způsob, jak ladit webové stránky vytvořené pomocí Reactu, je nainstalovat si Vývojářské nástroje Reactu jako rozšíření do vašeho prohlížeče. Tyto nástroje jsou k dispozici pro následující prohlížeče:

* [Instalovat pro **Chrome**](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
* [Instalovat pro **Firefox**](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
* [Instalovat pro **Edge**](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil)

Když po instalaci navštívíte jakoukoliv webovou stránku **vytvořenou v Reactu,** uvidíte panely s názvy _Components_ a _Profiler_.

![React Developer Tools extension](/images/docs/react-devtools-extension.png)

### Safari a jiné prohlížeče {/*safari-and-other-browsers*/}
Pro další prohlížeče (jako například Safari) si nainstalujte npm balíček [`react-devtools`](https://www.npmjs.com/package/react-devtools):
```bash
# Yarn
yarn global add react-devtools

# Npm
npm install -g react-devtools/
```

Poté otevřte tyto nástroje pomocí Terminálu:
```bash
react-devtools
```

A dále je napojte do vaší stránky přídáním `<script>` tagu na začátek `<head>`:
```html {3}
<html>
  <head>
    <script src="http://localhost:8097"></script>
```

Nyní obnovte stránku v prohlížeči a uvidíte Vývojářské nástroje.
![React Developer Tools standalone](/images/docs/react-devtools-standalone.png)

## Mobilní prostředí (React Native) {/*mobile-react-native*/}
Vývojářské nástroje Reactu lze zároveň využít i k prozkoumávání aplikací vytvořených za pomocí [React Native](https://reactnative.dev/).

Nejjednodušší způsob je nainstalovat tyto nástroje globálně:
```bash
# Yarn
yarn global add react-devtools

# Npm
npm install -g react-devtools
```

Poté nástroje otevřte v Terminálu:
```bash
react-devtools
```

Nástroje se nyní sami spojí s vaší React Native aplikací, která běží v lokálním prostředí.

> Zkuste obnovit aplikaci pokud se nástroje po několika sekundách nepřipojí sami.

[Zjistit více o ladění React Native.](https://reactnative.dev/docs/debugging)
