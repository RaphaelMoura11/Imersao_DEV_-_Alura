//modo feito na alura
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


//Desafio
var dadosFilme = {
    nomefilme: [],
    enderecofilme: []
}

//Função que adiciona filme no array
function adicionarFilme() {
    var nome = document.getElementById("nomeFilme").value;
    var endereco = document.getElementById("endFilme").value;

    if (endereco.endsWith(".jpg")) {

        dadosFilme.nomefilme.push(nome);
        dadosFilme.enderecofilme.push(endereco);

        exibirFilmes(dadosFilme.nomefilme, dadosFilme.enderecofilme);
    } else {
        console.error("Endereço de filme invalido");
    }
    document.getElementById("nomeFilme").value = "";
    document.getElementById("endFilme").value = "";
}

//função que remove filme do array
function removerFilme() {
    var nome = document.getElementById("nomeFilme").value;

    if (dadosFilme.nomefilme.indexOf(nome) > -1) {
        var posicao = dadosFilme.nomefilme.indexOf(nome);
        dadosFilme.nomefilme.splice(posicao, 1);
        dadosFilme.enderecofilme.splice(posicao, 1);
        
        exibirFilmes(dadosFilme.nomefilme, dadosFilme.enderecofilme);
    } else {
        console.error("Não é possivel remover item. O filme " + nome + " não existe na lista.");
    }
}

//Atualiza lista de filmes
function exibirFilmes(nomeFilme, endFilme) {
    var elementoListaFilmes = document.getElementById("listaFilmes");

    elementoListaFilmes.innerHTML = '';
    for (var i = 0; i < nomeFilme.length; i++) {
        elementoListaFilmes.innerHTML += "<figure><img src=" + endFilme[i] + "><figcaption> " + nomeFilme[i] + "</figcaption></figure>";
    }
    console.log(dadosFilme);
}