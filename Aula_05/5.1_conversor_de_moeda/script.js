function converter() {

    convertBitcoin()
}

//Função que converte o valor para Real
function converteReal() {
    var moedaEntrada = document.getElementById("moedaIn").value;
    var valorElemento = document.getElementById("valor").value;

    if (moedaEntrada === "Dolar") {
        var X = "5"
    } else if (moedaEntrada === "Euro"){
        var X = "5.50"
    } else if (moedaEntrada === "Bitcoin") {
        var X = "108676.26"
    } else {
     var X = "1"
    }

    var valor = valorElemento * X
    var valorEmReal = valor.toFixed(2)

    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em Real é R$ " + valorEmReal
    elementoValorConvertido.innerHTML = valorConvertido;
};

//Função que converte o valor para Dolar
function converteDolar() {
    var moedaEntrada = document.getElementById("moedaIn").value;
    var valorElemento = document.getElementById("valor").value;

    if (moedaEntrada === "Real") {
        var X = "0.19"
    } else if (moedaEntrada === "Euro"){
        var X = "0.98"
    } else if (moedaEntrada === "Bitcoin") {
        var X = "18666.50"
    } else {
     var X = "1"
    }

    var valor = valorElemento * X
    var valorEmDolar = valor.toFixed(2)

    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em Dolar é US$ " + valorEmDolar;
    elementoValorConvertido.innerHTML = valorConvertido;
}

//Função que converte o valor para Euro
function converteEuro() {
    var moedaEntrada = document.getElementById("moedaIn").value;
    var valorElemento = document.getElementById("valor").value;

    if (moedaEntrada === "Real") {
        var X = "0.2"
    } else if (moedaEntrada === "Dolar"){
        var X = "1.02"
    } else if (moedaEntrada === "Bitcoin") {
        var X = "18800.08"
    } else {
     var X = "1"
    }

    var valor = valorElemento * X
    var valorEmEuro = valor.toFixed(2)

    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em Euro é € " + valorEmEuro;
    elementoValorConvertido.innerHTML = valorConvertido;
}

//Função que converte o valor para Bitcoin
function convertBitcoin() {
    var moedaEntrada = document.getElementById("moedaIn").value;
    var valorElemento = document.getElementById("valor").value;

    if (moedaEntrada === "Real") {
        var X = "0.00001044141177"
    } else if (moedaEntrada === "Dolar"){
        var X = "0.00005424682086"
    } else if (moedaEntrada === "Euro") {
        var X = "0.00005319130545"
    } else {
     var X = "1"
    }

    var valor = valorElemento * X
    var valorEmBitcoin = valor.toFixed(2)

    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em Bitcoin é " + valorEmBitcoin + " BTC";
    elementoValorConvertido.innerHTML = valorConvertido;
}