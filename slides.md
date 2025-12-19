---
theme: seriph
background: https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1920&h=1080&fit=crop
title: Introduction to React
class: text-center
transition: slide-left
mdc: true
favicon: https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg
controls: true
download: true
addons:
  - slidev-addon-react
# SEO Configuration
info: |
  ## Introduction to React - Complete Tutorial

  A comprehensive React.js tutorial covering everything from basics to building real applications. Learn Virtual DOM, JSX, Components, Hooks (useState, useEffect), Props, and build practical projects like a Counter Dashboard and Todo List.

  Perfect for beginners and intermediate developers looking to master modern React development with functional components and hooks.

keywords: React, React.js, React Tutorial, Learn React, useState, useEffect, React Hooks, JSX, Virtual DOM, React Components, JavaScript, Web Development, Frontend Development, React for Beginners
author: Aditi Fullstack Course
description: Master React.js with this comprehensive tutorial. Learn Virtual DOM, JSX, Components, Hooks, Props, and build real projects. Hands-on exercises included.

# Open Graph / Social Media
seoMeta:
  ogType: website
  ogTitle: Introduction to React - Complete Tutorial for Beginners
  ogDescription: Master React.js from basics to building real applications. Learn Virtual DOM, JSX, Components, Hooks (useState, useEffect), and build practical projects like Todo List.
  # ogImage: https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=630&fit=crop
  # ogUrl: https://your-site-url.netlify.app
  # twitterCard: summary_large_image
  # twitterTitle: Introduction to React - Complete Tutorial
  # twitterDescription: Master React.js with hands-on examples. Learn Hooks, Components, Virtual DOM, and build real projects. Perfect for beginners!
  # twitterImage: https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=630&fit=crop
  # twitterSite: '@yourhandle'
  # twitterCreator: '@yourhandle'

# HTML attributes
htmlAttrs:
  lang: en
  dir: ltr
---

# Introduction to React

---

# What are we doing today 🚀

- A small Counter Dashboard with vanilla JS and React
- Setup development environment for React
- Understand how react work
- Deep dive in virtual dom and JSX
- Know the different between class vs Functional components
- Learn React Props
- Use React hooks like useState, useEffect
- Simple demo: useState and useEffect
- Apply those knowledge with todo list

---
layout: two-cols
---

# What are we building

### A Counter Dashboard with:

- Three separate counters you can increase or decrease
- Each counter starts at 0
- A total that updates automatically
- Clean, interactive interface
- Try clicking the + and − buttons!

::right::
<React is="Counter" />

---
layout: two-cols
---

# Vanilla JavaScript Exercise

## Your Turn! 👨‍💻

Open this CodeSandbox and complete the exercise:

### 🔗 [Dashboard Counter Vanilla](https://codesandbox.io/p/sandbox/blissful-paper-ygqnyt)

<br/>
<br/>

::right::

<div style="padding-left: 2rem;">

<v-click>

**In `script.js`, you need to complete:**

```js {all|1-4|6-9|11-16}
function increment() {
  // TODO: Increase count by 1
  // TODO: Update the #counter element with new count
}

function decrement() {
  // TODO: Decrease count by 1
  // TODO: Update the #counter element with new count
}

// TODO: Implement this function
// Hint: Query all counter values, sum them up, and
// update the total display
function updateTotal() {
  // Your code here
}
```

</v-click>

</div>

---

## Problems with Vanilla JS

<v-clicks>

- **Duplicate code**: Same DOM update logic repeated
- **Manual DOM manipulation**: Tedious and error-prone
- **Hard to scale**: Imagine 100 counters!
- **State management**: Global variables everywhere
- **No reusability**: Can't easily reuse this code
- **Maintenance nightmare**: Change UI? Update everywhere

</v-clicks>

---
layout: two-cols
---

# Now Let's Do This in React!

Open this CodeSandbox and do it again in React 👇

### 🔗 [Dashboard Counter React](https://codesandbox.io/p/sandbox/counter-dashboard-react-nx54gm)

**Ready to experience the React way?** 🚀

::right::

<div class="flex items-center justify-center h-full">

![React Logo](https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif)

</div>

---

# Let's quickly see how the codes work

```jsx {all|6-10|11-15|11-15}
function App() {
  return (
    <div className="container">
      <h1>Counter Dashboard</h1>

      <div className="total-section">
        <div className="total-label">Total Count</div>
        <div className="total-value">0</div>
      </div>

      <div className="counters-container">
        <Counter label="Counter 1" />
        <Counter label="Counter 2" />
        <Counter label="Counter 3" />
      </div>
    </div>
  );
}
```

<v-click at="3">

**👆 Focus here! Notice how we're using the `<Counter />` component three times**

</v-click>

---
layout: two-cols
---

# Your tasks 🎯

```jsx
// Simple Counter Component
function Counter({ label }) {
  // TODO: Add useState here to manage count
  // Hint: const [count, setCount] = useState(0);

  return (
    <div className="counter-card">
      <div className="counter-info">
        <span className="counter-label">{label}</span>
        <span className="counter-value">0</span>
      </div>
      <div className="counter-controls">
        <button className="btn-decrease">−</button>
        <button className="btn-increase">+</button>
      </div>
    </div>
  );
}
```

