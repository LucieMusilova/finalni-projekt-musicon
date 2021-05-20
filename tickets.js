//tickets modal

var modalo = document.getElementById("tickets__modal");
var btn7 = document.getElementById("tickets__btn1");
var btn8 = document.getElementById("tickets__btn2");
var btn9 = document.getElementById("tickets__btn3");
var btn10 = document.getElementById("tickets__btn4");
var span1 = document.getElementsByClassName("tickets__close")[0];

btn7.onclick = function() {
  modalo.style.display = "block";
}

btn8.onclick = function() {
  modalo.style.display = "block";
}
btn9.onclick = function() {
  modalo.style.display = "block";
}
btn10.onclick = function() {
  modalo.style.display = "block";
}

span1.onclick = function() {
  modalo.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalo) {
    modalo.style.display = "none";
  }
}
