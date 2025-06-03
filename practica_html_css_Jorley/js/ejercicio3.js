function ejercicio3() {
    const cuenta = parseFloat(document.getElementById("cuenta").value);
    const descuento = parseFloat(document.getElementById("descuento").value);

    let resultado = "<strong>Resultado:</strong><br>";

    if (isNaN(cuenta) || isNaN(descuento)) {
        resultado += "No puedes ingresar valores vacíos en el total o descuento";
    } else {
        let totalConDescuento = cuenta;

        if (cuenta > 70) {
            const montoDescuento = (cuenta * descuento) / 100;
            totalConDescuento -= montoDescuento;
            resultado += `Descuento de ${descuento}%: $${montoDescuento.toFixed(2)}<br>`;
        } else {
            resultado += "No se aplicó un descuento debido a que la cuenta no supera los $70<br>";
        }

        const iva = totalConDescuento * 0.15;
        const totalFinal = totalConDescuento + iva;

        resultado += `IVA del 15%: $${iva.toFixed(2)}<br>`;
        resultado += `Monto final a pagar: $${totalFinal.toFixed(2)}`;
    }

    document.getElementById("resultado").innerHTML = resultado;
}