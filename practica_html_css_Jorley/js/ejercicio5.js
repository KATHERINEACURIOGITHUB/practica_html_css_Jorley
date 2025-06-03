function ejercicio5() {
    const tipo = document.getElementById("tipo").value.trim().toLowerCase();
    const edad = parseInt(document.getElementById("edad").value);
    const compra = parseFloat(document.getElementById("compra").value);

    let descuento = 0;

    if (tipo === "premium" && edad < 18) {
        descuento = 15;
    } else if (tipo === "premium" || tipo === "regular" || edad >= 18) {
        descuento = 10;
    }

    const valorDescuento = (compra * descuento) / 100;
    const totalConDescuento = compra - valorDescuento;
    const iva = totalConDescuento * 0.12;
    const totalFinal = totalConDescuento + iva;

    const mensaje = `
        <strong>Resultado:</strong><br>
        Tipo de usuario: ${tipo}<br>
        Total de la compra: $${compra.toFixed(2)}<br>
        Descuento: ${descuento}%<br>
        Valor del descuento: $${valorDescuento.toFixed(2)}<br>
        IVA del 12%: $${iva.toFixed(2)}<br>
        Total a pagar: $${totalFinal.toFixed(2)}
    `;

    document.getElementById("resultado").innerHTML = mensaje;
}