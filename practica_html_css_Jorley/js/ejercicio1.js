function ejercicio1() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const n3 = parseFloat(document.getElementById("num3").value);
    const n4 = parseFloat(document.getElementById("num4").value);

    let resultado = "<strong>Resultado:</strong><br>";

    if (n1 === n2 / 2) {
        resultado += `El número 1 (${n1}) es la mitad del número 2 (${n2})<br>`;
    } else {
        resultado += `El número 1 (${n1}) no es la mitad del número 2 (${n2})<br>`;
    }

    if (n4 % n3 === 0) {
        resultado += `El número 3 (${n3}) es divisor del número 4 (${n4})`;
    } else {
        resultado += `El número 3 (${n3}) no es divisor del número 4 (${n4})`;
    }

    document.getElementById("resultado").innerHTML = resultado;
}