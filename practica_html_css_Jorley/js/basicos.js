function ejercicio1() {
  const n = parseInt(document.getElementById("ex1_n").value);
  const msg = document.getElementById("ex1_mensaje").value;
  let res = `Mostrando "${msg}" ${n} veces:\n\n`;
  let c = 1;
  while (c <= n) {
    res += `${c}. ${msg}\n`;
    c++;
  }
  res += `\nTotal: ${n} repeticiones.`;
  document.getElementById("res1").textContent = res;
}

function ejercicio2() {
  const n = parseInt(document.getElementById("ex2_n").value);
  let res = `Números del 1 al ${n}:\n\n`;
  let i = 1;
  while (i <= n) {
    res += `${i}\n`;
    i++;
  }
  res += `\nTotal: ${n}`;
  document.getElementById("res2").textContent = res;
}

function ejercicio3() {
  const n = parseInt(document.getElementById("ex3_n").value);
  let res = `Números pares hasta ${n}:\n\n`;
  let i = 1, c = 0;
  while (i <= n) {
    if (i % 2 === 0) {
      res += `${i} (par)\n`;
      c++;
    }
    i++;
  }
  res += `\nTotal pares: ${c}`;
  document.getElementById("res3").textContent = res;
}

function ejercicio4() {
  const n = parseInt(document.getElementById("ex4_n").value);
  let res = `Múltiplos de 3 hasta ${n}:\n\n`;
  let i = 1, c = 0;
  while (i <= n) {
    if (i % 3 === 0) {
      res += `${i}\n`;
      c++;
    }
    i++;
  }
  res += `\nTotal múltiplos de 3: ${c}`;
  document.getElementById("res4").textContent = res;
}

function ejercicio5() {
  const x = parseInt(document.getElementById("ex5_x").value);
  const n = parseInt(document.getElementById("ex5_n").value);
  let res = `Múltiplos de ${x} hasta ${n}:\n\n`;
  let i = 1, c = 0;
  while (i <= n) {
    if (i % x === 0) {
      res += `${i}\n`;
      c++;
    }
    i++;
  }
  res += `\nTotal múltiplos de ${x}: ${c}`;
  document.getElementById("res5").textContent = res;
}