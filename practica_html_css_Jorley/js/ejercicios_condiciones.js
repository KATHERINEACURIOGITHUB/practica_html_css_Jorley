// Ejercicio 1: Pedir una edad y mostrar si es niño (0-12), adolescente (13-17), adulto (18-59) o adulto mayor (60+). 
function ejercicio1() {
    const edad = parseInt(document.getElementById('ex1_n').value); // Obtenemos el valor ingresado y lo convertimos en número.

    if (isNaN(edad) || edad < 0) return "Por favor, ingrese una edad válida."; // Validamos que sea un número y positivo.

    // Clasificamos según el rango de edad.
    if (edad >= 0 && edad <= 12) return "Niño"; // Si es igual o mayor a 0, e igual o menor a 12, es un niño.
    if (edad <= 17) return "Adolescente"; // Si es igual o menor a 17, es un adolescente.
    if (edad <= 59) return "Adulto"; // Si es igual o menor a 59, es un adulto.
    return "Adulto mayor"; // Si es igual o mayor a 60, es adulto mayor.
}

// Ejercicio 2: Pedir cuatro números y mostrar cuál es mayor, y si son iguales decirlo.
function ejercicio2() {
    // Obtenemos los cuatro valores ingresados y los convertimos en números.
    const nums = [
        parseFloat(document.getElementById('ex2_1').value),
        parseFloat(document.getElementById('ex2_2').value),
        parseFloat(document.getElementById('ex2_3').value),
        parseFloat(document.getElementById('ex2_4').value),
    ];

    if (nums.some(isNaN)) return "Ingrese todos los números."; // Verificamos que todos los números estén completos.

    const max = Math.max(...nums); // Obtenemos el número más alto del arreglo.
    const todosIguales = nums.every(n => n === nums[0]); // Verificamos si todos los números son iguales.

    return todosIguales ? "Todos los números son iguales." : `El número mayor es: ${max}`;
}

// Ejercicio 3: Pedir una nota y mostrar si está aprobado (>=7), caso contrario si está supletorio (>=5), caso contrario reprobado. 
function ejercicio3() {
    const nota = parseFloat(document.getElementById('ex3_n').value); // Obtenemos la nota ingresada y la convertimos en número.

    if (isNaN(nota)) return "Ingrese una nota válida."; // Validamos que sea un número.

    // Clasificamos la nota
    if (nota >= 7) return "Aprobado"; // Si es igual o mayor a 7, aprobado.
    if (nota >= 5) return "Supletorio"; // Si es igual o mayor a 5, supletorio.
    return "Reprobado"; // Si es igual o menor a 4, reprobado.
}

// Ejercicio 4: Pedir el día de la semana y decir si es fin de semana (sábado o domingo) o entre semana (lunes-viernes). 
function ejercicio4() {
    const dia = document.getElementById('ex4_dia').value.trim().toLowerCase(); // Obtenemos el día ingresado.

    if (!dia) return "Ingrese un día."; // Validamos que el día no esté vacío.

    // Verificamos
    if (dia === "sábado" || dia === "sabado" || dia === "domingo") return "Fin de semana";

    return "Entre semana"; // El resto se considera entre semana
}

// Ejercicio 5: Pedir una temperatura y decir si hace frío (<15), templado (15-25) o calor (>25).
function ejercicio5() {
    const temp = parseFloat(document.getElementById('ex5_t').value); // Obtenemos la temperatura ingresada y la convertimos en número.

    if (isNaN(temp)) return "Ingrese una temperatura válida."; // Validamos que sea un número.

    // Clasificamos según los valores
    if (temp < 15) return "Hace frío"; // Si es menor a 15, hace frío.
    if (temp <= 25) return "Está templado"; // Si es igual o menor a 25, está templado.
    return "Hace calor"; // Si es igual o mayor a 26, hace calor.
}

// Ejercicio 6: Pedir el nombre y género, y mostrar "Bienvenido" o "Bienvenida" según corresponda. 
function ejercicio6() {
    const nombre = document.getElementById('ex6_nombre').value.trim(); // Obtenemos el nombre del usuario.
    const genero = document.getElementById('ex6_genero').value.trim().toLowerCase(); // Obtenemos el género del usuario.

    if (!nombre || !genero) return "Ingrese un nombre y su género."; // Validamos que ambos campos estén completos.

    // Determinamos el saludo según el género.
    if (genero === "masculino") return `Bienvenido ${nombre}`; // Si es masculino, bienvenido.
    if (genero === "femenino") return `Bienvenida ${nombre}`; // Si es femenino, bienvenida.
    
    return "El género ingresado no está en la lista."; // Si el género no está en la lista
}