::right::

<div style="padding-left: 2rem;">

1. **Add state management**
   - Use `useState` to track the count
   - Initialize count to 0

2. **Implement button handlers**
   - Create functions for increase/decrease
   - Update the state when buttons are clicked

3. **Display the count**
   - Don't worry about this part yet! We'll come back later

</div>

---

# Step 1: Install Node.js

##

<v-clicks>

**Windows:**

- Download from https://nodejs.org/
- Run installer, verify with `node -v`

**Mac:**

- Download from https://nodejs.org/ or use `brew install node`
- Verify with `node -v`

**Linux:**

```bash
sudo apt install nodejs npm
```

</v-clicks>

---

# Step 2: VS Code & Extensions

##

<v-clicks>

**Install VS Code:**

- Download from https://code.visualstudio.com/

**Required Extensions:**

1. **ES7+ React/Redux/React-Native snippets**
   - Code shortcuts (`rafce`, `useState`)

2. **ESLint**
   - Code quality checker

3. **Prettier - Code formatter**
   - Auto-format your code

</v-clicks>

---

# What is React?

<v-clicks>

#### React.js is a JavaScript library created and maintained by Meta(Facebook), used for building user interfaces, particularly single-page applications where you need a fast, interactive user experience.

_Note: React is purely client but the latest version of React allows it to run on server (Server Component)_

</v-clicks>

<v-clicks>

### Important Distinction

1. React is the brain - it handles your component logic, state, and hooks.
2. React DOM renders your React components to web browsers as HTML.
3. React Native renders your React components to mobile apps (iOS/Android) using native components instead of HTML.

</v-clicks>

---

# React uses Component-based architecture

- Break UI into independent, <span v-mark.underline.orange="1">**reusable pieces**</span> with <span v-mark.underline.blue="2">**its own logic**</span>
- Like LEGO blocks - build once, reuse everywhere

<div class="grid grid-cols-2 gap-4 mt-8">
<div>

````md magic-move {at:1}
```jsx
function App() {
  return (
    <div className="container">
      <h1>Counter Dashboard</h1>

      <div className="total-section">
        <div className="total-label">Total Count</div>
        <div className="total-value">0</div>
      </div>

      <div className="counters-container">
        <Counter label="Counter 1" />
        <Counter label="Counter 2" />
        <Counter label="Counter 3" />
      </div>
    </div>
  );
}
```

```jsx
<div className="counters-container">
  <Counter label="Counter 1" /> // Reused 3 times!
  <Counter label="Counter 2" />
  <Counter label="Counter 3" />
</div>
```
````

</div>
<div>

````md magic-move {at:2}
```jsx
function Counter({ label }) {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => {
    if (count > 0) setCount(count - 1);
  };
  return (
    <div className="counter-card">
      <div className="counter-info">
        <span className="counter-label">{label}</span>
        <span className="counter-value">0</span>
      </div>
      <div className="counter-controls">
        <button className="btn-decrease">−</button>
        <button className="btn-increase">+</button>
      </div>
    </div>
  );
}
```

```jsx
// State
const [count, setCount] = useState(0);

// Logic
const handleIncrease = () => setCount(count + 1);
const handleDecrease = () => {
  if (count > 0) setCount(count - 1);
};
```
````

</div>
</div>

---
layout: two-cols
---

# React is Declarative

<v-click at="1">

## Imperative (Vanilla JS)

**How to do it** - Step-by-step instructions

```js
// Manually manipulate DOM
function increment() {
  count++;
  const counterElement = document.getElementById("counter");
  counterElement.textContent = count;

  // Update total manually
  updateTotal();
}
function updateTotal() {
  const counters = document.querySelectorAll(".counter-value");
  let total = 0;
  counters.forEach((counter) => {
    total += parseInt(counter.textContent);
  });
  document.getElementById("total").textContent = total;
}
```

</v-click>

::right::

<div style="padding-left: 2rem; padding-top: 3.5rem">

<v-click at="2">

## Declarative (React)

**What you want** - Describe the UI

It automatically update the DOM, re-renders components and handle dependencies

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  // Just update state
  const increment = () => {
    setCount(count + 1);
  };

  // UI automatically updates
  return <div className="counter-value">{count}</div>;
}
```

</v-click>

</div>

---
layout: two-cols
---

# Virtual DOM

<v-clicks>

- Virtual DOM is lightweight, in-memory JavaScript copy of the actual browser's Real DOM, used by frameworks like React and Vue to efficiently update user interfaces by minimizing direct, slow manipulations of the real DOM.

- We can interact with virtual DOM with JSX (JavaScript XML) to interact with Virtual DOM. JSX lets you write <span v-mark="{color: 'red', at: '2'}">HTML in JavaScript</span> with <span v-mark="{color: 'red', at: '2'}">JavaScript</span>

</v-clicks>

::right::

<v-clicks>
  <div class="mt-16 ml-8">

```jsx
// JSX Example
<div className="counter-card">
  <div className="counter-info">
    <span className="counter-label">{label}</span>
    <span className="counter-value">{count}</span>
  </div>
  <div className="counter-controls">
    <button className="btn-decrease" onClick={handleDecrease}>
      −
    </button>
    <button className="btn-increase" onClick={handleIncrease}>
      +
    </button>
  </div>
