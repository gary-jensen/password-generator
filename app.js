// Selectors
const characters = document.querySelector("#characters");
const length = document.querySelector("#lengthSlider");
const lengthDisplay = document.querySelector("#length");
const speed = document.querySelector("#speed");
const passArea = document.querySelector("#passArea");

// Event Listeners
window.onload = genPass;
characters.addEventListener("input", genPass); // change pass and time
length.addEventListener("input", changeLength); // change pass and time
speed.addEventListener("input", test); // change time


// Functions
function test() {
    console.log(characters.value.length);
}

function changeLength() {
    lengthDisplay.innerHTML = length.value;
    genPass();
}

function genPass() {
    var password = "";
    let charVals = characters.value;
    for (let i = 0; i < length.value; i++) {
        let rand = Math.floor(Math.random() * charVals.length);
        console.log(charVals.charAt(rand));
        password += escapeHtml(charVals.charAt(rand));
    }
    passArea.innerHTML = password;
}

function escapeHtml(text) {
  return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
}



