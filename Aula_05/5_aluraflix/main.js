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



function adicionarFilme() {
    var nome = document.getElementById("nomeFilme").value;
    var endereco = document.getElementById("endFilme").value;

        if (endereco.endsWith(".jpg")) {
            exibirFilmes(nome, endereco);
        } else {
            console.error("Endereço de filme invalido");
        }
        document.getElementById("nomeFilme").value = "";
        document.getElementById("endFilme").value = "";
    }

var fotoFilme = [];
var nomeFilme = [];

function exibirFilmes(nomeFilme, endFilme) {
    var elementoEnderecoFilme = "<img src=" + endFilme + ">" + nomeFilme;
    var elementoListaFilmes = document.getElementById("listaFilmes");

    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoEnderecoFilme;
}