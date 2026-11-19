async function getMcsrInfo() {
    const url = "https://api.mcsrranked.com/live";

    const response = await fetch(url);
    const data = await response.json();

    console.log(data.data);

    displayData(data.data.players);
}

document.querySelector("button").addEventListener("click", e => {
    getMcsrInfo();
});

function displayData(players) {
    document.querySelector("section").innerHTML = `
    <p>Active Players: <b>${players}</b></p>
    `;
}