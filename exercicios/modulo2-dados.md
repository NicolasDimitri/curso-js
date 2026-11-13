# Exercícios extras – Módulo 2: Dados e funções (aulas 10–16)

Use este cardápio de exemplo (ele é congelado no gabarito: **não altere** a lista recebida):

```js
const cardapio = [
  { id: 1, nome: 'Pizza',   preco: 45, categoria: 'pizza',  disponivel: true },
  { id: 2, nome: 'Suco',    preco: 8,  categoria: 'bebida', disponivel: true },
  { id: 3, nome: 'Refri',   preco: 8,  categoria: 'bebida', disponivel: false },
  { id: 4, nome: 'Calzone', preco: 30, categoria: 'pizza',  disponivel: true },
];
```

Gabarito: `../gabaritos/modulo2-dados.js`. Sem `for`/`while` nos exercícios 1 a 8.

1. **⭐ `comDesconto(lista, pct)`** *(map)*: devolve uma lista nova com o preço reduzido em `pct`% (arredondado em 2 casas). Com 10% a Pizza vira `40.5`; a original não muda.
2. **⭐ `baratosDisponiveis(lista, max)`** *(filter)*: pratos disponíveis com preço ≤ `max`.
3. **⭐⭐ `somaPares(nums)`** *(filter + reduce)*: soma só os números pares.
4. **⭐⭐ `maisBarato(lista)`** *(reduce)*: o prato de menor preço (no empate, o primeiro); `null` se vazia.
5. **⭐⭐ `contarPorCategoria(lista)`** *(reduce)*: `{ pizza: 2, bebida: 2 }`.
6. **⭐⭐ `ordenarPorNome(lista)`**: lista **nova** em ordem alfabética (`localeCompare`).
7. **⭐⭐⭐ `letrasUnicas(texto)`** *(Set)*: letras sem repetição, na ordem de aparição, minúsculas. `'Banana!'` → `['b', 'a', 'n']`.
8. **⭐⭐⭐ `frequencia(nums)`** *(Map)*: `[1, 2, 1, 3, 1]` → `{ 1: 3, 2: 1, 3: 1 }`.
9. **⭐⭐⭐ `criarPlacar()`** *(closure)*: devolve `{ ponto(), valor(), zerar() }`; dois placares são independentes.
10. **🔥 `pipe` e `somarCurry`**: `pipe(f, g)(x)` aplica `f` e depois `g` (sem funções, devolve o valor); `somarCurry(1)(2)(3)` → `6`.
11. **🔥 `memo(fn)`**: guarda resultados por argumentos; uma segunda chamada igual não chama `fn` de novo.

**Desafio extra:** reescreva o exercício 5 sem `reduce`, usando `Map`.
