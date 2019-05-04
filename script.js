var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var window = document.getElementsByTagName('window')[0];

function backgroundGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

window.addEventListener("load", backgroundGradient);
color1.addEventListener("input", backgroundGradient);
color2.addEventListener("input", backgroundGradient);