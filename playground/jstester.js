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
    if (x != 0)
    {
    console.log(x)
    document.getElementById("chocpercent").innerText = percentChocolate;
    document.getElementById("limepercent").innerText = percentLime;
    document.getElementById("vanipercent").innerText = percentVanilla;
    document.getElementById("strbpercent").innerText = percentStrawberry;
    console.log("You sold some smoothies.")
    console.log("Vanilla: "+numVanilla)
    console.log("Chocolate: "+numChocolate)
    console.log("Lime: "+numLime)
    console.log("Strawberry: "+numStrawberry)
    }
    var flavors = [numVanilla,numLime,numChocolate,numStrawberry];
    var biggest = []
    flavors.sort(function(b, a){return a-b});
    if (flavors[0] !== 0){
      biggest.push(flavors.shift())
      while (biggest[0] == flavors[0]){
        biggest.push(flavors.shift())
      }
      }
    else {

    }
    if (biggest.length > 1) {
      console.log("A tie!")
      document.getElementById("summary").innerText = "smoothies."
    }
    else if (biggest[0] == numStrawberry){
      console.log("Strawberry");
      document.getElementById("summary").innerText = "strawberry."
    }
    else if(biggest[0] == numVanilla){
      console.log("Vanilla");
      document.getElementById("summary").innerText = "vanilla."
    }
    else if(biggest[0] == numChocolate){
      console.log("Chocolate");
      document.getElementById("summary").innerText = "chocolate."
    }
    else if(biggest[0] == numLime){
      console.log("Lime");
      document.getElementById("summary").innerText = "lime."
    }
    else{
      window.alert("You didn't sell anything!");
      document.getElementById("summary").innerText = "..."
    }

}

function reset()
{
    numChocolate = 0;
    numVanilla = 0;
    numLime = 0;
    numStrawberry = 0;
    document.getElementById("chocpercent").innerText = "-";
    document.getElementById("limepercent").innerText = "-";
    document.getElementById("vanipercent").innerText = "-";
    document.getElementById("strbpercent").innerText = "-";
    document.getElementById("summary").innerText = "...";
}



