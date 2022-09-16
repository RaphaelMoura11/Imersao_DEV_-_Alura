/*  function adicionarFilme() {

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
    var elementoEnderecoFilme = "<img src=" + endFilme + "><figcaption> " + nomeFilme + "</figcaption>";
    var elementoListaFilmes = document.getElementById("listaFilmes");

    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoEnderecoFilme;
}*/ 

 var dadosFilme = {
    nomefilme: [],
    enderecofilme: []
}

function adicionarFilme() {
    var endereco = document.getElementById("endFilme").value;
    var nome = document.getElementById("nomeFilme").value;

    //Verifica se a imagem é jpg e envia para os arrays correspondentes.
    if (endereco.endsWith(".jpg")) {

        dadosFilme.nomefilme.push(nome)
        dadosFilme.enderecofilme.push(endereco)

        exibirFilmes(dadosFilme.nomefilme, dadosFilme.enderecofilme);
    } else {
        console.error("Endereço de filme invalido");
    }
    document.getElementById("nomeFilme").value = "";
    document.getElementById("endFilme").value = "";
    console.log(dadosFilme)
}

function exibirFilmes(nomeFilme, endFilme) {
    var elementoListaFilmes = document.getElementById("listaFilmes");
    for (var i = 0; i < endFilme.length; i++) {
        elementoListaFilmes.innerHTML = "<img src=" + endFilme + "><figcaption> " + nomeFilme + "</figcaption>";

        console.log(nomeFilme)
        console.log(endFilme)
    }
}