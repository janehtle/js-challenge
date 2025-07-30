"use strict";
/* MEDIUM: 
Write a function that will allow you to calculate how many slices of pizza x each person y would get if they shared evenly.
The function should return an interpolated string like:
Each person gets 4.00 slices of pizza; from our 8-slice pizza x being a decimal in case there is no way to split the pizza evenly. */

function pizzaParty(x, y) { //func takes two parameters

    let pizzaSlices = x; //assigning parameters to new variables
    let persons = y;
    let slicePerPerson = (x / y).toFixed(2); //create new variable with arithmetic value assigned

    console.log(`You ordered a ${pizzaSlices} sliced pizza for ${persons}. Each person will receive ${slicePerPerson} slices from the pizza!`);
}

//call func
pizzaParty(10, 1); 
pizzaParty(5, 8);
pizzaParty(9, 2);