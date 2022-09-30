var partidas = 0;

var rapha = { nome: "Rapha", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var lu = { nome: "Analu", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}

rapha.pontos = calculaPontos(rapha);
lu.pontos = calculaPontos(lu);

var jogadores = [rapha, lu];


function exibirJogadoresTela(jogadores) {
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>";
        elemento += "<td>" + jogadores[i].vitorias + "</td>";
        elemento += "<td>" + jogadores[i].empates + "</td>";
        elemento += "<td>" + jogadores[i].derrotas + "</td>";
        elemento += "<td>" + jogadores[i].pontos + "</td>";
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrora(" + i + ")'>Derrota</button></td>";
        elemento += "</tr>";
    }

    var numPartidas = document.getElementById("numPartidas");
    numPartidas.innerHTML = "Quantidade de partidas: " + partidas;

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

exibirJogadoresTela(jogadores)

function verificaPartidas(jogador) {
    var totalPartidas = jogador.vitorias + jogador.empates + jogador.derrotas;
    
    if (totalPartidas === partidas) {
        jogador.vitorias++;
        partidas++;
    }else if (jogador.derrotas > partidas){
        jogador.vitorias++
    } else {
        alert("Numero de partidas diferente dos resultados finais.")
    }
}

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    verificaPartidas(jogador)
    jogador.pontos = calculaPontos(jogador);

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

function adicionarDerrora(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibirJogadoresTela(jogadores);
}