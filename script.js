var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var window = document.querySelector('window');
var button = document.querySelector('button');

function backgroundGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

function randomize() {
    //TODO: Make this funciton better, slicing and bitwise?
    //https://www.paulirish.com/2009/random-hex-color-code-snippets/
    var a = '#' + Math.floor(Math.random() * 16777216).toString(16);
    var b = '#' + Math.floor(Math.random() * 16777216).toString(16);
    console.log(a);
    console.log(b);
    // color1.value = a;
    // color2.value = b;
    // backgroundGradient();
}

window.addEventListener("load", backgroundGradient);
color1.addEventListener("input", backgroundGradient);
color2.addEventListener("input", backgroundGradient);
button.addEventListener("click", randomize);