// Ejercicio 7: Pedir la hora y decir "Buenos días" (0-11), "Buenas tardes" (12-17) o "Buenas noches" (18-23). 
function ejercicio7() {
    const hora = parseInt(document.getElementById('ex7_hora').value); // Obtenemos la hora ingresada y la convertimos en número.

    // Validamos que la hora esté en el rango correcto
    if (isNaN(hora) || hora < 0 || hora > 23) return "Ingrese una hora válida de 0 a 23).";

    // Clasificamos la hora
    if (hora < 12) return "Buenos días"; // Si es menor a 12, buenos días.
    if (hora < 18) return "Buenas tardes"; // Si es menor a 18, buenas tardes.
    return "Buenas noches"; // Si es mayor a 18, buenas noches.
}

// Ejercicio 8: Pedir el número de hijos y si tiene trabajo, calcular bono: si tiene hijos y trabajo, bono es $50 por hijo; si no tiene trabajo, es $30 por hijo. 
function ejercicio8() {
    const hijos = parseInt(document.getElementById('ex8_hijos').value); // Obtenemos el número de hijos y los convertimos en números.
    const tieneTrabajo = document.getElementById('ex8_trabajo').checked; // Obtenemos si tiene trabajo.

    if (isNaN(hijos) || hijos < 0) return "Ingrese una cantidad válida de hijos."; // Validamos que sea un número.

    // Si tiene trabajo el bono es $50 por hijo, si no tiene trabajo el bono es $30 por hijo.
    const bono = tieneTrabajo ? hijos * 50 : hijos * 30;

    return `El bono es: $${bono}`; // Mostramos la respuesta.
}

// Ejercicio 9: Pedir el tipo de cliente (Normal o VIP) y su gasto. Si es VIP y gastó más de 100, tiene 20% de descuento; si no, 10%. Al final aplicar el 15% del iva 
function ejercicio9() {
    const tipo = document.getElementById('ex9_tipo').value.trim().toLowerCase(); // Obtenemos el tipo de cliente.
    const gasto = parseFloat(document.getElementById('ex9_gasto').value); // Obtenemos el gasto del cliente y lo convertimos en número.

    if (isNaN(gasto)) return "Ingrese un gasto válido."; // Validamos que sea un número.

    // Si es VIP y gasta más de 100, 20% de descuento; caso contrario 10%.
    let descuento = (tipo === "vip" && gasto > 100) ? 0.20 : 0.10;

    let subtotal = gasto * (1 - descuento); // Aplicamos el descuento.
    let total = subtotal * 1.15; // Aplicamos el IVA del 15%.

    return `Total con descuento e IVA: $${total.toFixed(2)}`; // Mostramos la respuesta.
}

// Ejercicio 10: Pedir si tiene membresía y si su compra es mayor a 50. Si ambas condiciones se cumplen, aplicar descuento del 30% con un iva del 15%, sino aplicar un descuento del 5% con un iva del 10%.
function ejercicio10() {
    const tieneMembresia = document.getElementById('ex10_membresia').checked; // Obtenemos si tiene membresía.
    const compra = parseFloat(document.getElementById('ex10_compra').value); // Obtenemos el valor de la compra y la convertimos en número.

    if (isNaN(compra)) return "Ingrese el valor de la compra."; // Validamos que sea un número.

    // Si tiene membresía y compra > 50, 30% de descuento y 15% de IVA; caso contrario, 5% de descuento y 10% de IVA.
    let descuento, iva;
    if (tieneMembresia && compra > 50) { // Si tiene membresía y el gasto es mayor a 50, recibe 30% de descuento y 15% de IVA.
        descuento = 0.30;
        iva = 0.15;
    } else {
        descuento = 0.05; // Si tiene o no membresía y el gasto es menor a 50, recibe 5% de descuento y 10% de IVA.
        iva = 0.10;
    }

    const subtotal = compra * (1 - descuento); // Aplicamos el descuento.
    const total = subtotal * (1 + iva); // Aplicamos el IVA.

    return `Total con descuento e IVA: $${total.toFixed(2)}`; // Mostramos la respuesta.
}