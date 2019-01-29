// this is a js file
var aboutButton = document.getElementById("aboutButton")
var bioButton = document.getElementById("bioButton")
var artStatementButton = document.getElementById("artistStatementButton")
var aboutPage = document.getElementById("aboutPage")
var biography = document.getElementById("biography")
var artistStatement = document.getElementById("artistStatement")

var aboutPageIsShowing = false;
var bioIsShowing = false;
var artStatementIsShowing = false;


function showBio() {
    if (bioIsShowing === false) {
        biography.style.display = "inline-block"
        bioIsShowing = true;
        artStatementIsShowing = false;
        aboutPageIsShowing = false;
        artistStatement.style.display = "none"
        aboutPage.style.display = "none"

    }
    else {
        biography.style.display = "none"
        artistStatement.style.display = "none"
        aboutPage.style.display = "none"
        bioIsShowing = false;
    }

}

function showArtStatement() {
    if (artStatementIsShowing === false) {
        artistStatement.style.display = "inline-block"
        artStatementIsShowing = true;
        bioIsShowing = false;
        aboutPageIsShowing = false;
        biography.style.display = "none"
        aboutPage.style.display = "none"
    }
    else {
        artistStatement.style.display = "none"
        artStatementIsShowing = false;
        biography.style.display = "none"
        aboutPage.style.display = "none"
    }
}

function showAbout() {
    if (aboutPageIsShowing === false) {
        aboutPage.style.display = "inline-block";
        aboutPageIsShowing = true;
        bioIsShowing = false;
        artStatementIsShowing = false;
        biography.style.display = "none"
        artistStatement.style.display = "none"
    }
    else {
        aboutPage.style.display = "none"
        aboutPageIsShowing = false;
        biography.style.display = "none"
        artistStatement.style.display = "none"
    }

}