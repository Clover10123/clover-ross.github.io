var foodSteal = false;
var foodPay = false;
var abeSurvived = false;
var hasReligion = false;
var emmaDead = false;
var calcResult = 00;



function StartCalc() {
var e = document.getElementById("Game");
var d = document.getElementById("startbutton");
var f = document.getElementById("charitychoice");
if (e.style.display === "none")
{
    e.style.display = "block"
    d.style.display = "none"
    f.style.display = "block"
}
else 
{
    e.style.display = "none"
    f.style.display = "none"
}

};

function ResetCalc() 
{
    var a = document.getElementById("startbutton");
    var b = document.getElementById("Game")
    var c = document.getElementById("charitychoice");
    var d = document.getElementById("CaraAlexEncounter");
    var e = document.getElementById("AbeEncounter")
    var f = document.getElementById("Large");
    var g = document.getElementById("Enough");
    var h = document.getElementById("HowMuchFood");
    var i = document.getElementById("stealquestion")
    var j = document.getElementById("steal1")
    var k = document.getElementById("steal2")
    var l = document.getElementById("steal3")
    var m = document.getElementById("payquestion")
    var n = document.getElementById("pay1")
    var o = document.getElementById("pay2")
    var p = document.getElementById("pay3")
    var q = document.getElementById("pay4")
    var r = document.getElementById("sharedecision")
    var s = document.getElementById("Share")
    var t = document.getElementById("NoShare")
    var u = document.getElementById("aberescued")
    var v = document.getElementById("MedSteal")
    var w = document.getElementById("religiousness")
    var x = document.getElementById("Stewart")
    var y = document.getElementById("StewartSansA")
    var z = document.getElementById("a712")
    var a1 = document.getElementById("trolley72a")
    var a2 = document.getElementById("abepress72a")
    var a3 = document.getElementById("a713")
    var a4 = document.getElementById("encouraged")
    var a5 = document.getElementById("discouraged")
    var a6 = document.getElementById("trolley73a")
    var a7 = document.getElementById("discourage")
    var a8 = document.getElementById("encourage")
    var a9 = document.getElementById("trolley72x")
    var b1 = document.getElementById("trolley73x")
    var b2 = document.getElementById("evadepink")
    var b3 = document.getElementById("evadeorange")
    var b4 = document.getElementById("evadepurple")
    var b5 = document.getElementById("evadecyan")
    var b6 = document.getElementById("No812ad")
    var b7 = document.getElementById("No813ad")
    var b8 = document.getElementById("why812ap")
    var b9 = document.getElementById("why813ap")
    var c1 = document.getElementById("No812d")
    var c2 = document.getElementById("why812p")
    var c3 = document.getElementById("No813d")
    var c4 = document.getElementById("why813p")
    var c5 = document.getElementById("Push812ap")
    var c6 = document.getElementById("why812ad")
    var c7 = document.getElementById("Push813ap")
    var c8 = document.getElementById("why813ad")
    var c9 = document.getElementById("Push812p")
    var d1 = document.getElementById("why812d")
    var d2 = document.getElementById("Push813p")
    var d3 = document.getElementById("why813d")
    var d4 = document.getElementById("resultdisplay")


    foodPay = false;
    foodSteal = false;
    abeSurvived = false;
    hasReligion = false;
    emmaDead = false;
    calcResult = 00;

    if (a.style.display === "none")
    {
        a.style.display = "inline-block"
        b.style.display = "none"
        c.style.display = "none"
        d.style.display = "none"
        e.style.display = "none"
        f.style.display = "none"
        g.style.display = "none"
        h.style.display = "none"
        i.style.display = "none"
        j.style.display = "none"
        k.style.display = "none"
        l.style.display = "none"
        m.style.display = "none"
        n.style.display = "none"
        o.style.display = "none"
        p.style.display = "none"
        q.style.display = "none"
        r.style.display = "none"
        s.style.display = "none"
        t.style.display = "none"
        u.style.display = "none"
        v.style.display = "none"
        w.style.display = "none"
        x.style.display = "none"
        y.style.display = "none"
        z.style.display = "none"
        a1.style.display = "none"
        a2.style.display = "none"
        a3.style.display = "none"
        a4.style.display = "none"
        a5.style.display = "none"
        a6.style.display = "none"
        a7.style.display = "inline-block"
        a8.style.display = "inline-block"
        a9.style.display = "none"
        b1.style.display = "none"
        b2.style.display = "inline-block"
        b3.style.display = "inline-block"
        b4.style.display = "inline-block"
        b5.style.display = "inline-block"
        b6.style.display = "inline-block"
        b7.style.display = "inline-block"
        b8.style.display = "none"
        b9.style.display = "none"
        c1.style.display = "inline-block"
        c2.style.display = "none"
        c3.style.display = "inline-block"
        c4.style.display = "none"
        c5.style.display = "inline-block"
        c6.style.display = "none"
        c7.style.display = "inline-block"
        c8.style.display = "none"
        c9.style.display = "inline-block"
        d1.style.display = "none"
        d2.style.display = "inline-block"
        d3.style.display = "none"
        d4.style.display = "none"
     
    }
    else 
    {
        alert("The game is already reset.")
    }
}

