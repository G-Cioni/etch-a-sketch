for (i = 1; i <= 16; i++){
    let div = document.createElement("div")
    div.setAttribute("id", `div${i}`)
    div.textContent = "I'm a div"
    container.appendChild(div)
}