---
layout: center
---

# Virtual DOM

Understanding React's Secret Weapon

---
layout: two-cols
---

# What is Virtual DOM

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
