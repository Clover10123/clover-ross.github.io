var numChocolate = 00;
var numVanilla = 00;
var numLime = 00;
var numStrawberry = 00;


function addChoco(number)
{
    var x = number + numChocolate;
    numChocolate = x;
    
}

function addVanil(number)
{
    var x = number + numVanilla;
    numVanilla = x;
   
}

function addLimes(number)
{
    var x = number + numLime;
    numLime = x;
    
}

function addStraw(number) {
  var x = number + numStrawberry;
  numStrawberry = x;
}


function totalFlavor()
{
    var x = numVanilla + numLime + numChocolate + numStrawberry;
    var percentVanilla = Math.ceil((numVanilla / x) * 100);
    var percentChocolate = Math.ceil((numChocolate / x) * 100);
    var percentLime = Math.ceil((numLime / x) * 100);
    var percentStrawberry = Math.ceil((numStrawberry / x)*100);
    document.getElementById("chocpercent").innerText = percentChocolate;
    document.getElementById("limepercent").innerText = percentLime;
    document.getElementById("vanipercent").innerText = percentVanilla;
    document.getElementById("strbpercent").innerText = percentStrawberry;
    console.log("You sold some smoothies.")
    console.log("Vanilla: "+numVanilla)
    console.log("Chocolate: "+numChocolate)
    console.log("Lime: "+numLime)
    console.log("Strawberry: "+numStrawberry)


    if (numVanilla > numLime && numVanilla > numChocolate)
    {
        document.getElementById("summary").innerText = "vanilla."
    }
    else if (numChocolate > numLime && numChocolate > numVanilla)
    {
        document.getElementById("summary").innerText = "chocolate."
    }
    else if (numLime > numVanilla && numLime > numChocolate)
    {
        document.getElementById("summary").innerText = "lime."
    }
    else if (numStrawberry > numLime && numStrawberry > numChocolate)
    {
      document.getElementById("summary").innerText = "strawberry."
    }
    else{}
}

function reset()
{
    numChocolate = 0;
    numVanilla = 0;
    numLime = 0;
    document.getElementById("chocpercent").innerText = "x";
    document.getElementById("limepercent").innerText = "x";
    document.getElementById("vanipercent").innerText = "x";
    document.getElementById("summary").innerText = "...";
}



