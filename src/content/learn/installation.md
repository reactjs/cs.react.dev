---
title: Instalace
---

<Intro>

React byl od začátku navržen pro postupnou integraci. Můžete využívat z Reactu tolik, kolik potřebujete. Ať už chcete získat představu o Reactu, přidat nějakou interaktivitu do HTML stránky, nebo začít komplexní aplikaci poháněnou Reactem, tato sekce vám pomůže začít.

</Intro>

<YouWillLearn isChapter={true}>

* [Jak začít nový projekt v Reactu](/learn/start-a-new-react-project)
* [Jak přidat React do existujícího projektu](/learn/add-react-to-an-existing-project)
* [Jak si nastavit editor](/learn/editor-setup)
* [Jak nainstalovat nástroje pro React vývojáře](/learn/react-developer-tools)

</YouWillLearn>

## Vyzkoušejte si React {/*try-react*/}

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

<<<<<<< HEAD
Většina stránek v dokumentaci React obsahuje sandboxy jako tento. Mimo React dokumentaci jsou k dispozici mnohé online sandboxy podporující React, jako například: [CodeSandbox](https://codesandbox.io/s/new), [StackBlitz](https://stackblitz.com/fork/react), nebo [CodePen.](https://codepen.io/pen?&editors=0010&layout=left&prefill_data_id=3f4569d1-1b11-4bce-bd46-89090eed5ddb)
=======
Most pages in the React documentation contain sandboxes like this. Outside of the React documentation, there are many online sandboxes that support React: for example, [CodeSandbox](https://codesandbox.io/s/new), [StackBlitz](https://stackblitz.com/fork/react), or [CodePen.](https://codepen.io/pen?template=QWYVwWN)
>>>>>>> 6fc98fffdaad3b84e6093d1eb8def8f2cedeee16

### Vyzkoušejte si React lokálně {/*try-react-locally*/}

Chcete-li vyzkoušet React lokálně na svém počítači, [zkopírujte tento HTML kód](https://gist.githubusercontent.com/gaearon/0275b1e1518599bbeafcde4722e79ed1/raw/db72dcbf3384ee1708c4a07d3be79860db04bff0/example.html) do souboru `index.html` a ten následně otevřete v prohlížeči. Můžete také kliknout kdekoli na  [této stránce](https://gist.githubusercontent.com/gaearon/0275b1e1518599bbeafcde4722e79ed1/raw/db72dcbf3384ee1708c4a07d3be79860db04bff0/example.html) pravým tlačítkem myši a vybrat možnost "uložit jako", abyste si soubor stáhli a otevřeli jej v prohlížeči.

## Začněte nový projekt v Reactu {/*start-a-new-react-project*/}

Pokud chcete vytvořit novou React aplikaci nebo webovou stránku, [začněte nový projekt v Reactu.](/learn/start-a-new-react-project)

## Přidejte React do existujícího projektu {/*add-react-to-an-existing-project*/}

Pokud chcete implementovat React do své stávající aplikace nebo webové stránky, [přidejde React do  stávajícího projektu.](/learn/add-react-to-an-existing-project)

## Další kroky {/*next-steps*/}

V části [Rychlý start](/learn) se seznámíte s nejdůležitějšími koncepty Reactu, se kterými se budete setkávat každý den.

