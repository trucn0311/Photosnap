let inp = document.getElementById("cmn-toggle-1");
let month = document.querySelector(".monthly");
let year = document.querySelector(".yearly");
let price1 = document.querySelector("#price1");
let price2 = document.querySelector("#price2");
let price3 = document.querySelector("#price3");
let duration1 = document.querySelector("#duration1");
let duration2 = document.querySelector("#duration2");
let duration3 = document.querySelector("#duration3");
let navbutton = document.querySelector("header div:first-child");
inp.addEventListener("click", myFunc);
clickme.addEventListener("click", dropDown);

function myFunc() {
  if (price1.innerHTML === "$19.00") {
    price1.innerHTML = "$190.00";
    price2.innerHTML = "$390.00";
    price3.innerHTML = "$990.00";
    duration1.innerHTML = "per year";
    duration2.innerHTML = "per year";
    duration3.innerHTML = "per year";
    month.style.color = "#8a8a8a";
    year.style.color = "black";
  } else {
    price1.innerHTML = "$19.00";
    price2.innerHTML = "$39.00";
    price3.innerHTML = "$99.00";
    duration1.innerHTML = "per month";
    duration2.innerHTML = "per month";
    duration3.innerHTML = "per month";
    year.style.color = "#8a8a8a";
    month.style.color = "black";
  }
}
