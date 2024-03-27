function theThingToDo() {
  console.log("Something done.");
}

function anotherThingToDo() {
  console.log("Another thing done.");
}

function doSomething(myCBF) {
  console.log("Doing something...");
  myCBF();
}
// my CBF in this case is a placeholder for the previous functions already defined. This placeholder gets replaced by actual functions when we type he below.
doSomething(theThingToDo);

doSomething(anotherThingToDo);

//my own attempts:
function hello() {
  console.log("hello function was called");
}

function howareyou(callmebackplease) {
  console.log("how are you was called");
  callmebackplease();
}

howareyou(hello);

function howareyou(completecallback) {
  console.log("running my awesome function, doing complex tasks...");
  console.log("complex task complete. i will notify the user");
  completecallback();
}

howareyou(function () {
  console.log("hello function was called");
});

howareyou(() => {
  console.log("hi");
});

//seperate thing:
function myAwesomeFunction(onSuccessCallback, onFailureCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");

  const success = Math.random() >= 0.5;
  if (success) {
    onSuccessCallback({
      message: "This is the message of success",
    });
  } else {
    onFailureCallback();
  }
}

//messy way:
//myAwesomeFunction(
//  (data) => {
//    console.log("It was successful: ", data.message);
//  },
//  () => {
//    console.log("It failed");
//  }
//);

//clean way:
function onAwesomeSuccess(data) {
  console.log("It was successful: ", data.message);
}

function onAwesomeFailure() {
  console.log("It failed :(");
}
myAwesomeFunction(onAwesomeSuccess, onAwesomeFailure);

function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function subtract(a, b) {
  return a - b;
}

function square(a, b) {
  return a ^ b;
}
//square function seems to just subtract, unsure of how to square instead

function compare(a, b) {
  if (a == b) {
    return "they are the same!";
  } else {
    return "they are not the same!";
  }
}

function myCalculatorFunction(a, b, operationCallback) {
  console.log("Doing a calculation using the numbers ", a, b);
  console.log(
    "We might have code that saves the result to a log or a database"
  );

  return operationCallback(a, b);
}

const result = myCalculatorFunction(3, 7, add);
console.log(result);

const result2 = myCalculatorFunction(2, 3, multiply);
console.log(result2);

const result3 = myCalculatorFunction(result, result2, add);
console.log(result3);

const result4 = myCalculatorFunction(5, 2, subtract);
console.log(result4);

const result5 = myCalculatorFunction(9, 3, divide);
console.log(result5);

const result6 = myCalculatorFunction(3, 3, square);
console.log(result6);

const result7 = myCalculatorFunction(1, 3, compare);
console.log(result7);

const result8 = myCalculatorFunction(3, 3, compare);
console.log(result8);