</div>
```

  </div>
</v-clicks>

---

# Virtual DOM Visualization

<div class="flex justify-around items-center mt-10">

<div class="text-center">
<h3>Virtual DOM</h3>
<svg width="250" height="260" viewBox="0 0 250 280">
  <!-- Root node -->
  <circle cx="125" cy="50" r="30" fill="#667eea" stroke="#333" stroke-width="2"/>
  <text x="125" y="55" text-anchor="middle" fill="white" font-weight="bold">div</text>

  <!-- Lines to children -->
  <line x1="125" y1="80" x2="75" y2="130" stroke="#333" stroke-width="2"/>
  <line x1="125" y1="80" x2="175" y2="130" stroke="#333" stroke-width="2"/>

  <!-- Child nodes -->
  <circle cx="75" cy="150" r="30" fill="#667eea" stroke="#333" stroke-width="2"/>
  <text x="75" y="155" text-anchor="middle" fill="white" font-weight="bold">h1</text>

  <circle cx="175" cy="150" r="30" fill="#667eea" stroke="#333" stroke-width="2"/>
  <text x="175" y="155" text-anchor="middle" fill="white" font-weight="bold">p</text>

  <!-- Line to tag node under p - appears on first click -->
  <line v-if="$slidev.nav.clicks >= 1" x1="175" y1="180" x2="175" y2="220" stroke="#333" stroke-width="2"/>

  <!-- Tag node under p - appears on first click -->
  <circle v-if="$slidev.nav.clicks >= 1" cx="175" cy="240" r="25" fill="#ffd700" stroke="#ff6b6b" stroke-width="3" class="animate-pulse"/>
  <text v-if="$slidev.nav.clicks >= 1" x="175" y="245" text-anchor="middle" fill="white" font-weight="bold">a</text>
</svg>
</div>

<div class="text-center">
<h3>Real DOM</h3>
<svg width="250" height="260" viewBox="0 0 250 280">
  <!-- Root node -->
  <circle cx="125" cy="50" r="30" fill="#667eea" stroke="#333" stroke-width="2"/>
  <text x="125" y="55" text-anchor="middle" fill="white" font-weight="bold">div</text>

  <!-- Lines to children -->
  <line x1="125" y1="80" x2="75" y2="130" stroke="#333" stroke-width="2"/>
  <line x1="125" y1="80" x2="175" y2="130" stroke="#333" stroke-width="2"/>

  <!-- Child nodes -->
  <circle cx="75" cy="150" r="30" fill="#667eea" stroke="#333" stroke-width="2"/>
  <text x="75" y="155" text-anchor="middle" fill="white" font-weight="bold">h1</text>

  <circle cx="175" cy="150" r="30" fill="#667eea" stroke="#333" stroke-width="2"/>
  <text x="175" y="155" text-anchor="middle" fill="white" font-weight="bold">p</text>

  <!-- Line to tag node under p - appears on second click -->
  <line v-if="$slidev.nav.clicks >= 2" x1="175" y1="180" x2="175" y2="220" stroke="#333" stroke-width="2"/>

  <!-- Tag node under p - appears on second click -->
  <circle v-if="$slidev.nav.clicks >= 2" cx="175" cy="240" r="25" fill="#51cf66" stroke="#2f9e44" stroke-width="3" class="animate-pulse"/>
  <text v-if="$slidev.nav.clicks >= 2" x="175" y="245" text-anchor="middle" fill="white" font-weight="bold">a</text>
</svg>
</div>

</div>

<div class="mt-8">
  <ul>
    <v-click at="1">
      <li class="text-lg mb-2">An <strong>&lt;a&gt;</strong> tag is added to the Virtual DOM</li>
    </v-click>
    <v-click at="2">
      <li class="text-lg">React detects the change and updates the Real DOM accordingly</li>
    </v-click>
  </ul>
</div>

<style>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.animate-pulse {
  animation: pulse 1s ease-in-out infinite;
}
</style>

---

# How Virtual DOM Works

|     | Traditional DOM          | React's Virtual DOM                   |
| --- | ------------------------ | ------------------------------------- |
| 1   | Change data              | Change data                           |
| 2   | Update entire DOM        | Update Virtual DOM (in memory)        |
| 3   | Browser recalculates     | Diff with previous Virtual DOM        |
| 4   | Repaint everything       | Update only changed parts in real DOM |
| 5   | **SLOW** for complex UIs | **FAST** and efficient!               |

---

# Fun Fact

You can actually interact with Virtual DOM without JSX... I wouldn't recommend doing so 🤢🤢

## Without JSX (verbose)

```js
React.createElement(
  "div",
  { className: "container" },
  React.createElement("h1", null, "Hello World"),
);
```

<br />

## With JSX (clean)

```jsx
<div className="container">
  <h1>Hello World</h1>
