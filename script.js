const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Goa"],
    answer: 1
  },
  {
    question: "What is the scientific name of fruit sapota?",
    options: ["Tamarindas indica", "Sipotalamus", "Manilkara zapota", "All of the above"],
    answer: 2
  },
  {
    question: "Who is the father of nation?",
    options: ["M.K. Gandhi", "Subhash Chandra Bose", "Jawaharlal Nehru", "Narendra Modi"],
    answer: 0
  },
  {
    question: "Who is the president of India?",
    options: ["Akshy Khanna", "D. Murmu", "Narendra Modi", "B. Rajendra Prasad"],
    answer: 1
  },
  {
    question: "What is the national animal of India?",
    options: ["Tiger", "Bengal Tiger", "Lion", "Elephant"],
    answer: 1
  },
  {
    question: "What is the national bird of India?",
    options: ["Sparrow", "Parrot", "Ostrich", "Peacock"],
    answer: 3
  },
  {
    question: "What is the national flower of India?",
    options: ["Lotus", "Rose", "Jasmine", "All of the above"],
    answer: 0
  },
  {
    question: "Who was the first Prime Minister of India?",
    options: ["Mahatma Gandhi", "S. Vallabhbhai Patel", "Jawaharlal Nehru", "Lal Bahadur Shastri"],
    answer: 2
  },
  {
    question: "What is the currency of India?",
    options: ["Rupee", "Yen", "Dollar", "None of the above"],
    answer: 0
  },
  {
    question: "Which is the largest state in India by area?",
    options: ["Uttar Pradesh", "Madhya Pradesh", "Andhra Pradesh", "None of the above"],
    answer: 3
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const questionNumber = document.getElementById("question-number");
const scoreDisplay = document.getElementById("score-display");
const progressBar = document.getElementById("progress-bar");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const finalScore = document.getElementById("final-score");
const resultMessage = document.getElementById("result-message");

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  answered = false;
  const q = questions[currentQuestion];

  questionNumber.textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;
  scoreDisplay.textContent = `Score: ${score}`;
  progressBar.style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;

  questionElement.textContent = q.question;
  optionsElement.innerHTML = "";
  feedback.textContent = "";
  nextBtn.classList.add("hidden");

  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option";
    button.textContent = `${index + 1}) ${option}`;
    button.addEventListener("click", () => selectAnswer(index));
    optionsElement.appendChild(button);
  });
}

function selectAnswer(selected) {
  if (answered) return;
  answered = true;

  const q = questions[currentQuestion];
  const optionButtons = document.querySelectorAll(".option");

  optionButtons.forEach(button => {
    button.disabled = true;
  });

  if (selected === q.answer) {
    score++;
    optionButtons[selected].classList.add("correct");
    feedback.textContent = "✅ Your selected answer is correct!";
  } else {
    optionButtons[selected].classList.add("wrong");
    optionButtons[q.answer].classList.add("correct");
    feedback.textContent =
      `❌ Wrong answer. Correct answer: ${q.options[q.answer]}`;
  }

  scoreDisplay.textContent = `Score: ${score}`;
  nextBtn.textContent =
    currentQuestion === questions.length - 1 ? "View Result" : "Next Question";
  nextBtn.classList.remove("hidden");
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  finalScore.textContent = `${score} / ${questions.length}`;

  if (score === 0) {
    resultMessage.textContent = "Better luck next time!";
  } else if (score <= 5) {
    resultMessage.textContent = "You tried your best. Good!";
  } else if (score <= 8) {
    resultMessage.textContent = "Your score is really good!";
  } else {
    resultMessage.textContent = "Excellent! Try more for better knowledge!";
  }
}
