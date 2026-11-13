# Aula 7 – Matemática algorítmica

**Objetivo:** escrever algoritmos corretos **e rápidos**.
**Pergunta motivadora:** "Por que testar 2 bilhões de divisões demora, mas testar só 46 mil é instantâneo?"

## 1. Explicação
### Eficiência
Um algoritmo é uma receita; duas receitas podem dar o mesmo resultado em tempos muito diferentes. No R10, `ehPrimo(2147483647)` tem de responder em menos de 1,5 s.

### Ideia: divisores vêm em pares
Se `n = a × b`, então `a` ou `b` é ≤ √n. Logo só é preciso testar divisores até `Math.sqrt(n)`.
```js
for (let d = 2; d * d <= n; d++) { ... }
```
Otimização extra: descartar os pares antes, e testar só ímpares.

### Casos de borda de primos
`n < 2` não é primo; `2` é primo.

### Crivo de Eratóstenes (para listas de primos)
1. Criar um array de booleanos `ehPrimo[0..n]`, todos `true`.
2. Marcar 0 e 1 como `false`.
3. Para cada `p` com `p*p <= n` ainda `true`: marcar como `false` os múltiplos `p*p, p*p+p, ...`.
4. Os índices que sobraram `true` são os primos.

Alternativa mais simples: chamar `ehPrimo` para cada número (funciona, mais lento).

### Algoritmo de Euclides (MDC)
`mdc(a, b) = mdc(b, a % b)` até `b` ser 0; então o resultado é `a`.
Exemplo: `mdc(12, 18)` → `mdc(18, 12)` → `mdc(12, 6)` → `mdc(6, 0)` → 6.
Pode ser feito com `while (b !== 0)` ou com recursão.

### Medir tempo
```js
console.time('teste');
ehPrimo(2147483647);
console.timeEnd('teste');
```

## 2. Prática guiada
- Escrever uma versão lenta (testando até n-1) e uma rápida (até √n) e comparar com `console.time` para n = 1.000.003.
- Traçar na lousa o Euclides com (48, 18).

## 3. Exercício (aplicado ao web-08)
1. `ehPrimo(n)` (R10) rápida.
2. `primosAte(n)` (R11): `primosAte(10)` → `[2, 3, 5, 7]`.
3. `mdc(a, b)` (R12): incluir `mdc(0, 5)` → 5.
