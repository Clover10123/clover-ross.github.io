
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
var introSkipper = document.getElementById("introSkipper")
var tieChecker = document.getElementById("tieChecker")
var doorRoom = document.getElementById("doorRoom")
var sunDoor = document.getElementById("sunDoor")
var moonDoor = document.getElementById("moonDoor")
var skyDoor = document.getElementById("skyDoor")
var waterDoor = document.getElementById("waterDoor")
var stoneDoor = document.getElementById("stoneDoor")
var fireDoor = document.getElementById("fireDoor")
var iceDoor = document.getElementById("iceDoor")
var lifeDoor = document.getElementById("lifeDoor")
var mindDoor = document.getElementById("mindDoor")
var lightningDoor = document.getElementById("lightningDoor")
var lightDoor = document.getElementById("lightDoor")
var darkDoor = document.getElementById("darkDoor")
var progressNumber = 0;




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
    introSkipper.style.display = "inline-block"
    tieChecker.style.display = "none"
    doorRoom.style.display = "none"
    sunDoor.style.display = "none"
    moonDoor.style.display = "none"
    skyDoor.style.display = "none"
    waterDoor.style.display = "none"
    stoneDoor.style.display = "none"
    fireDoor.style.display = "none"
    iceDoor.style.display = "none"
    lifeDoor.style.display = "none"
    mindDoor.style.display = "none"
    lightningDoor.style.display = "none"
    lightDoor.style.display = "none"
    darkDoor.style.display = "none"
    progressNumber = 0;

}

