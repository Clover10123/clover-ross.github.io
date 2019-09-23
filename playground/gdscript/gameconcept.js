/*write code below*/
var candies = [chocolate,sourgummy,peppermint,butterscotch]
var chocolate = {
  supply:0,
  demand:2
}
var sourgummy ={
  supply:0,
  demand:2
}
var peppermint ={
  supply:0,
  demand:2
}
var butterscotch ={
  supply:0,
  demand:2
}

var playerOne = {
  name: "",
  favorite: "",
  hated: ""
}
var playerTwo = {
  name: "ADAM",
  favorite: "chocolate",
  hated: "sourgummy"
}
var playerThree = {
  name:"BELLA",
  favorite: "butterscotch",
  hated: "chocolate"
}


function ready() {
    document.getElementById("start").style.display = "none"
  while(playerOne.name == ""){
  playerOne.name = prompt("Enter your name.").toUpperCase()
  }
 alert("In this world, there are four candy types: peppermint, butterscotch, chocolate, and sourgummy.")
  while(playerOne.favorite == ""){
    var favorite = prompt("Among the candies, choose a favorite by typing the name.").toLowerCase()
  if (favorite == "butterscotch"){
    playerOne.favorite = "butterscotch";
  }
  else if(favorite == "chocolate"){
    playerOne.favorite = "chocolate";
  }
  else if(favorite == "sourgummy"){
    playerOne.favorite = "sourgummy";
  }
  else if(favorite == "peppermint"){
    playerOne.favorite = "peppermint";
  }
  else{
    playerOne.favorite = ""
  }
  
  }
  while (playerOne.hated == ""){
    var hated = prompt("Of the four, which do you like least?")
    if (hated == "butterscotch"){
    playerOne.hated = "butterscotch";
  }
  else if(hated == "chocolate"){
    playerOne.hated = "chocolate";
  }
  else if(hated == "sourgummy"){
    playerOne.hated = "sourgummy";
  }
  else if(hated == "peppermint"){
    playerOne.hated = "peppermint";
  }
  else{
    playerOne.hated = ""
  }
  console.log("PLAYER ONE: "+ playerOne.name)
  console.log("FAVORITE: "+playerOne.favorite+", HATED: "+playerOne.hated)
  document.getElementById("showPlayers").style.display = "inline-block"
  }
}

function showPlayers() {
    document.getElementById("playerScreen").style.display = "inline-block"
    document.getElementById("showPlayers").style.display = "none"
    document.getElementById("PlayerOneName").innerText = playerOne.name
    document.getElementById("PlayerTwoName").innerText = playerTwo.name
    document.getElementById("PlayerThreeName").innerText = playerThree.name
    document.getElementById("PlayerOneFavorite").innerText = playerOne.favorite
    document.getElementById("PlayerOneHated").innerText = playerOne.hated
    document.getElementById("knocker").style.display = "inline-block"
}


var players = [playerOne,playerTwo,playerThree]
var playerNames = [playerOne.name,playerTwo.name,playerThree.name]
var playerFavorites = [playerOne.favorite,playerTwo.favorite,playerThree.favorite]
var playerHated = [playerOne.hated,playerTwo.hated,playerThree.hated
]

function calculateDemand() {
  var i
  for (i=0;i<playerFavorites.length;i++){
    if (playerFavorites[i] == "chocolate"){
      chocolate.demand+= 1
    }
    if (playerFavorites[i] == "butterscotch"){
      butterscotch.demand+= 1
    }
    if (playerFavorites[i] == "sourgummy"){
      sourgummy.demand+= 1
    }
    if (playerFavorites[i] == "peppermint"){
      peppermint.demand+= 1
    }
    
  }
  for (i=0;i<playerHated.length;i++){
    if (playerHated[i]== "chocolate"){
      chocolate.demand -= 1
    }
    if (playerHated[i]=="butterscotch"){
      butterscotch.demand-=1
    }
    if (playerHated[i]=="sourgummy"){
      sourgummy.demand-=1
    }
    if (playerHated[i]=="peppermint"){
      peppermint.demand-=1
    }
    
  }
  
}


var candyBasket = []
var candyBasket2 = []
var candyBasket3 = []
function calculateSupply(){
  alert("Time to go trick or treating. There are ten doors to knock on.")
  document.getElementById("knocker").style.display = "none"
  alert("Distributing candies...")
  var i
  for (i=0;i<10;i++){
    var knock = Math.floor((Math.random()*100)+1);
    if (knock<30){
      candyBasket.push("peppermint")
      peppermint.supply+=1
    }
    if (knock>80){
      candyBasket.push("chocolate")
      chocolate.supply+=1
    }
    if (knock >=31 && knock <=50){
      candyBasket.push("butterscotch")
      butterscotch.supply+=1
    }
    else{
      candyBasket.push("sourgummy")
      sourgummy.supply+=1
    }
  }
  alert("Your candy basket is now full.")
  document.getElementById("sorter").style.display = "inline-block"
}



