// 1. Click on button
const rollButton = document.querySelector("#rollButton");
const diceList = document.querySelectorAll("#gameboard img");
const rollTime = 500;

const blueDicePath = "assets/blue_dice_";
const cyanDicePath = "assets/cyan_dice_";
const grayDicePath = "assets/gray_dice_";
const greenDicePath = "assets/green_dice_";
const hotPinkDicePath = "assets/hot_pink_dice_";
const limeDicePath = "assets/lime_dice_";
const orangeDicePath = "assets/orange_dice_";
const pinkDicePath = "assets/pink_dice_";
const purpleDicePath = "assets/purple_dice_";
const redDicePath = "assets/red_dice_";
const whiteDicePath = "assets/white_dice_";
const yellowDicePath = "assets/yellow_dice_";

const dicePathList = [
    blueDicePath,
    cyanDicePath,
    grayDicePath,
    greenDicePath,
    hotPinkDicePath,
    limeDicePath,
    orangeDicePath,
    pinkDicePath,
    purpleDicePath,
    redDicePath,
    whiteDicePath,
    yellowDicePath
];

const rollingDicePath = "assets/die_rolling.gif";


rollButton.addEventListener("click", e => {
    // 2. Animate the die
    diceList.forEach(image => {
        const checkbox = document.querySelector("#gameboard input." + image.className);
        if (!checkbox.checked) {
            image.src = rollingDicePath;
        }
    });
    // 2.a The die only rolls for a set amount of time
    setTimeout(() => {
        // this function will run after the timeout duration below
        // 3. land on a new random number
        diceList.forEach(image => {
            // Check to see if checkbox is checked to save die
            const checkbox = document.querySelector("#gameboard input." + image.className);
            if (!checkbox.checked) {
                // Get random number and change image
                randNumber = Math.ceil(Math.random() * 6);
                image.src = dicePathList[Math.floor(Math.random() * diceList.length)] + randNumber + ".gif";
            }

        });

    }, rollTime);
});


