function BtnFunction(btnId, prize, taskFunction, taskId) {
  const phonePrize = document.getElementById(prize).innerText;
  const Btn = document.getElementById(btnId);
  Btn.addEventListener("click", function () {
    const inputNumber = taskFunction(taskId);
    document.getElementById(taskId).value = inputNumber;
    console.log(inputNumber);
    document.getElementById(prize).innerText = phonePrize * inputNumber;
    Total();
  });
}

//plus function
function plusFunction(inputId) {
  const inputValues = document.getElementById(inputId).value;
  let inputNumber = parseFloat(inputValues);
  if (inputNumber >= 0) {
    inputNumber++;
  }
  return inputNumber;
}

//minus function
function minusFunction(inputId) {
  const inputValue = document.getElementById(inputId).value;
  let inputNumber = parseFloat(inputValue);
  if (inputNumber > 0) {
    inputNumber--;
  }
  return inputNumber;
}

//phone function call
BtnFunction("plus-btn", "phone-prize", plusFunction, "input-value");
BtnFunction("minus-btn", "phone-prize", minusFunction, "input-value");
//case function call
BtnFunction("plus-btn-case", "case-prize", plusFunction, "input-value-case");
BtnFunction("minus-btn-case", "case-prize", minusFunction, "input-value-case");

//hide Function
function hideItem(xId, nameId, inputId) {
  const hideItem = document.getElementById(xId);
  document.getElementById(inputId).value = 0;
  hideItem.addEventListener("click", function () {
    document.getElementById(nameId).style.display = "none";
  });
}
//hide function call
hideItem("hidePhoneX", "hidePhone", "input-value");
hideItem("hideCaseX", "hideCase");

//sum generator
function Total() {
  const phone = parseFloat(document.getElementById("phone-prize").innerText);
  const caseA = parseFloat(document.getElementById("case-prize").innerText);
  let sumSubTotal = phone + caseA;
  document.getElementById("subTotal").innerText = sumSubTotal;
  //tax generator
  const taxTotal = parseInt(sumSubTotal * 0.1);
  document.getElementById("taxTotal").innerText = taxTotal;
  // total sum
  const SumTotal = sumSubTotal + taxTotal;
  document.getElementById("SumTotal").innerText = SumTotal;
}
