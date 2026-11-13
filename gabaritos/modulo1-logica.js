const assert = require('assert');

// 1. Conversão de temperatura com classificação
function classificarTemperatura(c) {
  if (c < 15) return 'Frio';
  if (c < 25) return 'Agradável';
  return 'Quente';
}

// 2. Século do ano
function seculo(ano) {
  return Math.ceil(ano / 100);
}

// 3. Tabuada como array de textos
function tabuada(n) {
  const linhas = [];
  for (let i = 1; i <= 10; i++) {
    linhas.push(`${n} x ${i} = ${n * i}`);
  }
  return linhas;
}

// 4. Fatorial
function fatorial(n) {
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

// 5. Contar palavras
function contarPalavrasTexto(texto) {
  const t = texto.trim();
  return t === '' ? 0 : t.split(/\s+/).length;
}

// 6. Capitalizar cada palavra
function capitalizar(texto) {
  return texto
    .split(' ')
    .map((p) => (p === '' ? p : p[0].toUpperCase() + p.slice(1).toLowerCase()))
    .join(' ');
}

// 7. Anagrama (ignora maiúsculas, espaços e acentos)
function ehAnagrama(a, b) {
  const limpar = (t) =>
    t
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '')
      .split('')
      .sort()
      .join('');
  return limpar(a) === limpar(b);
}

// 8. Número perfeito (soma dos divisores próprios == n)
function ehPerfeito(n) {
  if (n < 2) return false;
  let soma = 1;
  for (let d = 2; d * d <= n; d++) {
    if (n % d === 0) {
      soma += d;
      if (d !== n / d) soma += n / d;
    }
  }
  return soma === n;
}

// 9. Sequência de Collatz: quantos passos até chegar a 1
function passosCollatz(n) {
  let passos = 0;
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    passos++;
  }
  return passos;
}

// 10. Cifra de César (só letras a-z / A-Z)
function cesar(texto, chave) {
  const deslocar = (c, base) =>
    String.fromCharCode(((c.charCodeAt(0) - base + (chave % 26) + 26) % 26) + base);
  return texto.replace(/[a-z]/g, (c) => deslocar(c, 97)).replace(/[A-Z]/g, (c) => deslocar(c, 65));
}

assert.strictEqual(classificarTemperatura(10), 'Frio');
assert.strictEqual(classificarTemperatura(15), 'Agradável');
assert.strictEqual(classificarTemperatura(25), 'Quente');
assert.strictEqual(seculo(1900), 19);
assert.strictEqual(seculo(1901), 20);
assert.strictEqual(tabuada(7)[2], '7 x 3 = 21');
assert.strictEqual(tabuada(2).length, 10);
assert.strictEqual(fatorial(0), 1);
assert.strictEqual(fatorial(5), 120);
assert.strictEqual(contarPalavrasTexto('  olá   mundo  '), 2);
assert.strictEqual(contarPalavrasTexto(''), 0);
assert.strictEqual(capitalizar('jOÃO da sILVA'), 'João Da Silva');
assert.strictEqual(ehAnagrama('Amor', 'Roma'), true);
assert.strictEqual(ehAnagrama('Pão', 'opa'), true);
assert.strictEqual(ehAnagrama('casa', 'caso'), false);
assert.strictEqual(ehPerfeito(6), true);
assert.strictEqual(ehPerfeito(28), true);
assert.strictEqual(ehPerfeito(12), false);
assert.strictEqual(ehPerfeito(1), false);
assert.strictEqual(passosCollatz(1), 0);
assert.strictEqual(passosCollatz(6), 8);
assert.strictEqual(cesar('abc xyz', 3), 'def abc');
assert.strictEqual(cesar('Def', -3), 'Abc');

console.log('Gabarito do módulo 1: OK');
