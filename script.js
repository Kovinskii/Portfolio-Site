const button = document.getElementById("button");
let buttonState = false; // false = dark, true = light

// Initialize button color
UpdateButton();

button.onclick = () => {
    if (buttonState === true) {
        console.log("Theme Toggle: light to dark");
    } else {
        console.log("Theme Toggle: dark to light");
    }

    buttonState = !buttonState;
    UpdateButton();
};

function UpdateButton() {
    if (buttonState === true) {
        button.style.backgroundColor = "white";
        document.body.style.backgroundColor = "#ffffff"; // Light background
    } else {
        button.style.backgroundColor = "black";
        document.body.style.backgroundColor = "#eb6e3d"; // Dark background
    }
}
