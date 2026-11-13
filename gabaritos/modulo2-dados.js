const assert = require('assert');

const cardapio = [
  { id: 1, nome: 'Pizza', preco: 45, categoria: 'pizza', disponivel: true },
  { id: 2, nome: 'Suco', preco: 8, categoria: 'bebida', disponivel: true },
  { id: 3, nome: 'Refri', preco: 8, categoria: 'bebida', disponivel: false },
  { id: 4, nome: 'Calzone', preco: 30, categoria: 'pizza', disponivel: true },
];
cardapio.forEach(Object.freeze);
Object.freeze(cardapio);

// 1. Preços com desconto (map)
const comDesconto = (lista, pct) =>
  lista.map((p) => ({ ...p, preco: Math.round(p.preco * (100 - pct)) / 100 }));

// 2. Pratos baratos e disponíveis (filter)
const baratosDisponiveis = (lista, max) => lista.filter((p) => p.disponivel && p.preco <= max);

// 3. Soma de números pares (filter + reduce)
const somaPares = (nums) => nums.filter((n) => n % 2 === 0).reduce((a, n) => a + n, 0);

// 4. Prato mais barato (primeiro no empate), null se vazio
const maisBarato = (lista) =>
  lista.reduce((menor, p) => (menor === null || p.preco < menor.preco ? p : menor), null);

// 5. Contar por categoria (reduce)
const contarPorCategoria = (lista) =>
  lista.reduce((acc, p) => ({ ...acc, [p.categoria]: (acc[p.categoria] || 0) + 1 }), {});

// 6. Ordenar por nome (cópia)
const ordenarPorNome = (lista) => [...lista].sort((a, b) => a.nome.localeCompare(b.nome));

// 7. Letras únicas de um texto, em ordem de aparição (Set)
const letrasUnicas = (texto) => [...new Set(texto.toLowerCase().replace(/[^a-z]/g, ''))];

// 8. Frequência de números (Map -> objeto)
const frequencia = (nums) => {
  const m = new Map();
  nums.forEach((n) => m.set(n, (m.get(n) || 0) + 1));
  return Object.fromEntries(m);
};

// 9. Placar com closure
function criarPlacar() {
  let pontos = 0;
  return {
    ponto: () => ++pontos,
    valor: () => pontos,
    zerar: () => {
      pontos = 0;
      return pontos;
    },
  };
}

// 10. pipe e curry de 3 parâmetros
const pipe = (...fns) => (...args) =>
  fns.length === 0 ? args[0] : fns.slice(1).reduce((v, f) => f(v), fns[0](...args));
const somarCurry = (a) => (b) => (c) => a + b + c;

// 11. Memoização simples com Map
const memo = (fn) => {
  const cache = new Map();
  return (...args) => {
    const k = JSON.stringify(args);
    if (!cache.has(k)) cache.set(k, fn(...args));
    return cache.get(k);
  };
};

assert.strictEqual(comDesconto(cardapio, 10)[0].preco, 40.5);
assert.strictEqual(cardapio[0].preco, 45);
assert.deepStrictEqual(baratosDisponiveis(cardapio, 30).map((p) => p.nome), ['Suco', 'Calzone']);
assert.strictEqual(somaPares([1, 2, 3, 4, 10]), 16);
assert.strictEqual(maisBarato(cardapio).nome, 'Suco');
assert.strictEqual(maisBarato([]), null);
assert.deepStrictEqual(contarPorCategoria(cardapio), { pizza: 2, bebida: 2 });
assert.deepStrictEqual(ordenarPorNome(cardapio).map((p) => p.nome), ['Calzone', 'Pizza', 'Refri', 'Suco']);
assert.strictEqual(cardapio[0].nome, 'Pizza');
assert.deepStrictEqual(letrasUnicas('Banana!'), ['b', 'a', 'n']);
assert.deepStrictEqual(frequencia([1, 2, 1, 3, 1]), { 1: 3, 2: 1, 3: 1 });
const p1 = criarPlacar();
const p2 = criarPlacar();
p1.ponto();
p1.ponto();
p2.ponto();
assert.strictEqual(p1.valor(), 2);
assert.strictEqual(p2.valor(), 1);
assert.strictEqual(p1.zerar(), 0);
assert.strictEqual(pipe((x) => x + 1, (x) => x * 2)(3), 8);
assert.strictEqual(pipe()(9), 9);
assert.strictEqual(somarCurry(1)(2)(3), 6);
let chamadas = 0;
const dobro = memo((x) => {
  chamadas++;
  return x * 2;
});
dobro(4);
dobro(4);
assert.strictEqual(chamadas, 1);

console.log('Gabarito do módulo 2: OK');
