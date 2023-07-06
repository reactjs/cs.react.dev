---
title: JavaScript v JSX se složenými závorkami
---

<Intro>

JSX vám umožňuje psát strukturu podobnou jako je HTML přímo uvnitř JavaScriptového souboru. Díky tomu je rendrovací logika a obsah na jednom místě. Může se stát, že budete potřebovat přidat JavaScriptovou logiku nebo odkázat na nějakou proměnnou uvnitř struktury. V tom případě, můžete využít složené závorky v JSX a dát tak prostor pro JavaScript.

</Intro>

<YouWillLearn>

* Jak předat řetězec pomocí uvozovek
* How to reference a JavaScript variable inside JSX with curly braces
* Jak zavolat JavaScriptovou funkci uvnitř JSX pomocí složených závorek
* Jak použít JavaScriptový objekt uvnitř JSX pomocí složených závorek

</YouWillLearn>

## Předávání stringů pomocí uvozovek {/*passing-strings-with-quotes*/}

Když chcete předat řetězec jako argument v JSX, stačí jej dát do jednoduchých nebo dvojitých uvozovek:

<Sandpack>

```js
export default function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    />
  );
}
```

```css
.avatar { border-radius: 50%; height: 90px; }
```

</Sandpack>

Zde byly `"https://i.imgur.com/7vQD0fPs.jpg"` a `"Gregorio Y. Zara"` předány jako řetězce.

Co když chceze dynamicky měnit `src` nebo `alt`? Můžete **použít hodnotu z JavaScriptu zaměněním `"` a `"` za `{` a `}`**:

<Sandpack>

```js
export default function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
}
```

```css
.avatar { border-radius: 50%; height: 90px; }
```

</Sandpack>

Povšimnněte si toho rozdílu mezi `className="avatar"`, který specifikuje `"avatar"` CSS třídu, která dělá kulatý obrázek, a `src={avatar}` která řze hodnotu z JavaScriptové proměnné zvané `avatar`. To se děje díky tomu, že složené závorky dovolují pracovat s JavaScriptem přímo ve struktuře!

## Používání složených závorek: Okno do světa JavaScriptu {/*using-curly-braces-a-window-into-the-javascript-world*/}

JSX je speciální způsob jak psát JavaScript. To znamneá, že je možné použít JavaScript uvnitř složených závorek `{ }`. V příkladu níže nejprve dekladujeme promenou pro jméno vědce, `name` a poté vlotžíme tuto proměnou uvnitř složených záorek do `<h1>`:

<Sandpack>

```js
export default function TodoList() {
  const name = 'Gregorio Y. Zara';
  return (
    <h1>{name}'s To Do List</h1>
  );
}
```

</Sandpack>

ZKuste změnit hodnotu `name` z `'Gregorio Y. Zara'` na `'Hedy Lamarr'`. Všimli jste si jak se nadpis seznamu zmněnil?

Jakákoliv JavaScriptová syntaxe bude fungovat ve složených závorkách, to zahrnuje i volání funkcí jako `formatDate()`:

<Sandpack>

```js
const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export default function TodoList() {
  return (
    <h1>To Do List for {formatDate(today)}</h1>
  );
}
```

</Sandpack>

### Kde použít složené závorky {/*where-to-use-curly-braces*/}

Jsou dva způsoby, jak použít složené závorky v JSX:

1. **Jako text** přímo v JSX tagu: `<h1>{name}'s To Do List</h1>` funguje, ale `<{tag}>Gregorio Y. Zara's To Do List</{tag}>`  nebude fungovat.
2. **Jako atribut** ihned po `=` znaku: `src={avatar}` přečte `avatar` proměnnou, ale `src="{avatar}"` bude předáno jako řetězec `"{avatar}"`.

## Používání "dvojitých složených závorek": CSS a ostatní objekty v JSX {/*using-double-curlies-css-and-other-objects-in-jsx*/}

Krome řetězců, čísel a dalších JavaScriptových výrazů, můžete v JSX předávat i objekty. Objekty jsou také označené složenými závorkami, například `{ name: "Hedy Lamarr", inventions: 5 }`. Proto v JSX je třeba obalit objekt dalším párem složených závorek: `person={{ name: "Hedy Lamarr", inventions: 5 }}`.

Můžete se s tím setkat v případě inline CSS stylů v JSX. React nevyžaduje použití inline stylů (CSS třídy fungují pro většinu případů dobře). V případě, že potřebujete inline styl, je třeba předat objekt `style` atributu:

<Sandpack>

```js
export default function TodoList() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
```

```css
body { padding: 0; margin: 0 }
ul { padding: 20px 20px 20px 40px; margin: 0; }
```

</Sandpack>

Zkuste změnit hodnoty `backgroundColor` a `color`.

Můžete vidět JavaScriptový objekt uvnitř složených závorek v případě, že to napíšete takto:

```js {2-5}
<ul style={
  {
    backgroundColor: 'black',
    color: 'pink'
  }
}>
```

Příště, až uvidíte `{{` a `}}` v JSX budete vědět, že je jen objekt uvnitř JSX!

<Pitfall>

Inline `style` atributy se píší jako camelCase. Například, HTML `<ul style="background-color: black">` bude zapsáno jako `<ul style={{ backgroundColor: 'black' }}>`  ve vaší komponentě.

