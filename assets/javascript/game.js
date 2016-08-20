var time = 0
var numright = 0;
var numwrong = 0;
var unanswered = 0;
var timeleft= 30;
var questionnum = 0;



$('.start').click(function gamestart(){
 
    document.querySelector('.start').innerHTML = ""
    timer = setInterval(time1, 1000);
    firstquestion()
})


function time1(){
    time++
    timeleft--
    document.querySelector('.timeremaining').innerHTML = "Time left: " +timeleft+" seconds."


    if (questionnum === 9 ) {
        document.querySelector('.timeremaining').innerHTML =""
    }

    if ((timeleft < 0)&&(questionnum !== 9)){
        unanswered++
        time = 30
        timeleft = 30
        timeoutscreen()
    }
}
function timeoutscreen(){
    $('.question').text("Out of time. The correct answer is: "+ answer)
    window.setTimeout(firstquestion, 3000)
    $('.answer1').unbind('click')
    $('.answer2').unbind('click')
    $('.answer3').unbind('click')
    $('.answer4').unbind('click')
    $('.images').append('<img id="theImg" src="assets/images/time.gif" />')
    $('.answer1').text("")
    $('.answer2').text("")
    $('.answer3').text("")
    $('.answer4').text("")


}

function wrongscreen(){
    $('.question').text("Wrong! The correct answer was " + answer)
    window.setTimeout(firstquestion, 3000)
    $('.answer1').unbind('click')
    $('.answer2').unbind('click')
    $('.answer3').unbind('click')
    $('.answer4').unbind('click')
    $('.answer1').text("")
    $('.answer2').text("")
    $('.answer3').text("")
    $('.answer4').text("")
    document.querySelector('.timeremaining').innerHTML =""

    numwrong++
}

function winscreen(){
  $('.question').text("Correct!")
   window.setTimeout(firstquestion, 3000)
    $('.answer1').unbind('click')
    $('.answer2').unbind('click')
    $('.answer3').unbind('click')
    $('.answer4').unbind('click')
    $('.answer1').text("")
    $('.answer2').text("")
    $('.answer3').text("")
    $('.answer4').text("")


    numright++
    }


