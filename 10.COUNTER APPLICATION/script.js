let count = 0;

//select elements
const counterEl = document.getElementById("counter");

//event listener

//increase by 1
document.getElementById("increaseBtn").addEventListener("click", function () {
  count++;
  counterEl.textContent = count;
});

//event listener

//decease by 1
document.getElementById("decreaseBtn").addEventListener("click", function () {
  count--;
  counterEl.textContent = count;
});

//increase by 10
document
  .getElementById("increaseBy10Btn")
  .addEventListener("click", function () {
    count += 10;
    counterEl.textContent = count;
  });

//reset
document.getElementById("resetBtn").addEventListener("click", function () {
  count = 0;
  counterEl.textContent = count;
});
