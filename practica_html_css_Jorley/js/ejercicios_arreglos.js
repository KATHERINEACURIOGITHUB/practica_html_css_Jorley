// Función para convertir el texto de entrada en un arreglo de números
function parseInputToArray(id) {
    // Obtenemos el valor ingresado.
    const input = document.getElementById(id).value.trim();

    // Si no hay valor ingresado, devolvemos null.
    if (!input) return null;

    // Separamos el texto por comas, quitamos espacios extras y convertimos cada elemento en número.
    const arr = input.split(',').map(x => Number(x.trim()));

    // Si algunos de los elementos no es un número, devolvemos null.
    if (arr.some(isNaN)) return null;

    // Mostramos el arreglo de números.
    return arr;
}

// Ejercicio 1: Crear un arreglo con 5 números y mostrar el promedio
function ejercicio1() {
    const arr = parseInputToArray('ex1'); // Convertimos los valores ingresados a un arreglo de números.
    if (!arr || arr.length !== 5) return "Ingresa exactamente 5 números separados por comas.";

    // Sumamos todos los valores del arreglo usando ".reduce".
    const suma = arr.reduce((acc, val) => acc + val, 0);
    
    // Calculamos el promedio.
    const promedio = suma / arr.length;

    return `El promedio es: ${promedio.toFixed(2)}`; // Mostramos el resultado (con 2 decimales).
}

// Ejercicio 2: Contar cuántos elementos impares hay en un arreglo
function ejercicio2() {
    const arr = parseInputToArray('ex2');
    if (!arr) return "Ingresa números separados por comas.";

    // Filtramos solo los números impares.
    const impares = arr.filter(n => n % 2 !== 0).length;

    // Mostramos cuántos impares existen.
    return `Hay ${impares} números impares.`; // Mostramos el resultado.
}

// Ejercicio 3: Contar cuántos son mayores de edad (>=18)
function ejercicio3() {
    const arr = parseInputToArray('ex3');
    if (!arr) return "Ingresa edades separadas por comas.";

    const mayores = arr.filter(edad => edad >= 18).length;

    return `Hay ${mayores} personas mayores de edad.`; // Mostramos el resultado.
}

// Ejercicio 4: Buscar un valor en un arreglo
function ejercicio4() {
    const arr = parseInputToArray('ex4_arr');
    if (!arr) return "Ingresa un arreglo válido.";

    const valor = Number(document.getElementById('ex4_valor').value.trim());
    if (isNaN(valor)) return "Ingresa un valor numérico para buscar.";

    // Buscamos si el valor existe en el arreglo.
    const existe = arr.includes(valor);

    return existe ? `El valor ${valor} existe en el arreglo.` : `El valor ${valor} NO existe en el arreglo.`; // Mostramos el resultado.
}

// Ejercicio 5: Concatenar palabras en una frase
function ejercicio5() {
    const input = document.getElementById('ex5').value.trim();
    if (!input) return "Ingresa palabras separadas por comas.";

    // Separamos palabras por comas y quitamos espacios.
    const palabras = input.split(',').map(s => s.trim());

    // Unimos todas las palabras con un espacio.
    const frase = palabras.join(' ');

    return `Frase resultante: "${frase}"`; // Mostramos el resultado.
}

// Ejercicio 6: Obtener el cubo de cada número del arreglo
function ejercicio6() {
    const arr = parseInputToArray('ex6');
    if (!arr) return "Ingresa números separados por comas.";

    // Usamos ".map" para elevar cada número al cubo.
    const cubos = arr.map(n => Math.pow(n, 3));

    return `Cubos: ${cubos.join(', ')}`; // Mostramos el resultado.
}

// Ejercicio 7: Mostrar la tabla de multiplicar de cada número
function ejercicio7() {
    const arr = parseInputToArray('ex7');
    if (!arr) return "Ingresa números separados por comas.";

    let resultado = "";

    arr.forEach(num => {
        resultado += `Tabla del ${num}:\n`;

        // Hacemos un ciclo del 1 al 10 para generar la tabla.
        for (let i = 1; i <= 10; i++) {
            resultado += `${num} x ${i} = ${num * i}\n`;
        }

        resultado += '\n'; // ENTER (espacio) entre tablas.
    });

    return resultado.trim(); // Mostramos el resultado.
}

// Función para calcular el factorial de un número
function factorial(n) {
    if (n < 0) return NaN;
    if (n === 0) return 1;

    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

// Ejercicio 8: Mostrar el factorial de cada elemento
function ejercicio8() {
    const arr = parseInputToArray('ex8');
    if (!arr) return "Ingresa números enteros no negativos separados por comas.";

    // Para cada número, calculamos el factorial,
    const factoriales = arr.map(n => {
        if (!Number.isInteger(n) || n < 0) return `No válido: ${n}`;
        return factorial(n);
    });

    return `Factoriales:\n${factoriales.join(', ')}`; // Mostramos el resultado.
}

// Ejercicio 9: Copiar solo los pares a otro arreglo
function ejercicio9() {
    const arr = parseInputToArray('ex9');
    if (!arr) return "Ingresa números separados por comas.";

    // Filtramos solo los números pares.
    const pares = arr.filter(n => n % 2 === 0);

    return `Números pares: ${pares.join(', ')}`; // Mostramos el resultado.
}

// Ejercicio 10: Sumar dos arreglos en un tercer arreglo
function ejercicio10() {
    const arrA = parseInputToArray('ex10_a');
    const arrB = parseInputToArray('ex10_b');
    if (!arrA || !arrB) return "Ingresa ambos arreglos correctamente.";

    // Validamos que tengan la misma longitud.
    if (arrA.length !== arrB.length) return "Los arreglos deben tener la misma cantidad de elementos.";

    // Sumamos elemento a elemento.
    const suma = arrA.map((val, idx) => val + arrB[idx]);

    return `Suma de arreglos: ${suma.join(', ')}`; // Mostramos el resultado.
}