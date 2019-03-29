
//question objects
var question0 = {
    question: "What are the names of the Blues Brothers?",
    choices: ["James and Edward", "Jake and Elwood", "Joe and Erick", "John and Ringo"],
    answer: "Jake and Elwood",
    correctIndex: 1,
};
var question1 = {
    question: "What actors played the title characters?",
    choices: ["Jim Belushi and Dan Ackroyd", "John Candy and Dan Ackroyd", "John Lennon and Ringo Starr", "John Belushi and Dan Ackroyd"],
    answer: "John Belushi and Dan Ackroyd",
    correctIndex: 3,
};
var question2 = {
    question: "Which famous musician does NOT appear in the film?",
    choices: ["Ray Charles", "James Brown", "Aretha Franklin", "Little Richard"],
    answer: "Little Richard",
    correctIndex: 3,
};
var question3 = {
    question: "What type of car is the new Bluesmobile?",
    choices: ["Police Car", "Taxi", "Delivery Van", "Humvee"],
    answer: "Police Car",
    correctIndex: 0,
};
var question4 = {
    question: "How man cars were wrecked during filming?",
    choices: [198, 259, 55, 103],
    answer: 103,
    correctIndex: 3,
};
var question5 = {
    question: "Who plays the Cook County Tax Assessor Clerk?",
    choices: ["David Letterman", "Steven Spielberg", "Adam West", "Bill Murray"],
    answer: "Steven Spielberg",
    correctIndex: 1,
};
var question6 = {
    question: "Who did the Blues Brothers say sent them on their Mission?",
    choices: ["The County Clerk", "Curtis", "God", "The Penguin"],
    answer: "God",
    correctIndex: 2,
};
var question7 = {
    question: "What drink does John Candy's character order for the table?",
    choices: ["Orange Whip", "Jack and Coke", "Root Beer Float", "Mint Julep"],
    answer: "Orange Whip",
    correctIndex: 0,
};
var question8 = {
    question: "What is the name of Carrie Fisher's hair salon?",
    choices: ["Chopz", "Claire's Hair", "Whilin' 'N' Stylin'", "Curl Up and Dye"],
    answer: "Curl Up and Dye",
    correctIndex: 3,
};
var question9 = {
    question: "Who is actually scheduled to perform at Bob's Country Bunker?",
    choices: ["The Country Bumpkins", "The Ten Gallon Hats", "The Good Ole Boys", "Red's Run Around Boys"],
    answer: "The Good Ole Boys",
    correctIndex: 2,
};
//array of questions
var questionArray = [question0, question1, question2, question3, question4, question5, question6, question7, question8, question9]

var indexQuestion = 0;

var scores = {
    correctAnswers: 0,
    wrongAnswers: 0,
    missedAnswers: 0
};
//function to reset game scores
function resetScores() {
    scores.correctAnswers = 0;
    scores.wrongAnswers = 0;
    scores.missedAnswers = 0;
    indexQuestion = 0;
    $("#score").html("");
    $("#reset").hide();
}
//function to move to next question and reset timer
function nextQuestion() {
    indexQuestion++;
    if (indexQuestion < questionArray.length) {
        displayQuestion();
        $("#resultMessage").hide();
        $("#timerDisplay").show();
        $(".btn").show();
        timer.stop();
        timer.reset();
        timer.start();
    }
    //game over
    else {
        $("#quizMessage").hide();
        $("#question").hide();
        $("#score").html("<div>" + "Game Over! <br> Your Score" + "</div>" +
            "<div>" + "Correct Guesses: " + score.correctAnswers + "</div>" +
            "<div>" + "Wrong Guesses: " + scores.wrongAnswers + "</div>" +
            "<div>" + "Missed Questions: " + scores.missedAnswers + "</div>"
        );
        timer.stop();
        $("#timerDisplay").html("00:00");

        $("#reset").show();

        $(".resetId").click(function () {
            $("#resultMessage").hide();
            resetScores();
            displayQuestion();
            $("#question").show();
            $(".btn").show();
            $("#timerDisplay").show();
            timer.stop();
            timer.reset();
            timer.start();

        });
    }
}
//countdown timer
var timer = {
    time: 10,
    reset: function () {
        timer.time = 10;
        $("#timerDisplay").html("Timer: " + "00:10");
    },

    start: function () {
        counter = setInterval(timer.count, 1000);
    },

    stop: function () {
        clearInterval(counter);
    },

    count: function () {
        timer.time--;
        var converted = timer.timeConverter(timer.time);
        $("#timerDisplay").html("Timer: " + converted);

        if (timer.time == 0) {
            ("#resultMessage").show();
            ("#timerDisplay").hide();
            (".btn").hide();
            ("#resultMessage").html("<h2><p>Times Up! <br> The correct answer is: <br>" + questionArray[indexQuestion].answer + "</p></h2>");
            scores.missedAnswers++;
            setTimeout(nextQuestion, 3000);
        }
    },
    //dont like this
    timeConverter: function (t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes === 0) {
            minutes = "00";
        } else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    }
}
//display question
function displayQuestion() {
    $("#question").html("<h3>" + questionsArray[indexQuestion].question + "</h3>");
    $("#button0").text(questionsArray[indexQuestion].choices[0]);
    $("#button1").text(questionsArray[indexQuestion].choices[1]);
    $("#button2").text(questionsArray[indexQuestion].choices[2]);
    $("#button3").text(questionsArray[indexQuestion].choices[3]);
}

//start game!!
$(document).ready(function () {
    //hide start divs
    $("#timerDisplay").hide();
    $(".btn").hide();
    $("#reset").hide();
    //show game divs
    $("#startme").on("click", function () {
        displayQuestion();
        timer.reset();
        timer.start();
        $('#timerDisplay').show();
        $('.btn').show();
        $("#reset").hide();
        $("#startme").hide();
    });
    //check answer
    (".btn").click(function() {
        if (indexQuestion < questionArray.length){
            var userButtonValue= ($(this).attr("data-value"));
            if (userButtonValue == questionArray[indexQuestion].correctIndex) {
                $("#resultMessage").html("<h2><p>Correct!</p></h2>");
                scores.correctAnswers ++;
                timer.stop();
                timer.reset();
            }
            //wrong answer result
            else {
                $("#resultMessage").html("<h2><p>Wrong! <br> The correct answer is: <br>" + questionArray[indexQuestion].answer + "</p></h2>");
                scores.wrongAnswers ++;
                timer.stop();
                timer.reset();
            }
            $("#resultMessage").show();
            $("#timerDisplay").hide();
            $(".btn").hide();

            setTimeout(nextQuestion, 3000);
        }
    });
})
