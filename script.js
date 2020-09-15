questions = ["Commonly used data types DO NOT include:", 
            "The condition in an if / else statement is enclosed within ____.", 
            "Arrays in JavaScript can be used to store _____.",
            "String values must be enclosed within _____ when being assigned to variables.",
            "A very useful tool used during development and debugging for printing content to the debugger is:"
        ]; //Array of questions 
answers = ["strings", "booleans", "alerts", "numbers"], // answers assigned to arrays with variables equal to # of question arrays
        ["quotes", "curly brackets", "parenthesis", "square brackets"],
        ["numbers and strings", "other arrays", "booleans", "all of the above"],
        ["commas", "curly brackets", "quotes", "parenthesis"],
        ["Javascript", "terminal / bash", "for loops", "console.log"];
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
    if(timerDown === 0) {
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
    //while (timerDown > 0) {
        //for (i = 0; i <= questions.length; i++) { //Assigns the question to the header of the card
            questionDisplay.textContent = questions[0];

        for (i = 0; i <= answers.length; i++){
            for (i = 0; i <= answers[i].length; i++) {   
            answersLi = document.createElement("li")
            answersLi.textContent = answers[i]
            answersText.appendChild(answersLi);
            }
        }    

      //  }  ;
   // }
};
    


