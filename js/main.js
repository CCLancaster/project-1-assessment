//declare DOM variables
let input = document.querySelector("input");
let addButton = document.querySelector("#add");
let subtractButton = document.querySelector("#subtract");

//declare what result will be
let result;

//declare other useful variables
let numberToAdd;
let numberToSubtract;
let newValue;

//add event listeners to buttons
    //button add adds value to result
        //grab number that is in result and add numberToAdd
        //print resulting number to result div
addButton.addEventListener("click", function(e) {
    console.log("is add button working?")

    e.preventDefault();

//grab the value of input and set it to a variable
    numberToAdd = Number(input.value);
    console.log("this is the number to add: " + numberToAdd);

//grab the current showing result
    result = Number(document.getElementById("result").innerHTML);
    console.log("this is the result value: " + result);

    newValue = result += numberToAdd;
    console.log(newValue);

    document.getElementById("result").textContent = newValue;
});

    //button subtract subtracts value from result
        //grab number that is in result and subtract numberToSubtract
        //print resulting number to result div
subtractButton.addEventListener("click", function(e) {
    console.log("is subtract button working?")

    e.preventDefault();

//grab the value of input and set it to a variable
    numberToSubtract = Number(input.value);
    console.log("this is the number to add: " + numberToSubtract);

//grab the current showing result
    result = Number(document.getElementById("result").innerHTML);
    console.log("this is the result value: " + result);

    newValue = result -= numberToSubtract;
    console.log(newValue);

    document.getElementById("result").textContent = newValue;

    if (newValue < 0) {
        document.getElementById("result").style.color = "red";
    };
});