function firstquestion(){
    questionnum++
    timeleft = 30;

    if (questionnum === 1){
    answer = ' Jay'
        $('.question').text("What is Homer's middle name?")
        $('.answer1').text("Homer")
        $('.answer2').text("Jay")
        $('.answer3').text( "Abe")
        $('.answer4').text("Bart")
        $('.images').text("")
        $('.answer1').on('click', function(){
            wrongscreen()
            $('.images').append('<img id="theImg" src="assets/images/homerj.png" />')
        });
        $('.answer2').on('click', function(){
            winscreen()
            $('.images').append('<img id="theImg" src="assets/images/homerj.png" />')
        });
        $('.answer3').on('click', function(){
            wrongscreen()
            $('.images').append('<img id="theImg" src="assets/images/homerj.png" />')

        });
        $('.answer4').on('click', function(){
            wrongscreen()
            $('.images').append('<img id="theImg" src="assets/images/homerj.png" />')

        });

    }


    if (questionnum === 2){
        answer = ' Mouse'

        $('.question').text("Itchy is a") 
        $('.answer1').text(" Mouse")
        $('.answer2').text(" Cat")
        $('.answer3').text( " Dog")
        $('.answer4').text(" I dont know")
        $('.images').text("")

         $('.answer1').on('click', function(){
            winscreen()
            $('.images').append('<img id="theImg" src="assets/images/itchy.png" />')
        });
        $('.answer2').on('click', function(){
            wrongscreen()
            $('.images').append('<img id="theImg" src="assets/images/itchy.png" />')
        });
          $('.answer3').on('click', function(){
            wrongscreen()
            $('.images').append('<img id="theImg" src="assets/images/itchy.png" />')
        });
        $('.answer4').on('click', function(){
            wrongscreen()
            $('.images').append('<img id="theImg" src="assets/images/itchy.png" />')
        });

    }

    if (questionnum === 3){
        answer = ' Charles'


        $('.question').text("What is Mr. Burn's first name?") 
        $('.answer1').text("Montgomery")
        $('.answer2').text("Charles")
        $('.answer3').text( "Monty")
        $('.answer4').text("Bernie")
        $('.images').text("")


         $('.answer1').on('click', function(){
            wrongscreen()
            $('.images').append('<img id="theImg" src="assets/images/burns.png" />')
        });
        $('.answer2').on('click', function(){
            winscreen()
            $('.images').append('<img id="theImg" src="assets/images/burns.png" />')
        });
          $('.answer3').on('click', function(){
            wrongscreen()
            $('.images').append('<img id="theImg" src="assets/images/burns.png" />')
        });
        $('.answer4').on('click', function(){
            wrongscreen()
            $('.images').append('<img id="theImg" src="assets/images/burns.png" />')
        });

    }
    if (questionnum === 4){
        answer = ' The Isotopes'


        $('.question').text("Which of these is Springfield's baseball team?") 
        $('.answer1').text("The Isotopes")
        $('.answer2').text("The Washington Nationals")
        $('.answer3').text( "The Fielders")
        $('.answer4').text("The Hawks")
        $('.images').text("")


         $('.answer1').on('click', function(){
            winscreen()
            $('.images').append('<img id="theImg" src="assets/images/isotope.png" />')
        });
        $('.answer2').on('click', function(){
            wrongscreen()
            $('.images').append('<img id="theImg" src="assets/images/isotope.png" />')
        });
          $('.answer3').on('click', function(){
            wrongscreen()
            $('.images').append('<img id="theImg" src="assets/images/isotope.png" />')
        });
        $('.answer4').on('click', function(){
            wrongscreen()
            $('.images').append('<img id="theImg" src="assets/images/isotope.png" />')
        });

    }
    if (questionnum === 5){
        answer = ' Squishee'


        $('.question').text("Which of these are sold at kwik-e-mart?") 
        $('.answer1').text("Slurpee")
        $('.answer2').text("Squishee")
        $('.answer3').text( "Big Gulp")
        $('.answer4').text("Slushie")
        $('.images').text("")


         $('.answer1').on('click', function(){
            wrongscreen()
             $('.images').append('<img id="theImg" src="assets/images/squishee.png" />')
        });
        $('.answer2').on('click', function(){
            winscreen()
             $('.images').append('<img id="theImg" src="assets/images/squishee.png" />')
        });
          $('.answer3').on('click', function(){
            wrongscreen()
             $('.images').append('<img id="theImg" src="assets/images/squishee.png" />')
        });
        $('.answer4').on('click', function(){
            wrongscreen()
             $('.images').append('<img id="theImg" src="assets/images/squishee.png" />')
        });

    }
    if (questionnum === 6){
        answer = ' Shelbyville'


        $('.question').text("Springfield's rival is the neighboring town of _______") 
        $('.answer1').text("Springburg")
        $('.answer2').text("west Springfield")
        $('.answer3').text( "Morrisville")
        $('.answer4').text("Shelbyville")
        $('.images').text("")


         $('.answer1').on('click', function(){
            wrongscreen()
            $('.images').append('<img id="theImg" src="assets/images/shelbyville.png" />')
        });
        $('.answer2').on('click', function(){
            wrongscreen()
            $('.images').append('<img id="theImg" src="assets/images/shelbyville.png" />')
        });
          $('.answer3').on('click', function(){
            wrongscreen()
            $('.images').append('<img id="theImg" src="assets/images/shelbyville.png" />')
        });
        $('.answer4').on('click', function(){
            winscreen()
            $('.images').append('<img id="theImg" src="assets/images/shelbyville.png" />')
        });

    }
    if (questionnum === 7){
        answer = ' Duff beer'


        $('.question').text("What is Homer's favorite beer? ") 
        $('.answer1').text("Miller High Life")
        $('.answer2').text("Pawtucket ale")
        $('.answer3').text( "Duff beer")
        $('.answer4').text("Budweiser")
        $('.images').text("")


         $('.answer1').on('click', function(){
            wrongscreen()
            $('.images').append('<img id="theImg" src="assets/images/duff.png" />')
        });
        $('.answer2').on('click', function(){
            wrongscreen()
            $('.images').append('<img id="theImg" src="assets/images/duff.png" />')
        });
          $('.answer3').on('click', function(){
            winscreen()
            $('.images').append('<img id="theImg" src="assets/images/duff.png" />')
        });
        $('.answer4').on('click', function(){
            wrongscreen()
            $('.images').append('<img id="theImg" src="assets/images/duff.png" />')
        });

    }
    if (questionnum === 8){
        answer = ' Nuclear power Plant'


        $('.question').text("Homer works at the") 
        $('.answer1').text("Tavern")
        $('.answer2').text("Unemployed")
        $('.answer3').text( "Nuclear Power Plant")
        $('.answer4').text("Office")
        $('.images').text("")


         $('.answer1').on('click', function(){
            wrongscreen()
            $('.images').append('<img id="theImg" src="assets/images/plant.png" />')
        });
        $('.answer2').on('click', function(){
            wrongscreen()
            $('.images').append('<img id="theImg" src="assets/images/plant.png" />')
        });
          $('.answer3').on('click', function(){
            winscreen()
            $('.images').append('<img id="theImg" src="assets/images/plant.png" />')
        });
        $('.answer4').on('click', function(){
            wrongscreen()
            $('.images').append('<img id="theImg" src="assets/images/plant.png" />')
        });

    }
    if (questionnum === 9){


        $('.question').text('Game Over')
        $('.answer1').text("Number Wrong: " + numwrong)
        $('.answer2').text("Number Right: " + numright)
        $('.answer3').text( "Unanswered: " + unanswered)
        $('.answer4').text("Start Over")
        $('.images').text("")
        $('.answer4').on('click', function(){
            questionnum = 0;
            numright = 0;
            numwrong = 0;
            unanswered = 0;
            firstquestion()
        });
    }

}