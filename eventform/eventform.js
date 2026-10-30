const form = document.querySelector("form");
const codeContainer = form.querySelector("#codeContainer");
const output = document.querySelector("#output");

form.querySelector("#type").addEventListener("change", updateCodeField);

function updateCodeField() {
    const value = form.type.value;
    if (value === "student") {
        codeContainer.removeAttribute("hidden");
        codeContainer.querySelector("label").textContent = "Student I#";
    } else if (value === "guest") {
        codeContainer.removeAttribute("hidden");
        codeContainer.querySelector("label").textContent = "Access Code";
    } else {
        codeContainer.setAttribute("hidden", "hidden");
        codeContainer.querySelector("label").textContent = "";
    }
}

function isPastDate(value) {
    const today = new Date();
    const selectedDate = new Date(value);
    return selectedDate < today;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    output.textContent = "";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const type = form.type.value;
    const date = form.date.value;
    const code = form.code.value.trim();

    if (isPastDate(date)) {
        output.textContent = "ERROR: Please choose a date in the future.";
        return;
    }

    if (type === "student" && code.length != 9){
        output.textContent = "ERROR: Your student id is not 9 digits long, and must be so.";
        return;
    }

    if (type === "guest" && code != "EVENT131") {
        output.textContent = "ERROR: Invalid access code.";
        return;
    }

    output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>${type}</p>
    <p>${date}</p>
    `;

    form.reset();
    updateCodeField();
});