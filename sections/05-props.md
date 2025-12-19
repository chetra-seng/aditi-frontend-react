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
