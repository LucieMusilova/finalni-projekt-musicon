//prakticke modal
var okno = document.getElementById("practical__modal");
var button1 = document.getElementById("practical__button1");
var button2 = document.getElementById("practical__button2");
var button3 = document.getElementById("practical__button3");
var krizek = document.getElementsByClassName("practical__close")[0];

button1.onclick = function() {
  okno.style.display = "block";
}
button2.onclick = function() {
  okno.style.display = "block";
}
button3.onclick = function() {
  okno.style.display = "block";
}

krizek.onclick = function() {
  okno.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == okno) {
    okno.style.display = "none";
  }
}