function firstchoice() 
{
    var a = document.getElementById("CaraAlexEncounter");
    var b = document.getElementById("charitychoice")
    if (a.style.display === "none")
    {
        a.style.display = "block"
        b.style.display = "none"
    }
    else 
    {
        alert("Error. Please click reset.")
    }

}


function stealpaychoice() 
{
  var a = document.getElementById("Large")
  var b = document.getElementById("Enough")
  var c = document.getElementById("HowMuchFood")

  if (a.style.display === "none" && b.style.display === "none"&& c.style.display === "none")
  {
      a.style.display = "inline-block"
      b.style.display = "inline-block"
      c.style.display = "inline-block"
  }
  else 
  {
      alert("Error. Please click reset.")
  }
}

function sharechoice() 
{
    var a = document.getElementById("sharedecision")
    var b = document.getElementById("Share")
    var c = document.getElementById("NoShare")
    if (a.style.display === "none"&& b.style.display === "none" && c.style.display ==="none")
    {
        a.style.display = "inline-block"
        b.style.display = "inline-block"
        c.style.display = "inline-block"

    }
    else 
    {
        alert("Error. Please click reset.")
    }
}

// flag for steal or pay
function stealFlag(){
    foodSteal = true;
}
function payFlag()
{
    foodPay = true;
}

function stealquestioning()
{
    if (foodSteal == true)
    {
        var a = document.getElementById("stealquestion")
        var b = document.getElementById("steal1")
        var c = document.getElementById("steal2")
        var d = document.getElementById("steal3")
        if (a.style.display === "none" && b.style.display === "none" && c.style.display === "none" && d.style.display === "none")
        {
            a.style.display = "block"
            b.style.display = "inline-block"
            c.style.display = "inline-block"
            d.style.display = "inline-block"
        }

        else 
        {
            alert("Error. Please click reset.")
        }
    }
}

function payquestioning() 
{
    if (foodPay == true)
    {
        var a = document.getElementById("payquestion")
        var b = document.getElementById("pay1")
        var c = document.getElementById("pay2")
        var d = document.getElementById("pay3")
        var e = document.getElementById("pay4")
        if (a.style.display === "none" && b.style.display === "none" && c.style.display === "none" && d.style.display === "none" && e.style.display === "none")
        {
            a.style.display = "inline-block"
            b.style.display = "inline-block"
            c.style.display = "inline-block"
            d.style.display = "inline-block"
            e.style.display = "inline-block"
        }

        else 
        {
            alert("Error. Please click reset.")
        }
    }
}

function toAct2()
{
    var a = document.getElementById("CaraAlexEncounter")
    var b = document.getElementById("AbeEncounter")
    if (a.style.display === "block" && b.style.display === "none")
    {
        a.style.display = "none"
        b.style.display = "block"
    }
    else 
    {
        alert("Error. Please click reset.")
    }
}



function goodSamaritanPass() 
{
    abeSurvived = true;
}