</div>
```

<v-click>

JSX is <span v-mark="{color: 'red', at: '1'}">compiled</span> to JavaScript before running in the browser

</v-click>

---

# How browser reads JSX

<div class="flex justify-center items-center mt-8">
<svg width="100%" height="120" viewBox="0 0 1000 120">
  <!-- JSX Box -->
  <rect x="20" y="20" width="160" height="80" fill="#667eea" stroke="#333" stroke-width="2" rx="5"/>
  <text x="100" y="55" text-anchor="middle" fill="white" font-weight="bold" font-size="5">JSX</text>
  <text x="100" y="75" text-anchor="middle" fill="white" font-size="4">&lt;div&gt;Hello&lt;/div&gt;</text>

  <!-- Arrow 1 -->
  <g v-if="$slidev.nav.clicks >= 1">
    <line x1="180" y1="60" x2="250" y2="60" stroke="white" stroke-width="2" marker-end="url(#arrowhead)"/>
    <text x="215" y="48" text-anchor="middle" fill="white" font-size="4" font-weight="bold">Babel</text>
  </g>

  <!-- Compiled JS Box -->
  <g v-if="$slidev.nav.clicks >= 2">
    <rect x="250" y="20" width="200" height="80" fill="#764abc" stroke="#333" stroke-width="2" rx="5"/>
    <text x="350" y="48" text-anchor="middle" fill="white" font-weight="bold" font-size="5">JavaScript</text>
    <text x="350" y="67" text-anchor="middle" fill="white" font-size="4">React.createElement(</text>
    <text x="350" y="82" text-anchor="middle" fill="white" font-size="4">'div', null, 'Hello')</text>
  </g>

  <!-- Arrow 2 -->
  <g v-if="$slidev.nav.clicks >= 3">
    <line x1="450" y1="60" x2="540" y2="60" stroke="white" stroke-width="2" marker-end="url(#arrowhead)"/>
    <text x="495" y="48" text-anchor="middle" fill="white" font-size="4" font-weight="bold">Processes</text>
  </g>

  <!-- React Box -->
  <g v-if="$slidev.nav.clicks >= 4">
    <rect x="540" y="20" width="160" height="80" fill="#61dafb" stroke="#333" stroke-width="2" rx="5"/>
    <text x="620" y="55" text-anchor="middle" fill="#333" font-weight="bold" font-size="5">React</text>
    <text x="620" y="75" text-anchor="middle" fill="#333" font-size="4">Virtual DOM</text>
  </g>

  <!-- Arrow 3 -->
  <g v-if="$slidev.nav.clicks >= 5">
    <line x1="700" y1="60" x2="790" y2="60" stroke="white" stroke-width="2" marker-end="url(#arrowhead)"/>
    <text x="745" y="48" text-anchor="middle" fill="white" font-size="4" font-weight="bold">Updates</text>
  </g>

  <!-- Browser DOM Box -->
  <g v-if="$slidev.nav.clicks >= 6">
    <rect x="790" y="20" width="160" height="80" fill="#51cf66" stroke="#333" stroke-width="2" rx="5"/>
    <text x="870" y="55" text-anchor="middle" fill="white" font-weight="bold" font-size="5">Browser</text>
    <text x="870" y="75" text-anchor="middle" fill="white" font-size="4">Real DOM</text>
  </g>

  <!-- Arrow definition -->
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="white"/>
    </marker>
  </defs>
</svg>
</div>

<div class="mt-6 text-sm">
<ul>
  <v-click at="1">
    <li class="mb-2"><strong>Step 1: Babel Compilation</strong><br/>
    JSX syntax is <span class="text-blue-400">not valid JavaScript</span>. Babel transpiler converts JSX into pure JavaScript that browsers can understand.</li>
  </v-click>
  <v-click at="2">
    <li class="mb-2"><strong>Step 2: React.createElement()</strong><br/>
    Each JSX element becomes a <code>React.createElement(type, props, children)</code> function call. This creates JavaScript objects.</li>
  </v-click>
  <v-click at="4">
    <li class="mb-2"><strong>Step 3: Virtual DOM Creation</strong><br/>
    React processes these function calls and builds a lightweight JavaScript representation of the UI (Virtual DOM tree).</li>
  </v-click>
  <v-click at="6">
    <li class="mb-2"><strong>Step 4: Real DOM Update</strong><br/>
    React compares the new Virtual DOM with the previous one (diffing), then efficiently updates only the changed parts in the browser's Real DOM.</li>
  </v-click>
</ul>
</div>

---

# JSX Transformation: Complete Example

<style>
.code-small pre, .code-small code {
  font-size: 0.65rem !important;
}
</style>

<div class="grid grid-cols-2 gap-4 code-small">

<div v-click>

**Step 1: You Write JSX**
```jsx
const element = (
  <div className="greeting">
    <h1>Hello, {name}!</h1>
    <p>Welcome to React</p>
  </div>
);
```

</div>

<div v-click>

**Step 2: Babel Compiles to JS**
```js
const element = React.createElement(
  'div',
  { className: 'greeting' },
  React.createElement('h1', null, 'Hello, ', name, '!'),
  React.createElement('p', null, 'Welcome to React')
);
```

</div>

<div v-click>

**Step 3: React Creates Virtual DOM Object**
```js
{
  type: 'div',
  props: {
    className: 'greeting',
    children: [
      { type: 'h1', props: { children: ['Hello, ', name, '!'] } },
      { type: 'p', props: { children: ['Welcome to React'] } }
    ]
  }
}
```

</div>

<div v-click>

**Step 4: Browser Gets Real DOM**
```html
<div class="greeting">
  <h1>Hello, John!</h1>
  <p>Welcome to React</p>
