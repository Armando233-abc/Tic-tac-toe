titolo = document.getElementById("titolo")
var elementi = ["X", "O"]
td = document.getElementsByTagName("td")


td[0].addEventListener("click", () => {
    var new_x = document.createElement("h1")
    var t = document.createTextNode(elementi[0])
    new_x.appendChild(t)
    new_x.style.textAlign = "center"
    td[0].appendChild(new_x)
})