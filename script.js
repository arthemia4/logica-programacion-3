let calculo_factorial;

do {
    let userInput = prompt("¿Qué número desea calcular?");
    calculo_factorial = parseFloat(userInput);

    if (isNaN(calculo_factorial)) {
        alert("Por favor, ingrese un valor numérico válido.");
    }
} while (isNaN(calculo_factorial));

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);
    }
}

// Calcular el factorial
let resultadoFactorial = calcularFactorial(calculo_factorial);

// Mostrar el resultado en el documento
document.write(`El factorial de ${calculo_factorial} es: ${resultadoFactorial}`);
