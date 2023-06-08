---
title: Nastavení editoru
---

<Intro>

Dobře nastavený editor vám pomůže ke kódu, který bude snazší číst i psát. Dokonce vám pomůže odhalit chyby již během psaní! Pokud je toto poprvé, kdy si nastavujete editor, nebo hledáte, jak vylepšit stávající nastavení, máme pro vás několik tipů.

</Intro>

<YouWillLearn>

* Jaké jsou nejpopulárnější editory
* Jak automaticky formátovat kód

</YouWillLearn>

## Váš editor {/*your-editor*/}

[VS Code](https://code.visualstudio.com/) je jeden z nejpoužívanějších editorů. Obsahuje rozsáhlé tržiště s rozšířeními a také integruje populární služby, jako je například GitHub. Většina vlastností, které zde budou zmíněny, mohou být do VS Code nainstalovány jako rozšíření, což ho činí vysoce konfigurovatelný!

Další populární textové editory v React komunitě:

* [WebStorm](https://www.jetbrains.com/webstorm/) je integrované vývojové prostředí navrženo přímo pro JavaScript.
* [Sublime Text](https://www.sublimetext.com/) má podporu pro JSX a TypeScript, [zvýraznění syntaxí](https://stackoverflow.com/a/70960574/458193) a našeptávač.
* [Vim](https://www.vim.org/) je vysoce konfigurovatelný textový editor, postavený tak aby tvorba a úprava textu byla velmi efektivní. Jako "vi" je dostupný ve většině UNIX systémech a také v Apple OS X.

## Doporučené vlastnosti textového editoru {/*recommended-text-editor-features*/}

Některé editory mají tyto vlastnosti již integrovány v sobě, jiné mohou potřebovat dodatečné rozšíření. Rozhodně si zkontrolujte co vám zvolený editor nabízí!

### Linter {/*linting*/}

Lintery upozorňují na problémy již během psaní kódu, což vede k jejich dřívějšímu opravení. [ESLint](https://eslint.org/) je populární, open source linter pro JavaScript.

* [Nainstalujte si ESlint s doporučenou konfigurací pro React](https://www.npmjs.com/package/eslint-config-react-app) (ujistěte se že máte nainstalovaný [Node](https://nodejs.org/en/download/current/)!)
* [Integrace ESlintu do VSCode pomocí oficiálního rozšíření](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

**Ujistěte se že máte aktivovány všechny [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks) pravidla pro váš projekt.** Jsou nezbytné a odchytí závažné chyby včas. Doporučované [`eslint-config-react-app`](https://www.npmjs.com/package/eslint-config-react-app) přednastavení je již obsahuje.

### Formátování {/*formatting*/}

Poslední věc, kterou byste chtěli je diskuse s dalšími vývojáři ohledně [tabulátory vs mezery](https://www.google.com/search?q=tabs+vs+spaces)! Naštěstí, [Prettier](https://prettier.io/) zformátuje váš kód tak aby vyhovoval přednastavení, pomocí konfigurovatelných pravidel. Spusťte Prettier, a všechny tabulátory budou převedeny na mezery s odsazením, uvozovky a další budou vyhovovat přednastavení. V ideálním případě se Prettier spustí při uložení souboru a rychle provede tyto změny za vás.

[Prettier pro VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) si můžete nainstalovat následovně:

1. Otevřete VS Code
2. Použijte nabídku rychlého otevření (stiskněte Ctrl/Cmd+P)
3. Vložte `ext install esbenp.prettier-vscode`
4. Zmáčkněte Enter

#### Formátování při uložení {/*formatting-on-save*/}

Ideální je formátovat kód při každém uložení. VS Code má pro to nastavení!

1. Ve VS Code, stiskněte `CTRL/CMD + SHIFT + P`.
2. Napište "nastavení"
3. Zmáčkněte Enter
4. Do vyhledávacího políčka zadejte "format on save"
5. Ujistěte se že "format on save" volba je zaškrtnuta!

> Pokud vaše konfigurace ESLintu obsahuje také pravidla pro formátování, může nastat konflikt s Prettierem. Doporučujeme vypnout všechny pravidla formátování v konfiguraci Eslintu pomocí [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) aby se ESlint zaměřoval *pouze* na logické chyby. Pokud chcete zajistit, že budou soubory zformátovány před sloučením pull requestu, použijte [`prettier --check`](https://prettier.io/docs/en/cli.html#--check) ve vašem systému pro kontinuální integraci.
