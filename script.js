questions = [{
    question: "Commonly used data types DO NOT include:",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correct: "alerts"
},
{
    question: "The condition in an if / else statement is enclosed within ____.",
    answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correct: "parenthesis"
},
{
    question: "Arrays in JavaScript can be used to store _____.",
    answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correct: "all of the above"
},
{
    question: "String values must be enclosed within _____ when being assigned to variables.",
    answers: ["commas", "curly brackets", "quotes", "parenthesis"],
    correct: "quotes"
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["Javascript", "terminal / bash", "for loops", "console.log"],
    correct: "console.log"
}
]; //Convert questions and answers into object

timerDisplay = document.querySelector("#timer");
timerDown = 60; //starting time at 60 seconds
questionDisplay = document.querySelector("#question-text")
answersText = document.querySelector("#answers")
totalScore = 0; // starting score
textDisplay = document.getElementById("answer-display"); //will target the p tag to display to user whether click selection was correct or wrong
var mainHide = document.getElementById("main")
var questionHide = document.getElementById("question-card")
var formHide = document.getElementById("highscore")
formHide.style.display = "none";
initialForm = document.querySelector("#initial-form");
initialText = document.querySelector("#user-initials");
highScores = [] //blank array for user submitted scores
scoreList = document.querySelector("#score-list");



document.getElementById("startbtn").addEventListener("click", beginQuiz); //begin quiz on start button click



function beginQuiz() {
    mainHide.style.display = "none";
    startTimer();
    actualQuiz();
}

function startTimer() {
    timerInterval = setInterval(function () {
        timerDown--;
        timerDisplay.textContent = timerDown + " seconds remaining.";
        if (timerDown <= 0) {
            console.log("Timer is Over")
            clearInterval(timerInterval);
            timerDisplay.textContent = " ";
            quizHide();
        };
    }, 1000); //decreasing timer one second at a time
}

function timerReducer() {
    timerDown -= 10;
    console.log(timerDown);
}

function quizHide(){
    questionHide.style.display = "none";
    formHide.style.display = "block";
    timerDisplay.style.display = "none";

}
function renderScores (){
    scoreList.innerHTML = "";
    for (var i=0; i < highScores.length; i++) {
        var scoreText = highScores[i];
        var scoreLi = document.createElement("li");
        scoreLi.textContent = scoreText;
        scoreList.appendChild(scoreLi);
    }
};


function scoreSubmit(){
    initialForm.addEventListener("submit", function(event){
        event.preventDefault();
        actualInitial = initialText.value.trim();
        if (actualInitial === "") {
            alert("Please enter your initials");
            return;
        }
        highScores.push(actualInitial);
        initialText.value = " ";
        renderScores();
    })
}

function actualQuiz() {
    var quizShow = document.querySelector("#question-card");
    quizShow.setAttribute("style", "display: block");
    quizOne();
    function quizOne() {
        questionDisplay.textContent = questions[0].question;
        for (i = 0; i < questions[0].answers.length; i++) {
            answersLi = document.createElement("li");
            answerButton = document.createElement("button");
            answerButton.textContent = questions[0].answers[i];
            answerButton.setAttribute("class", "answer-button");
            answersText.appendChild(answersLi);
            answersLi.appendChild(answerButton);
        };
        function answerChecker1 (event) {
            if (event.target.matches(".answer-button")) {
                if (event.target.textContent === questions[0].correct) {
                    totalScore++
                    textDisplay.textContent = "correct!"
                } else if (event.target.textContent != questions[0].correct) {
                    timerReducer()
                    textDisplay.textContent = "WRONG!"
                }
            }
            answersText.textContent = " ";
            answersText.removeEventListener("click", answerChecker1)
            quizTwo()
        };
       answersText.addEventListener("click", answerChecker1);
    };
    function quizTwo() {
        questionDisplay.textContent = questions[1].question;
        for (i = 0; i < questions[1].answers.length; i++) {
            answersLi = document.createElement("li");
            answerButton = document.createElement("button");
            answerButton.textContent = questions[1].answers[i];
            answerButton.setAttribute("class", "answer-button");
            answersText.appendChild(answersLi);
            answersLi.appendChild(answerButton);
        };
        function answerChecker2 (event) {
            if (event.target.matches(".answer-button")) {
                if (event.target.textContent === questions[1].correct) {
                    totalScore++
                    textDisplay.textContent = "correct!"
                } else {
                    timerReducer();
                    textDisplay.textContent = "WRONG!"
                }
            }
            answersText.textContent = " ";
            answersText.removeEventListener("click", answerChecker2);
            quizThree();
        };
        answersText.addEventListener("click", answerChecker2);
    };
    function quizThree() {
        questionDisplay.textContent = questions[2].question;
        for (i = 0; i < questions[2].answers.length; i++) {
            answersLi = document.createElement("li");
            answerButton = document.createElement("button");
            answerButton.textContent = questions[2].answers[i];
            answerButton.setAttribute("class", "answer-button");
            answersText.appendChild(answersLi);
            answersLi.appendChild(answerButton);
        };
        function answerChecker3 (event) {
            if (event.target.matches(".answer-button")) {
                if (event.target.textContent === questions[2].correct) {
                    totalScore++
                    textDisplay.textContent = "correct!"
                } else {
                    timerDown -= 10;
                    textDisplay.textContent = "WRONG!"   
                }
            }
            answersText.textContent = " ";
            answersText.removeEventListener("click", answerChecker3);
            quizFour();
        };
        answersText.addEventListener("click", answerChecker3);
    };
    function quizFour() {
        questionDisplay.textContent = questions[3].question;
        for (i = 0; i < questions[3].answers.length; i++) {
            answersLi = document.createElement("li");
            answerButton = document.createElement("button");
            answerButton.textContent = questions[3].answers[i];
            answerButton.setAttribute("class", "answer-button");
            answersText.appendChild(answersLi);
            answersLi.appendChild(answerButton);
        };
        function answerChecker4 (event) {
            if (event.target.matches(".answer-button")) {
                if (event.target.textContent === questions[3].correct) {
                    totalScore++
                    textDisplay.textContent = "correct!"
                } else {
                    timerDown -= 10;
                    textDisplay.textContent = "WRONG!"
                }
            }
            answersText.textContent = " ";
            answersText.removeEventListener("click", answerChecker4);
            quizFive();
        };
        answersText.addEventListener("click", answerChecker4);
    };
    function quizFive() {
        questionDisplay.textContent = questions[4].question;
        for (i = 0; i < questions[4].answers.length; i++) {
            answersLi = document.createElement("li");
            answerButton = document.createElement("button");
            answerButton.textContent = questions[4].answers[i];
            answerButton.setAttribute("class", "answer-button");
            answersText.appendChild(answersLi);
            answersLi.appendChild(answerButton);
        };
         function answerChecker5 (event) {
            if (event.target.matches(".answer-button")) {
                if (event.target.textContent === questions[4].correct) {
                    totalScore++
                    textDisplay.textContent = "correct!"
                } else {
                    timerDown = (timerDown - 10);
                    textDisplay.textContent = "WRONG!"
                }
            }
            answersText.textContent = " ";
            answersText.removeEventListener("click", answerChecker5);
        };
        answersText.addEventListener("click", answerChecker5);
        quizHide();
        scoreSubmit();
        renderScores();
    };
};
