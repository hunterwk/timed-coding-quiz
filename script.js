questions = ["Commonly used data types DO NOT include:", 
            "The condition in an if / else statement is enclosed within ____.", 
            "Arrays in JavaScript can be used to store _____.",
            "String values must be enclosed within _____ when being assigned to variables.",
            "A very useful tool used during development and debugging for printing content to the debugger is:"
        ]
answers0 = ["strings", "booleans", "alerts", "numbers"];
answers1 = ["quotes", "curly brackets", "parenthesis", "square brackets"];
answers2 = ["numbers and strings", "other arrays", "booleans", "all of the above"];
answers3 = ["commas", "curly brackets", "quotes", "parenthesis"];
answers4 = ["Javascript", "terminal / bash", "for loops", "console.log"]

function beginQuiz() {
    var mainHide = document.getElementById("main")
    mainHide.style.display = "block";
}

document.getElementById("startbtn").addEventListener("click", beginQuiz(event));