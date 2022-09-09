/* function adicionarFilme() {

    var nomeFilme = document.getElementById("nomeFilme").value;
    var enderecoFilme = document.getElementById("endFilme").value;

    console.log(nomeFilme);
    console.log(enderecoFilme)

    if (enderecoFilme.endsWith(".jpg" || ".png")) {
        listarFilmesNaTela(nomeFilme, enderecoFilme);
    } else {
        console.error("Endereço de filme invalido");
    }
    document.getElementById("endFilme").value = ""; 
}

 function listarFilmesNaTela(nomeFilme, endFilme) {
    var elementoEnderecoFilme = "<img src=" + endFilme + ">" + nomeFilme;
    var elementoListaFilmes = document.getElementById("listaFilmes");

    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoEnderecoFilme;
} */

var dadosFilme = new Array();
dadosFilme[0] = new Array("Test", "teste")
console.log(dadosFilme)

function adicionarFilme() {
    var nome = document.getElementById("nomeFilme").value;
    var endereco = document.getElementById("endFilme").value;

    dadosFilme.push([nome, endereco])
    console.log(dadosFilme)

    for (var i = 0; i < dadosFilme.length; i++) {
        if (dadosFilme[1][2].endsWith(".jpg")) {
            listarFilmesNaTela(dadosFilme[i][1], dadosFilme[i][2]);
        } else {
            console.error("Endereço de filme invalido");
        }
        document.getElementById("endFilme").value = "";
    }
}

function listarFilmesNaTela(nomeFilme, endFilme) {
    var elementoEnderecoFilme = "<img src=" + endFilme + ">" + nomeFilme;
    var elementoListaFilmes = document.getElementById("listaFilmes");

    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoEnderecoFilme;
}