</div>
```
<div class="mt-2 text-green-400">✓ Rendered in browser!</div>

</div>

</div>

---

# JSX Rules & Tips

<v-clicks>

- Use `className` instead of `class`
- Use `htmlFor` instead of `for`
- All tags must be closed: `<img />`, `<input />`
- Use `{}` for JavaScript expressions
- Components must return a single parent element

</v-clicks>

---

# JSX Rule 1: Use `className` instead of `class`

In HTML, you use `class` for CSS classes. In JSX, use `className` because `class` is a reserved word in JavaScript.

<div class="grid grid-cols-2 gap-4 mt-8">
<div>

### HTML (Don't use in JSX)

```html
<div class="container">
  <button class="btn btn-primary">
    Click me
  </button>
</div>
```

</div>
<div>

### JSX (Correct)

```jsx
function Card() {
  return (
    <div className="container">
      <button className="btn btn-primary">
        Click me
      </button>
    </div>
  );
}
```

</div>
</div>

---

# JSX Rule 2: Use `htmlFor` instead of `for`

The `for` attribute in HTML labels becomes `htmlFor` in JSX because `for` is a reserved word in JavaScript (used in loops).

<div class="grid grid-cols-2 gap-4 mt-8">
<div>

### HTML (Don't use in JSX)

```html
<label for="email">Email:</label>
<input id="email" type="email" />

<label for="password">Password:</label>
<input id="password" type="password" />
```

</div>
<div>

### JSX (Correct)

```jsx
function LoginForm() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" />

      <label htmlFor="password">Password:</label>
      <input id="password" type="password" />
    </form>
  );
}
```

</div>
</div>

---

# JSX Rule 3: All tags must be closed

In HTML, some tags are self-closing. In JSX, **every** tag must be explicitly closed with `/>` or a closing tag.

<div class="grid grid-cols-2 gap-4 mt-8">
<div>

### HTML (Don't use in JSX)

```html
<img src="photo.jpg">
<input type="text">
<br>
<hr>
<meta charset="UTF-8">
```

</div>
<div>

### JSX (Correct)

```jsx
function Profile() {
  return (
    <div>
      <img src="photo.jpg" />
      <input type="text" />
      <br />
      <hr />
      <meta charSet="UTF-8" />
    </div>
  );
}
```

</div>
</div>

---

# JSX Rule 4: Use `{}` for JavaScript expressions

Curly braces `{}` let you embed JavaScript expressions directly in your JSX.

```jsx
function Greeting() {
  const name = "Alice";
  const isLoggedIn = true;

  return (
    <div>
      <h1>Hello, {name}!</h1>                              {/* Variable */}
      <p>Status: {isLoggedIn ? "Online" : "Offline"}</p>   {/* Ternary */}
      {isLoggedIn && <button>Logout</button>}              {/* Conditional */}
    </div>
  );
}
```

---

# JSX Rule 5: Single parent element component

A component can only return **one** parent element. Wrap with `<div>` or Fragment (`<>...</>`).

<div class="grid grid-cols-2 gap-4 mt-4">
<div>

### Wrong

```jsx
function Card() {
  return (
    <h1>Title</h1>
    <p>Description</p>
  );
}
// Error: Adjacent JSX elements
```

</div>
<div>

### Correct

```jsx
// Using div
function Card() {
  return (
    <div>
      <h1>Title</h1>
      <p>Description</p>
    </div>
  );
}

// Using Fragment (no extra DOM)
function Card() {
  return (
    <>
      <h1>Title</h1>
      <p>Description</p>
    </>
  );
}
```

</div>
</div>

---
layout: center
---

# Styling React Components

Different ways to write CSS in React

---

# CSS in React: External Stylesheets

The most common way to style React components - import CSS files directly.

<div class="grid grid-cols-2 gap-4 mt-4">
<div>

### styles.css

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}
```

</div>
<div>

### Component.jsx

```jsx
import './styles.css';

function Card() {
  return (
    <div className="container">
      <button className="btn btn-primary">
        Click me
      </button>
    </div>
  );
}
```

<v-click>

**Pros:** Familiar, easy to use, browser caching
**Cons:** Global scope, naming conflicts possible

</v-click>

</div>
</div>

---

# CSS in React: CSS Modules

CSS Modules scope styles to components automatically - no more naming conflicts!

<div class="grid grid-cols-2 gap-4 mt-4">
<div>

### LoginForm.module.css

```css
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.label {
  font-weight: bold;
  color: #333;
}

.input {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.input:focus {
  border-color: #007bff;
  outline: none;
}
```

</div>
<div>

### LoginForm.jsx

```jsx
import styles from './LoginForm.module.css';

function LoginForm() {
  return (
    <form className={styles.form}>
      <label htmlFor="email" className={styles.label}>
        Email:
      </label>
      <input
        id="email"
        type="email"
        className={styles.input}
      />
    </form>
  );
}
```

<v-click>

