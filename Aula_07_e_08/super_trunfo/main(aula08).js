var carta1 = {
    nome: "Squirtle",
    imagem: "https://criticalhits.com.br/wp-content/uploads/2021/07/Pokemon-Go-Squirtle-Spotlight-Hour.png.jpg",
    atributos: {
        ataque: 2,
        defesa: 3,
        magia: 5,
    }
}

var carta2 = {
    nome: "articuno",
    imagem: "https://criticalhits.com.br/wp-content/uploads/2021/11/Screenshot-2021-11-29-at-14-29-48-Articuno-Pokedex-jpg-JPEG-Image-1170-×-707-pixels.png",
    atributos: {
        ataque: 8,
        defesa: 7,
        magia: 9,
    }
}

var carta3 = {
    nome: "arceus",
    imagem: "https://conteudo.imguol.com.br/c/entretenimento/79/2017/04/03/pokemon---arceus-1491237149495_v2_450x337.png",
    atributos: {
        ataque: 100,
        defesa: 100,
        magia: 100,
    }
}

var carta4 = {
    nome: "alakazam",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png",
    atributos: {
        ataque: 3,
        defesa: 3,
        magia: 7,
    }
}

var carta5 = {
    nome: "snorlax",
    imagem: "https://www.clipartmax.com/png/middle/110-1108759_snorlax-pokemon-snorlax-png.png",
    atributos: {
        ataque: 4,
        defesa: 9,
        magia: 3,
    }
}

var carta6 = {
    nome: "charizard",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    atributos: {
        ataque: 6,
        defesa: 3,
        magia: 7,
    }
}

var carta7 = {
    nome: "bayleef",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/153.png",
    atributos: {
        ataque: 4,
        defesa: 3,
        magia: 4,
    }
}

var carta8 = {
    nome: "lapras",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png",
    atributos: {
        ataque: 6,
        defesa: 5,
        magia: 5,
    }
}

var carta9 = {
    nome: "jolteon",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png",
    atributos: {
        ataque: 5,
        defesa: 2,
        magia: 4,
    }
}

var carta10 = {
    nome: "lugia",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/249.png",
    atributos: {
        ataque: 7,
        defesa: 5,
        magia: 10,
    }
}

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10];
var cartaMaquina = 0;
var cartaJogador = 0;

function sortearCarta() {
    var qntCartas = cartas.length;
    var numeroCartaMaquina = parseInt(Math.random() * qntCartas);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * qntCartas);
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * qntCartas);
    }
    cartaJogador = cartas[numeroCartaJogador];

    document.getElementById("btnJogar").disabled = false;
    exibirCarta(cartaJogador);
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value;
        }
    }
}

var bauDeCartasJogador = [];
var bauDeCartasMaquina = [];

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Venceu</p>";
        bauDeCartasJogador.push(cartaMaquina);

    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Perdeu</p>";
        bauDeCartasMaquina.push(cartaJogador);

    } else if (cartaJogador.atributos[atributoSelecionado] == null) {
        alert("selecione um atributo");

    } else if (cartaJogador.atributos[atributoSelecionado] == cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
    divResultado.innerHTML = htmlResultado;

    document.getElementById("btnJogar").disabled = true;
    exibirCarta(cartaMaquina);
}

function exibirCarta(carta) {
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
    var opcoesTexto = ""; 

    if (carta == cartaJogador) {
        var divCarta = document.getElementById("carta-jogador");

        for (var atributo in cartaJogador.atributos) {
            opcoesTexto +=
                "<input type='radio' name='atributo' value='" +
                atributo +
                "'>" +
                atributo +
                " " +
                cartaJogador.atributos[atributo] +
                "<br>";
        }
    } else {
        var divCarta = document.getElementById("carta-maquina");

        for (var atributo in carta.atributos) {
            opcoesTexto +=
                "<p type='text' name='atributo' value='" +
                atributo +
                "'>" +
                atributo +
                " " +
                carta.atributos[atributo] +
                "</p>";
        }
    }

    divCarta.style.backgroundImage = `url(${carta.imagem})`;
    var nome = `<p class="carta-subtitle">${carta.nome}</p>`;
    divCarta.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}