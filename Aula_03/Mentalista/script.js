var numeroSecreto = parseInt(Math.random() * 11);
//Math.random gera um numero float.
//ao multiplicar por 11 com o parseInt ele retorna numeros de 0 a 10 
console.log(numeroSecreto);

var tentativas = 4;
var cont = 2;

function chutar() {
    var elementoTentativas = document.getElementById("tentativas")
    elementoTentativas.innerHTML = "Tentativa numero: " + cont;

    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);

    if (chute == numeroSecreto && cont < tentativas) {
        alert("Você acertou");
        window.location.reload(true);

    } else if (chute < numeroSecreto && cont < tentativas) {
        elementoResultado.innerHTML = "Digite um numero maior";
        document.getElementById("valor").value = "";
        document.getElementById("valor").focus();

    } else if (chute > numeroSecreto && cont < tentativas) {
        elementoResultado.innerHTML = "Digite um numero menor";
        document.getElementById("valor").value = "";
        document.getElementById("valor").focus();
        
    } else if (chute != numeroSecreto && cont == tentativas){
        alert("Suas chances acabaram, o numero secreto era " + numeroSecreto);
        window.location.reload(true);
    }
    cont++;
}