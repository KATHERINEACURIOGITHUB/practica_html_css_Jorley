function ejercicio11() {
  const numero = parseInt(document.getElementById('ex11_n').value);
  
  let resultado = `Divisores de ${numero}:\n\n`;
  let i = 1;
  let divisores = [];
  
  while (i <= numero) {
    if (numero % i === 0) {
      divisores.push(i);
      resultado += `${i}\n`;
    }
    i++;
  }
  
  resultado += `\nTotal de divisores: ${divisores.length}`;
  resultado += `\nDivisores: [${divisores.join(', ')}]`;
  return resultado;
}

function ejercicio12() {
  const numero = parseInt(document.getElementById('ex12_n').value);
  
  let resultado = `Calculando suma de divisores de ${numero}:\n\n`;
  let i = 1;
  let suma = 0;
  let divisores = [];
  
  while (i <= numero) {
    if (numero % i === 0) {
      divisores.push(i);
      resultado += `${i} (sumando)\n`;
      suma += i;
    }
    i++;
  }
  
  resultado += `\nDivisores: [${divisores.join(' + ')}]\n`;
  resultado += `Suma total: ${suma}`;
  return resultado;
}

function ejercicio13() {
  const numero = parseInt(document.getElementById('ex13_n').value);
  
  let resultado = `Verificando si ${numero} es perfecto...\n\n`;
  let i = 1;
  let suma = 0;
  let divisores = [];
  
  while (i < numero) {
    if (numero % i === 0) {
      divisores.push(i);
      resultado += `${i} (divisor propio)\n`;
      suma += i;
    }
    i++;
  }
  
  resultado += `\nDivisores propios: [${divisores.join(' + ')}]\n`;
  resultado += `Suma: ${suma}\n\n`;
  
  if (suma === numero) {
    resultado += `🎉 ${numero} ES un número perfecto!`;
  } else {
    resultado += `❌ ${numero} NO es perfecto (suma=${suma})`;
  }
  
  return resultado;
}

function ejercicio14() {
  const numero = parseInt(document.getElementById('ex14_n').value);

  let resultado = `Verificando si ${numero} es primo...\n`;
  resultado += "================================\n";

  if (numero < 2) {
    resultado += `${numero} no es primo (debe ser ≥ 2)`;
  } else {
    let esPrimo = true;
    let i = 2;
    let divisoresEncontrados = [];

    while (i < numero && esPrimo) {
      if (numero % i === 0) {
        esPrimo = false;
        divisoresEncontrados.push(i);
        resultado += `🔍 Divisor encontrado: ${i}\n`;
      } else {
        resultado += `✅ ${i} no divide a ${numero}\n`;
      }
      i++;
    }

    resultado += "================================\n";

    if (esPrimo) {
      resultado += `🎉 ${numero} ES un número primo!\n`;
      resultado += "No se encontraron divisores";
    } else {
      resultado += `❌ ${numero} NO es primo\n`;
      resultado += `Divisores: ${divisoresEncontrados.join(', ')}`;
    }
  }

  return resultado;
}

function ejercicio15() {
  const a = parseInt(document.getElementById('ex15_a').value);
  const b = parseInt(document.getElementById('ex15_b').value);
  
  let resultado = `Multiplicando ${a} × ${b} por sumas sucesivas:\n\n`;
  let i = 1;
  let suma = 0;
  
  while (i <= b) {
    suma += a;
    resultado += `Suma ${i}: ${suma} (+ ${a})\n`;
    i++;
  }
  
  resultado += `\nResultado: ${a} × ${b} = ${suma}`;
  resultado += `\nVerificación: ${a * b}`;
  return resultado;
}
