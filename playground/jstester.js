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
}

function reset()
{
    numChocolate = 0;
    numVanilla = 0;
    numLime = 0;
}

