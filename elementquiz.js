
//document functions below
var startButton = document.getElementById("starter")
var continue1 = document.getElementById("continue1")
var beginQuiz = document.getElementById("continue2")
var intro1 = document.getElementById("intro1")
var intro2 = document.getElementById("intro2")
var intro3 = document.getElementById("intro3")
var intro4 = document.getElementById("intro4")
var intro5 = document.getElementById("intro5")
var intro6 = document.getElementById("intro6")
var intro7 = document.getElementById("intro7")
var intro8 = document.getElementById("intro8")
var intro9 = document.getElementById("intro9")
var intro10 = document.getElementById("intro10")
var intro11 = document.getElementById("intro11")
var intro12 = document.getElementById("intro12")
var intro13 = document.getElementById("intro13")
var introPrompt = document.getElementById("introPrompt")
var quitButton = document.getElementById("quitbutton")
var firstQuestion = document.getElementById("firstQuestion")
var secondQuestion = document.getElementById("secondQuestion")
var thirdQuestion = document.getElementById("thirdQuestion")
var calcDebug = document.getElementById("calcDebug")
var resultDisplay = document.getElementById("resultDisplay")
var resultBox = document.getElementById("resultBox")


var valuesAreTied = false;
var winners = [];
var finalResult = " "


elements = {}
elements.sun = 00
elements.moon = 00;
elements.sky = 00;
elements.water = 00;
elements.stone = 00;
elements.fire = 00;
elements.light = 00;
elements.dark = 00;
elements.lightning = 00;
elements.mind = 00;
elements.life = 00;
elements.ice = 00;


function resetGame() {
   
    elements.sun = 00;
    elements.moon = 00;
    elements.sky = 00;
    elements.water = 00;
    elements.stone = 00;
    elements.fire = 00;
    elements.light = 00;
    elements.dark = 00;
    elements.lightning = 00;
    elements.mind = 00;
    elements.life = 00;
    elements.ice = 00;
    intro1.style.display = "none"
    intro2.style.display = "none"
    intro3.style.display = "none"
    intro4.style.display = "none"
    intro5.style.display = "none"
    intro6.style.display = "none"
    intro7.style.display = "none"
    intro8.style.display = "none"
    intro9.style.display = "none"
    intro10.style.display = "none"
    intro11.style.display = "none"
    intro12.style.display = "none"
    intro13.style.display = "none"
    quitButton.style.display = "none"
    firstQuestion.style.display = "none"
    secondQuestion.style.display = "none"
    thirdQuestion.style.display = "none"
    calcDebug.style.display = "none"
    valuesAreTied = false
    winners = []
    finalResult = " "
    startButton.innerText = "Click to begin."
    introPrompt.style.display = "none"
    startButton.style.display = "inline-block"
    resultBox.style.display = "none"
    resultDisplay.style.display = "none"

}

function openIntroduction() {
    if (intro1.style.display === "none") {
        startButton.innerText = "Click to continue."
        intro1.style.display = "block"
    }
    else if (intro2.style.display === "none") {
        intro2.style.display = "block"
    }
    else if (intro3.style.display === "none") {
        intro3.style.display = "block"
    }
    else if (intro4.style.display === "none") {
        intro4.style.display = "block"
    }
    else if (intro5.style.display === "none") {
        intro5.style.display = "block"
    }
    else if (intro6.style.display === "none") {
        intro6.style.display = "block"
    }
    else if (intro7.style.display === "none") {
        intro7.style.display = "block"
    }
    else if (intro8.style.display === "none") {
        intro8.style.display = "block"
    }
    else if (intro9.style.display === "none") {
        intro9.style.display = "block"
    }
    else if (intro10.style.display === "none") {
        intro10.style.display = "block"
    }
    else if (intro11.style.display === "none") {
        intro11.style.display = "block"
    }
    else if (intro12.style.display === "none") {
        intro12.style.display = "block"
    }
    else if (intro13.style.display === "none") {
        intro13.style.display = "block"
        introPrompt.style.display = "block"

    }
}

