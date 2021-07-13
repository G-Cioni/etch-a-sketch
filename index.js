let quantity = 40

let colors = ["red", "blue", 'green', 'yellow', 'pink', 'orange', 'purple', 'BlueViolet','Chartreuse', 'cyan', 'DarkRed', 'FireBrick', 'Fuchsia', 'OrangeRed', 'SeaGreen']

let randomColor = colors[randomInt(colors.length)]


function randomInt(max) {
    return Math.floor(Math.random() * max);

function reset() {
    return divArr.forEach(this.style.backgroundColor = "black");
}
}
document.querySelector("#container").style.gridTemplateColumns = `repeat(${quantity}, 1fr)`
document.querySelector("#container").style.gridTemplateRows = `repeat(${quantity}, 1fr)`

for (i = 1; i <= Math.pow(quantity, 2); i++){
    let div = document.createElement("div")
    div.setAttribute("id", `div${i}`)
    div.setAttribute("onmouseover", `this.style.backgroundColor = "${colors[randomInt(colors.length)]}"`);
    container.appendChild(div)
}

button = document.querySelector("#button")

button.addEventListener("click", () => reset())

let divs = document.querySelectorAll("div");
var divArr = Array.from(divs)

console.log(divArr)