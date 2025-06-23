// EJERCICIOS BÁSICOS DE ARREGLOS (Sin ciclos)
function ejerciciosArreglos() {
    let resultado = "";

    // Ejercicio 1
    const frutas = ["manzana", "banana", "uva"];
    resultado += `Ejercicio 1:\n${frutas[0]}\n${frutas[1]}\n${frutas[2]}\n\n`;

    // Ejercicio 2
    const numeros = [1, 2];
    numeros.push(3);
    resultado += `Ejercicio 2:\n${numeros}\n\n`;

    // Ejercicio 3
    const datos = [];
    datos[0] = 10;
    datos[1] = 20;
    resultado += `Ejercicio 3:\n${datos}\n\n`;

    document.getElementById("resArreglos").textContent = resultado;
}

// EJERCICIOS BÁSICOS DE CADENAS (Sin ciclos)
function ejerciciosCadenas() {
    let resultado = "";

    // Ejercicio 4
    const saludo = "Hola clase";
    resultado += `Ejercicio 4:\n${saludo}\n\n`;

    // Ejercicio 5
    const palabra = "Programación";
    resultado += `Ejercicio 5:\n${palabra.length} caracteres\n\n`;

    // Ejercicio 6
    const nombre = "Luis";
    resultado += `Ejercicio 6:\n`;
    resultado += `${nombre[0]}\n${nombre[1]}\n${nombre[2]}\n${nombre[3]}\n\n`;

    // Ejercicio 7
    const palabra2 = "hola";
    const letras = palabra2.split("");
    resultado += `Ejercicio 7:\n${letras}\n\n`;

    // Ejercicio 8
    const cadenaNumeros = "10;30;40;50";
    const arregloNumeros = cadenaNumeros.split(";").map(Number);
    resultado += `Ejercicio 8:\n${arregloNumeros}\n\n`;

    document.getElementById("resCadenas").textContent = resultado;
}

// EJERCICIOS CON CICLOS (Arreglos y Cadenas)
function ejerciciosCiclos() {
    let resultado = "";

    // Ejercicio 9
    const frutas = ["manzana", "banana", "uva"];
    resultado += `Ejercicio 9:\n`;
    for (let i = 0; i < frutas.length; i++) {
        resultado += frutas[i] + "\n";
    }
    resultado += "\n";

    // Ejercicio 10
    let i = 0;
    resultado += `Ejercicio 10:\n`;
    while (i < frutas.length) {
        resultado += frutas[i] + "\n";
        i++;
    }
    resultado += "\n";

    // Ejercicio 11
    const palabra = "sol";
    resultado += `Ejercicio 11:\n`;
    for (let i = 0; i < palabra.length; i++) {
        resultado += palabra[i] + "\n";
    }
    resultado += "\n";

    // Ejercicio 12
    let j = 0;
    resultado += `Ejercicio 12:\n`;
    while (j < palabra.length) {
        resultado += palabra[j] + "\n";
        j++;
    }
    resultado += "\n";

    // Ejercicio 13
    let vocales = 0;
    for (let i = 0; i < palabra.length; i++) {
        if ("aeiou".includes(palabra[i])) {
        vocales++;
        }
    }
    resultado += `Ejercicio 13:\nVocales: ${vocales}\n\n`;

    // Ejercicio 14
    const palabra1 = "casa";
    const palabra2 = "cosa";
    resultado += `Ejercicio 14:\n`;
    for (let i = 0; i < palabra1.length; i++) {
        resultado += `¿Son iguales en posición ${i}? ${palabra1[i] === palabra2[i]}\n\n`;
    }

    // Ejercicio 15
    const numeros = [6, 10];
    resultado += `Ejercicio 15:\n`;
    for (let i = 0; i < numeros.length; i++) {
        resultado += `Divisores de ${numeros[i]}: `;
        let d = 1;
        while (d <= numeros[i]) {
        if (numeros[i] % d === 0) {
            resultado += d + " ";
        }
        d++;
        }
        resultado += "\n";
    }
    resultado += "\n";

    // Ejercicio 16
    resultado += `Ejercicio 16:\n`;
    for (let i = 0; i < numeros.length; i++) {
        let suma = 0;
        let d = 1;
        while (d < numeros[i]) {
        if (numeros[i] % d === 0) suma += d;
        d++;
        }
        resultado += `Suma de divisores de ${numeros[i]}: ${suma}\n`;
    }
    resultado += "\n";

    // Ejercicio 17
    const numCheck = [6, 10, 28];
    resultado += `Ejercicio 17:\n`;
    for (let i = 0; i < numCheck.length; i++) {
        let suma = 0;
        let d = 1;
        while (d < numCheck[i]) {
        if (numCheck[i] % d === 0) suma += d;
        d++;
        }
        resultado += `${numCheck[i]} ${suma === numCheck[i] ? "es" : "NO es"} un número perfecto\n`;
    }

    document.getElementById("resCiclos").textContent = resultado;
}