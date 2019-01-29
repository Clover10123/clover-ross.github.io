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
        artistStatement.style.display = "none"
        aboutPage.style.display = "none"

    }
    else if (aboutPageIsShowing === true) {
        biography.style.display = "inline-block"
        aboutPage.style.display = "none"
        aboutPageIsShowing = false;
        bioIsShowing = true;
    }
    else if (artStatementIsShowing === true) {
        biography.style.display = "inline-block"
        artistStatement.style.display = "none"
        artStatementIsShowing = false;
        bioIsShowing = true;

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
        biography.style.display = "none"
        aboutPage.style.display = "none"
    }
    else if (bioIsShowing === true) {
        artistStatement.style.display = "inline-block"
        biography.style.display = "none"
        bioIsShowing = false;
        artStatementIsShowing = true;
    }
    else if (aboutPageIsShowing === true) {
        artistStatement.style.display = "inline-block"
        aboutPage.style.display = "none"
        aboutPageIsShowing = false;
        artStatementIsShowing = true;
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
        biography.style.display = "none"
        artistStatement.style.display = "none"
    }
    else if (artStatementIsShowing === true) {
        aboutPage.style.display = "inline-block"
        artistStatement.style.display = "none"
        artStatementIsShowing = false;
        aboutPageIsShowing = true;
    }
    else if (bioIsShowing === true) {
        aboutPage.style.display = "inline-block"
        biography.style.display = "none"
        bioIsShowing = false;
        aboutPageIsShowing = true;

    }
    else {
        aboutPage.style.display = "none"
        aboutPageIsShowing = false;
        biography.style.display = "none"
        artistStatement.style.display = "none"
    }

}