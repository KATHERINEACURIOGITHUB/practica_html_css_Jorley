function ejercicio4() {
    const tipo = document.getElementById("tipo").value.trim().toUpperCase();
    const esDiscapacitado = document.getElementById("discapacidad").value === "si";

    const descuentoBase = 10;
    let descuentoFinal = descuentoBase;

    if (tipo === "A" || esDiscapacitado) {
        descuentoFinal += 20;
    } else if (tipo === "B" && !esDiscapacitado) {
        descuentoFinal += 15;
    } else if (tipo === "C") {
        descuentoFinal += 10;
    }

    let resultado = "<strong>Resultado:</strong><br>";
    resultado += `El descuento final para el cliente de tipo "${tipo}" es de: ${descuentoFinal}%`;

    document.getElementById("resultado").innerHTML = resultado;
}