function goodSamaritanTest()
{
    if (abeSurvived == true)
    {
        var a = document.getElementById("aberescued")
        if (a.style.display === "none")
        {
            a.style.display = "inline-block"
        }
        else 
        {
            alert("Error. Please click reset.")
        }
    }

    else 
    {
        var z = document.getElementById("AbeEncounter")
        var y = document.getElementById("MedSteal")
        if(z.style.display === "block" && y.style.display === "none")
        {
            z.style.display = "none"
            y.style.display = "block"
        }
        else
        {
            alert("Error. Please click reset.")
        }
    }
}

function religionCheck()
{
    hasReligion = true;
}

function confirmReligion()
{
    var a = document.getElementById("religiousness")
    if (a.style.display === "none")
    {
        a.style.display = "inline-block"
    }
}

function toMemU()
{
    var z = document.getElementById("AbeEncounter")
    var y = document.getElementById("MedSteal")
    if(z.style.display === "block" && y.style.display === "none")
    {
        z.style.display = "none"
        y.style.display = "block"
    }
    else
    {
        alert("Error. Please click reset.")
    }
}


function toStewartChoice()
{
    var a = document.getElementById("MedSteal")
    var b = document.getElementById("Stewart")
    var c = document.getElementById("StewartSansA")
    if (abeSurvived == true)
    {
        if (a.style.display === "block" && b.style.display === "none")
        {
            a.style.display = "none"
            b.style.display = "inline-block"
        }
        else
        {
            alert("Error. Please click reset.")
        }
    }
    else
    {
        if (a.style.display === "block" && c.style.display === "none")
        {
            a.style.display = "none"
            c.style.display = "inline-block"
        }
        else
        {
            alert("Error. Please click reset.")
        }
    }
}

function scene72a()
{
    var a = document.getElementById("a712")
    if(a.style.display === "none")
    {
        a.style.display = "inline-block"
    }
    else 
    {
        alert("Error. Please click reset.")
    }
}

function toTrolley72a()
{
    var a = document.getElementById("Stewart")
    var b = document.getElementById("trolley72a")
    if(a.style.display === "inline-block" && b.style.display === "none")
    {
        a.style.display = "none"
        b.style.display = "block"
    }
    else
    {
        alert("Error. Please click reset.")
    }
}

function neutral72a()
{
    var a = document.getElementById("abepress72a")
    if(a.style.display === "none")
    {
        a.style.display = "inline-block"
    }
}

function scene73a() 
{
    var a = document.getElementById("a713")
    if(a.style.display === "none")
    {
        a.style.display = "block"
    }
    else
    {
        alert("Error. Please click reset.")
    }

}

function encouraged()
{
    var a = document.getElementById("encouraged")
    var b = document.getElementById("discourage")
    if(a.style.display === "none")
    {
        a.style.display = "inline-block"
        b.style.display= "none"
    }
    else
    {
        alert("Error. Please click reset.")
    }
}

function discouraged()
{
    var a = document.getElementById("discouraged")
    var b = document.getElementById("encourage")
    if(a.style.display === "none")
    {
        a.style.display = "inline-block"
        b.style.display = "none"
    }
    else
    {
        alert("Error. Please click reset.")
    }

}

function toTrolley73a()
{
    var a = document.getElementById("Stewart")
    var b = document.getElementById("trolley73a")
    if(a.style.display === "inline-block" && b.style.display === "none")
    {
        a.style.display = "none"
        b.style.display = "block"
    }
    else 
    {
        alert("Error. Please click reset.")
    }

}

function toTrolley72x()
{
    var a = document.getElementById("StewartSansA")
    var b = document.getElementById("trolley72x")
    if (a.style.display === "inline-block" && b.style.display === "none")
    {
        a.style.display = "none"
        b.style.display = "block"
    }
    else 
    {
        alert("Error. Please click reset.")
    }
}

function toTrolley73x()
{
    var a = document.getElementById("StewartSansA")
    var b = document.getElementById("trolley73x")
    if (a.style.display === "inline-block" && b.style.display === "none")
    {
        a.style.display = "none"
        b.style.display = "block"
    }
    else
    {
        alert("Error. Please click reset.")
    }
}

//Trolley Problem stuff below

