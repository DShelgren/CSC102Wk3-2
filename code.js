//Wk1-2 countdown timer should run 10....1 then blastoff

//Start function definition of startCountdown
function startCountdown() {
    console.log("should start for loop")
    for (let i = 0; i < 11; i++) { //must use block scope when for & settimeout occur
        setTimeout(function () { //begin timing loop based on local i copy
            var count = 10 - i; //define count as inverse of i
            if (count == 0) { //if else statement for blastoff condition
                document.getElementById("countdownTimer").innerHTML = "Blastoff !!"; //when true send Blastoff message
            } else if (count <= 5) { //Nested else if when countdown is 5 to 1
                document.getElementById("countdownTimer").innerHTML = "Warning less than 1/2 way to launch, time left = " + count; //when true output message, space and time remaining
            } else document.getElementById("countdownTimer").innerHTML = count; //output of countdown default condition for all other cases within if statement

        }, i * 1000); // set timeout as i times seconds


    } //end of for loop
} //end of startCountdown function definition

//function to play craps

function playCraps() {
    console.log("playCraps has started"); // Log to console the start of code
    var die1; //define variable as die1 for game
    die1 = Math.ceil(Math.random() * 6); //define die1 as the ceiling value of the random of 0-6

    console.log("The value of Die1 is: " + die1);//display to console value of die1
    console.log("The value of Die2 is: " + die2);//display to console value of die2

    document.getElementById("die1Results").innerHTML = "The value of die1: " + die1; //send to website the value of die1
    var die2; //initiliaze variable for die2
    die2 = Math.ceil(Math.random() * 6);//define die2 as the ceiling value of the random of 0-6
    document.getElementById("die2Results").innerHTML = "The value of die2: " + die2; //send to website the value of die2
    var dieSum = die1 + die2; //compute the value of die1 and die2, assign to variable dieSum

    document.getElementById("sumResults").innerHTML = "The sume of Die1&2 is  " + dieSum; //sen to the website the value of the sum of die1 & die2

    if (dieSum == 7 || dieSum == 11) { //Determine the failure case, i.e. 7 or 11, cause if else conditions
        document.getElementById("crapsResults").innerHTML = "Craps, you loose"; //Failed case detected, output Craps you loose 
    }
    else if (die1 == die2 && die2 % 2 == 0) { //If case for winning, verify both values are the same and divisible by two
        document.getElementById("crapsResults").innerHTML = "Hurray Doubles you win"; //output to website the winning result
    }
    else { //Lost case in If statement, not winning or loosing, send to website please try again.
        document.getElementById("crapsResults").innerHTML = "Please try again"

    }




}