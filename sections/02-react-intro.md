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
