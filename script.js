const questions = [
    { q: "What is the speed of light?", options: ["3x10^8 m/s","1x10^6 m/s","5x10^5 m/s","3x10^5 m/s"], answer: 0 },
    { q: "Which gas is essential for respiration?", options: ["Oxygen","Nitrogen","CO2","Helium"], answer: 0 },
    { q: "What is H2O?", options: ["Hydrogen","Ozone","Water","Salt"], answer: 2 },
    { q: "Smallest unit of life?", options: ["Cell","Atom","Tissue","Organ"], answer: 0 },
    { q: "Sun is a", options: ["Planet","Star","Comet","Asteroid"], answer: 1 },
    { q: "Acid found in lemon?", options: ["Acetic","Citric","Sulfuric","Nitric"], answer: 1 },
    { q: "Force formula?", options: ["m/a","m+v","m-v","m×a"], answer: 3 },
    { q: "Plants make food by?", options: ["Respiration","Photosynthesis","Transpiration","Digestion"], answer: 1 },
    { q: "Earth’s atmosphere has max?", options: ["O2","N2","CO2","H2"], answer: 1 },
    { q: "Human blood color due to?", options: ["Chlorophyll","Hemoglobin","Water","Plasma"], answer: 1 }
];

let current = 0, score = 0, selected = null;

const qEl = document.getElementById("question");
const optEl = document.getElementById("options");
const feedback = document.getElementById("feedback");

function loadQuestion() {
    const q = questions[current];
    qEl.textContent = q.q;
    optEl.innerHTML = "";
    feedback.textContent = "";
    selected = null;

    q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = () => selectOption(i, btn);
        optEl.appendChild(btn);
    });
}

function selectOption(i, btn) {
    selected = i;
    [...optEl.children].forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
}

document.getElementById("submitBtn").onclick = () => {
    if (selected === null) return;

    const correctIndex = questions[current].answer;
    const btns = [...optEl.children];

    btns[correctIndex].classList.add("correct");
    if (selected !== correctIndex) btns[selected].classList.add("wrong");
    else score++;

    feedback.textContent = selected === correctIndex ? "Correct" : "Incorrect";

    btns.forEach(b => b.onclick = null);

    setTimeout(() => {
        current++;
        if (current < questions.length) loadQuestion();
        else showScore();
    }, 800);
};

function showScore() {
    document.getElementById("quiz-card").classList.add("hidden");
    document.getElementById("score-card").classList.remove("hidden");
    document.getElementById("final-score").textContent = score + " / " + questions.length;
}

document.getElementById("restartBtn").onclick = () => {
    current = 0;
    score = 0;
    document.getElementById("quiz-card").classList.remove("hidden");
    document.getElementById("score-card").classList.add("hidden");
    loadQuestion();
};

loadQuestion();
