document.getElementById("submit").onclick = function () {
  let a = document.getElementById("side-1").value;
  let b = document.getElementById("side-2").value;
  let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  document.getElementById("side-3").innerHTML = "Side-3 : " + c;
  let area = (a * b) / 2;
  document.getElementById("area").innerHTML = "area of triangle : " + area;
};
