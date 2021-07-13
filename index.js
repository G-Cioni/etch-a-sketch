let quantity = 8

document.querySelector("#container").style.gridTemplateColumns = `repeat(${quantity}, 1fr)`
document.querySelector("#container").style.gridTemplateRows = `repeat(${quantity}, 1fr)`

for (i = 1; i <= Math.pow(quantity, 2); i++){
    let div = document.createElement("div")
    div.setAttribute("id", `div${i}`)

    container.appendChild(div)
}