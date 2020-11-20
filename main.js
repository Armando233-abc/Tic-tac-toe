titolo = document.getElementById("titolo")
var elementi = ["img/x.png", "img/o.png"]
td = document.getElementsByTagName("td")
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


td[0].addEventListener("click", function x(){
    azioni(td[0])
    td[0].removeEventListener("click", x)
})

td[1].addEventListener("click", function x(){
    azioni(td[1])
    td[1].removeEventListener("click", x)
})

td[2].addEventListener("click", function x(){
    azioni(td[2])
    td[2].removeEventListener("click", x)
})

td[3].addEventListener("click", function x(){
    azioni(td[3])
    td[3].removeEventListener("click", x)
})

td[4].addEventListener("click", function x(){
    azioni(td[4])
    td[4].removeEventListener("click", x)
})

td[5].addEventListener("click", function x(){
    azioni(td[5])
    td[5].removeEventListener("click", x)
})

td[6].addEventListener("click", function x(){
    azioni(td[6])
    td[6].removeEventListener("click", x)
})

td[7].addEventListener("click", function x(){
    azioni(td[7])
    td[7].removeEventListener("click", x)
})

td[8].addEventListener("click", function x(){
    azioni(td[8])
    td[8].removeEventListener("click", x)
})

td[9].addEventListener("click", function x(){
    azioni(td[9])
    td[9].removeEventListener("click", x)
})
