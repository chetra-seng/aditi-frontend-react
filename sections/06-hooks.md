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

# useEffect Use Case 2: Cleanup Pattern

When you add event listeners or subscriptions, you must **clean them up** to prevent memory leaks.

```jsx
import { useState, useEffect } from "react";

function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Cleanup - remove listener when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Run once on mount

  return <p>Window width: {width}px</p>;
}
```

---

# Cleanup Pattern: Key Points

<v-clicks>

- The **return function** is the cleanup - it runs when the component unmounts
- Always clean up to prevent memory leaks and unexpected behavior
- **Event listeners**: `addEventListener` → `return () => removeEventListener`
- **Subscriptions**: `subscribe()` → `return () => unsubscribe()`
- Examples: WebSocket connections, timers, resize/scroll listeners, API subscriptions

</v-clicks>

---

# useEffect Use Case 3: DOM Manipulation

Direct DOM interactions like focusing inputs or integrating third-party libraries.

```jsx
import { useEffect, useRef } from "react";

function SearchBox() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus(); // Focus input on mount
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Type to search..."
    />
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
layout: center
---

# Class components

The dark age of React

---

# What are Class Components?

## The Original Way to Write React Components

<v-click>

Before React 16.8 (2019), **class components** were the only way to use state and lifecycle features in React.

</v-click>

<v-clicks>

- Inherit from `React.Component`
- Use `constructor()` to initialize state
- Use `this.state` to access state
- Use `this.setState()` to update state
- Use lifecycle methods like `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`
- Must use `this` keyword everywhere
- Need to bind methods or use arrow functions

</v-clicks>

---
layout: center
---
# Class Components: Example

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
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Click</button>
      </div>
    );
  }
}
```

---

# Problems with Class Components

<v-clicks>

## 1. Confusing `this` Keyword
- Hard to understand for beginners
- Easy to forget binding methods
- Different behavior in different contexts

## 2. Verbose and Boilerplate
- Need constructor, super, this everywhere
- More code to write and maintain

</v-clicks>

---

# Problems with Class Components

<v-clicks>

## 3. Hard to Reuse Stateful Logic
- Had to use complex patterns like Higher-Order Components (HOC) or Render Props
- Led to "wrapper hell" with deeply nested components

## 4. Complex Lifecycle Methods
- Related logic scattered across multiple lifecycle methods
- Hard to split components into smaller pieces

</v-clicks>

---

# The Solution: Functional Components + Hooks

<v-clicks>

## When: React 16.8 (February 2019)

React introduced **Hooks** to solve these problems

## Why the Change?

1. **Simpler Mental Model** - No more `this` confusion
2. **Less Code** - No constructors, no class syntax
3. **Better Code Reuse** - Share stateful logic with custom hooks
4. **Easier to Organize** - Group related logic together instead of splitting across lifecycle methods
5. **Better Performance** - Smaller bundle sizes, easier optimization

</v-clicks>

<v-click>

**Result:** Functional components became the recommended way to write React!

</v-click>

---

# Class vs Functional: Side by Side

````md magic-move
```jsx
// Class Component (Old Way)
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
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Click</button>
      </div>
    );
  }
}
```

```jsx
// Functional Component (Modern Way)
import { useState } from "react";

function Welcome({ name }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{name}</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Click</button>
    </div>
  );
}
```
````

<v-click>

**Much cleaner!** Less boilerplate, no `this`, easier to understand.

</v-click>
