# 🧮 BMI Calculator

A simple and interactive **BMI (Body Mass Index) Calculator** built using **HTML, CSS, and JavaScript**. Users can enter their height and weight to calculate their BMI and instantly see their weight category.

## 📌 Features

- 📏 Enter height in centimeters.
- ⚖️ Enter weight in kilograms.
- 🧮 Calculate BMI with a single click.
- 📊 Displays BMI up to two decimal places.
- 💡 Shows BMI category:
  - Underweight
  - Normal
  - Overweight
  - Obesity
- 🔄 Clears previous result when input values change.

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

## 📂 Project Structure

```
BMI-Calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 📖 How It Works

1. User enters height in **centimeters**.
2. User enters weight in **kilograms**.
3. Clicking the **Calculate** button computes the BMI using:

```text
BMI = Weight (kg) / (Height (m) × Height (m))
```

4. The BMI value is displayed.
5. Based on the BMI, the application displays the corresponding health category.

---

## 📊 BMI Categories

| BMI Range | Category |
|-----------:|----------|
| Less than 18.5 | Underweight |
| 18.5 – 24.9 | Normal |
| 25 – 29.9 | Overweight |
| 30 or above | Obesity |

---

## 🧠 Concepts Practiced

- DOM Manipulation
- Event Listeners
- Reading Input Values
- Functions
- Conditional Statements (`if-else`)
- JavaScript Math Functions
- Dynamic Text Updates

---

## 💻 Code Logic

- Get height and weight from the input fields.
- Calculate BMI using:

```javascript
bmi = weight / ((height / 100) * (height / 100));
```

- Round the BMI value to two decimal places.
- Compare the BMI against predefined ranges.
- Display both the BMI value and the corresponding category.

---

## 🚀 Learning Outcome

This project helped me understand:

- Handling user input.
- DOM selection using `querySelector()`.
- Event handling with `addEventListener()`.
- Writing reusable JavaScript functions.
- Using mathematical calculations in JavaScript.
- Updating webpage content dynamically.

---

## ▶️ Run Locally

1. Clone the repository

```bash
git clone https://github.com/your-username/js-projects.git
```

2. Navigate to the project folder

```bash
cd js-projects/Project-2-BMI-Calculator
```

3. Open `index.html` in your browser.

---

## 📈 Future Improvements

- Validate empty input fields.
- Prevent negative or zero values.
- Display the ideal weight range.
- Add keyboard support (press Enter to calculate).
- Improve UI with cards and icons.
- Make the layout fully responsive.
- Add a BMI meter or progress bar.
- Store previous BMI calculations using Local Storage.

---

## 👨‍💻 Author

**Kumar Sourav**

