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
}
startButton.addEventListener('click', startQuiz)