// API calls are asynchronous
async function getCatFact() {
    const url = "https://catfact.ninja/fact";

    const response = await fetch(url);
    const data = await response.json();

    document.querySelector("section").innerHTML = `<p>${data.fact}\n</p>`;
}

// button
document.querySelector("button").addEventListener("click", e => {
    getCatFact();
})