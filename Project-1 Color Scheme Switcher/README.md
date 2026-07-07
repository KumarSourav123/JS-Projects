# 🎨 Color Scheme Switcher

A simple JavaScript project that allows users to change the background color of the webpage by clicking on different colored boxes.

## 📌 Features

- 🎨 Switch background color with a single click.
- ⚡ Instant color update using JavaScript.
- 🖥️ Responsive and minimal UI.
- 📚 Beginner-friendly project for learning DOM manipulation and event handling.

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

## 📂 Project Structure

```
Color-Scheme-Switcher/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 📖 How It Works

1. Four colored boxes are displayed on the page.
2. Each box has its own background color.
3. When a user clicks on a box:
   - JavaScript detects the clicked element.
   - Retrieves its computed background color.
   - Applies that color to the `<body>` element.

---

## 🧠 Concepts Practiced

- DOM Manipulation
- Event Listeners
- `querySelectorAll()`
- `forEach()`
- `addEventListener()`
- `event.currentTarget`
- `window.getComputedStyle()`
- Dynamic CSS Manipulation

---

## 💻 Code Logic

```javascript
const div = document.querySelectorAll(".myClass");

div.forEach((item) => {
    item.addEventListener("click", (e) => {
        const id = e.currentTarget;
        const body = document.querySelector("body");
        const computedStyle = window.getComputedStyle(id);
        const actualColor = computedStyle.backgroundColor;

        body.style.backgroundColor = actualColor;
    });
});
```

---

## 🚀 Learning Outcome

This project helped me understand:

- Selecting multiple elements from the DOM.
- Handling click events.
- Accessing computed CSS properties.
- Dynamically updating webpage styles using JavaScript.
- Writing clean and reusable event-driven code.

---

## 📷 Preview

![Project Preview](preview.png)

> *(Add a screenshot of your project here and name it `preview.png`.)*

---

## ▶️ Run Locally

1. Clone the repository

```bash
git clone https://github.com/your-username/js-projects.git
```

2. Navigate to the project folder

```bash
cd js-projects/Project-1-Color-Scheme-Switcher
```

3. Open `index.html` in your browser.

---

## 📈 Future Improvements

- Add more color options.
- Include dark/light mode toggle.
- Smooth transition animation.
- Save selected theme using Local Storage.
- Add gradient backgrounds.

---

## 👨‍💻 Author

**Kumar Sourav**
