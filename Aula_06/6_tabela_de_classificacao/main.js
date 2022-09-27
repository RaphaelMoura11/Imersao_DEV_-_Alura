var rapha = { nome: "Rapha", vitorias: 2, empates: 1, derrotas: 1, pontos: 11 };
var lu = { nome: "Analu", vitorias: 1, empates: 1, derrotas: 2, pontos: 6 }

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}

rapha.pontos = calculaPontos(rapha)
lu.pontos = calculaPontos(lu)

var jogadores = [rapha, lu]

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
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
        elemento += "</tr>";
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

exibirJogadoresTela(jogadores)

function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++ 
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresTela(jogadores)
}

function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresTela(jogadores)
}

function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
    exibirJogadoresTela(jogadores)
}