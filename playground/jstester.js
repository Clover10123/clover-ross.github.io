var numChocolate = 00;
var numVanilla = 00;
var numLime = 00;



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


function totalFlavor()
{
    var x = numVanilla + numLime + numChocolate;
    console.log(x);
    var percentVanilla = Math.ceil((numVanilla / x) * 100);
    var percentChocolate = Math.ceil((numChocolate / x) * 100);
    var percentLime = Math.ceil((numLime / x) * 100);
    console.log(percentVanilla + " " + percentChocolate + " " + percentLime)
    document.getElementById("chocpercent").innerText = percentChocolate;
    document.getElementById("limepercent").innerText = percentLime;
    document.getElementById("vanipercent").innerText = percentVanilla;

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