function continue2() {
    intro1.style.display = "none"
    intro2.style.display = "none"
    intro3.style.display = "none"
    intro4.style.display = "none"
    intro5.style.display = "none"
    intro6.style.display = "none"
    intro7.style.display = "none"
    intro8.style.display = "none"
    intro9.style.display = "none"
    intro10.style.display = "none"
    intro11.style.display = "none"
    intro12.style.display = "none"
    intro13.style.display = "none"
    introPrompt.style.display = "none"
    quitButton.style.display = "block"
    startButton.style.display = "none"
    firstQuestion.style.display = "inline-block"

}



function firstQuestionResponse(x) {
    if (x == 1) {
        elements.lightning += 1;
        elements.fire += 1;
        elements.dark += 1;
        firstQuestion.style.display = "none"
        secondQuestion.style.display = "inline-block"
    }
    else if (x == 2) {
        elements.sky += 1;
        elements.life += 1;
        elements.mind += 1;
        firstQuestion.style.display = "none"
        secondQuestion.style.display = "inline-block"
    }
    else if (x == 3) {
        elements.light += 1;
        elements.sun += 1;
        elements.water += 1;
        firstQuestion.style.display = "none"
        secondQuestion.style.display = "inline-block"
    }
    else if (x == 4) {
        elements.moon += 1;
        elements.stone += 1;
        elements.ice += 1;
        firstQuestion.style.display = "none"
        secondQuestion.style.display = "inline-block"
    }
    else {
        question1 = "EXIT"
    }


}

function tieBreaker() {
    calcDebug.style.display = "none"
    if (valuesAreTied == true) {
        var doorChoices = []



        for (var i = 0; i < winners.length; i++) {
            function candidate() {
                var k = winners[i]
                doorChoices.push(k)

            }
            if (winners[i] === "light") {
                alert("One door is a humble wooden door with no decoration.")

            }
            else if (winners[i] === "water") {
                alert("One door is made of glass. It is blue and green, and sparkles in the light.")

            }
            else if (winners[i] === "sun") {
                alert("One door is laced with gold, with a lovely small window letting in sunlight.")
            }
            else if (winners[i] === "moon") {
                alert("One door is painted black with silvery glitter across the center.")
            }
            else if (winners[i] === "sky") {
                alert("One is not a door, it is a blue archway that lets in cool air.")
            }
            else if (winners[i] === "stone") {
                alert("One is a sturdy, steel door with a solid impact resistant frame.")
            }
            else if (winners[i] === "fire") {
                alert("One is a metal door with bright red and white lights all around.")
            }
            else if (winners[i] === "ice") {
                alert("One is a clear door made entirely of perfectly transparent glass.")
            }
            else if (winners[i] === "dark") {
                alert("One is a wooden door with a glass window revealing black emptiness behind.")
            }
            else if (winners[i] === "lightning") {
                alert("One is a door covered in bright neon lights.")
            }
            else if (winners[i] === "life") {
                alert("One is a mossy wooden door which smells of roses.")
            }
            else if (winners[i] === "mind") {
                alert("One door looks more like a crystal mirror. You clearly see your face.")
            }
            else {

            }
            candidate();


        }
        console.log("DOOR CHOICES: " + doorChoices)
        console.log("WINNERS: " + winners)



        while (finalResult === " ") {
            var doorPROMPT = parseFloat(prompt("CHOOSE A DOOR."));

            if (doorPROMPT > doorChoices.length) {
                alert("Invalid. Try again.")
            }
            else if (doorPROMPT === 1) {
                resultBox.style.display = "inline-block"
                resultDisplay.innerText = doorChoices[0]
                console.log("The result is: " + doorChoices[0])
                finalResult = doorChoices[0]
            }
            else if (doorPROMPT === 2) {
                resultBox.style.display = "inline-block"
                resultDisplay.innerText = doorChoices[1]
                console.log("The result is: " + doorChoices[1])
                finalResult = doorChoices[1]
            }
            else if (doorPROMPT === 3) {
                resultBox.style.display = "inline-block"
                resultDisplay.innerText = doorChoices[2]
                console.log("The result is: " + doorChoices[2])
                finalResult = doorChoices[2]
            }
            else if (doorPROMPT === 4) {
                resultBox.style.display = "inline-block"
                resultDisplay.innerText = doorChoices[3]
                console.log("The result is: " + doorChoices[3])
                finalResult = doorChoices[3]
            }
            else if (doorPROMPT === 5) {
                resultBox.style.display = "inline-block"
                resultDisplay.innerText = doorChoices[4]
                console.log("The result is: " + doorChoices[4])
                finalResult = doorChoices[4]
            }
            else if (doorPROMPT === 6) {
                resultBox.style.display = "inline-block"
                resultDisplay.innerText = doorChoices[5]
                console.log("The result is: " + doorChoices[5])
                finalResult = doorChoices[5]
            }
            else if (doorPROMPT === 7) {
                resultBox.style.display = "inline-block"
                resultDisplay.innerText = doorChoices[6]
                console.log("The result is: " + doorChoices[6])
                finalResult = doorChoices[6]
            }
            else if (doorPROMPT === 8) {
                resultBox.style.display = "inline-block"
                resultDisplay.innerText = doorChoices[7]
                console.log("The result is: " + doorChoices[7])
                finalResult = doorChoices[7]
            }
            else if (doorPROMPT === 9) {
                resultBox.style.display = "inline-block"
                resultDisplay.innerText = doorChoices[8]
                console.log("The result is: " + doorChoices[8])
                finalResult = doorChoices[8]
            }
            else {
                var escape = prompt("Type 0 to abort.")
                if (escape === "0") {
                    finalResult = "wrench"
                }
            }

        }

    }
}