**Pros:** Scoped styles, no conflicts, co-located
**Cons:** Slightly more verbose import

</v-click>

</div>
</div>

---

# CSS in React: Inline Styles

Apply styles directly to elements using the `style` prop with a JavaScript object.

<div class="grid grid-cols-2 gap-4 mt-4">
<div>

### Inline Style Syntax

```jsx
function Profile() {
  return (
    <div>
      <img
        src="photo.jpg"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          objectFit: 'cover'
        }}
      />
      <input
        type="text"
        style={{
          padding: '8px',
          border: '1px solid #ccc'
        }}
      />
    </div>
  );
}
```

</div>
<div>

### Key Differences from CSS

```jsx
// CSS property names use camelCase
style={{
  backgroundColor: 'blue',  // not background-color
  fontSize: '16px',         // not font-size
  marginTop: '10px',        // not margin-top
  zIndex: 100               // numbers without quotes
}}
```

<v-click>

**Pros:** No external files, scoped by default
**Cons:** No pseudo-classes (:hover), no media queries, verbose

</v-click>

</div>
</div>

---

# CSS in React: Dynamic Styles

Use JavaScript expressions `{}` to apply styles conditionally or dynamically.

<div class="grid grid-cols-2 gap-4 mt-4">
<div>

### Conditional Classes

```jsx
function StatusBadge({ status }) {
  return (
    <span className={`badge badge-${status}`}>
      {status}
    </span>
  );
}

// With ternary
function Button({ isPrimary }) {
  return (
    <button className={isPrimary
      ? 'btn btn-primary'
      : 'btn btn-secondary'
    }>
      Click me
    </button>
  );
}
```

</div>
<div>

### Dynamic Inline Styles

```jsx
function ProgressBar({ progress }) {
  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{
          width: `${progress}%`,
          backgroundColor: progress > 50
            ? 'green'
            : 'orange'
        }}
      />
    </div>
  );
}
```

<v-click>

**Tip:** For complex conditional classes, use the `clsx` or `classnames` library!

</v-click>

</div>
</div>

---

# CSS in React: Summary

Choose the right styling approach for your project!

| Approach | Use Case | Scoped? | Dynamic? |
|----------|----------|---------|----------|
| **External CSS** | Simple projects, global styles | No | Limited |
| **CSS Modules** | Component-scoped styles | Yes | Limited |
| **Inline Styles** | Quick prototyping, dynamic values | Yes | Yes |
| <span style="color: red;">**CSS-in-JS** (styled-components)</span>  | Full-featured, theming | Yes | Yes |
| <span style="color: red;">**Tailwind CSS**</span> | Utility-first, rapid development | N/A | Yes |


---
layout: center
---

# Let's write some code

Making a Todo List App in React

---
layout:  two-cols
---
# Todo List: Requirements

<div>

## Features to Implement

1. Add new todos
2. Display list of todos
3. Mark todos as complete/incomplete
4. Delete todos
5. Filter todos (All / Active / Completed)
6. Persist todos in localStorage

</div>

::right::

<div class="mt-14 ml-8">

## Concepts We'll Use

- `useState` for managing todos
- `useEffect` for localStorage
- Props for passing data
- Event handling
- Conditional rendering
- Array methods (map, filter)

</div>

---

# Let's get started

- Boot up a new project using Vite
- Create basic components with JSX
- Write some CSS

## What we'll cover next
- React Props
- React hooks

---
layout: center
---

# Props

Passing Data Between Components

---

# Props: Passing Data to Components

Props (properties) pass data from parent to child components

```jsx
// Parent passes props
function App() {
  return (
    <div>
      <Greeting name="Alice" age={25} />
      <Greeting name="Bob" age={30} />
    </div>
  );
}

// Child receives props (use destructuring)
function Greeting({ name, age }) {
  return (
    <div>
      <h2>Hello {name}!</h2>
      <p>You are {age} years old.</p>
    </div>
  );
}
```

---

# Passing Functions to Child

Pass functions to let child components update parent's state

```jsx
import { useState } from "react";

// Parent owns the state
function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);

  return (
    <div>
      <p>Count: {count}</p>
      <Child onIncrement={handleIncrement} />
    </div>
  );
}

// Child calls parent's function to update state
function Child({ onIncrement }) {
  return <button onClick={onIncrement}>Add +1</button>;
}
```

<v-click>

**Child "talks back" to parent by calling the passed function!**

</v-click>

---

# Props Rules

<v-clicks>

1. **Props are read-only** - Never modify props directly
2. **Props flow down** - Parent to child only (one-way data flow)
3. **Any data type** - Strings, numbers, arrays, objects, functions
4. **Default values** - Use defaultProps or default parameters

</v-clicks>

<div v-click>

```jsx
function Button({ text = "Click me", onClick, variant = "primary" }) {
  return (
    <button
      classame={`btn btn-${variant}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

