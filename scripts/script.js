// JavaScript Document
var menubutton = document.querySelector("header nav");

var closebutton = document.querySelector(".closemenu");

function toonmenu() {
  var element = document.getElementById("menustripe");
  element.classList.toggle("menustripe");
}

menubutton.addEventListener("click", toonmenu);

closebutton.addEventListener("click", toonmenu);