function calcWinners() {
    var keys = Object.keys(elements)
    var values = Object.values(elements)
    var LARGEST = Math.max(...values)
    for (var i = 0; i < keys.length; i++) {
        if (values[i] === LARGEST) {
            var x = winners.push(keys[i])
            console.log("Largest: " + LARGEST)

        }
    }


    if (winners.length > 1) {
        console.log("TIE.")
        valuesAreTied = true
        tieBreaker();
        


    }
    else {
        console.log("Your result is: " + winners)
        calcDebug.style.display = "none"
        resultBox.style.display = "inline-block"
        resultDisplay.innerText = winners[0]
    }
}


var playerExited = false;


function secondQuestionResponse(x) {
    
    if (x === 1) {
        elements.light += 1;
        elements.life += 1;
        elements.water += 1;
        secondQuestion.style.display = "none"
        thirdQuestion.style.display = "inline-block"
        
    }
    else if (x === 2) {
        elements.lightning += 1;
        elements.sun += 1;
        elements.sky += 1;
        secondQuestion.style.display = "none"
        thirdQuestion.style.display = "inline-block"
        
    }
    else if (x === 3) {
        elements.moon += 1;
        elements.dark += 1;
        elements.mind += 1;
        secondQuestion.style.display = "none"
        thirdQuestion.style.display = "inline-block"
        
    }
    else if (x === 4) {
        elements.fire += 1;
        elements.ice += 1;
        elements.stone += 1;
        secondQuestion.style.display = "none"
        thirdQuestion.style.display = "inline-block"
        

    }
    
    else {
        alert("ERROR, try again.")

    }
}


function thirdQuestionResponse(x) {

    if (x === 1) {
        elements.light += 1;
        elements.water += 1;
        elements.sun += 1;
        thirdQuestion.style.display = "none"
        calcDebug.style.display = "inline-block"
    }
    else if (x === 2) {
        elements.dark += 1;
        elements.water += 1;
        elements.stone += 1;
        thirdQuestion.style.display = "none"
        calcDebug.style.display = "inline-block"
        
    }
    else if (x === 3) {
        elements.sky += 1;
        elements.lightning += 1;
        elements.life += 1;
        thirdQuestion.style.display = "none"
        calcDebug.style.display = "inline-block"
        
    }
    else if (x === 4) {
        elements.ice += 1;
        elements.mind += 1;
        elements.moon += 1;
        thirdQuestion.style.display = "none"
        calcDebug.style.display = "inline-block"
        

    }
    else {
        alert("ERROR, try again.")

    }
}



