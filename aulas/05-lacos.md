# Aula 5 – Laços

**Objetivo:** repetir ações e acumular resultados.
**Pergunta motivadora:** "Como somar os números de 1 a 1000 sem escrever 1000 linhas?"

## 1. Explicação
### `for`
```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```
Três partes: início (`let i = 1`), condição de continuar (`i <= 5`), passo (`i++`).

### `while`
```js
let n = 10;
while (n > 0) {
  n = n - 3;
}
```
Cuidado com loops infinitos: o que muda a condição?

### Acumulador
```js
let soma = 0;
for (let i = 1; i <= 100; i++) {
  soma += i;
}
```

### Construindo um array
```js
const quadrados = [];
for (let i = 1; i <= 5; i++) {
  quadrados.push(i * i);   // [1, 4, 9, 16, 25]
}
```

### Quebrar um número em dígitos
- `n % 10` é o último dígito.
- `Math.floor(n / 10)` remove o último dígito.
Combine com `while (n > 0)`.

### Converter para texto
`String(5)` → `'5'`; `` `${5}` `` → `'5'`.

## 2. Prática guiada
- Imprimir a tabuada do 7.
- Somar só os números pares de 1 a 50.
- Contar quantos dígitos tem um número usando `while`.
- Fazer a "mesa" (trace): escrever em papel os valores de `i` e `soma` a cada volta.

## 3. Exercício (aplicado ao web-08)
1. `fizzBuzz(n)` (R5): construir o array de textos de 1 a `n`. Verificar `fizzBuzz(0)` e a **ordem das condições** (qual testar primeiro?).
2. `somarDigitos(n)` (R6) com a técnica do `% 10` e `Math.floor`.
3. Rodar os testes e interpretar qualquer falha.
