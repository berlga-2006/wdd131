// 1. Functions

// Functions can be called before they're defined.
nameOfFunction("what's up");

function nameOfFunction(text) {
    // These lines of code do the same thing
    console.log("The given text is: " + text);
    // This is how we do formatted strings in JS
    // Use `` instead of quotes (above the tab key)
    // Put the variable inside of ${}
    console.log(`The given text is: ${text}`);
}

// If an argument is not passed, it passes undefined instead of an error
nameOfFunction();

// 2. Event Listeners
    // 1. Grab an element from the DOM to listen to.
let themeSelect = document.querySelector("#theme-select");
    // 2. Register an event listener on that element
    // Waiting for a certain event to occur, then run a function
themeSelect.addEventListener("change", changeTheme);

function changeTheme(event) {
    let current = event.target.value;
    if (current === 'ocean') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        document.body.style.fontFamily = "Papyrus, fantasy";
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        document.body.style.fontFamily = "Impact, sans-serif";
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        document.body.style.fontFamily = "'Big Caslon', serif";
    } else {
        // default
        document.body.style.backgroundImage = "none";
        document.body.style.fontFamily = "Georgia, serif";
    }
}

// 3. If Statements
