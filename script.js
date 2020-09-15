questions = [{question: "Commonly used data types DO NOT include:",
            answers: ["strings", "booleans", "alerts", "numbers"],
            correct: "alerts"},
            {question: "The condition in an if / else statement is enclosed within ____.",
            answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
            correct: "parenthesis"},
            {question: "Arrays in JavaScript can be used to store _____.",
            answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
            correct:"all of the above"},
            {question: "String values must be enclosed within _____ when being assigned to variables.",
            answers: ["commas", "curly brackets", "quotes", "parenthesis"],
            correct:"quotes"},
            {question: "A very useful tool used during development and debugging for printing content to the debugger is:",
            answers: ["Javascript", "terminal / bash", "for loops", "console.log"],
            correct:"console.log"}
        ]; //Convert questions and answers into object

timerDisplay = document.querySelector("#timer");
timerDown = 60; //starting time at 60 seconds
questionDisplay = document.querySelector("#question-text")
answersText = document.querySelector("#answers")

document.getElementById("startbtn").addEventListener("click", beginQuiz); //begin quiz on start button click

function beginQuiz() {
    var mainHide = document.getElementById("main")
    mainHide.style.display = "none";
    startTimer();
    actualQuiz();
}

function startTimer() {
    timerInterval = setInterval(function() {
    timerDown--;
    timerDisplay.textContent = timerDown + " seconds remaining.";
    if(timerDown <= 0) {
        console.log("Timer is Over")
        clearInterval(timerInterval);
        timerDisplay.textContent = " ";
        //enter intials for score function here
    };
    }, 1000); //decreasing timer one second at a time
}

function actualQuiz() {
    var quizShow = document.querySelector("#question-card");
    quizShow.setAttribute("style", "display: block");
    
    for (i = 0; i <= questions.length; i++) { //Assigns the question to the header of the card
        questionDisplay.textContent = questions[0];
    }    

    for (i = 0; i <= answers.length; i++){
        for (i = 0; i <= answers[i].length; i++) {   
            answersLi = document.createElement("li")
            answersLi.textContent = answers[i];
            answersText.appendChild(answersLi);
        }
    }    
};
    


