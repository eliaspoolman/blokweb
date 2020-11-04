// JavaScript Document

//Menu werking
var menubutton = document.querySelector("header nav");

var closebutton = document.querySelector(".closemenu");

function toonmenu() {
    var element = document.getElementById("menustripe");
    element.classList.toggle("menustripe");
}

menubutton.addEventListener("click", toonmenu);

closebutton.addEventListener("click", toonmenu);

// Afspelen van typen codeeditor

var editorcontainer = document.querySelector(".editorcontainer");

function typeeditor() {
    var element = document.getElementsByClassName("editor");
    
    for (var i = 0; i < element.length; i++) {
        element[i].classList.add("typeneditor");
    }
}

editorcontainer.addEventListener("mouseenter", typeeditor);

//Insliden items about page

var paymentsstack = document.querySelector(".paymentsstack");

function toonplaatjes() {
    var element = document.getElementsByClassName("slidein");
    
    for (var i = 0; i < element.length; i++) {
        element[i].classList.remove("hidden");
        element[i].classList.add("fade-in-element");
    }

}

paymentsstack.addEventListener("mouseenter", toonplaatjes);

