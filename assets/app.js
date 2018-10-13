
    $(document).ready(function() {


// ***********************************************************
// QUESTION OBJECT
// ***********************************************************
        
        
        var obj = [{
                "user": "tester",
                "day": "day1",
                "question": "What is 2 + 2?",
                "answ1": "4",
                "answ2": "5",
                "answ3": "3",
                "answ4": "1",
                "answ5": "6",
                "corrAnsw": "4"
            },

            {
                "user": "tester",
                "day": "day1",
                "question": "What is 2 + 100?",
                "answ1": "100",
                "answ2": "102",
                "answ3": "98",
                "answ4": "101",
                "answ5": "104",
                "corrAnsw": "102"
            },

            {
                "user": "tester",
                "day": "day1",
                "question": "Which of the below is 3 thousand?",
                "answ1": "30",
                "answ2": "300",
                "answ3": "3,000",
                "answ4": "3,000,000",
                "answ5": "300,000",
                "corrAnsw": "3,000"
            },

             {
                "user": "tester",
                "day": "day1",
                "question": "What is 5 x 5?",
                "answ1": "0",
                "answ2": "20",
                "answ3": "25",
                "answ4": "10",
                "answ5": "15",
                "corrAnsw": "25"
            },

            {
                "user": "tester",
                "day": "day1",
                "question": "What is 6 divided by 3?",
                "answ1": "9",
                "answ2": "8",
                "answ3": "18",
                "answ4": "3",
                "answ5": "2",
                "corrAnsw": "2"
            }

        ];

        var studentAnswer1 = "";
        var studentAnswer2 = "";
        var studentAnswer3 = "";
        var studentAnswer4 = "";
        var studentAnswer5 = "";

        // Reward variables
        var rewardAnimal = "";
        var rewardSound = "";
        var animationType = "";


// **********************************************************************
// Start Container
// *********************************************************************


        $("#startButton").on('click', function() {

            $("#startContainer").hide();
            functQ1();
        });

// **********************************************************************
// Timer
// *********************************************************************

window.onload = function () {

var fragmentTime;

jQuery('.timeout_message_show').hide();

var minutes = jQuery('span.minute').text();

var seconds = jQuery('span.second').text();

minutes = parseInt(minutes);

seconds = parseInt(seconds);

if (isNaN(minutes)) {

minutes = 00;

}

if (isNaN(seconds)) {

seconds = 00;

}

if (minutes == 60) {

minutes = 59;

}

if (seconds == 60) {

seconds = 59;

}

fragmentTime = (60 * minutes) + (seconds);

displayMinute = document.querySelector('span.minute');

displaySecond = document.querySelector('span.second');

startTimer(fragmentTime, displayMinute, displaySecond);

};
    
    
function startTimer(duration, displayMinute, displaySecond) {

var timer = duration,

displayMinute, displaySecond;

var timeIntervalID = setInterval(function () {

minutes = parseInt(timer / 60, 10)

seconds = parseInt(timer % 60, 10);

minutes = minutes < 10 ? "0" + minutes : minutes;

seconds = seconds < 10 ? "0" + seconds : seconds;

displayMinute.textContent = minutes;

displaySecond.textContent = seconds;

if (--timer < 0) {

timer = 0;

if (timer == 0) {

clearInterval(timeIntervalID);

}

}

}, 1000);

}


// *********************************************************************
// Question 1 Jquery
// *********************************************************************
            // other questions begin hidden
            $("#containerQuestion1").hide();
            $("#containerQuestion2").hide();
            $("#containerQuestion3").hide();
            $("#containerQuestion4").hide();
            $("#containerQuestion5").hide();
            $("#containerDone").hide();


            function functQ1 () {

            $("#containerQuestion1").show();    

            $("#question1").html("<h1>" + obj[0].question + "</h1>");
            $("#q1Answ1").html("<h4>" + obj[0].answ1 + "</h4>");
            $("#q1Answ2").html("<h4>" + obj[0].answ2 + "</h4>");
            $("#q1Answ3").html("<h4>" + obj[0].answ3 + "</h4>");
            $("#q1Answ4").html("<h4>" + obj[0].answ4 + "</h4>");
            $("#q1Answ5").html("<h4>" + obj[0].answ5 + "</h4>");

            var correctAnswer1 = obj[0].corrAnsw

            $(".question1AnswerClss").on('click', function() {

                studentAnswer1 = $(this).text();

                if (studentAnswer1 == correctAnswer1) {
                    console.log('Q1 RIGHT!')
                    $("#containerQuestion1").toggle();
                    // ADD PUSH CODE TO DB
                    // ADD $ TO SCORE
                    reward();
                    
                    // timeout function for loading next question
                    setTimeout(function(){
                    functQ2();
                }, 2000);
                                     
                    
                } else {
                    console.log('Q1 WRONG')
                    // Add function that changes css of correct answer?  then short duration and move on
                    $("#containerQuestion1").html("<h1>" + obj[0].corrAnsw + "</h1>");
                    setTimeout(function(){
                        functQ2();
                        $("#containerQuestion1").toggle();
                    }, 2000);
                }

                   

            });

        }
// *********************************************************************
// Question 2 Jquery
// *********************************************************************
      function functQ2 () {
            $("#question2").html("<h1>" + obj[1].question + "</h1>");
            $("#q2Answ1").html("<h4>" + obj[1].answ1 + "</h4>");
            $("#q2Answ2").html("<h4>" + obj[1].answ2 + "</h4>");
            $("#q2Answ3").html("<h4>" + obj[1].answ3 + "</h4>");
            $("#q2Answ4").html("<h4>" + obj[1].answ4 + "</h4>");
            $("#q2Answ5").html("<h4>" + obj[1].answ5 + "</h4>");

            var correctAnswer2 = obj[1].corrAnsw

            $("#containerQuestion2").toggle();

            $(".question2AnswerClss").on('click', function() {

                studentAnswer2 = $(this).text();

                if (studentAnswer2 == correctAnswer2) {
                    console.log('Q2 RIGHT!')
                    $("#containerQuestion2").toggle();
                    // ADD PUSH CODE TO DB
                    // ADD $ TO SCORE
                    reward();                  
                    
                    // delay for calling next question
                    setTimeout(function(){
                    functQ3();
                }, 2000);
                    
                } else {
                    console.log('Q2 WRONG')
                    // Add function that changes css of correct answer?  then short duration and move on
                    $("#containerQuestion2").html("<h1>" + obj[1].corrAnsw + "</h1>");
                    setTimeout(function(){
                        functQ3();
                        $("#containerQuestion2").toggle();
                    }, 2000);
                }
                
            });
                }
// *********************************************************************
// Question 3 Jquery
// *********************************************************************
        function functQ3 () {
            $("#question3").html("<h1>" + obj[2].question + "</h1>");
            $("#q3Answ1").html("<h4>" + obj[2].answ1 + "</h4>");
            $("#q3Answ2").html("<h4>" + obj[2].answ2 + "</h4>");
            $("#q3Answ3").html("<h4>" + obj[2].answ3 + "</h4>");
            $("#q3Answ4").html("<h4>" + obj[2].answ4 + "</h4>");
            $("#q3Answ5").html("<h4>" + obj[2].answ5 + "</h4>");

            var correctAnswer3 = obj[2].corrAnsw

            $("#containerQuestion3").toggle();

            $(".question3AnswerClss").on('click', function() {

                studentAnswer3 = $(this).text();

                if (studentAnswer3 == correctAnswer3) {
                    console.log('Q3 RIGHT!')
                    $("#containerQuestion3").toggle();
                    // ADD PUSH CODE TO DB
                    // ADD $ TO SCORE
                    reward();
                    
                    // delay for calling next question
                    setTimeout(function(){
                    functQ4();
                }, 2000);
                                       
                    
                } else {
                    console.log('Q3 WRONG')
                    // Add function that changes css of correct answer?  then short duration and move on
                    $("#containerQuestion3").html("<h1>" + obj[2].corrAnsw + "</h1>");
                    setTimeout(function(){
                        functQ4();
                        $("#containerQuestion3").toggle();
                    }, 2000);
                }           

            });
                }
// *********************************************************************
// Question 4 Jquery
// *********************************************************************
            function functQ4 () {
            $("#question4").html("<h1>" + obj[3].question + "</h1>");
            $("#q4Answ1").html("<h4>" + obj[3].answ1 + "</h4>");
            $("#q4Answ2").html("<h4>" + obj[3].answ2 + "</h4>");
            $("#q4Answ3").html("<h4>" + obj[3].answ3 + "</h4>");
            $("#q4Answ4").html("<h4>" + obj[3].answ4 + "</h4>");
            $("#q4Answ5").html("<h4>" + obj[3].answ5 + "</h4>");

            var correctAnswer4 = obj[3].corrAnsw

            $("#containerQuestion4").toggle();

            $(".question4AnswerClss").on('click', function() {

                studentAnswer4 = $(this).text();

                if (studentAnswer4 == correctAnswer4) {
                    console.log('Q4 RIGHT!')
                    $("#containerQuestion4").toggle();
                    // ADD PUSH CODE TO DB
                    // ADD $ TO SCORE
                    reward();
                    
                    // delay for calling next question
                    setTimeout(function(){
                    functQ5();
                }, 2000);
                                       
                    
                } else {
                    console.log('Q4 WRONG')
                    // Add function that changes css of correct answer?  then short duration and move on
                    $("#containerQuestion4").html("<h1>" + obj[3].corrAnsw + "</h1>");
                    setTimeout(function(){
                        functQ5();
                        $("#containerQuestion4").toggle();
                    }, 2000);
                }
                
            });
                }
// *********************************************************************
// Question 5 Jquery
// *********************************************************************
            function functQ5 () {
            $("#question5").html("<h1>" + obj[4].question + "</h1>");
            $("#q5Answ1").html("<h4>" + obj[4].answ1 + "</h4>");
            $("#q5Answ2").html("<h4>" + obj[4].answ2 + "</h4>");
            $("#q5Answ3").html("<h4>" + obj[4].answ3 + "</h4>");
            $("#q5Answ4").html("<h4>" + obj[4].answ4 + "</h4>");
            $("#q5Answ5").html("<h4>" + obj[4].answ5 + "</h4>");
                
            function zoo () {

                var animalNum = Math.floor((Math.random() * 10) + 1);    
                var animal;
                
                    if (animalNum === 1) {
                        animal = "assets/puppy-1.jpg";
                    } else if (animalNum === 2) {
                        animal = "assets/puppy-2.jpg";
                    } else if (animalNum === 3) {
                        animal = "assets/puppy-3.jpg";
                    } else if (animalNum === 4) {
                        animal = "assets/puppy-4.jpg";
                    } else if (animalNum === 5) {
                        animal = "assets/puppy-5.jpg";
                    } else if (animalNum === 6) {
                        animal = "assets/puppy-6.jpg";
                    } else if (animalNum === 7) {
                        animal = "assets/puppy-7.jpg";
                    } else if (animalNum === 8) {
                        animal = "assets/puppy-8.jpg";
                    } else if (animalNum === 9) {
                        animal = "assets/puppy-9.jpg";
                    } else if (animalNum === 10) {
                        animal = "assets/puppy-10.jpg";
                    }

                    $("#animalPic").html("<img src='" + animal + "'>")
            }
            var correctAnswer5 = obj[4].corrAnsw

            $("#containerQuestion5").toggle();

            $(".question5AnswerClss").on('click', function() {

                studentAnswer5 = $(this).text();

                if (studentAnswer5 == correctAnswer5) {
                    console.log('Q5 RIGHT!')
                    $("#containerQuestion5").toggle();
                    // ADD PUSH CODE TO DB
                    // ADD $ TO SCORE
                    reward();
                    
                    // delay for calling next question
                    setTimeout(function(){
                    $("#containerDone").toggle();
                }, 2000);
                    
                
                    
                zoo();

                } else {
                    console.log('Q5 WRONG')
                    // Add function that changes css of correct answer?  then short duration and move on
                    $("#containerQuestion5").html("<h1>" + obj[4].corrAnsw + "</h1>");
                            
                    setTimeout(function(){
                        
                        $("#containerQuestion5").toggle();
                        $("#containerDone").toggle();
                    }, 2000);
                    zoo();
                }

            });

}



        function reward() {

            var rewardObj = [{
                    picture: "kitten-1.png",
                    sound: "kittenSound1.mp3"
                },

                {
                    picture: "dog1.png",
                    sound: "dogBark1.mp3"
                },

                {
                    picture: "dog2.png",
                    sound: "dogBark1.mp3"
                },

                {
                    picture: "dog4.png",
                    sound: "dogBark1.mp3"
                },

                {
                    picture: "dog5.png",
                    sound: "dogBark1.mp3"
                },

                {
                    picture: "dog6.png",
                    sound: "dogBark1.mp3"
                },

                {
                    picture: "cat1.png",
                    sound: "kittenSound1.mp3"
                },

                {
                    picture: "cat2.png",
                    sound: "kittenSound1.mp3"
                },

                {
                    picture: "cat3.png",
                    sound: "kittenSound1.mp3"
                },

                {
                    picture: "dolphin1.png",
                    sound: "dolphin1.mp3"
                },

                {
                    picture: "dolphin2.png",
                    sound: "dolphin1.mp3"
                },

                {
                    picture: "tiger1.png",
                    sound: "tigerSound1.mp3"
                },

                {
                    picture: "tiger2.png",
                    sound: "tigerSound1.mp3"
                },

                {
                    picture: "tiger3.png",
                    sound: "tigerSound1.mp3"
                },

                {
                    picture: "tiger4.png",
                    sound: "tigerSound1.mp3"
                }

            ];


            var animalNum = Math.floor((Math.random() * 15) + 1);
            console.log(animalNum)

            if (animalNum == 1) {
                rewardAnimal = rewardObj[0].picture;
                rewardSound = rewardObj[0].sound;
                rewardSoundPlay();
            } else if (animalNum == 2) {
                rewardAnimal = rewardObj[1].picture;
                rewardSound = rewardObj[1].sound;
                rewardSoundPlay();
            } else if (animalNum == 3) {
                rewardAnimal = rewardObj[2].picture;
                rewardSound = rewardObj[1].sound;
                rewardSoundPlay();
            } else if (animalNum == 4) {
                rewardAnimal = rewardObj[3].picture;
                rewardSound = rewardObj[1].sound;
                rewardSoundPlay();
            } else if (animalNum == 5) {
                rewardAnimal = rewardObj[4].picture;
                rewardSound = rewardObj[1].sound;
                rewardSoundPlay();
            } else if (animalNum == 6) {
                rewardAnimal = rewardObj[5].picture;
                rewardSound = rewardObj[1].sound;
                rewardSoundPlay();
            } else if (animalNum == 7) {
                rewardAnimal = rewardObj[6].picture;
                rewardSound = rewardObj[0].sound;
                rewardSoundPlay();
            } else if (animalNum == 8) {
                rewardAnimal = rewardObj[7].picture;
                rewardSound = rewardObj[0].sound;
                rewardSoundPlay();
            } else if (animalNum == 9) {
                rewardAnimal = rewardObj[8].picture;
                rewardSound = rewardObj[0].sound;
                rewardSoundPlay();
            } else if (animalNum == 10) {
                rewardAnimal = rewardObj[9].picture;
                rewardSound = rewardObj[9].sound;
                rewardSoundPlay();
            } else if (animalNum == 11) {
                rewardAnimal = rewardObj[10].picture;
                rewardSound = rewardObj[9].sound;
                rewardSoundPlay();
            } else if (animalNum == 12) {
                rewardAnimal = rewardObj[11].picture;
                rewardSound = rewardObj[11].sound;
                rewardSoundPlay();
            } else if (animalNum == 13) {
                rewardAnimal = rewardObj[12].picture;
                rewardSound = rewardObj[11].sound;
                rewardSoundPlay();
            } else if (animalNum == 14) {
                rewardAnimal = rewardObj[13].picture;
                rewardSound = rewardObj[11].sound;
                rewardSoundPlay();
            } else if (animalNum == 15) {
                rewardAnimal = rewardObj[14].picture;
                rewardSound = rewardObj[11].sound;
                rewardSoundPlay();
            }


            var attributeNumber = Math.floor((Math.random() * 4) + 1);
            console.log(attributeNumber);
            if (attributeNumber == 1) {
                animationType = "roadRunnerAnimation";
            } else if (attributeNumber == 2) {
                animationType = "slinky";
            } else if (attributeNumber == 3) {
                animationType = "backNForth";
            } else if (attributeNumber == 4) {
                animationType = "jelly";
            }


            console.log(animationType);

            $("#rewardContainer").show();
            $("#rewardContainer").html("<img id='" + animationType + "' src='assets/" + rewardAnimal + "'>");
            // delay for reward containwer to close
            setTimeout(function(){
                $("#rewardContainer").hide();
                }, 2000);

        // Closes reward function
        }

        function rewardSoundPlay() {
            if (rewardSound == "kittenSound1.mp3")
                document.getElementById("kittenSound1").play();
            else if (rewardSound == "dogBark1.mp3") {
                document.getElementById("dogBark1").play();
            } else if (rewardSound == "dolphin1.mp3") {
                document.getElementById("dolphinSound").play();
            } else if (rewardSound == "tigerSound1.mp3") {
                document.getElementById("tigerSound").play();
            } 

        }

        console.log(rewardAnimal);
        console.log(rewardSound);


      // closes document ready function
    });
  

// another thing to think about is the date (I know you have day1, but what if they fail to do it on the day you send, 
// then they would be doing Day1 questions on Auust 2 or later)