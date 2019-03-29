$(document).ready(function () {
    let correct = 0;
    let incorrect = 0;
    let timer = 30;
    let intervalId;
    $("#start").on("click", run);
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000)
    }
    function decrement() {
        timer--;

        $("#timer-number").html("<h2>" + "Time Remaining: " + timer + "</h2>");

        var questionArray = [
            {
                question: "What are the names of the Blues Brothers?",
                choices: ["James and Edward", "Jake and Elwood", "Joe and Erick", "John and Ringo"],
                answer: "Jake and Elwood",
            },

            {
                question: "What actors played the title characters?",
                choices: ["Jim Belushi and Dan Ackroyd", "John Candy and Dan Ackroyd", "John Lennon and Ringo Starr", "John Belushi and Dan Ackroyd"],
                answer: "John Belushi and Dan Ackroyd",

            },
            {
                question: "Which famous musician does NOT appear in the film?",
                choices: ["Ray Charles", "James Brown", "Aretha Franklin", "Little Richard"],
                answer: "Little Richard",
            },
            {
                question: "What type of car is the new Bluesmobile?",
                choices: ["Police Car", "Taxi", "Delivery Van", "Humvee"],
                answer: "Police Car",
            },
            {
                question: "How man cars were wrecked during filming?",
                choices: [198, 259, 55, 103],
                answer: 103,
            },
            {
                question: "Who plays the Cook County Tax Assessor Clerk?",
                choices: ["David Letterman", "Steven Spielberg", "Adam West", "Bill Murray"],
                answer:"Steven Spielberg",
            },
            {
                question: "Who did the Blues Brothers say sent them on their Mission?",
                choices: ["The County Clerk", "Curtis", "God", "The Penguin"],
                answer: "God",
            },
            {
                question: "What drink does John Candy's character order for the table?",
                choices: ["Orange Whip", "Jack and Coke", "Root Beer Float", "Mint Julep"],
                answer: "Orange Whip",
            },
            {
                question: "What is the name of Carrie Fisher's hair salon?",
                choices: ["Chopz", "Claire's Hair", "Whilin' 'N' Stylin'", "Curl Up and Dye"],
                answer: "Curl Up and Dye",
            },
            {
                question: "Who is actually scheduled to perform at Bob's Country Bunker?",
                choices: ["The Country Bumpkins", "The Ten Gallon Hats", "The Good Ole Boys", "Red's Run Around Boys"],
                answer: "The Good Ole Boys",
            }
        ]

        for (let i = 0; i < allQuestions.length; i++) {


        }


        if (number === 0) {
            results();
        }
        function results() {
            alert("temp test results")
        }
        stop();
    }
})
function beginGame() {
    correct= 0;
    incorrect= 0
    question= 0;
    
}

function stop() {
    clearInterval(intervalId);
}
