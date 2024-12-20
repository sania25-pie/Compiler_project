const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    
];

const quiz = document.getElementById('quiz') 
const Q1=document.getElementById("Question")
const A1=document.querySelectorAll(".answer")
const A=document.getElementById("a-text")
const B=document.getElementById("b-text")
const C=document.getElementById("c-text")
const D=document.getElementById("d-text")
const Submit = document.getElementById('Submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
     deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    Q1.innerText = currentQuizData.question
    A.innerText = currentQuizData.a
    B.innerText = currentQuizData.b
    C.innerText = currentQuizData.c
    D.innerText = currentQuizData.d
}
 
function deselectAnswers(){
    A1.forEach(A1 => A1.checked = false)

}
function getSelected() {
    let answer

    A1.forEach(A1=> {
        if(A1.checked) {
            answer = A1.id
        }
    })

    return answer
}
Submit.addEventListener('click', () => {
    console.log("hi this is submit section");
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
