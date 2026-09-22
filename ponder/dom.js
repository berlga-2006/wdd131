// select an HTML element from the DOM
// save it to a local variable called 'heading'
let heading = document.querySelector("h1");

// console.log(heading);

heading.style.color = "#007700";
heading.style.fontSize = "3em";
heading.style.fontFamily = "minecraft, Arial";
heading.style.textShadow = "3px 3px 3px black";
// CSS: font-size    Hyphen don't make sense in JS, it's changed to camel case.

// do everything on one line
document.querySelector("p").style.color = "purple";

// there are different ways to select from the dom.
document.getElementById("topics").style.background = "chartreuse";

// you can select more than one elemnet at a time. Results not in an element, but in a list, so we may need to change our way of interacting with it for it to function properly.
console.log(document.querySelectorAll(".list"));

// apply a class to an element
let topicsClassList = document.querySelector("h2").classList;
topicsClassList.add("special");
topicsClassList.toggle("special");
topicsClassList.toggle("special");
topicsClassList.toggle("special");
topicsClassList.toggle("special");
topicsClassList.toggle("special");
topicsClassList.toggle("special");


let selectElem = document.getElementById('webdevlist');

selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    heading.textContent = codeValue;
})
                