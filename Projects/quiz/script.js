function submitAnswers() {
    var total = 5;
    var score = 0;

    //Get User input
    var q1 = document.forms["quizform"]["q1"].value;
    var q2 = document.forms["quizform"]["q2"].value;
    var q3 = document.forms["quizform"]["q3"].value;
    var q4 = document.forms["quizform"]["q4"].value;
    var q5 = document.forms["quizform"]["q5"].value;

    //validation
    for(i = 1; i <= total; i++){
        if (eval('q'+i) == null || eval('q'+i) == '') {
            alert('You missed Question '+ i);
            return false;
        }
    }

    //Set Correct Answers
    var answers = ["b", "a", "d", "b", "d"];

    //check Answers
    for(i = 1; i <= total; i++) {
        if (eval('q'+i) == answers[i - 1]) {
            score++;
        }
    }


    // Display Results
    var results = document.querySelector('.results');
    results.innerHTML = '<h3>You scored <span> '+score+ ' out of '+total+' </span></h3>';
    alert('You scored ' +score+ ' out of ' +total);

    return false;
}
