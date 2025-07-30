"use strict";
/* EASY:
A local gym wants to implement an "exercise of the day" program where there is a free class for that day that promotes a certain exercise. 
The gym needs some backend logic to update its system to reflect which exercise will be promoted that day. 
Write a function that will take as an input the name of an exercise and console log a message like Today's exercise: running
Write one function that can dynamically print the value of the exercise for that day, and it must be closure. */

const promo = function() { //promo returns a func

    return function(str) { //this func accepts a str only as a parameter
        console.log(`Today's exercise: ${str}`); //will console log a template literal with the argument user inputs to replace parameter
    }
}

const exercise = promo(); //promo is a return func that is assigned to exercise

exercise("Running"); //output: Today's exercise: Running
exercise("Swimming"); //output: Today's exercise: Swimming