// Usage
<Button text="Submit" onClick={handleSubmit} variant="success" />
<Button onClick={handleCancel} variant="danger" /> {/* Uses default text */}
```

</div>

---
layout: center
---

# Back to the Todo List

Applying Props to our Todo List App

---

# What We'll Do Now

## Applying Props Concepts

<v-clicks>

- Pass data from parent to child using props
- Pass functions as props to handle user actions
- See how props make components reusable

</v-clicks>

<v-click>

## What's Next

After understanding props, we'll learn **React Hooks**:
- **useState** - To manage component state (like our todo list data)
- **useEffect** - To handle side effects (like saving to localStorage)

</v-click>

---
layout: center
---

# React Hooks

Making Functional Components Powerful

---

# What are Hooks?

## Definition

<v-click>

**React Hooks** are special functions that let you "hook into" React features from functional components.

</v-click>

<v-clicks>

- Enable state and lifecycle features in <span v-mark="{color: 'red', at: '1'}">functional components</span>
- Introduced in React 16.8 (February 2019)
- Allow you to use state and other React features without <span v-mark="{color: 'red', at: '1'}">writing a class</span>
- All hook names start with the word "use"

</v-clicks>

<v-click>

<div>

## Common Built-in Hooks

- `useState` - Add state to components
- `useEffect` - Perform side effects
- `useContext` - Access context
- `useRef` - Reference DOM elements
- `useMemo` - Memoize expensive calculations
- `useCallback` - Memoize functions

</div>

</v-click>

---

# Rules of Hooks

## Rule 1: Only Call Hooks at the Top Level

<v-clicks>

- **Don't** call Hooks inside loops, conditions, or nested functions
- Always use Hooks at the top level of your React function
- This ensures Hooks are called in the same order each time a component renders

</v-clicks>

<v-click>

```jsx
// ❌ Wrong
if (condition) {
  const [state, setState] = useState(0);
}

// ✅ Correct
const [state, setState] = useState(0);
if (condition) {
  // use state here
}
```

</v-click>

---

# Rules of Hooks

## Rule 2: Only Call Hooks from React Functions

<v-clicks>

- **✅ Call Hooks** from React functional components
- **✅ Call Hooks** from custom Hooks (functions that start with "use")
- **❌ Don't call Hooks** from regular JavaScript functions
- **❌ Don't call Hooks** from class components

</v-clicks>

<v-click>

```jsx
// ❌ Wrong - regular function
function calculateTotal() {
  const [total, setTotal] = useState(0); // Can't use hooks here!
  return total;
}
// ✅ Correct - React component
function ShoppingCart() {
  const [total, setTotal] = useState(0); // OK!
  return <div>Total: {total}</div>;
}
// ✅ Correct - custom Hook
function useTotal() {
  const [total, setTotal] = useState(0); // OK!
  return [total, setTotal];
}
```

</v-click>

---

# useState Hook

Managing state in functional components
````md magic-move {at:1}
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```
```jsx
import { useState } from "react";

function Counter() {
  // Declare a state variable
  const [count, setCount] = useState(0);
  //     ^         ^              ^
  //     |         |              |
  //  current   setter      initial value
  //   value    function

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```
````


---

# What is State in React?

## Definition

<v-click>

**State** is data that changes over time in a component. It represents information that can be updated and affects what the user sees.

</v-click>

<v-clicks>

- State is **mutable** (can be changed)
- When state changes, React **re-renders** the component
- Each component has its own state (state is **local**)
- State persists between re-renders

</v-clicks>

<v-click>

<div class="mt-2">

## Examples of State

- User input in a form field
- Whether a dropdown is open or closed
- Items in a shopping cart
- Current page number in pagination
- Loading status of an API request

</div>

</v-click>

---

# useState with Different Data Types

```jsx
function FormExample() {
  const [name, setName] = useState('');              // String
  const [age, setAge] = useState(0);                 // Number
  const [isActive, setIsActive] = useState(false);   // Boolean
  const [tags, setTags] = useState([]);              // Array
  const [user, setUser] = useState({                 // Object
    name: '',
    email: ''
  });

  const addTag = (tag) => {
    setTags([...tags, tag]); // Create new array
  };

  const updateUser = (field, value) => {
    setUser({
      ...user,           // Spread existing properties
      [field]: value     // Update specific field
    });
  };

  return (/* JSX */);
}
```

---

# useEffect Hook


<v-click>

## Definition

**useEffect** lets you run code after your component renders. Use it for things like fetching data, setting up timers, or updating the browser.

</v-click>

<v-click>

