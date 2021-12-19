"use strict";
function calcuMath() {
  let result;
  const firstNumber = document.querySelector("#first-number").value,
        secondNumber = document.querySelector("#second-number").value,
        select = document.querySelector("#select"),
        selectionValue = select.options[select.selectedIndex].value,
        textResult = document.querySelector("#text-result");

  if (selectionValue === "plus") {
    result = firstNumber + secondNumber;
    textResult.innerHTML = "The result is " + parseInt(result) + ".";
  } else if (selectionValue === "minus") {
    result = firstNumber - secondNumber;
    textResult.innerHTML = "The result is " + parseInt(result) + ".";
  } else if (selectionValue === "times") {
    result = firstNumber * secondNumber;
    textResult.innerHTML = "The result is " + parseInt(result) + ".";
  } else if (selectionValue === "divide") {
    result = firstNumber / secondNumber;
    textResult.innerHTML = "The result is " + parseInt(result) + ".";
  } else {
    textResult.innerHTML = "Error.";
  }
}
