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

- We can interact with virtual DOM with JSX (JavaScript XML) to interact with Virtual DOM.

</v-clicks>

::right::

<v-clicks>
  <div class="mt-16">

  ```jsx
  // JSX Example
  <div className="counter-card">
    <div className="counter-info">
      <span className="counter-label">{label}</span>
      <span className="counter-value">{count}</span>
    </div>
    <div className="counter-controls">
      <button 
        className="btn-decrease" 
        onClick={handleDecrease}
      >
        −
      </button>
      <button 
        className="btn-increase" 
        onClick={handleIncrease}
      >
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

|  | Traditional DOM | React's Virtual DOM |
|------|----------------|---------------------|
| 1 | Change data | Change data |
| 2 | Update entire DOM | Update Virtual DOM (in memory) |
| 3 | Browser recalculates | Diff with previous Virtual DOM |
| 4 | Repaint everything | Update only changed parts in real DOM |
| 5 | **SLOW** for complex UIs | **FAST** and efficient! |

---

# JSX: JavaScript XML

JSX lets you write HTML-like code in JavaScript

<div grid="~ cols-2 gap-4">
<div>

## Without JSX (verbose)

```js
React.createElement(
  "div",
  { className: "container" },
  React.createElement("h1", null, "Hello World"),
);
```

</div>
<div>

## With JSX (clean)

```jsx
<div className="container">
  <h1>Hello World</h1>
</div>
```

</div>
</div>

<v-click>

JSX is **compiled** to JavaScript before running in the browser

</v-click>

---

# JSX Rules & Tips

<v-clicks>

- Use `className` instead of `class`
- Use `htmlFor` instead of `for`
- All tags must be closed: `<img />`, `<input />`
- Use `{}` for JavaScript expressions
- Components must return a single parent element

</v-clicks>

<div v-click>

```jsx
function Greeting() {
  const name = "Student";
  const isLoggedIn = true;

  return (
    <div>
      <h1>Hello {name}!</h1>
      {isLoggedIn && <p>Welcome back!</p>}
      {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
    </div>
  );
}
```

</div>

---

# Class vs Functional Components

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

**We'll focus on Functional Components!**

</v-click>

</div>
</div>

---

# Props: Passing Data to Components

Props (properties) are how we pass data from parent to child components

```jsx
// Parent Component
function App() {
  return (
    <div>
      <Greeting name="Alice" age={25} />
      <Greeting name="Bob" age={30} />
    </div>
  );
}

// Child Component
function Greeting(props) {
  return (
    <div>
      <h2>Hello {props.name}!</h2>
      <p>You are {props.age} years old.</p>
    </div>
  );
}

// Or use destructuring (cleaner)
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
      className={`btn btn-${variant}`}
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

# React Hooks

Making Functional Components Powerful

---

# What are Hooks?

<v-clicks>

- Special functions that let you "hook into" React features
- Only work in functional components
- Must be called at the top level (not in loops or conditions)
- Start with the word "use"

## Common Built-in Hooks

- `useState` - Add state to components
- `useEffect` - Perform side effects
- `useContext` - Access context
- `useRef` - Reference DOM elements
- `useMemo` - Memoize expensive calculations
- `useCallback` - Memoize functions

Today we'll focus on **useState** and **useEffect**

</v-clicks>

---

# useState Hook

Managing state in functional components

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

Performing side effects in components

```jsx
import { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  // Runs after every render
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  // Runs only once on mount (empty dependency array)
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  // Runs when count changes
  useEffect(() => {
    console.log(`Count changed to ${count}`);
  }, [count]);

  // Cleanup function
  useEffect(() => {
    const timer = setInterval(() => console.log("tick"), 1000);
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

---

# useEffect Common Use Cases

<v-clicks>

## 1. Fetching Data

```jsx
useEffect(() => {
  fetch("https://api.example.com/data")
    .then((res) => res.json())
    .then((data) => setData(data));
}, []);
```

## 2. Subscriptions

```jsx
useEffect(() => {
  const subscription = subscribeToData();
  return () => subscription.unsubscribe();
}, []);
```

## 3. DOM Manipulation

```jsx
useEffect(() => {
  const element = document.getElementById("special");
  element.focus();
}, []);
```

</v-clicks>

---

# Live Demo: useState & useEffect

Let's build a simple user profile component together

```jsx {all|1-2|4-6|8-13|15-17|19-30|all}
import { useState, useEffect } from "react";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <button
        onClick={() => {
          setUser({ ...user, name: "Updated Name" });
        }}
      >
        Update Name
      </button>
    </div>
  );
}
```

---
layout: center
class: text-center
---

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
