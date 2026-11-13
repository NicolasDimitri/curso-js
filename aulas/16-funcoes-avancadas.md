# Aula 16 – Funções avançadas (desafios 🔥)

**Objetivo:** dominar memoização, currying e um relatório que junta tudo.
**Pergunta motivadora:** "Por que `fib(60)` recursivo nunca termina... a menos que a função lembre o que já calculou?"

## 1. Memoização
Guardar resultados já calculados para os mesmos argumentos.
```js
function memoizarSimples(fn) {
  const cache = new Map();
  return (x) => {
    if (cache.has(x)) return cache.get(x);
    const r = fn(x);
    cache.set(x, r);
    return r;
  };
}
```
Pontos de atenção do R15:
- **Vários argumentos e objetos**: a chave do cache precisa identificar todos (ex.: `JSON.stringify(args)`).
- **Resultado `0`, `undefined`, `null`**: use `cache.has(chave)` e não `if (cache.get(chave))`.
- **Recursão**: a função que chama a si mesma deve chamar a **versão memoizada**:
  ```js
  const fib = memoizar((n) => (n < 2 ? n : fib(n - 1) + fib(n - 2)));
  ```
- Preservar `this`/argumentos: `(...args) => { ... fn(...args) }`.

## 2. Currying
`f(a, b, c)` → `f(a)(b)(c)`, `f(a, b)(c)`, `f(a)(b, c)`...
Ideia: `fn.length` diz quantos parâmetros a função espera.
```js
function curry(fn) {
  return function atual(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...mais) => atual(...args, ...mais);
  };
}
```
Mostrar e entender: cada chamada parcial devolve uma nova função com os argumentos **acumulados** (não alterar um array compartilhado, para a função parcial poder ser reutilizada). Casos de 0 e 1 parâmetro.

## 3. Relatório de vendas (juntar tudo)
Plano antes de codar (aula 9!):
1. Achatar todos os `itens` dos pedidos (`flatMap`).
2. Para cada item, achar o prato no cardápio pelo `pratoId` (use um `Map` id → prato); ignorar os que não existem.
3. Agrupar por `categoria` somando `quantidade` e `receita` (`preco × quantidade`).
4. Arredondar a receita em 2 casas.
5. Ordenar por receita desc; empate: categoria A→Z.
6. Não alterar os dados de entrada.

## 4. Prática guiada
- Medir `fib(35)` sem e com memoização usando `console.time`.
- Curry de `soma3(a, b, c)` e reutilização de `const mais1 = f(1)` duas vezes.

## 5. Exercício final do web-09
`memoizar` (R15), `curry` (R16) e `relatorioVendas` (R17). Rodar todos os testes, conferir R1–R17 e abrir o PR.
