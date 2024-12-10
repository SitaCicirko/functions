console.log("Hello world!");

function sayHello() {
  console.log("Hello world!");
}

sayHello();
sayHello();
sayHello();

function sayHelloTo(userName) {
  console.log("Hello " + userName + "!");
}

sayHelloTo("Bob");
sayHelloTo("Jimmy");
sayHelloTo("Alice");

function greet(greeting, userName) {
  console.log(greeting + " " + userName + "!");
}

greet("Good morning", "Bob");
greet("Buenos dias", "Alice");
greet("Bonjour", "Charlie");

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    console.log("Cannot divide by zero");
    return null;
  }
}

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      console.log("Invalid operator");
      return null;
  }
}

const result = calculate(1, 5, "+");
console.log("The result is", result);

const anotherResult = calculate(2, 10, "*");
console.log("Another result is", anotherResult);

const divisionResult = calculate(10, 2, "/");
console.log("Division result is", divisionResult);

const subtractionResult = calculate(9, 4, "-");
console.log("Subtraction result is", subtractionResult);
