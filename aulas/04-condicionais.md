# Aula 4 – Condicionais

**Objetivo:** fazer o programa tomar decisões.
**Pergunta motivadora:** "Como o caixa de cinema decide se cobra meia ou inteira?"

## 1. Explicação
```js
function ingresso(idade) {
  if (idade < 12) {
    return 'Criança';
  } else if (idade < 60) {
    return 'Adulto';
  } else {
    return 'Idoso';
  }
}
```
- A **ordem** importa: a primeira condição verdadeira vence.
- Lógica: `&&` (e), `||` (ou), `!` (não).
- Resto da divisão para testar múltiplos: `n % 4 === 0`.
- **Retorno antecipado** deixa o código mais limpo:
  ```js
  if (n < 0) return 'negativo';
  ```
- Operador ternário: `const msg = idade >= 18 ? 'maior' : 'menor';`

### Casos de borda
Sempre testar os limites: no exemplo acima, `11`, `12`, `59`, `60`. Os testes do robô fazem exatamente isso.

### Regras com exceções
"Divisível por 10, exceto por 100, a menos que por 1000" se escreve de dentro para fora:
```js
// múltiplo de 1000? sim → ...
// senão, múltiplo de 100? sim → ...
// senão, múltiplo de 10 → ...
```
Desenhar a árvore de decisão antes de codar.

## 2. Prática guiada
Escrever `classificarNota(n)` (≥ 7 aprovado, ≥ 5 recuperação, senão reprovado) e `ehMultiploDe(n, d)`. Testar com valores nas bordas.

## 3. Exercício (aplicado ao web-08)
1. Completar `classificarIMC(peso, altura)` com as faixas do README (R3). Atenção: `< 18,5`, `< 25`, `< 30`, `≥ 30`.
2. Implementar `ehBissexto(ano)` (R4). Dica: desenhar a árvore de decisão com 400, 100 e 4. Testar `1900`, `2000`, `2024`, `2023`.
3. Rodar `npx playwright test` e ver R3 e R4 passando.
