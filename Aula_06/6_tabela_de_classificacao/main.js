var partidas = 0;

var jogadores = [{
    imagem: "https://png.pngtree.com/png-vector/20210212/ourlarge/pngtree-green-correct-icon-png-image_2912233.jpg",
    nome: "Rapha",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
},
{
    imagem: "https://qualificamaisbrasil.com.br/wp-content/uploads/2018/09/icone-check-1.png",
    nome: "Analu",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}];

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}

jogadores.pontos = calculaPontos(jogadores);

function exibirJogadoresTela(jogadores) {
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td><img src=" + jogadores[i].imagem + "></td>"
        elemento += "<td>" + jogadores[i].nome + "</td>";
        elemento += "<td>" + jogadores[i].vitorias + "</td>";
        elemento += "<td>" + jogadores[i].empates + "</td>";
        elemento += "<td>" + jogadores[i].derrotas + "</td>";
        elemento += "<td>" + jogadores[i].pontos + "</td>";
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        elemento += "</tr>";
    }

    var numPartidas = document.getElementById("numPartidas");
    numPartidas.innerHTML = "Quantidade de partidas: " + partidas;

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

exibirJogadoresTela(jogadores)

function adicionarVitoria(index) {
    for (var i = 0; i < jogadores.length; i++) {
        var jogador = jogadores[i];
        if (i == index) {
            jogador.vitorias++;
        } else {
            jogador.derrotas++;
        }
        jogador.pontos = calculaPontos(jogador);
    }
    partidas++
    exibirJogadoresTela(jogadores);
}

function adicionarEmpate(i) {
    for (var i = 0; i < jogadores.length; i++) {
        var jogador = jogadores[i];

        jogador.empates++;
        jogador.pontos = calculaPontos(jogador);
    }
    partidas++;
    exibirJogadoresTela(jogadores);
}

function limparTabela(i) {
    for (var i = 0; i < jogadores.length; i++) {
        var jogador = jogadores[i];

        jogador.vitorias = 0;
        jogador.empates = 0;
        jogador.derrotas = 0;

        jogador.pontos = calculaPontos(jogador);
    }
    partidas = 0
    exibirJogadoresTela(jogadores);
};