function openIntroduction() {
    
    progressNumber += 1;

    if (progressNumber === 1) {
        startButton.innerText = "Click to continue."
        intro1.style.display = "block"
    }
    else if (progressNumber === 2) {
        intro1.style.display = "none"
        intro2.style.display = "block"
    }
    else if (progressNumber === 3) {
        intro2.style.display = "none"
        intro3.style.display = "block"
    }
    else if (progressNumber === 4) {
        intro3.style.display = "none"
        intro4.style.display = "block"
    }
    else if (progressNumber === 5) {
        intro4.style.display = "none"
        intro5.style.display = "block"
    }
    else if (progressNumber === 6) {
        intro5.style.display = "none"
        intro6.style.display = "block"
    }
    else if (progressNumber === 7) {
        intro6.style.display = "none"
        intro7.style.display = "block"
    }
    else if (progressNumber === 8) {
        intro7.style.display = "none"
        intro8.style.display = "block"
    }
    else if (progressNumber === 9) {
        intro8.style.display = "none"
        intro9.style.display = "block"
    }
    else if (progressNumber === 10) {
        intro9.style.display = "none"
        intro10.style.display = "block"
    }
    else if (progressNumber === 11) {
        intro10.style.display = "none"
        intro11.style.display = "block"
    }
    else if (progressNumber === 12) {
        intro11.style.display = "none"
        intro12.style.display = "block"
    }
    else if (progressNumber >= 13) {
        intro12.style.display = "none"
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
    introSkipper.style.display = "none"

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
    var doorChoices = []


    for (var i = 0; i < winners.length; i++) {

        function candidate() {
            var k = winners[i]
            doorChoices.push(k)
        }



        candidate();
        if (winners[i] === "light") {
            lightDoor.style.display = "inline-block"
        }
        else if (winners[i] === "water") {          
            waterDoor.style.display = "inline-block"
        }
        else if (winners[i] === "sun") {
            sunDoor.style.display = "inline-block"
        }
        else if (winners[i] === "moon") {
            moonDoor.style.display = "inline-block"
        }
        else if (winners[i] === "sky") {
            skyDoor.style.display = "inline-block"
        }
        else if (winners[i] === "stone") {
            stoneDoor.style.display = "inline-block"
        }
        else if (winners[i] === "fire") {
            fireDoor.style.display = "inline-block"
        }
        else if (winners[i] === "ice") {
            iceDoor.style.display = "inline-block"
        }
        else if (winners[i] === "dark") {
            darkDoor.style.display = "inline-block"
        }
        else if (winners[i] === "lightning") {
            lightningDoor.style.display = "inline-block"
        }
        else if (winners[i] === "life") {
            lifeDoor.style.display = "inline-block"
        }
        else if (winners[i] === "mind") {
            mindDoor.style.display = "inline-block"

        }
        else { }


    }

    console.log("DOOR CHOICES: " + doorChoices)
    console.log("WINNERS: " + winners)



}

function getWinner(y) {
    var doorPROMPT = y;
        
    if (doorPROMPT === "") {

        alert("Invalid. Try again.")
    }
    else if (doorPROMPT === 1) {
        resultBox.style.display = "inline-block"
        resultDisplay.innerText = "sun"
        console.log("The result is: sun")
        finalResult = elements.sun
    }
    else if (doorPROMPT === 2) {
        resultBox.style.display = "inline-block"
        resultDisplay.innerText = "moon"
        console.log("The result is: moon")
        finalResult = elements.moon
    }
    else if (doorPROMPT === 3) {
        resultBox.style.display = "inline-block"
        resultDisplay.innerText = "sky"
        console.log("The result is: sky")
        finalResult = elements.sky
    }
    else if (doorPROMPT === 4) {
        resultBox.style.display = "inline-block"
        resultDisplay.innerText = "water"
        console.log("The result is: water")
        finalResult = elements.water
    }
    else if (doorPROMPT === 5) {
        resultBox.style.display = "inline-block"
        resultDisplay.innerText = "stone"
        console.log("The result is: stone")
        finalResult = elements.stone
    }
    else if (doorPROMPT === 6) {
        resultBox.style.display = "inline-block"
        resultDisplay.innerText = "fire"
        console.log("The result is: fire")
        finalResult = elements.fire
    }
    else if (doorPROMPT === 7) {
        resultBox.style.display = "inline-block"
        resultDisplay.innerText = "ice"
        console.log("The result is: ice")
        finalResult = elements.ice
    }
    else if (doorPROMPT === 8) {
        resultBox.style.display = "inline-block"
        resultDisplay.innerText = "life"
        console.log("The result is: life")
        finalResult = elements.life
    }
    else if (doorPROMPT === 9) {
        resultBox.style.display = "inline-block"
        resultDisplay.innerText = "mind"
        console.log("The result is: mind")
        finalResult = elements.mind
    }
    else if (doorPROMPT === 10) {
        resultBox.style.display = "inline-block"
        resultDisplay.innerText = "lightning"
        console.log("The result is: lightning")
        finalResult = elements.lightning
    }
    else if (doorPROMPT === 11) {
        resultBox.style.display = "inline-block"
        resultDisplay.innerText = "light"
        console.log("The result is: light")
        finalResult = elements.light
    }
    else if (doorPROMPT === 12) {
        resultBox.style.display = "inline-block"
        resultDisplay.innerText = "dark"
        console.log("The result is: dark")
        finalResult = elements.dark
    }
    else { }

    if (doorPROMPT > 0) {
        doorRoom.style.display = "none"
    }
}

        

    



function calcWinners() {
    tieChecker.style.display = "none"
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
        doorRoom.style.display = "inline-block"
        


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
        tieChecker.style.display = "inline-block"
        calcDebug.style.display = "inline-block"
    }
    else if (x === 2) {
        elements.dark += 1;
        elements.water += 1;
        elements.stone += 1;
        thirdQuestion.style.display = "none"
        tieChecker.style.display = "inline-block"
        calcDebug.style.display = "inline-block"
        
    }
    else if (x === 3) {
        elements.sky += 1;
        elements.lightning += 1;
        elements.life += 1;
        thirdQuestion.style.display = "none"
        tieChecker.style.display = "inline-block"
        calcDebug.style.display = "inline-block"
        
    }
    else if (x === 4) {
        elements.ice += 1;
        elements.mind += 1;
        elements.moon += 1;
        thirdQuestion.style.display = "none"
        tieChecker.style.display = "inline-block"
        calcDebug.style.display = "inline-block"
        

    }
    else {
        alert("ERROR, try again.")

    }
}



