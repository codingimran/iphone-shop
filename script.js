//plus btn
const plusBtn = document.getElementById("plus-btn");
const phonePrize = document.getElementById("phone-prize").innerText;
plusBtn.addEventListener("click", function () {
  const inputValue = document.getElementById("input-value").value;
  let inputNumber = parseFloat(inputValue);
  if (inputNumber >= 0) {
    inputNumber++;
  }
  document.getElementById("input-value").value = inputNumber;
  console.log(inputNumber);
  document.getElementById("phone-prize").innerText = phonePrize * inputNumber;
});

//minus btn
const minusBtn = document.getElementById("minus-btn");
minusBtn.addEventListener("click", function () {
  const inputValue = document.getElementById("input-value").value;
  let inputNumber = parseFloat(inputValue);
  if (inputNumber > 0) {
    inputNumber--;
  }
  document.getElementById("input-value").value = inputNumber;
  console.log(inputNumber);
  document.getElementById("phone-prize").innerText = phonePrize * inputNumber;
});