function calculateCompetition(){
    alert("ADAM is going to knock on some doors.")
  var i
  alert("Distributing candy for ADAM...")
  for (i=0;i<10;i++){
    var knock = Math.floor((Math.random()*100)+1);
    if (knock<30){
      candyBasket2.push("peppermint")
      peppermint.supply+=1
    }
    if (knock>80){
      candyBasket2.push("chocolate")
      chocolate.supply+=1
    }
    if (knock >=31 && knock <=50){
      candyBasket2.push("butterscotch")
      butterscotch.supply+=1
    }
    else{
      candyBasket2.push("sourgummy")
      sourgummy.supply+=1
    }
  }
  alert("ADAM's candy basket is now full.")
  document.getElementById("adamKnocker").style.display = "none"
  if (document.getElementById("bellaKnocker").style.display == "none"){
      document.getElementById("beginTrade").style.display = "inline-block"

  }
}
function calculateCompetition1(){
    alert("BELLA is going to knock on some doors.")
  var i
  alert("Distributing candy for BELLA...")
  for (i=0;i<10;i++){
    var knock = Math.floor((Math.random()*100)+1);
    if (knock<30){
      candyBasket3.push("peppermint")
      peppermint.supply+=1
    }
    if (knock>80){
      candyBasket3.push("chocolate")
      chocolate.supply+=1
    }
    if (knock >=31 && knock <=50){
      candyBasket3.push("butterscotch")
      butterscotch.supply+=1
    }
    else{
      candyBasket3.push("sourgummy")
      sourgummy.supply+=1
    }
  }
  alert("BELLA's candy basket is now full.")
  document.getElementById("bellaKnocker").style.display = "none"
  if (document.getElementById("adamKnocker").style.display == "none"){
      document.getElementById("beginTrade").style.display = "inline-block"
  }
}


var peppermintCount = 0
var chocolateCount = 0
var sourgummyCount = 0
var butterscotchCount = 0

var peppermintAdamCount = 0
var chocolateAdamCount = 0
var sourgummyAdamCount = 0
var butterscotchAdamCount = 0

var peppermintBellaCount = 0
var chocolateBellaCount = 0
var sourgummyBellaCount = 0
var butterscotchBellaCount = 0

function sortCandy(){
    alert("Now let's see how we did...")
  var i
  for (i=0;i<candyBasket.length;i++){
    if (candyBasket[i]=="butterscotch"){
      butterscotchCount+=1
        }
    if (candyBasket[i]=="sourgummy"){
      sourgummyCount+=1
    }
    if (candyBasket[i]=="chocolate"){
      chocolateCount+=1
    }
    if (candyBasket[i]=="peppermint"){
      peppermintCount+=1
    }
  }
}

function sortAdamCandy(){
    var i
    for (i=0;i<candyBasket2.length;i++){
      if (candyBasket2[i]=="butterscotch"){
        butterscotchAdamCount+=1
          }
      if (candyBasket2[i]=="sourgummy"){
        sourgummyAdamCount+=1
      }
      if (candyBasket2[i]=="chocolate"){
        chocolateAdamCount+=1
      }
      if (candyBasket2[i]=="peppermint"){
        peppermintAdamCount+=1
      }
    }
}

function sortBellaCandy() {
    var i
    for (i=0;i<candyBasket2.length;i++){
      if (candyBasket3[i]=="butterscotch"){
        butterscotchBellaCount+=1
          }
      if (candyBasket3[i]=="sourgummy"){
        sourgummyCount+=1
      }
      if (candyBasket3[i]=="chocolate"){
        chocolateCount+=1
      }
      if (candyBasket3[i]=="peppermint"){
        peppermintCount+=1
      }
    }
}

function prepareTrade(){
    sortBellaCandy()
    sortAdamCandy()
    console.log(peppermintAdamCount)
    console.log(peppermintBellaCount)
}

function warning(){
    document.getElementById("warning").style.display = "inline-block"
    var debug = prompt("This is all I've got right now.")
    if (debug == "show me the rest"){
        document.getElementById("secrets").style.display = "inline-block"
    }
}
function displayCandy(){
document.getElementById("results").style.display = "inline-block"
var a = document.getElementById("a")
var b = document.getElementById("b")
var c = document.getElementById("c")
var d = document.getElementById("d")
var e = document.getElementById("e")
a.innerText ="This is my candy basket result..."
b.innerText = peppermintCount
c.innerText = chocolateCount
d.innerText = sourgummyCount
e.innerText = butterscotchCount
document.getElementById("adamKnocker").style.display = "inline-block"
document.getElementById("bellaKnocker").style.display = "inline-block"
document.getElementById("sorter").style.display = "none"

}

