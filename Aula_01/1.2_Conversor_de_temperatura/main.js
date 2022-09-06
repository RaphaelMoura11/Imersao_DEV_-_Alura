function verificar() {
    var valor = parseFloat(document.getElementById("valor").value);

    var tempDeEntrada = document.getElementsByName("temperaturaEntra")
    var tempDeSaida = document.getElementsByName("temperaturaSai")
    for (var i = 0; i < tempDeEntrada.length; i++)
    for (var i = 0; i < tempDeSaida.length; i++)

    if (tempDeEntrada[i].value === "Celsius" && tempDeSaida[i].value === "Fareinheit") {
        // De celsius para Fareinheit
        var result = (valor * 1.8) + 32;

    }else if (tempDeEntrada[i].value === "Celsius" && tempDeSaida[i].value === "Kelvin") {
        //De celsius para kelvin
        var result = valor + 273

    }else if (tempDeEntrada[i].value === "Fareinheit" && tempDeSaida[i].value === "Celsius") {
        //De Fareinheit para Celsius
        var result = (valor - 32) / 1.8
        
    }else if (tempDeEntrada[i].value === "Fareinheit" && tempDeSaida[i].value === "Kelvin") {
        //De Fareinheit para Kelvin
        var result = (valor + 459.67) * 5 / 9 
        
    }else if (tempDeEntrada[i].value === "Kelvin" && tempDeSaida[i].value === "Celsius") {
        //De Kelvin para Celsius
        var result = valor - 273
        
    }else if (tempDeEntrada[i].value === "Kelvin" && tempDeSaida[i].value === "Fareinheit") {
        //De Kelvin para Fareinheit
        var result = 1.8 * (valor - 273) + 32
        
    } else if (tempDeEntrada[i].value === tempDeSaida[i].value) {
        var result = valor
    }    

    var resultado = result.toFixed(2)
    console.log(resultado);

    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = resultado + " graus " + tempDeSaida
    elementoValorConvertido.innerHTML = valorConvertido
}