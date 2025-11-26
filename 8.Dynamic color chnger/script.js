//! select the element

const btn1El = document.querySelector(".btn1");
const btn2El = document.querySelector(".btn2");
const resetBtn = document.querySelector(".reset");
const titleEl = document.querySelector(".title");
const bodyEl = document.querySelector("body");

//Add event listener
btn1El.addEventListener("click", function () {
  bodyEl.style.backgroundColor = "red";
});

btn2El.addEventListener("click", () => {
  titleEl.style.fontSize = "50px";
});

resetBtn.addEventListener("click", function () {
  bodyEl.style.backgroundColor = "";
  titleEl.style.fontSize = "30px";
});
