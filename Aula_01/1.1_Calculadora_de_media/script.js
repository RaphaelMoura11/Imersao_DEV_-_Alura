function result() {
    var notaPrimeiroBimestre = parseFloat(document.getElementById("1sem").value)

    var notaSegundoBimestre = parseFloat(document.getElementById("2sem").value)

    var notaTerceiroBimestre = parseFloat(document.getElementById("3sem").value)

    var notaQuartoBimestre = parseFloat(document.getElementById("4sem").value)
    
    var notaTotal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4

    var notaFinal = notaTotal.toFixed(2)
    // toFixed com valor 0 arredonda pra cima

    var elementoTotal = document.getElementById("Resultado")
    
    let corTexto = document.querySelector("h2")
    let imageResultado = document.querySelector("body")

    if (notaFinal >= 5) {
        elementoTotal.innerHTML = "Aprovado <p>  Sua nota é: " + notaFinal

        corTexto.style.color = "green"
        imageResultado.style.backgroundImage = "none"

    } else {
        elementoTotal.innerHTML = "Reprovado <p> Sua nota é: " + notaFinal

        corTexto.style.color = "red"
        imageResultado.style.backgroundImage = "none"
    }
}

// Revisão
// variaveis, strings, console.log, toFixed, operações, matemaricas, concatenação