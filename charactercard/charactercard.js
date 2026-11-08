let character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: "snortleblat.webp",
    attacked: function () {
        if (this.health > 0) {
            this.health -= 20;
            if (this.health <= 0) {
                this.health = 0;
                alert("Character Died");
            }
            updateCardInfo();
        }
    },
    levelUp: function () {
        this.level += 1;
        updateCardInfo();
    }
}

updateCardInfo();

function updateCardInfo() {
    document.querySelector(".cardInfo").innerHTML = `
    <p><b>Class:</b> ${character.name}</p>
    <p><b>Level:</b> ${character.level}</p>
    <p><b>Health:</b> ${character.health}</p>`;
}

document.querySelector(".attackedButton").addEventListener("click", () => {
    character.attacked();
});

document.querySelector(".levelUpButton").addEventListener("click", () => {
    character.levelUp();
});