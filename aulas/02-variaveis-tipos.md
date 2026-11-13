# Aula 2 – Variáveis e tipos

**Objetivo:** guardar valores, saber o tipo de cada um e fazer contas.
**Pergunta motivadora:** "Se eu somar `'2' + 3`, dá 5 ou `'23'`?"

## 1. Explicação
### `const` e `let` (e nunca `var`)
```js
const pi = 3.14;     // valor que NÃO será reatribuído
let contador = 0;    // valor que vai mudar
contador = contador + 1;
```
Regra: comece com `const`; troque por `let` só se precisar reatribuir. O requisito R2 dos três projetos proíbe `var`.

### Tipos principais
| Tipo | Exemplo |
|------|---------|
| number | `42`, `3.5` |
| string | `'texto'`, `"texto"` |
| boolean | `true`, `false` |
| null / undefined | "vazio de propósito" / "nada atribuído" |

`typeof 42` → `'number'`.

### Operadores
`+ - * /`, resto `%`, potência `**`.
```js
10 % 3     // 1  (resto da divisão)
2 ** 3     // 8
Math.floor(7.9)  // 7 (arredonda para baixo)
Math.round(7.5)  // 8
Math.sqrt(16)    // 4
```
Comparação: use `===` (igual) e `!==`, nunca `==`.

### Pegadinhas
```js
'2' + 3        // '23' (concatenação)
Number('2') + 3 // 5
0.1 + 0.2      // 0.30000000000000004 (ponto flutuante!)
```
Guarde essa última: ela aparece no web-09.

## 2. Prática guiada
Em `aula02.js`, calcular a área de um retângulo e o resto da divisão de 17 por 5, imprimindo com `console.log`. Depois, tentar reatribuir uma `const` e ler o erro.

## 3. Exercício
1. Dado `const peso = 70; const altura = 1.75;`, calcular `peso / altura ** 2` e imprimir (é o pré-requisito de `classificarIMC`).
2. Prever o resultado antes de rodar: `7 % 2`, `'5' * 2`, `'5' + 2`, `10 / 4`, `Math.floor(10 / 4)`.
3. Explicar, com palavras, por que `0.1 * 3` não dá exatamente `0.3`.
