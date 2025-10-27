---
title: Instalace
---

<Intro>

React byl od začátku navržen pro postupnou integraci. Můžete využívat z Reactu tolik, kolik potřebujete. Ať už chcete získat představu o Reactu, přidat nějakou interaktivitu do HTML stránky, nebo začít komplexní aplikaci poháněnou Reactem, tato sekce vám pomůže začít.

</Intro>

## Vyzkoušejte React {/*try-react*/}

Není třeba nic instalovat, abyste si mohli React vyzkoušet. Zkuste třeba upravit tento sandbox přímo v prohlížeči!

<Sandpack>

```js
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}

export default function App() {
  return <Greeting name="world" />
}
```

</Sandpack>

Můžete ho také otevřít v nové záložce stisknutím tlačítka "Fork" v pravém horním rohu.

Většina stránek v dokumentaci React obsahuje sandboxy jako tento. Mimo React dokumentaci jsou k dispozici mnohé online sandboxy podporující React, jako například: [CodeSandbox](https://codesandbox.io/s/new), [StackBlitz](https://stackblitz.com/fork/react), nebo [CodePen.](https://codepen.io/pen?template=QWYVwWN)

### Vyzkoušejte si React lokálně {/*try-react-locally*/}

Chcete-li vyzkoušet React lokálně na svém počítači, [zkopírujte tento HTML kód](https://gist.githubusercontent.com/gaearon/0275b1e1518599bbeafcde4722e79ed1/raw/db72dcbf3384ee1708c4a07d3be79860db04bff0/example.html) do souboru `index.html` a ten následně otevřete v prohlížeči. Můžete také kliknout kdekoli na  [této stránce](https://gist.githubusercontent.com/gaearon/0275b1e1518599bbeafcde4722e79ed1/raw/db72dcbf3384ee1708c4a07d3be79860db04bff0/example.html) pravým tlačítkem myši a vybrat možnost "uložit jako", abyste si soubor stáhli a otevřeli jej v prohlížeči.

## Vytvoření React aplikace {/*creating-a-react-app*/}

Pokud chcete začít novou React aplikaci, můžete ji [vytvořit](/learn/creating-a-react-app) pomocí doporučeného frameworku.

## Postavení React aplikace od základu {/*build-a-react-app-from-scratch*/}

Pokud vám framework nevyhovuje, chcete si vytvořit vlastní, nebo se jen chcete naučit základy React aplikace, můžete [postavit React aplikaci od základu](/learn/build-a-react-app-from-scratch).

## Přidejte React do existujícího projektu {/*add-react-to-an-existing-project*/}

Pokud chcete implementovat React do své stávající aplikace nebo webové stránky, [přidejde React do  stávajícího projektu.](/learn/add-react-to-an-existing-project)

<Note>

#### Should I use Create React App? {/*should-i-use-create-react-app*/}

No. Create React App has been deprecated. For more information, see [Sunsetting Create React App](/blog/2025/02/14/sunsetting-create-react-app).

</Note>

## Další kroky {/*next-steps*/}

V části [Rychlý start](/learn) se seznámíte s nejdůležitějšími koncepty Reactu, se kterými se budete setkávat každý den.
