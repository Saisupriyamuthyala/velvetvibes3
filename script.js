let currentSlide = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalSlides = carouselItems.length;

function moveSlide(direction) {
  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  updateCarousel();
}

function updateCarousel() {
  carouselItems.forEach((item, index) => {
    item.style.display = index === currentSlide ? 'block' : 'none';
  });
}


updateCarousel();


const tips = [
  "Always use a primer before applying makeup.",
  "Hydrate your skin with a moisturizer before using foundation.",
  "Choose lip colors that match your skin undertone.",
  "Use SPF daily to protect your skin from sun damage.",
  "Remove your makeup thoroughly before going to bed."
];

let currentTipIndex = 0;
const currentTipElement = document.getElementById('current-tip');

function displayTip() {
  currentTipElement.textContent = tips[currentTipIndex];
}

function changeTip(direction) {
  currentTipIndex += direction;

  if (currentTipIndex < 0) {
    currentTipIndex = tips.length - 1;
  } else if (currentTipIndex >= tips.length) {
    currentTipIndex = 0;
  }

  displayTip();
}


displayTip();

const quizQuestions = [
    {
      question: "What is the most important step in a skincare routine?",
      options: ["Moisturizing", "Cleansing", "Using SPF", "Exfoliating"],
      answer: 2 // "Using SPF"
    },
    {
      question: "Which cosmetic product enhances the eyelashes?",
      options: ["Lipstick", "Foundation", "Mascara", "Concealer"],
      answer: 2 // "Mascara"
    },
    {
      question: "What is a primer used for?",
      options: ["Setting makeup", "Hydrating skin", "Creating a smooth base", "Adding color"],
      answer: 2 // "Creating a smooth base"
    }
  ];
  
  let currentQuizIndex = 0;
  let score = 0;
  
  const quizContainer = document.getElementById('quiz-container');
  const quizQuestionElement = document.getElementById('quiz-question');
  const quizOptionsElement = document.getElementById('quiz-options');
  const quizResultElement = document.getElementById('quiz-result');
  const quizScoreElement = document.getElementById('quiz-score');
  
  function loadQuestion() {
    const currentQuestion = quizQuestions[currentQuizIndex];
    quizQuestionElement.textContent = currentQuestion.question;
    quizOptionsElement.innerHTML = '';
  
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.onclick = () => checkAnswer(index);
      quizOptionsElement.appendChild(button);
    });
  }
  
  function checkAnswer(selectedIndex) {
    if (selectedIndex === quizQuestions[currentQuizIndex].answer) {
      score++;
    }
    nextQuestion();
  }
  
  function nextQuestion() {
    currentQuizIndex++;
    if (currentQuizIndex < quizQuestions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quizContainer.style.display = 'none';
    quizResultElement.style.display = 'block';
    quizScoreElement.textContent = `Your score is ${score} out of ${quizQuestions.length}.`;
  }
  
  function restartQuiz() {
    currentQuizIndex = 0;
    score = 0;
    quizContainer.style.display = 'block';
    quizResultElement.style.display = 'none';
    loadQuestion();
  }
  
  
  loadQuestion();
  