function findAnotherWayPink()
{
    var a = document.getElementById("evadepink")
    if (a.style.display === "inline-block")
    {
        a.style.display = "none"
    }
    else
    {
        alert("Error. Please click reset.")
    }
}

function findAnotherWayOrange()
{
    var a = document.getElementById("evadeorange")
    if (a.style.display === "inline-block")
    {
        a.style.display = "none"
    }
    else
    {
        alert("Error. Please click reset.")
    }
}
function findAnotherWayPurple()
{
    var a = document.getElementById("evadepurple")
    if (a.style.display === "inline-block")
    {
        a.style.display = "none"
    }
    else
    {
        alert("Error. Please click reset.")
    }
}
function findAnotherWayCyan()
{
    var a = document.getElementById("evadecyan")
    if (a.style.display === "inline-block")
    {
        a.style.display = "none"
    }
    else
    {
        alert("Error. Please click reset.")
    }
}
// push
function pushQuestionPink()
{
    var a = document.getElementById("No812ad")
    var b = document.getElementById("evadepink")
    var c = document.getElementById("why812ap")
    if (c.style.display === "none")
    {
        a.style.display = "none"
        b.style.display = "none"
        c.style.display = "inline-block"
    }
    else
    {
        alert("Error. Please click reset.")
    }
}

function pushQuestionOrange()
{
    var a = document.getElementById("No813ad")
    var b = document.getElementById("evadeorange")
    var c = document.getElementById("why813ap")
    if (c.style.display === "none")
    {
        a.style.display = "none"
        b.style.display = "none"
        c.style.display = "inline-block"
    }
    else
    {
        alert("Error. Please click reset.")
    }
}

function pushQuestionPurple()
{
    var a = document.getElementById("No812d")
    var b = document.getElementById("evadepurple")
    var c = document.getElementById("why812p")
    if (c.style.display === "none")
    {
        a.style.display = "none"
        b.style.display = "none"
        c.style.display = "inline-block"
    }
    else
    {
        alert("Error. Please click reset.")
    }
}

function pushQuestionCyan()
{
    var a = document.getElementById("No813d")
    var b = document.getElementById("evadecyan")
    var c = document.getElementById("why813p")
    if (c.style.display === "none")
    {
        a.style.display = "none"
        b.style.display = "none"
        c.style.display = "inline-block"
    }
    else
    {
        alert("Error. Please click reset.")
    }
}
// don't push
function noPushQuestionPink()
{
    var a = document.getElementById("Push812ap")
    var b = document.getElementById("evadepink")
    var c = document.getElementById("why812ad")
    if (c.style.display === "none")
    {
        a.style.display = "none"
        b.style.display = "none"
        c.style.display = "inline-block"
    }
    else
    {
        alert("Error. Please click reset.")
    }
}

function noPushQuestionOrange()
{
    var a = document.getElementById("Push813ap")
    var b = document.getElementById("evadeorange")
    var c = document.getElementById("why813ad")
    if (c.style.display === "none")
    {
        a.style.display = "none"
        b.style.display = "none"
        c.style.display = "inline-block"
    }
    else
    {
        alert("Error. Please click reset.")
    }
    
}

function noPushQuestionPurple()
{
    var a = document.getElementById("Push812p")
    var b = document.getElementById("evadepurple")
    var c = document.getElementById("why812d")
    if (c.style.display === "none")
    {
        a.style.display = "none"
        b.style.display = "none"
        c.style.display = "inline-block"
    }
    else
    {
        alert("Error. Please click reset.")
    }
    
}

function noPushQuestionCyan()
{
    var a = document.getElementById("Push813p")
    var b = document.getElementById("evadecyan")
    var c = document.getElementById("why813d")
    if(c.style.display === "none")
    {
        a.style.display = "none"
        b.style.display = "none"
        c.style.display = "inline-block"
    }
    else
    {
        alert("Error. Please click reset.")
    }
}

function displayResult()
{
   
    document.getElementById("resultdisplay").innerText = calcResult;
    var a = document.getElementById("resultdisplay")
    if(a.style.display === "none")
    {
        a.style.display = "inline-block"
    }
    else
    {
        alert("Error. Please click reset.")
    }
    

}