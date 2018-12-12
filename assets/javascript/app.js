$(document).ready(function () {
    let correct= 0;
    let incorrect= 0;
    let number = 30;
    let intervalId;
    $("#start").on("click", run);
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000)
    }
    function decrement() {
        number--;
    
    $("#timer-number").html("<h2>" + "Time Remaining: " + number + "</h2>");

    if (number === 0) {
        results();
    }
    function results() {
        alert("temp test results")
    }
    stop();
}
})
function stop(){
    clearInterval(intervalId);
}
