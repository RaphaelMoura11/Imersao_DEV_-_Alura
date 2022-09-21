/*  function Converter() {
    var valorElemento = parseFloat(document.getElementById("valor").value)

    var valorEmReal = valorElemento * 5

    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em real é R$" + valorEmReal
    elementoValorConvertido.innerHTML = valorConvertido
}  */


function Converter() {
    var valorElemento = parseFloat(document.getElementById("valor").value)

    var moeda = document.getElementsByName("moeda")
    for (var i = 0; i < moeda.length; i++)
        if (moeda[i].value === "Dolar") {
            var X = "5"
        } else if (moeda[i].value === "Euro") {
            var X = "5.50"
        } else if (moeda[i].value === "Bitcoin") {
            var X = "108676.26"
        } else {
            console.log("erro aki")
        }

    var valor = valorElemento * X
    var valorEmReal = valor.toFixed(2)

    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em Real é R$ " + valorEmReal
    elementoValorConvertido.innerHTML = valorConvertido
} 