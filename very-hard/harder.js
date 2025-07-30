"use strict";
/* VERY HARD: 
Object prototype chain and prototypal inheritance exercise.

Create a Person constructor that has 3 properties: name, job, and age.

Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".

Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".

Create a Programmer constructor that inherits all the members from Person with additional 'languages' property that is passed in
and a busy property that is NOT passed in and is set to true by default.

Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. 
Also, give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.

Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not,
e.g. "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.

Give Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and lists languages programmer knows. */

class Person { //constructor method is a method of a class, not func
    constructor(name, job, age) { //constructor = special method for defining properties/methods of objects
        this.name = name;
        this.job = job;
        this.age = age;

        //methods, opt for arrow func (best practice though? apparently not, but will try anyways)
        this.exercise = () => {console.log(`Did you guys know the salad is free?`)};
        this.fetchJob = () => {console.log(`${name} is a ${job}.`)};
    }
}

//class constructor Person can only be invoked with "new" present
const person1 = new Person("Alex", "Coding Apprentice", "21"); 

console.log(person1.name);
person1.exercise();
person1.fetchJob();
// console.log(person1);

class Programmer extends Person {
    constructor(name, job, age, languages) {
        super(name, job, age); //.call or extend? .call didnt work out, will try extend
        this.languages = languages;
        this.busy = true;
    }

    //methods that belongs to the class itself, better to do outside constructor to save memory aka all instances share the one method instead of making a copy
    completeTask() {
        this.busy = false;
    }

    acceptNewTask() {
        this.busy = true;
    }

    offerNewTask() {
        if (this.busy === true) {
            console.log(`${this.name} cannot accept new tasks right now.`);
        } else {
            console.log(`${this.name} would love new tasks!`);
        }
    }

    learnLanguage(str) {
        this.languages.push(str);
    }

    listLanguages() {
        console.log(this.languages);
    }
}

const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS”, ”Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"]);

console.log(c1.busy); //Output: true
c1.completeTask(); //call the completeTask method
console.log(c1.busy); //should output false after calling the method
c1.learnLanguage("CSS");
c1.listLanguages(); //Output: HTML C# LUA CSS

console.log(c2.busy);
c2.offerNewTask(); //Output: cannot accept new tasks rn
c2.completeTask();
console.log(c2.busy);
c2.offerNewTask(); //Output: would love new tasks

c3.exercise();
c3.fetchJob(); //Output: Manny is a SysOps
c3.learnLanguage("JAVA");
c3.listLanguages();