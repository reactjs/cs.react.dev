---
title: Instalace
---

<Intro>

React byl od začátku navržen pro postupnou integraci. Můžete využívat z Reactu tolik, kolik potřebujete. Ať už chcete získat představu o Reactu, přidat nějakou interaktivitu do HTML stránky, nebo začít komplexní aplikaci poháněnou Reactem, tato sekce vám pomůže začít.

</Intro>

<<<<<<< HEAD
<YouWillLearn isChapter={true}>

* [Jak začít nový projekt v Reactu](/learn/start-a-new-react-project)
* [Jak přidat React do existujícího projektu](/learn/add-react-to-an-existing-project)
* [Jak si nastavit editor](/learn/editor-setup)
* [Jak nainstalovat nástroje pro React vývojáře](/learn/react-developer-tools)

</YouWillLearn>

## Vyzkoušejte si React {/*try-react*/}
=======
## Try React {/*try-react*/}
>>>>>>> 49c2d26722fb1b5865ce0221a4cadc71b615e4cf

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

### Vyzkoušejte si React lokálně {/*try-react-locally*/}
=======
Most pages in the React documentation contain sandboxes like this. Outside of the React documentation, there are many online sandboxes that support React: for example, [CodeSandbox](https://codesandbox.io/s/new), [StackBlitz](https://stackblitz.com/fork/react), or [CodePen.](https://codepen.io/pen?template=QWYVwWN)
>>>>>>> 49c2d26722fb1b5865ce0221a4cadc71b615e4cf

Chcete-li vyzkoušet React lokálně na svém počítači, [zkopírujte tento HTML kód](https://gist.githubusercontent.com/gaearon/0275b1e1518599bbeafcde4722e79ed1/raw/db72dcbf3384ee1708c4a07d3be79860db04bff0/example.html) do souboru `index.html` a ten následně otevřete v prohlížeči. Můžete také kliknout kdekoli na  [této stránce](https://gist.githubusercontent.com/gaearon/0275b1e1518599bbeafcde4722e79ed1/raw/db72dcbf3384ee1708c4a07d3be79860db04bff0/example.html) pravým tlačítkem myši a vybrat možnost "uložit jako", abyste si soubor stáhli a otevřeli jej v prohlížeči.

<<<<<<< HEAD
## Začněte nový projekt v Reactu {/*start-a-new-react-project*/}

Pokud chcete vytvořit novou React aplikaci nebo webovou stránku, [začněte nový projekt v Reactu.](/learn/start-a-new-react-project)
=======
## Creating a React App {/*creating-a-react-app*/}

If you want to start a new React app, you can [create a React app](/learn/creating-a-react-app) using a recommended framework.

## Build a React App from Scratch {/*build-a-react-app-from-scratch*/}

If a framework is not a good fit for your project, you prefer to build your own framework, or you just want to learn the basics of a React app you can [build a React app from scratch](/learn/build-a-react-app-from-scratch).
>>>>>>> 49c2d26722fb1b5865ce0221a4cadc71b615e4cf

## Přidejte React do existujícího projektu {/*add-react-to-an-existing-project*/}

<<<<<<< HEAD
Pokud chcete implementovat React do své stávající aplikace nebo webové stránky, [přidejde React do  stávajícího projektu.](/learn/add-react-to-an-existing-project)
=======
If want to try using React in your existing app or a website, you can [add React to an existing project.](/learn/add-react-to-an-existing-project)


<Note>

#### Should I use Create React App? {/*should-i-use-create-react-app*/}

No. Create React App has been deprecated. For more information, see [Sunsetting Create React App](/blog/2025/02/14/sunsetting-create-react-app).

</Note>
>>>>>>> 49c2d26722fb1b5865ce0221a4cadc71b615e4cf

## Další kroky {/*next-steps*/}

V části [Rychlý start](/learn) se seznámíte s nejdůležitějšími koncepty Reactu, se kterými se budete setkávat každý den.

