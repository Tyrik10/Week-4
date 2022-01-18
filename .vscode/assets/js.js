function startQuiz() {
    var questions = [
        {
            question: "favorite color?",
            choices: ['blue', 'red', 'yellow', 'green',],
            answer: "red"
        
        },
        {
            question: "favorite food?",
            choices: ['burgers', 'tacos', 'pizza', 'hotdogs',],
            answer: "tacos"
        },
        {
            question: "favorite movie?",
            choices: ['star wars', 'spiderman', 'titanic','mad max',],
            answer: "star wars"
        }
    

        
    ]
    startScreen.style.display = "none"
    quizArea.style.display = "block"
    // 25-29 a function
    questionText.innerText = questions[currentQuestion].question
    button1.innerText = questions[currentQuestion].choices[0]
    button2.innerText = questions[currentQuestion].choices[1]
    button3.innerText = questions[currentQuestion].choices[2]
    button4.innerText = questions[currentQuestion].choices[3]
}
var startButton = document.querySelector("#start")
startButton.addEventListener('click', startQuiz)
var startScreen = document.querySelector('.quiz')
var quizArea = document.querySelector('.quiz-area')
var currentQuestion = 0
var questionText = document.querySelector(".question-text")
var button1 = document.querySelector(".btn1")
var button2 = document.querySelector(".btn2")
var button3 = document.querySelector(".btn3")
var button4 = document.querySelector(".btn4")
var answerButtons = document.querySelector(".btn")
answerButtons.addEventListener('click',checkAnswer)
funtion