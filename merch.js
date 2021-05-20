//merch modal

var modal = document.getElementById("merch__modal");
var btn1 = document.getElementById("product__btn1");
var btn2 = document.getElementById("product__btn2");
var btn3 = document.getElementById("product__btn3");
var btn4 = document.getElementById("product__btn4");
var btn5 = document.getElementById("product__btn5");
var btn6 = document.getElementById("product__btn6");
var span = document.getElementsByClassName("merch__close")[0];

btn1.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal.style.display = "block";
}
btn3.onclick = function() {
  modal.style.display = "block";
}
btn4.onclick = function() {
  modal.style.display = "block";
}
btn5.onclick = function() {
  modal.style.display = "block";
}
btn6.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

