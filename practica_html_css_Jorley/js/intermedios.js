// Ejercicio 6: Tabla de sumar con WHILE
function ejercicio6() {
  const x = parseInt(document.getElementById('ex6_x').value);
  let resultado = `Tabla de sumar del ${x}:\n\n`;
  let i = 1;

  while (i <= 12) {
    resultado += `${i} + ${x} = ${i + x}\n`;
    i++;
  }

  resultado += "\nTabla completada.";
  document.getElementById('res6').textContent = resultado;
}

// Ejercicio 7: Tabla de multiplicar personalizada
function ejercicio7() {
  const numero = parseInt(document.getElementById('ex7_num').value);
  const inicio = parseInt(document.getElementById('ex7_inicio').value);
  const fin = parseInt(document.getElementById('ex7_fin').value);

  let resultado = `Tabla del ${numero} (desde ${inicio} hasta ${fin}):\n\n`;
  let i = inicio;

  while (i <= fin) {
    resultado += `${numero} x ${i} = ${numero * i}\n`;
    i++;
  }

  document.getElementById('res7').textContent = resultado;
}

// Ejercicio 8: Números entre A y B
function ejercicio8() {
  const a = parseInt(document.getElementById('ex8_a').value);
  const b = parseInt(document.getElementById('ex8_b').value);

  let resultado = `Números entre ${a} y ${b}:\n\n`;
  let i = a;

  while (i <= b) {
    resultado += `${i}\n`;
    i++;
  }

  document.getElementById('res8').textContent = resultado;
}

// Ejercicio 9: Números pares entre A y B
function ejercicio9() {
  const a = parseInt(document.getElementById('ex9_a').value);
  const b = parseInt(document.getElementById('ex9_b').value);

  let resultado = `Números pares entre ${a} y ${b}:\n\n`;
  let i = a;
  let contador = 0;

  while (i <= b) {
    if (i % 2 === 0) {
      resultado += `${i}\n`;
      contador++;
    }
    i++;
  }

  resultado += `\nTotal de pares: ${contador}`;
  document.getElementById('res9').textContent = resultado;
}

// Ejercicio 10: Sumar pares entre A y B
function ejercicio10() {
  const a = parseInt(document.getElementById('ex10_a').value);
  const b = parseInt(document.getElementById('ex10_b').value);

  let resultado = `Sumando pares entre ${a} y ${b}:\n\n`;
  let i = a;
  let suma = 0;
  let contador = 0;

  while (i <= b) {
    if (i % 2 === 0) {
      resultado += `${i} (sumando)\n`;
      suma += i;
      contador++;
    }
    i++;
  }

  resultado += `\nSuma total: ${suma}\n`;
  resultado += `Cantidad de pares: ${contador}`;
  document.getElementById('res10').textContent = resultado;
}
