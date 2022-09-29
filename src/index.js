import './style.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';

let kep = document.getElementById("url");
let kepszelte = document.getElementById("kepszelte");
let kepvastag = document.getElementById("kepvastag");
let kepszin = document.getElementById("kepszin");

function init(){
    document.getElementById('kephelye').src = kep.value;

    document.getElementById('kephelye').width = kepszelte.value;

    document.getElementById('kephelye').border = kepvastag.value;

    document.getElementById('kephelye').style.borderColor = kepszin.value;

    console.log('Init');
}

function Myfunction(){
    document.body.classList.toggle("dark-mode");
}


document.addEventListener('DOMContentLoaded', init);
console.log("Loaded");