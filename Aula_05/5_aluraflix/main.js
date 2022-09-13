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

var fotoFilme = [];
var nomeFilme = [];

console.log(nomeFilme)
console.log(fotoFilme)

function adicionarFilme() {
    var endereco = document.getElementById("endFilme").value;
    var nome = document.getElementById("nomeFilme").value;

    //Verifica se a imagem é jpg e envia para os arrays correspondentes.
    if (endereco.endsWith(".jpg")) {

        fotoFilme.push(endereco)
        nomeFilme.push(nome)

        console.log(nomeFilme)
        console.log(fotoFilme)
        exibirFilmes(nomeFilme, fotoFilme);
    } else {
        console.error("Endereço de filme invalido");
    }
    document.getElementById("nomeFilme").value = "";
    document.getElementById("endFilme").value = "";
}

function exibirFilmes(nomeFilme, endFilme) {
    var elementoListaFilmes = document.getElementById("listaFilmes");

    for (var i = 0; i < endFilme.length; i++) {
        elementoListaFilmes.innerHTML = "<img src=" + endFilme[i] + "><figcaption>" + nomeFilme[i] + "</figcaption>";

    }
}