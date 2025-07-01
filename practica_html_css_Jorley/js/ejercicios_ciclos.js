// 1. Mostrar números del 1 al 10 usando for
function ejercicio1() {
    let texto = ""; // Inicializamos una cadena vacía para guardar los números del 1 al 10.

    for (let i = 1; i <= 10; i++) { // El ciclo for empieza en 1 y termina en 10.
        texto += i + "\n"; // Agregamos el valor actual de i seguido de un salto de línea.
    }

    return texto; // Mostramos el resultado.
}

// 2. Pedir un número y mostrar su tabla de multiplicar del 1 al 10 con for
function ejercicio2() {
    const n = parseInt(document.getElementById("ex2_n").value); // Obtenemos el valor ingresado y lo convertimos en número.

    if (isNaN(n)) return "Ingrese un número válido."; // Validamos que sea un número.

    let tabla = ""; // Variable para guardar la tabla.

    for (let i = 1; i <= 10; i++) { // El ciclo for empieza en 1 y termina en 10.
        tabla += `${n} x ${i} = ${n * i}\n`; // Generamos en cada línea la tabla de multiplicar del número ingresado.
    }

    return tabla; // Mostramos el resultado.
}

// 3. Pedir un número y mostrar la suma de los primeros N números naturales con for
function ejercicio3() {
    const n = parseInt(document.getElementById("ex3_n").value); // Obtenemos el valor ingresado y lo convertimos en número.

    if (isNaN(n) || n < 1) return "Ingrese un número natural válido."; // Validamos que sea un número y positivo.

    let suma = 0; // Variable para acumular la suma.

    for (let i = 1; i <= n; i++) {
        suma += i; // Sumamos cada número del 1 hasta n.
    }

    return `La suma de los primeros ${n} números naturales es ${suma}`; // Mostramos el resultado.
}

// 4. Pedir un número y mostrar su factorial con for
function ejercicio4() {
    const n = parseInt(document.getElementById("ex4_n").value); // Obtenemos el valor ingresado y lo convertimos en número.

    if (isNaN(n) || n < 0) return "Ingrese un número válido."; // Validamos que sea un número y positivo.

    let fact = 1; // Variable para el factorial. El factorial de 0 es 1 por definición.

    for (let i = 1; i <= n; i++) {
        fact *= i; // Multiplicamos fact por cada número del 1 hasta n.
    }

    return `El factorial de ${n} es ${fact}`; // Mostramos el resultado.
}

// 5. Mostrar todos los números pares del 1 al 50 for 
function ejercicio5() {
    let resultado = ""; // Variable para almacenar los números pares.

    for (let i = 2; i <= 50; i += 2) {
        // Iniciamos en 2 y vamos sumando de 2 en 2.
        resultado += i + " ";
    }

    return resultado.trim(); // Mostramos el resultado.
}

// 6. Pedir un número y mostrar los divisores con while 
function ejercicio6() {
    const n = parseInt(document.getElementById("ex6_n").value); // Obtenemos el valor ingresado y lo convertimos en número.

    if (isNaN(n) || n <= 0) return "Ingrese un número positivo."; // Validamos que sea un número y positivo.

    let i = 1; // Empezamos desde 1.
    let divisores = ""; // Variable para almacenar los divisores.

    while (i <= n) {
        if (n % i === 0) {
        // Si n es divisible por i, entonces es divisor.
        divisores += i + " ";
        }
        i++; // Incrementamos para seguir al siguiente número.
    }

    return `Divisores de ${n}: ${divisores.trim()}`; // Mostramos el resultado.
}

// 7. Generar los primeros N términos de la secuencia de Fibonacci con while
function ejercicio7() {
    let n = parseInt(document.getElementById("ex7_n").value); // Obtenemos el número de términos y los convertimos en números.

    if (isNaN(n) || n < 1) return "Ingrese un número válido."; // Validamos que sea un número y positivo.

    let a = 0, b = 1; // Primeros dos términos de la serie.
    let i = 0; // Empezamos desde 0.
    let serie = ""; // Variable para guardar los términos

    while (i < n) {
        serie += a + " "; // Añadimos el número actual.
        [a, b] = [b, a + b]; // Calculamos el siguiente número.
        i++; // Aumentamos el contador.
    }

    return `Fibonacci (${n} términos):\n${serie.trim()}`; // Mostramos el resultado.
}

// 8. Pedir nombres hasta que el usuario escriba “Messi”. Al final presente cuantos nombres ingresó con while 
function ejercicio8() {
    let contador = 0; // Inicializamos con 0.
    let nombre; // Variable para el nombre "Messi"

    do {
        nombre = prompt("Ingrese un nombre:"); // Pedimos el nombre.

        // Si se ingresó nombres y no es "Messi" aumentamos la cantidad.
        if (nombre && nombre.toLowerCase() !== "messi") {
            contador++; // Aumentamos el contador.
        }

    } while (nombre && nombre.toLowerCase() !== "messi"); // Mientras no se escriba "Messi" seguirá pidiendo nombres en bucle.

    return `Se ingresaron ${contador} nombres antes de escribir 'Messi'.`; // Mostramos el resultado.
}

// 9. Pedir números hasta que el usuario escriba un numero negativo y mostrar la suma total con while 
function ejercicio9() {
    let suma = 0; // Variable para acumular los números ingresados.
    let num;

    do {
        num = parseFloat(prompt("Ingrese un número (negativo para terminar):")); // Pedimos un valor y lo convertimos en número.

        if (!isNaN(num) && num >= 0) {
        suma += num; // Sumamos si es válido y no negativo.
        }

    } while (!isNaN(num) && num >= 0); // Termina si es negativo.

    return `La suma total es: ${suma}`; // Mostramos el resultado.
}

// 10.  Pedir números hasta que el usuario escriba 0. Mostrar cuántos números ingresó con while
function ejercicio10() {
    let contador = 0; // Inicializamos con 0.
    let num;

    do {
        num = parseFloat(prompt("Ingrese un número (0 para terminar):")); // Pedimos un valor y lo convertimos en número.

        if (!isNaN(num) && num !== 0) {
        contador++; // Aumentamos contador si es distinto de 0.
        }

    } while (!isNaN(num) && num !== 0); // Repetimos mientras no sea 0.

    return `Se ingresaron ${contador} números.`; // Mostramos el resultado.
}