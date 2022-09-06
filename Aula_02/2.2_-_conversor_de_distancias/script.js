function Conversao() {
    var valor = parseFloat(document.getElementById("valor").value);

    var distanciaIn = document.getElementsByName("distancia");
    for (var i = 0; i < distanciaIn.length; i++)

    var x = valor * 0.00000000000010570
    console.log(x)

    var barraResultado = document.getElementById("resultado")
    var resultadoFinal = valor + " kilometros é igual a " + x
    barraResultado.innerHTML = resultadoFinal
}