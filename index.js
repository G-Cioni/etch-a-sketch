// Prompt user for desired grid size until valid input is inserted
let gridSize
while (gridSize > 100 || gridSize < 4 || gridSize == undefined) {
 gridSize = window.prompt("please insert desired grid size (range 4 =>100): E.g. 16 = 16 * 16")
 // break if user clicks "cancel"
 if (gridSize == null) {
     break;
 };
 console.log(gridSize)
}
// array with possible colors
let colors = ["red", "blue", 'green', 'yellow', 'pink', 'orange', 'purple', 'BlueViolet','Chartreuse', 'cyan', 'DarkRed', 'FireBrick', 'Fuchsia', 'OrangeRed', 'SeaGreen']

// assign random color to randomColor
let randomColor = colors[randomInt(colors.length)]

// random number generator. only generate up to the lenght of the colors array
function randomInt(max) {
    return Math.floor(Math.random() * max);
}

// generate grid size based on the previous user input
document.querySelector("#container").style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
document.querySelector("#container").style.gridTemplateRows = `repeat(${gridSize}, 1fr)`

//create i amount of divs and set the attributes to generate a random color on mouse over
for (i = 1; i <= Math.pow(gridSize, 2); i++){
    let div = document.createElement("div")
    div.setAttribute("id", `div${i}`)
    div.setAttribute("onmouseover", `this.style.backgroundColor = "${colors[randomInt(colors.length)]}"`);
    container.appendChild(div)
}

// button to refresh page
button = document.querySelector("#button")
button.addEventListener("click", () => location.reload())