```jsx
import { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  // Runs after every render
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

</v-click>

---

# What are Side Effects in React?

## Definition

<v-click>

**Side effects** are operations that affect something outside the scope of the current function being executed. They interact with the "outside world" beyond just returning a value.

</v-click>

<v-clicks>

- Fetching data from an API
- Setting up subscriptions or timers
- Manually updating the DOM
- Reading/writing to localStorage
- Logging to console

</v-clicks>

<v-click>

## Why useEffect?

React components should be **pure functions** that return JSX based on props and state. Side effects must happen **separately** - that's where `useEffect` comes in!

</v-click>

---

# useEffect Use Case 1: Fetching Data

The most common use of `useEffect` is to fetch data from an API when a component mounts.

```jsx
import { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data when component mounts
    fetch("https://api.example.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []); // Empty array = run once on mount

  if (loading) return <div>Loading...</div>;
  return <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>;
}
```

---

# Fetching Data: Key Points

<v-clicks>

- Empty dependency array `[]` means the effect runs **only once** when the component mounts
- Perfect for initial data loading
- Don't forget error handling and loading states!

</v-clicks>

---

# useEffect Use Case 2: Subscriptions & Timers

When you set up subscriptions or timers, you must **clean them up** to prevent memory leaks.

```jsx
import { useState, useEffect } from "react";

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("Setting up timer...");

    // Set up a timer that updates every second
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup function - runs when component unmounts
    return () => {
      console.log("Cleaning up timer...");
      clearInterval(timerId);
    };
  }, []); // Empty array = run once on mount

  return <div>Current time: {time.toLocaleTimeString()}</div>;
}
```

---

# Subscriptions & Timers: Key Points

<v-clicks>

- The **return function** is the cleanup - it runs before the component unmounts or before the effect re-runs
- Always clean up subscriptions, timers, and event listeners
- Prevents memory leaks and unexpected behavior!

</v-clicks>

---

# useEffect Use Case 3: DOM Manipulation

Sometimes you need to directly interact with DOM elements - like focusing an input or integrating with third-party libraries.

```jsx
import { useEffect, useRef } from "react";

function SearchBox() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); // Run once on mount

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input
        ref={inputRef}
        id="search"
        type="text"
        placeholder="Type to search..."
      />
    </div>
  );
}
```

---

# DOM Manipulation: Key Points

<v-clicks>

- Use `useRef` to get a reference to DOM elements
- `useEffect` ensures the DOM is ready before manipulation
- Common use cases: focus management, scrolling, integrating third-party DOM libraries

</v-clicks>

---

# Class vs Functional Components

Now that you understand Hooks, let's compare the old way vs modern way

<div grid="~ cols-2 gap-4">
<div>

## Class Components (Old way)

```jsx
import React, { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>Click</button>
      </div>
    );
  }
}
```

</div>
<div>

## Functional Components (Modern)

```jsx
import { useState } from "react";

function Welcome({ name }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{name}</h1>
      <p>{count}</p>
      <button onClick={increment}>Click</button>
    </div>
  );
}
```

<v-click>

**Why Functional + Hooks?**
- Less boilerplate code
- Easier to read and test
- Better code reuse with custom hooks

</v-click>

</div>
</div>

---
layout: center
class: text-center
---

# Hands-On Project

Building a Todo List Application

---

# Todo List: Requirements

<v-clicks>

## Features to Implement

1. Add new todos
2. Display list of todos
3. Mark todos as complete/incomplete
4. Delete todos
5. Filter todos (All / Active / Completed)
6. Persist todos in localStorage

## Concepts We'll Use

- `useState` for managing todos
- `useEffect` for localStorage
- Props for passing data
- Event handling
- Conditional rendering
- Array methods (map, filter)

</v-clicks>

---

# Todo List: Component Structure

```jsx
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  return (
    <div className="todo-app">
      <h1>My Todo List</h1>
      <TodoInput onAdd={handleAddTodo} />
      <TodoList
        todos={filteredTodos}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
      <TodoFilter current={filter} onChange={setFilter} />
    </div>
  );
}
```

<v-click>

We'll break this down into smaller components!

</v-click>

---

# Todo List: State Management

```jsx
import { useState, useEffect } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage when todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // More handlers...
}
```

---

# Todo List: CRUD Operations

```jsx
// Create
const addTodo = (text) => {
  setTodos([...todos, { id: Date.now(), text, completed: false }]);
};

// Read (filter)
const filteredTodos = todos.filter((todo) => {
  if (filter === "active") return !todo.completed;
  if (filter === "completed") return todo.completed;
  return true; // 'all'
});

// Update
const toggleTodo = (id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    ),
  );
};

// Delete
const deleteTodo = (id) => {
  setTodos(todos.filter((todo) => todo.id !== id));
};
```

---

# Todo List: TodoInput Component

```jsx
import { useState } from "react";

function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
      />
      <button type="submit">Add</button>
    </form>
  );
}
```

---

# Todo List: TodoItem Component

```jsx
function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
```

---

# Let's Code Together!

<div class="text-center mt-20">

## Open CodeSandbox

### https://codesandbox.io/

<v-click>

## Follow along as we build the Todo List step by step

1. Create the basic structure
2. Add state management
3. Implement CRUD operations
4. Add localStorage persistence
5. Style our application

</v-click>

</div>

---
layout: center
class: text-center
---

# Key Takeaways

<v-clicks>

1. React makes UI development **declarative** and **component-based**
2. **Virtual DOM** makes React fast and efficient
3. **JSX** allows us to write HTML-like syntax in JavaScript
4. **Functional components** with **Hooks** are the modern way
5. **Props** pass data down, **State** manages component data
6. **useState** manages state, **useEffect** handles side effects
7. Break complex UIs into **small, reusable components**

</v-clicks>

---
layout: center
class: text-center
---

# Practice Resources

<v-clicks>

- Official React Documentation: https://react.dev
- React Tutorial: https://react.dev/learn
- CodeSandbox: https://codesandbox.io
- Practice Projects:
  - Calculator
  - Weather App
  - Shopping Cart
  - Blog with Comments

</v-clicks>

<v-click>

## Questions?

</v-click>
