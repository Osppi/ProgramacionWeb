document.getElementById("btnConvertir").addEventListener("click", function () {
    const temp = parseFloat(document.getElementById("temp").value)
    const tipo = document.getElementById("tipo").value
    let result = 0;
    if (tipo == document.getElementById("2").value){
        result = (((temp*1.8)+32).toFixed(2))
    } else {
        result = (temp-32)*0.55
    }
    alert(`Temperatura en ${tipo}: ${result}`) 
});



document.getElementById("btnCalcular").addEventListener("click", function () {
    const name = document.getElementById("nombre").value
    const age = document.getElementById("edad").value
    const weight = document.getElementById("peso").value
    const height = document.getElementById("altura").value
    const sex = document.getElementById("sexo").value
    let TMB = 0;
    if (sex == document.getElementById("1")){
        TMB = 10 * weight + 6.25 * height - 5 * age + 5
    } else {
        TMB = 10 * weight + 6.25 * height - 5 * age - 161
    }
    alert(`Nombre: ${name} \n Edad: ${age} \n Peso: ${weight} kg\n Altura: ${height} cm\n Sexo: ${sex} \n Calorias Necesarias: ${TMB}`)
});
