function changeTheme(value) {
    console.log(value)
    userSelection = value.target.value;
    let body = document.querySelector("body");
    let content = document.getElementById("content");
    let byuiLogo = document.getElementById("byui-logo");
    console.log(content.borderColor)
    if (userSelection === "light") {
        body.classList.remove("darkMode")
        byuiLogo.src = "byui-logo-blue.webp";
        content.style.border = "2px, solid, black";
    } else if (userSelection === "dark") {
        body.classList.add("darkMode")
        byuiLogo.src = "byui-logo-white.png";
        content.style.border = "2px, solid, white";
    }
}

let themeSelect = document.getElementById("theme-select");

themeSelect.addEventListener("change", changeTheme);