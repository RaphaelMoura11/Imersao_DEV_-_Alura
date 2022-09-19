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

function adicionarFilme() {
    var nome = document.getElementById("nomeFilme").value;
    var endereco = document.getElementById("endFilme").value;

    //Verifica se a imagem é jpg e envia para o array.
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

var i = 0;
function exibirFilmes(nomeFilme, endFilme) {
    var elementoListaFilmes = document.getElementById("listaFilmes");
    
    for (; i < nomeFilme.length; i++) {
        elementoListaFilmes.innerHTML += "<figure><img src=" + endFilme[i] + "><figcaption> " + nomeFilme[i] + "</figcaption></figure>";
    }
    console.log(nomeFilme);
    console.log(endFilme);
}

//função de remoção de filme da lista
function removerFilme() {
    var nome = document.getElementById("nomeFilme").value;

    if (nome == dadosFilme.nomefilme) {
        console.log("teste")
    } else {
        console.error("Não é possivel remover item. O filme " + nome + " não existe na lista.")
    }

    console.log(dadosFilme.nomefilme)
}