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
}*/

var nomeFilme = [{nome:'test', endereco:'teste'},{nome: 'test1', endereco: 'teste1'}] ;

console.log(nomeFilme)
function adicionarFilme() {

    nomeFilme<{ 
        nome: string,
        endereco: string 
    }>push(...items, {
        nome: (document.getElementById("nomeFilme").value),
        endereco: (document.getElementById("endFilme").value),
    })
}

