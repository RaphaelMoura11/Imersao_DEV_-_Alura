function adicionarFilme() {
    var enderecoFilme = document.getElementById("endFilme").value;
    var nomeFilme = document.getElementById("nomeFilme").value;

    if (enderecoFilme.endsWith(".jpg" || ".png")) {
        listarFilmesNaTela(enderecoFilme, nomeFilme);
    } else {
        console.error("Endereço de filme invalido");
    }
    document.getElementById("endFilme").value = "";
}

function listarFilmesNaTela(endFilme, nomeFilme) {
    var elementoEnderecoFilme = "<img src=" + endFilme + ">" + nomeFilme;
    var elementoListaFilmes = document.getElementById("listaFilmes");

    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoEnderecoFilme;
}

function removerFilme() {
    
}

