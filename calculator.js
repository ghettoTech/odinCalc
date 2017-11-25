let displayValue, operator = "", firstValue = "", result;

function add(a,b) {
  return a+b;
}

function subtract(a,b) {
  return a-b;
}

function multiply(a,b) {
  return a*b;
}

function divide(a,b) {
  return a/b;
}

function operate(op,a,b) {
  switch(op) {
    case "+":
      return add(a,b);
      break;
    case "-":
      return subtract(a,b);
      break;
    case "*":
      return multiply(a,b);
      break;
    case "/":
      return divide(a,b);
      break;
    default:
      return "undefined operator";
  }
}

function reset() {
  cls();
  operator = "";
  firstValue = "";
}

function cls() {
  document.getElementById("calcDisplay").innerHTML = "";
  displayValue = "";
}

function ifSetAppendOperator(calcKey) {
  if (!operator == "") {
    firstValue = operate(operator,Number(firstValue),Number(displayValue));
    operator = "";
  } else {
    firstValue = displayValue;
  }
  cls();
  operator = calcKey;
}

function equalsKey() {
  displayValue = document.getElementById("calcDisplay").innerHTML;
  if (operator == "/" && displayValue == (0)) {
    alert("Cheeky bastard.")
    reset();
  } else {
    result = operate(operator,Number(firstValue),Number(displayValue));
  }
  if (result.toString().length > 9) {
    result = result.toExponential(3);
  }
  document.getElementById("calcDisplay").innerHTML = result;
}

function keyPress(calcKey) {
  displayValue = document.getElementById("calcDisplay").innerHTML;

  switch(calcKey) {
    case "/":
    case "*":
    case "-":
    case "+":
      ifSetAppendOperator(calcKey);
      break;
    case "c":
      reset();
      break;
    case "=":
      equalsKey();
      break;
    default:
      document.getElementById("calcDisplay").innerHTML = displayValue + calcKey;
  }
}
