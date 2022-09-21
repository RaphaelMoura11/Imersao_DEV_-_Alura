function Converter() {

    var moedaOut = document.getElementById("moedasOut");
    for (var i = 0; i < moedaOut.length; i++) {

        if (moedaOut[i].value === "Real") {
            converteReal();
        } /* else if (moedaOut[i].value === "Dolar") {
            converteDolar();
        } else if (moedaOut[i].value === "Euro") {
            converteEuro();
        } else if (moedaOut[i].value === "Bitcoin") {
            convertBitcoin();
        } */
    }

};

//convertendo para real
function converteReal() {
    var valorElemento = parseFloat(document.getElementById("valor").value);

    var moedaIn = document.getElementById("moedasIn");
    for (var i = 0; i < moedaIn.length; i++) {
        if (moedaIn[i].value === "Dolar") {
            var X = "5"
        } else if (moedaIn[i].value === "Euro") {
            var X = "5.50"
        } else if (moedaIn[i].value === "Bitcoin") {
            var X = "108676.26"
        } else {
            console.log("erro aki")
        }

        var valor = valorElemento * X
        var valorEmReal = valor.toFixed(2)

        var elementoValorConvertido = document.getElementById("valorConvertido")
        var valorConvertido = "O valor em Real é R$ " + valorEmReal
        elementoValorConvertido.innerHTML = valorConvertido;
    }
};

function converteDolar() {

    console.log("Dolar");
};

function converteEuro() {
    console.log("Euro");
};

function convertBitcoin() {
    console.log("Bitcoin");
};