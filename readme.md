# Science Quiz Web Application  
A mobile-first, responsive science quiz built using HTML, CSS, and JavaScript.  
The quiz contains 10 multiple-choice questions covering physics, chemistry, and biology.  
It displays instant feedback for each question, calculates a final score, and includes a Restart Quiz feature.

## 1. Project Structure
ScienceQuiz/
│
├── index.html
├── style.css
├── script.js
└── README.md

## 2. How to Run (VS Code)
1. Install "Live Server" extension.  
2. Open folder in VS Code.  
3. Right-click index.html → "Open with Live Server".  
4. For mobile view: Ctrl+Shift+I → Toggle device toolbar.

## 3. How to Run (Cursor)
1. Open project folder in Cursor.  
2. Open index.html → Preview / Live Server.  
3. Test UI in mobile emulator.

## 4. How to Edit Questions (script.js)
- Edit questions array.  
- Format: { q: "...", options: ["A","B","C","D"], answer: 0 }.  
- answer = index of correct option (0–3).  

## 5. How to Change UI (style.css)
- Modify card width, colors, font sizes, button styles.  
- Changes auto-update with Live Server.

## 6. How the Quiz Works (script.js)
- loadQuestion(): renders next question.  
- selectOption(i, btn): stores user choice.  
- Submit button: checks answer, gives feedback.  
- Auto-advance: loads next question.  
- showScore(): displays final score.  
- restartQuiz(): resets quiz.

## 7. Mobile-First
- Flexible width cards  
- Responsive buttons and text  
- Tested on Chrome mobile emulator  

## 8. Optional Enhancements
- Progress indicator  
- Timer per question  
- Home/welcome screen  
- Category filters  
- CSS animations
-->
