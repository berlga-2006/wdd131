// arrays in javascript
let courses = ["WDD131", "WDD130", "CSE110", "CSE210"];

// display the first course
console.log(courses[0]);
console.log(courses[3]);
console.log(courses[4]);

// normal for i loop
for (let i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}

// array methods/functions
courses.forEach((course) => {
    console.log(course);
});

// javascript object
let course = {
    name: "Dynamic Web Fundamentals",
    code: "WDD131",
    credits: 3,
    instructor: "very cool"
}

console.log(course.instructor);

// array of objects
let coursesArrayOfObjects = [
    {
        name: "Dynamic Web Fundamentals",
        code: "WDD131",
        credits: 2,
        instructor: "Brother Warner",
        instructorStatus: "very cool"
    },
    {
        name: "Web Fundamentals",
        code: "WDD130",
        credits: 2,
        instructor: "Brother Warner",
        instructorStatus: "very cool"
    }
];

// Challenge: Print out the name and code of the second course in theis array
console.log(coursesArrayOfObjects[1].name + ": " + coursesArrayOfObjects[1].code);

let body = document.querySelector("body");

coursesArrayOfObjects.forEach((item) => {
    // build out an HTML div with course contents
    // add that div to the body
    let courseDiv = `
        <div>
            <h2>${item.name}</h2>
            <p>Code: ${item.code}</p>
            <p>Credits: ${item.credits}</p>
            <p>Instructor: ${item.instructor}</p>
            <p>Instructor is: ${item.instructorStatus}</p>
        </div>
    `;

    body.innerHTML += courseDiv;
})


