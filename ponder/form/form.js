// // grab the input from the user
// const form = document.querySelector("#fsyForm");

// // run this function when the user submits the form
// form.addEventListener('submit', (event) => {

//     // prevent defaults stops the page from reloading
//     // AND from dumping values as query parameters
//     event.preventDefault();


//     // Get filled in data from the form
//     let firstName = form.firstName.value;
//     let lastName = form.lastName.value;
//     let email = form.email.value;
//     let travelRange = form.travelRange.value;

//     // This also works with the event to get the values
//     // event.target = form
//     let availableDate = event.target.availableDate.value;
    
//     let fieldList = [firstName, lastName, email, travelRange, availableDate];

//     fieldList.forEach((value) => {
//         console.log(value);
//     })
// });

// Code we wrote in class ^^^^^

// Code given by the assignment VVVVVVV

const form = document.querySelector("#fsyForm");
const travelRange = document.querySelector("#travelRange");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");
const campusBoxes = document.querySelectorAll('input[name="campus"]');

function updateNotesField() {
  const value = travelRange.value;

  // Show the travel notes on the form if they are choosing many campuses and require it
  if (value == "many"){
    form.querySelector("#notesContainer").removeAttribute("hidden");
  } else {
    form.querySelector("#notesContainer").setAttribute("hidden", "hidden");
  }
  
}

travelRange.addEventListener("change", updateNotesField);
updateNotesField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

function getSelectedCampuses() {
  //.from converts a NodeList into a real array, so then you can use .filter and .map
  return Array.from(campusBoxes)
    .filter(box => box.checked)
    .map(box => box.value); 
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.travelRange.value;
  const availableDate = form.availableDate.value;
  const selectedCampuses = getSelectedCampuses();
  const note = form.notes.value.trim();

  // Validate the input
  // Let the user know to select at least one campus
  if (selectedCampuses.length == 0 && type == "one") {
    // add an error message
    output.textContent = "ERROR: Please select at least one campus.";
    // exit function
    return;
  }
  
  // Let the user know if they choose many campuses but didn't put a note that they need to add a note

  
  // Let the user know if they choose many campus but only had one campus selected that they need to choose at least two campuses
  if (type == "many" && selectedCampuses.length < 2){
    output.textContent = "Please get your act together. Since you have to select more than 1 campus.";
    return;
  }
  

  if (isPastDate(availableDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  output.innerHTML = `
  <h2>Preference Submitted</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Availability: ${availableDate}</p>
  <p>Campuses: ${selectedCampuses.join(", ")}</p>
  <p>Preference Level: ${type}</p>
  `;

  form.reset();
  updateNotesField();
});
          