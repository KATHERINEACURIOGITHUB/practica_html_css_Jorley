// Ejercicio 1: Pedir una palabra y mostrar cuántas letras tiene.
function ejercicio1() {
    // Obtenemos el texto ingresado y eliminamos espacios al inicio y final.
    const texto = document.getElementById("ex1_text").value.trim();
    return `Tiene ${texto.length} letras.`; // Mostramos la respuesta.
}

// Ejercicio 2: Pedir un texto y mostrar cuántas veces se repite la letra “a”.
function ejercicio2() {
    // Obtenemos el texto ingresado y convertimos todo a minúsculas.
    const texto = document.getElementById("ex2_text").value.toLowerCase();
    let contador = 0; // Inicializamos con 0.
    // Recorremos cada letra del texto.
    for (let letra of texto) {
        // Si la letra actual es 'a', aumentamos el contador.
        if (letra === "a") contador++;
    }
    // Devolvemos cuántas veces apareció la letra 'a'.
    return `La letra "a" aparece ${contador} veces.`; // Mostramos la respuesta.
}

// Ejercicio 3: Invertir una cadena ingresada.
function ejercicio3() {
    // Obtenemos el texto ingresado.
    const texto = document.getElementById("ex3_text").value;
    // Separamos el texto en un arreglo de caracteres, invertimos el arreglo y luego lo unimos de nuevo en un string.
    return texto.split("").reverse().join(""); // Mostramos la respuesta.
}

// Ejercicio 4: Pedir dos textos y decir cuál tiene más letras.
function ejercicio4() {
    // Obtenemos ambos textos ingresados y eliminamos espacios al inicio y al final.
    const t1 = document.getElementById("ex4_text1").value.trim();
    const t2 = document.getElementById("ex4_text2").value.trim();
    // Comparamos las longitudes de ambos textos.
    if (t1.length > t2.length) return "El primer texto es más largo."; // Si el primer texto es mayor al segundo en longitud, el primer texto es más largo.
    if (t2.length > t1.length) return "El segundo texto es más largo."; // Si el segundo texto es mayor al primero en longitud, el segundo texto es más largo.
    // Si tienen la misma longitud, decirlo.
    return "Ambos textos tienen la misma longitud.";
}

// Ejercicio 5: Pedir un nombre completo y mostrar solo las iniciales.
function ejercicio5() {
    // Obtenemos el nombre completo ingresado y eliminamos espacios al inicio y al final.
    const nombre = document.getElementById("ex5_nombre").value.trim();
    // Si no se ingresó nada, pedimos que se ingrese un nombre.
    if (!nombre) return "Ingrese un nombre completo.";
    // Dividimos el nombre en palabras y obtenemos la primera letra de cada una en mayúscula, luego las unimos con un punto (.).
    return nombre.split(" ").map(p => p.charAt(0).toUpperCase()).join(".") + "."; // Mostramos la respuesta.
}

// Ejercicio 6: Pedir un texto y reemplazar todas las "a" por "@".
function ejercicio6() {
    // Obtenemos el texto ingresado.
    const texto = document.getElementById("ex6_text").value;
    // Usamos expresión regular para reemplazar todas las 'a' y 'A' (insensible a mayúsculas) por '@'.
    return texto.replace(/a/gi, "@"); // Mostramos la respuesta.
}

// Ejercicio 7: Verificar si una palabra es un palíndromo.
function ejercicio7() {
    // Obtenemos el texto ingresado, eliminamos espacios y lo convertimos a minúsculas.
    const texto = document.getElementById("ex7_text").value.trim().toLowerCase();
    // Invertimos el texto de la misma manera que en el ejercicio 3.
    const invertido = texto.split("").reverse().join("");
    // Comparamos el texto original con el invertido.
    return texto === invertido ? "Es un palíndromo" : "No es un palíndromo"; // Mostramos la respuesta.
}

// Ejercicio 8: Pedir dos frases e indicar cuál tiene mayor cantidad de caracteres.
function ejercicio8() {
    // Obtenemos las dos frases sin modificar ingresadas.
    const f1 = document.getElementById("ex8_frase1").value;
    const f2 = document.getElementById("ex8_frase2").value;
    // Comparamos la longitud de las frases
    if (f1.length > f2.length) return "La primera frase es más larga."; // Si la primera frase es mayor a la segunda en longitud, la primera frase es más larga.
    if (f2.length > f1.length) return "La segunda frase es más larga."; // Si la segunda frase es mayor a la primera en longitud, la segunda frase es más larga.
    // Si ambas frases son iguales, decirlo.
    return "Ambas frases tienen igual longitud.";
}

// Ejercicio 9: Contar cuántas veces aparece una letra específica.
function ejercicio9() {
    // Obtenemos el texto ingresado y la letra a buscar en minúsculas.
    const texto = document.getElementById("ex9_text").value.toLowerCase();
    const letra = document.getElementById("ex9_letra").value.toLowerCase();
    // Validamos que se haya ingresado una sola letra.
    if (!letra || letra.length !== 1) return "Ingrese una sola letra válida.";
    let contador = 0;
    // Recorremos el texto y contamos las veces que aparece la letra buscada.
    for (let l of texto) {
        if (l === letra) contador++;
    }
    return `La letra "${letra}" aparece ${contador} veces.`; // Mostramos la respuesta.
}

// Ejercicio 10: Dividir una oración en palabras y mostrarlas una por una.
function ejercicio10() {
    // Obtenemos el texto ingresado y eliminamos espacios al inicio y final.
    const texto = document.getElementById("ex10_oracion").value.trim();
    if (!texto) return "Ingrese una oración.";
    // Separamos la oración por espacios (uno o más espacios consecutivos) y las unimos con saltos de línea para mostrar una por línea.
    return texto.split(/\s+/).join("\n"); // Mostramos la respuesta.
}