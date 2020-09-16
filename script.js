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
totalScore = 0;



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
        //outoftime();
    };
    }, 1000); //decreasing timer one second at a time
}

function actualQuiz() {
    var quizShow = document.querySelector("#question-card");
    quizShow.setAttribute("style", "display: block");
    questionDisplay.textContent = questions[0].question;
    for (i=0; i < questions[0].answers.length; i++){
        answersLi = document.createElement("li");
        answerButton = document.createElement("button");
        answerButton.textContent = questions[0].answers[i];
        answerButton.setAttribute("class","answer-button");
        answersText.appendChild(answersLi);
        answersLi.appendChild(answerButton);
    };
    function answerCheck() {
        if (event.target.textContent === questions[0].correct) {
            totalScore++;
            console.log(totalScore++);
            textDisplay = document.getElementById("answer-display");
            textDisplay.textContent = "Correct!"
            
        } else {
            timerDown =  (timerDown - 10);
            textDisplay = document.getElementById("answer-display");
            textDisplay.textContent = "WRONG!"
        } 
    }
    document.getElementsByClassName("answer-button").addEventListener("click", answerCheck());
    
        
    







    
    
}
    
      

    


