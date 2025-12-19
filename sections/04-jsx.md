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