</Pitfall>

## Více zábavy s objekty v JavaScriptu a složenými závorkami {/*more-fun-with-javascript-objects-and-curly-braces*/}

Můžete přesunout několik výrazů do jednoho objektu a odkázat na něj v JSX uvnitř složených závorek:

<Sandpack>

```js
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
```

```css
body { padding: 0; margin: 0 }
body > div > div { padding: 20px; }
.avatar { border-radius: 50%; height: 90px; }
```

</Sandpack>

V tomto příkladě je `person` JavaScriptový objekt obsahující řetězec `name` a `theme` objekt:

```js
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};
```

Komponenta může použít hodnoty z objektu `person` následovně:

```js
<div style={person.theme}>
  <h1>{person.name}'s Todos</h1>
```

JSX není jen šablonovací jazyk, protože umožňuje kombinovat data a logiku s použitím JavaScriptu.

<Recap>

Nyní víte skoro všechno o JSX:

* JSX atributy uvnitř uvozovek jsou předány jako řetězce.
* Složené závorky umožňují použít JavaScriptovou logiku a proměnné uvnitř struktury.
* Fungují v JSX nebo ihned za `=` v atributech.
* `{{` a `}}` není speciální syntaxe, je to pouze objekt obalený složenými závorkami z JSX.

</Recap>

<Challenges>

#### Oprava chyby {/*fix-the-mistake*/}

Následující kód skončí touto chybovou hláškou: `Objects are not valid as a React child`:

<Sandpack>

```js
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
```

```css
body { padding: 0; margin: 0 }
body > div > div { padding: 20px; }
.avatar { border-radius: 50%; height: 90px; }
```

</Sandpack>

Dokážete najít problém?

<Hint>Zkuste se podívat, co je ve složených závorkách. Předáváme tam správný typ?</Hint>

<Solution>

Chyby nastala protože v tomto příkladu rendrujeme *samotný objekt* přímo namísto řetězce. `<h1>{person}'s Todos</h1>` se pokouší vyrendrovat celý objekt `person`! Rendrování objektů jako text vyhodí error, protože React neví jak je má zobrazit.

Pro opravu, nahraďte `<h1>{person}'s Todos</h1>` za `<h1>{person.name}'s Todos</h1>`:

<Sandpack>

```js
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
```

```css
body { padding: 0; margin: 0 }
body > div > div { padding: 20px; }
.avatar { border-radius: 50%; height: 90px; }
```

</Sandpack>

</Solution>

#### Extrakce informací do objektu {/*extract-information-into-an-object*/}

Extrakce URL obrázku do objektu `person`.

<Sandpack>

```js
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
```

```css
body { padding: 0; margin: 0 }
body > div > div { padding: 20px; }
.avatar { border-radius: 50%; height: 90px; }
```

</Sandpack>

<Solution>

Přesuňte URL obrázku do parametru `person.imageUrl` a přečtěte ji z `<img>` tagu použitím složených závorek:

<Sandpack>

```js
const person = {
  name: 'Gregorio Y. Zara',
  imageUrl: "https://i.imgur.com/7vQD0fPs.jpg",
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={person.imageUrl}
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
```

```css
body { padding: 0; margin: 0 }
body > div > div { padding: 20px; }
.avatar { border-radius: 50%; height: 90px; }
```

</Sandpack>

</Solution>

#### Write an expression inside JSX curly braces {/*write-an-expression-inside-jsx-curly-braces*/}

In the object below, the full image URL is split into four parts: base URL, `imageId`, `imageSize`, and file extension.

We want the image URL to combine these attributes together: base URL (always `'https://i.imgur.com/'`), `imageId` (`'7vQD0fP'`), `imageSize` (`'s'`), and file extension (always `'.jpg'`). However, something is wrong with how the `<img>` tag specifies its `src`.

Can you fix it?

<Sandpack>

```js

const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="{baseUrl}{person.imageId}{person.imageSize}.jpg"
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
```

```css
body { padding: 0; margin: 0 }
body > div > div { padding: 20px; }
.avatar { border-radius: 50%; }
```

</Sandpack>

To check that your fix worked, try changing the value of `imageSize` to `'b'`. The image should resize after your edit.

<Solution>

You can write it as `src={baseUrl + person.imageId + person.imageSize + '.jpg'}`.

1. `{` opens the JavaScript expression
2. `baseUrl + person.imageId + person.imageSize + '.jpg'` produces the correct URL string
3. `}` closes the JavaScript expression

<Sandpack>

```js
const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={baseUrl + person.imageId + person.imageSize + '.jpg'}
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
```

```css
body { padding: 0; margin: 0 }
body > div > div { padding: 20px; }
.avatar { border-radius: 50%; }
```

</Sandpack>

You can also move this expression into a separate function like `getImageUrl` below:

<Sandpack>

```js App.js
import { getImageUrl } from './utils.js'

const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
```

```js utils.js
export function getImageUrl(person) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    person.imageSize +
    '.jpg'
  );
}
```

```css
body { padding: 0; margin: 0 }
body > div > div { padding: 20px; }
.avatar { border-radius: 50%; }
```

</Sandpack>

Variables and functions can help you keep the markup simple!

</Solution>

</Challenges>
