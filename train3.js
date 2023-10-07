/*Create a calculator that divides and multiplies two integers provided by the user.*/


function device(x, y) {
  alert(x / y);
}
function multiple(x, y) {
  console.log(x, y);

  alert(x * y);
}

let input1 = document
  .getElementById("first input")
  .addEventListener("change", function (e) {
    localStorage.setItem("x", e.target.value);
    return e.target.value;
  });

let input2 = document
  .getElementById("second input")
  .addEventListener("change", function (e) {
    localStorage.setItem("y", e.target.value);

    console.log(e.target.value);

    return e.target.value;
  });
let button1 = document.getElementById("multiple");

button1.onclick = function () {
  multiple(localStorage.getItem("x"),localStorage.getItem("y"));
};

let button2 = document
  .getElementById("devid");
  button2.onclick = function ()
   {
    device(localStorage.getItem("x"),localStorage.getItem("y"));
  };

  function changeColor(newColor) {
    var elem = document.getElementById("para");
    elem.style.color = newColor;
  }