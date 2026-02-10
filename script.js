const questions = [
    {
        question: "Largest Animal",
        answers: [
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Elephant", correct: false },
            { text: "Rhino", correct: false },
        ]
    },

    {
        question: "Largest Continent",
        answers: [
            { text: "Africa", correct: false },
            { text: "Antarctica", correct: false },
            { text: "Asia", correct: true },
            { text: "Europe", correct: false },
        ]
    },

    {
        question: "City of Temple",
        answers: [
            { text: "Kathmandu", correct: true },
            { text: "Rome", correct: false },
            { text: "Berlin", correct: false },
            { text: "London", correct: false },
        ]
    },

    {
        question: "Longest River",
        answers: [
            { text: "Ganga", correct: false },
            { text: "Amazon", correct: false },
            { text: "Yangtze", correct: false },
            { text: "Nile", correct: true },
        ]
    },

    {
        question: "Highest Mountain",
        answers: [
            { text: "Mount Everest", correct: true },
            { text: "K2", correct: false },
            { text: "Kangchenjunga", correct: false },
            { text: "Makalu", correct: false },
        ]
    },

    {
        question: "Largest Ocean",
        answers: [
            { text: "Arctic", correct: false },
            { text: "Atlantic", correct: false },
            { text: "Pacific", correct: true },
            { text: "Indian", correct: false },
        ]
    },

    {
        question: "Popular energy drink",
        answers: [
            { text: "Red Bull", correct: true },
            { text: "Coke", correct: false },
            { text: "Pepsi", correct: false },
            { text: "Water", correct: false },
        ]
    },

    {
        question: "Largest Desert",
        answers: [
            { text: "Sahara", correct: true },
            { text: "Arabian", correct: false },
            { text: "Gobi", correct: false },
            { text: "Kalahari", correct: false },
        ]
    },

    {
        question: "Lowest Point on Earth",
        answers: [
            { text: "Dead Sea", correct: false },
            { text: "Dead Sea", correct: true },
            { text: "Lake Baikal", correct: false },
            { text: "Mariana Trench", correct: false },
        ]
    },

    {
        question: "Largest Rainforest",
        answers: [
            { text: "Sahara", correct: false },
            { text: "Congo", correct: false },
            { text: "Borneo", correct: false },
            { text: "Amazon", correct: true },
        ]
    },

    {
        question: "Fastest Land Animal",
        answers: [
            { text: "rabbit", correct: false },
            { text: "Lion", correct: false },
            { text: "Cheetah", correct: true },
            { text: "Leopard", correct: false },
        ]
    },

    {
        question: "Tallest Building",
        answers: [
            { text: "Dharara", correct: false },
            { text: "Burj Khalifa", correct: true },
            { text: "Abraj Al Bait", correct: false },
            { text: "One World Trade Center", correct: false },
        ]
    },

    {
        question: "Amazon of Asia",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: false },
            { text: "Nepal", correct: true },
            { text: "India", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    document.getElementById("progress").innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    document.getElementById("progress").innerText = "Quiz Completed 🎉";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else {
        startQuiz();
    }
})

startQuiz();

