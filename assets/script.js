var startButton = document.querySelector("#start")
var startScreen = document.querySelector('.quiz')
var quizArea = document.querySelector('.quiz-area')
var end = document.querySelector('.end')
var currentQuestion = 0
var questionText = document.querySelector(".question-text")
var button1 = document.querySelector(".btn1")
var button2 = document.querySelector(".btn2")
var button3 = document.querySelector(".btn3")
var button4 = document.querySelector(".btn4")
var answerButtons = document.querySelector(".btn")
var SCORE_POINTS = document.querySelector("#score-num")
var scoreBtn = document.querySelector("scores-btn")
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
        choices: ['star wars', 'spiderman', 'titanic', 'mad max',],
        answer: "star wars"
    }



]
function startQuiz() {

    startScreen.style.display = "none"
    quizArea.style.display = "block"
    score = 0


    questionText.innerText = questions[currentQuestion].question
    button1.innerText = questions[currentQuestion].choices[0]
    button2.innerText = questions[currentQuestion].choices[1]
    button3.innerText = questions[currentQuestion].choices[2]
    button4.innerText = questions[currentQuestion].choices[3]



}

function checkAnswer(event) {
    let classToApply = answerButtons == currentQuestion.answer ? 'correct' : 'incorrect'
    console.log(event.target.innerHTML, questions[currentQuestion].answer)
    if (event.target.innerHTML == questions[currentQuestion].answer) {
        //correct answer'
        if(classToApply == 'correct'){
            increaseScore(SCORE_POINTS)
    
    }
         
        

    }
    
    else {
        //incorrect answer

    }
    currentQuestion++
    startQuiz()
    
}
function endArea() {
    end.style.display="block"
    // display.innerText = "It's over"
    quizArea.style.display = "block"
    
}
increaseScore = num =>{
    score +=
    scoreText.innerText =score
}
// scoreBtn.addEventListener('click')
startButton.addEventListener('click', startQuiz)
//answerButtons.addEventListener('click',checkAnswer)