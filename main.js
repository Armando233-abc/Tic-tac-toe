titolo = document.getElementById("titolo")
var elementi = ["img/x.png", "img/o.png"]
td = document.querySelectorAll("td")
turno = "x"
indice = 0

titolo.innerHTML = "turno di: " + turno


function immagine(img){
    img.style.width = "9vw"
    img.style.height = "10vh"
    img.style.display = "flex"
    img.style.justifyContent = "center"
    img.style.margin = "auto"
}

function controllo(){
    if (turno == "x"){
        indice = 0
        turno = "o"
    } else {
        indice = 1
        turno = "x"
    }
}

function azioni(t){
    controllo()
    titolo.innerHTML = "turno di: " + turno
    img = document.createElement("img")
    img.src = elementi[indice]
    immagine(img)
    t.appendChild(img)
}


td.forEach(element => {
    element.addEventListener("click", function giocata(){
        azioni(element)
        element.removeEventListener("click", giocata)
    })
});


