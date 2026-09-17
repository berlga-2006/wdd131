let age = 20;
let name = 'Benjamin Gardner';

// This is like print in python
/* This is a 
m u l t i   l i n e
comment */

console.log(age);

const favoriteNumber = 3.1415926535979323;
let favoriteColor = '';

// scope is where variables can be referenced.
if (age == 20) {
    // we are now in a different scope
    // inside this scope, we can reference variables declared outside this scope
    console.log(name);

    // declare a variable in an inner scope
        favoriteColor = 'green';
}

// We cannot access variables that are declared in an inner scope
// console.log(favoriteColor);
// This line results in an error ^^^^^^^

// pull something from the HTML page
document.querySelector('h1').style.color = favoriteColor