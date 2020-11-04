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

//Insliden items about page

var paymentsstack = document.querySelector(".paymentsstack");

function toonplaatjes() {
    var element = document.getElementsByClassName("slidein");
    
    for (var i = 0; i < element.length; i++) {
        element[i].classList.toggle("hidden");
        element[i].classList.toggle("fade-in-element");
    }

}

paymentsstack.addEventListener("mouseenter", toonplaatjes);

