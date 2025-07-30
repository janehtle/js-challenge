"use strict";
/* HARD:
Inside a closure, create an object called PII (Personally Identifiable Information) that cannot be accessed directly.
Object should have at least 2 properties: name and SSN. Only the name property should be accessible and be called via a public function.
The SSN property should not be accessible at all. Creating private objects and private properties helps you control who has access
to what data and helps you prevent people who shouldn't see important info like social security numbers from getting access to the data.
You can use 'getName' or other get methods to access data that people might need.
For example, people addressing a package or email may need a customer's name, but they definitely shouldn't have access to their SSN. */

function person() { 

    const ssn = "123-45-6789"; //private variable (?)

    const PII = { //also a private variable (?), has 2 properties (name and ssn)
        name: "Adam Gomez",
        ssn: ssn
    };

    return {
        getName: function() { //assign func to a property
            return PII.name; //originally had it as person.name (update: fixed to PII.name)
        },

        getSSN: function() {
            return PII.ssn;
        }
    };
}

const patient = person();

console.log(patient.getName()); //Output: "Adam Gomez"
console.log(patient.name); //Output: undefined
console.log(patient.ssn); //Output: undefined
console.log(patient.getSSN()); //Output: "123-45-6789"