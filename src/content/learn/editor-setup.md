---
title: Nastavení editoru
---

<Intro>

Správně nastavený editor může vést ke snazšímu porozumění kódu a k jeho rychlejšímu psaní. Dokonce vám může pomoci odhalit chyby, během psaní! Pokud je toto poprvé kdy si natavujete editor nebo hledáte, jak vylepši stávající nastavení, máme pro vás několik tipů.

</Intro>

<YouWillLearn>

* Jaké jsou nejpopulárnější editory
* Jak automaticky formátovat kód

</YouWillLearn>

## Váš editor {/*your-editor*/}

[VS Code](https://code.visualstudio.com/) je jeden z nejpopulárnějších editorů. Má velké tržiště s rozšířeními a integruje populární služby jako je GitHub. Většina vlastností, které budou zmíně, mohou být do VS Code nainstalována jako rozšíření, díky čemuž je vysoce konfigurovatelný!

Další populární textové editory používané komunitou Reactu:

* [WebStorm](https://www.jetbrains.com/webstorm/) je integrované vývojové prostředí navrženo přímo pro JavaScript.
* [Sublime Text](https://www.sublimetext.com/) má podporu pro JSX a TypeScript, [zvíraznení syntaxí](https://stackoverflow.com/a/70960574/458193) a našeptávač.
* [Vim](https://www.vim.org/) je vysoce konfigurovatelný textový editor, postavený tak aby tvorba a úprava textu byla velmi efektivní. Jako "vi" je dostupný ve většine UNIX systémech a také v Apple OS X.

## Doporučené vlastnosti textového editoru {/*recommended-text-editor-features*/}

Některé editory mají tyto vlastnosi již integrovány v sobě, ale jiné mohou potřeobvat dodatečné rozšíření. Rozhodně si zkontrolujte co vám zvolený editor nabízí!

### Linting {/*linting*/}

Lintery kódu heldají problémy již během psaní kódu. Díky tomu je možné odhalit a opravit chyby mnohem dříve. [ESLint](https://eslint.org/) je populární, open source linter pro JavaScript.

* [Naistalujte si ESlint s doporučenou konfigurací pro React](https://www.npmjs.com/package/eslint-config-react-app) (ujistěte se že máte naistalovaný [Node](https://nodejs.org/en/download/current/)!)
* [Integrace ESlintu do VSCode pomocí oficiálního rozšíření](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

**Ujistěte se že máte aktivovány všechny [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks) pravidla pro váš projekt.** Jsou nezbytné a odchytí závažné cyhby včas. Doporučené [`eslint-config-react-app`](https://www.npmjs.com/package/eslint-config-react-app) přednastavení je již obsahuje.

### Formátování {/*formatting*/}

Poslední věc kterou byste chtěli je diskuze s dalšími přispěvavateli ohledně [tabulátory vs mezery](https://www.google.com/search?q=tabs+vs+spaces)! Naštěstí, [Prettier](https://prettier.io/) přeformátuje váš kód taky aby vyhovoval přednastavení, popomcí konfigurovatelných pravidel. Spusťe Prettier, a všechny tabulátory budou převedeny na mezery s odsazením, uvozovky a další budou vyhovovat konfiguracia. V ideálním případě, Prettier se spustí při uložení souboru, rychle tak udělá tyto změny za vás.

Můžete si naistalovat [Prettier pro VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) následovně:

1. Otevřete VS Code
2. Použijte nabídku rychlého otevření (stiskněte Ctrl/Cmd+P)
3. Vložte `ext install esbenp.prettier-vscode`
4. Zmáčkněte Enter

#### Formátování při uložení {/*formatting-on-save*/}

Ideální je formátovak kód při každém uložení. VS Code má pro to nastavení!

1. Ve VS Code, stiskněte `CTRL/CMD + SHIFT + P`.
2. Napište "nastavení"
3. Zmáčkněte Enter
4. Do vyhledávacího políčka zadejte "format on save"
5. Ujistěte se že "format on save" volba je zaškrtnuta!

> Pokud vaše konfigurace ESLintu obsahuje také pravidla pro formátování, může nastat konfikt se Prettierem. Doporučujeme vypnout všechny pravidla formátování v konfiguraci Eslintu pomocí [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) takže ESlint bude odchytávat *pouze* logické chyby. Pokud chcete vynutit aby byli soubory zformátovány předtím než bude pull request mergnut, použijte [`prettier --check`](https://prettier.io/docs/en/cli.html#--check) ve vašem systému pro kontinuální integraci.
