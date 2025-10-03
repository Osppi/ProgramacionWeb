function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value)
    const altura = parseFloat(document.getElementById("altura").value)
    const alturaCM = altura / 100
    
    const IMC = ((peso / (alturaCM*alturaCM)).toFixed(2))
    let estado = ""
    if (IMC < 18.5){
        estado = "Peso inferior al normal"
    } else if (IMC > 18.5 && IMC < 24.9) {
        estado = "Normal"
    } else if (IMC > 25.0 && IMC < 29.9){
        estado = "Peso superior al normal"
    } else {
        estado = "Obesidad"
    }

    alert(`IMC: ${IMC} \n ${estado}`);
}