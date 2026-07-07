# Guess the Number Game

A simple **Guess the Number** game built using **HTML, CSS, and JavaScript**. The player has **10 attempts** to guess a randomly generated number between **1 and 100**. After each guess, the game provides feedback indicating whether the guess is too high or too low.

---

## Features

- Random number generated between **1 and 100**
- Maximum of **10 attempts**
- Displays whether the guess is:
  - Too High
  - Too Low
  - Correct
- Shows all previous guesses
- Displays remaining attempts
- Prevents further input once the game ends
- Simple and responsive UI

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (DOM Manipulation & Events)

---

## Project Structure

```text
Project-3 Guess the Number
│── index.html
│── style.css
│── script.js
└── README.md
```

---

## How to Run

1. Clone the repository

```bash
git clone https://github.com/your-username/javascript-projects.git
```

2. Navigate to the project folder

```bash
cd Project-3\ Guess\ the\ Number
```

3. Open `index.html` in your browser.

---

## How It Works

1. A random number between **1 and 100** is generated.
2. Enter your guess.
3. Click **Submit Guess**.
4. The game will tell you whether your guess is:
   - Too High
   - Too Low
   - Correct
5. Every incorrect guess:
   - Decreases the remaining attempts.
   - Gets added to the Previous Guesses list.
6. If the correct number is guessed:
   - A success message is displayed.
   - Input is disabled.
7. If all 10 attempts are used:
   - The correct number is revealed.
   - The game ends.

---

## Concepts Practiced

- DOM Selection
- Event Listeners
- User Input Handling
- Conditional Statements
- Arrays
- Random Number Generation
- Updating HTML Elements
- Form Validation
- Game Logic

---

## Future Improvements

- Restart Game button
- Difficulty levels
- Score tracking
- Best score storage using Local Storage
- Keyboard Enter support
- Better animations and styling

---

## Author

**Kumar Sourav**

