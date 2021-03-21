const quizData = [
    {
        question: "Who is the current manager of Chelsea football club?",
        a: "Thomas Tuchel",
        b: "Maurizio Sarri",
        c: "Frank Lampard",
        d: "Gary Lineker",
        correct: "a",
    },
    {
        question: "What is the first name of Real Madrid's captain?",
        a: "Juaquin",
        b: "Sergio",
        c: "Luka",
        d: "Rapahel",
        correct: "b",
    },
    {
        question: "Who won the 2020 UEFA Champions League?",
        a: "Bayern Munich",
        b: "Paris Saint Germain",
        c: "Liverpool",
        d: "Real Madrid",
        correct: "a",
    },
    {
        question: "What team does Mario Goetze play for?",
        a: "Borussia Dortmund",
        b: "Bayern Munich",
        c: "PSV Eindhoven",
        d: "none of the above",
        correct: "c",
    },
];


const quiz = document.getElementById("quiz"); 
const question = document.getElementById("question");
const answers = document.querySelectorAll(".answer"); 
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;

loadQuiz();
    

function loadQuiz() {
    deselect();
    const currentQuizQuestion = quizData[currentQuiz];

    question.innerText = currentQuizQuestion.question; // changes the text content of the DOM element with id "question", it is linked to the DOM element with the id "question"
    a_text.innerText = currentQuizQuestion.a; // 
    b_text.innerText = currentQuizQuestion.b;
    c_text.innerText = currentQuizQuestion.c;
    d_text.innerText = currentQuizQuestion.d;

}

//function for resetting the radio button selection after question has been answered 
function deselect() {
    answers.forEach((answer) => {
        answer.checked = false;
    } 
    )};


//checks which of the radio buttons have been selected
function retrieveSelection() {
    let selection = 0; //initializes a variable that will store the value of the radio button selected by a user
    answers.forEach((answer) => { // loops through the DOM elements with class id "answer" (the radio buttons) and checks which radio button was selected 
        if (answer.checked) { // if the answer within the list of radio buttons is checked, then set it to be the
            selection = answer.id;
        }
    
    
    });
    
    return selection;

}

submitBtn.addEventListener("click", () => {
    const selection = retrieveSelection();

    if (selection) {
        if (selection === quizData[currentQuiz].correct) {
            console.log("success")
            score++
        }
        currentQuiz++;
    
    }
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        question.innerText = `Your Quiz has been completed, you scored ${score}/${quizData.length }`;
    }


  

})

