// this is a js file
var aboutButton = document.getElementById("aboutButton")
var bioButton = document.getElementById("bioButton")
var artStatementButton = document.getElementById("artistStatementButton")
var aboutPage = document.getElementById("aboutPage")
var biography = document.getElementById("biography")
var artistStatement = document.getElementById("artistStatement")
var videosSection = document.getElementById("videosSection")
var digitalArtSection = document.getElementById("digitalArtSection")
var physicalArtSection = document.getElementById("physicalArtSection")


var aboutPageIsShowing = false;
var bioIsShowing = false;
var artStatementIsShowing = false;
var videosSectionIsShowing = false;
var digitalIsShowing = false;
var physicalIsShowing = false;


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



function showVideos() {
    if (videosSectionIsShowing === false) {
        videosSection.style.display = "inline-block"
        videosSectionIsShowing = true;
        digitalIsShowing = false;
        digitalArtSection.style.display = "none"
        physicalArtSection.style.display = "none"
        physicalIsShowing = false;

    }
    else {
        videosSection.style.display = "none"
        videosSectionIsShowing = false;
    }
}

function showDigital() {
    if (digitalIsShowing === false) {
        digitalArtSection.style.display = "inline-block"
        digitalIsShowing = true;
        videosSection.style.display = "none"
        videosSectionIsShowing = false;
        physicalArtSection.style.display = "none"
        physicalIsShowing = false;

    }
    else {
        digitalArtSection.style.display = "none"
        digitalIsShowing = false;
    }
}

function showPhysical() {
    if (physicalIsShowing === false) {
        physicalArtSection.style.display = "inline-block"
        physicalIsShowing = true;
        digitalIsShowing = false;
        digitalArtSection.style.display = "none"
        videosSection.style.display = "none"
        videosSectionIsShowing = false;

    }
    else {
        physicalIsShowing = false;
        physicalArtSection.style.display = "none"
    }
}