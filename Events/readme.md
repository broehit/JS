# JavaScript `addEventListener` — All in One

```js
// 1️⃣ Basic Usage
const btn = document.querySelector("button");
btn.addEventListener("click", () => console.log("Button clicked!"));

// 2️⃣ Why not onclick? (onclick gets overwritten)
btn.onclick = () => console.log("First");
btn.onclick = () => console.log("Second"); // overwrites first
// addEventListener allows multiple:
btn.addEventListener("click", () => console.log("First"));
btn.addEventListener("click", () => console.log("Second"));

// 3️⃣ Event Flow (Capturing vs Bubbling)
document.body.addEventListener("click", () => console.log("Bubbling"), false);
document.body.addEventListener("click", () => console.log("Capturing"), true);

// 4️⃣ Options
window.addEventListener("scroll", () => console.log("scrolling..."), {
  once: false,
  passive: true
});

// 5️⃣ Event Delegation (one parent listener for many children)
document.querySelector("#list").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    console.log("Button clicked:", e.target.innerText);
  }
});

// 6️⃣ Removing Listeners
function logClick() { console.log("clicked"); }
btn.addEventListener("click", logClick);
btn.removeEventListener("click", logClick);

// 7️⃣ Custom Events
const orderEvent = new CustomEvent("orderPlaced", { detail: { item: "Pizza" } });
document.addEventListener("orderPlaced", (e) => console.log("Order:", e.detail.item));
document.dispatchEvent(orderEvent);


#  Number Guessing Game (JavaScript)

A simple **number guessing game** built using HTML, CSS, and JavaScript.  
It demonstrates **DOM manipulation**, **event handling**, and the use of `addEventListener`.

---

# Features
- Random number between **1–100** is generated.
- User has **10 attempts** to guess the number.
- Displays:
  - Previous guesses
  - Remaining attempts
  - Hints if the guess is too high or too low
- Ends game when:
  - The number is guessed correctly ✅
  - Attempts are exhausted ❌

---

## 🧑‍💻 Core Concepts Used
- **`addEventListener`** → Attaches event handlers without overwriting existing ones.
- **DOM Manipulation** → Updating text, clearing inputs, showing messages.
- **Game Logic** → Validating input, tracking guesses, ending & restarting game.

---

## 🔑 Why `addEventListener` is Important
- Lets you attach **multiple event handlers** to the same element.
- Works on **any DOM node** (buttons, forms, window, document).
- Provides **options** like:
  - `once: true` → run only once
  - `passive: true` → improve performance
  - `capture: true` → switch to capturing phase
- Used heavily in **modern frameworks** (React, Vue, Angular).

---

## 🔄 Bubbling vs Capturing

When you click on a child element, both the **child** and its **parent** can react.  
But **who reacts first** depends on the phase:

### 🟡 Bubbling (default)
- Event goes **from child → parent → ancestor**.
- Child runs **first**, then parent.
- Example: Click button → Button reacts → Form reacts.

### 🟢 Capturing
- Event goes **from parent → child**.
- Parent runs **first**, then child.
- Example: Click button → Form reacts → Button reacts.

👉 If you don’t specify options in `addEventListener`, it defaults to **bubbling**.

``` javascript
// Bubbling (default)
element.addEventListener("click", handler);

// Explicit bubbling
element.addEventListener("click", handler, false);

// Capturing
element.addEventListener("click", handler, true);

// Modern options
element.addEventListener("click", handler, { capture: true, once: true });
```