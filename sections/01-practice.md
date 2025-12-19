# What are we building

### A Counter Dashboard with:

- Three separate counters you can increase or decrease
- Each counter starts at 0
- A total that updates automatically
- Clean, interactive interface
- Try clicking the + and − buttons!

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

# Problems with Vanilla JS

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
