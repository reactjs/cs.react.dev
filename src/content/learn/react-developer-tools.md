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

## Mobilní (React Native) {/*mobile-react-native*/}

K prozkoumávání aplikací vytvořených pomocí [React Native](https://reactnative.dev/) můžete použít [React Native DevTools](https://reactnative.dev/docs/react-native-devtools), vestavěný debugger, který je úzce integrován s React Developer Tools. Všechny funkce fungují stejně jako v rozšíření prohlížeče, včetně zvýrazňování a výběru nativních prvků.

[Více o ladění v React Native.](https://reactnative.dev/docs/debugging)

> Pro verze React Native starší než 0.76 použijte samostatnou verzi React DevTools podle návodu v sekci [Safari a jiné prohlížeče](#safari-and-other-browsers) výše.
