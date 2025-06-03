function ejercicio2() {
    const precio = parseFloat(document.getElementById("precio").value);
    const cupon = parseFloat(document.getElementById("cupon").value);

    let resultado = "<strong>Resultado:</strong><br>";

    if (isNaN(precio) || isNaN(cupon)) {
        resultado += "No puedes ingresar valores vacíos en el precio o cupón";
    } else {
        let precioFinal = precio;

        if (precio > 10) {
            const descuento = (precio * cupon) / 100;
            precioFinal -= descuento;
            resultado += `Descuento de ${cupon}%: $${descuento.toFixed(2)}<br>`;
        } else {
            resultado += "No se aplicó un descuento debido a que el precio es igual o menor a $10<br>";
        }

        const iva = precioFinal * 0.15;
        const totalConIVA = precioFinal + iva;

        resultado += `IVA del 15%: $${iva.toFixed(2)}<br>`;
        resultado += `Monto final a pagar: $${totalConIVA.toFixed(2)}`;
    }

    document.getElementById("resultado").innerHTML = resultado;
}