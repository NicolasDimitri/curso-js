# Aula 3 – Funções e `module.exports`

**Objetivo:** escrever funções que recebem valores e devolvem um resultado, e entender como o robô as encontra.
**Pergunta motivadora:** "Como o teste chama `fizzBuzz(15)` se eu só escrevi a função?"

## 1. Explicação
```js
function dobro(x) {
  return x * 2;
}
console.log(dobro(4)); // 8
```
- **Parâmetro**: o nome dentro dos parênteses na definição (`x`).
- **Argumento**: o valor passado na chamada (`4`).
- **`return`** devolve o resultado e **encerra** a função. Sem `return`, devolve `undefined`.
- **Valor padrão**: `function saudar(nome = 'visitante') {...}`.
- **Arrow function** (forma curta): `const dobro = (x) => x * 2;`

### Exportar para o robô
No final do arquivo:
```js
module.exports = { dobro, saudar };
```
No teste (ou no terminal), `const { dobro } = require('./arquivo');`. Se o nome não estiver exportado, o teste falha no R1.

### Testar sua função rapidamente
```bash
node -e "const s = require('./solucao'); console.log(s.dobro(4))"
```

## 2. Prática guiada
Criar `funcoes.js` com `dobro`, `somar(a, b)` e `ehPar(n)` (devolve `true`/`false`), exportar e chamar pelo terminal. Mostrar o que acontece se esquecer o `return`.

## 3. Exercício
1. Abrir o `solucao.js` do web-08 e encontrar onde cada função e o `module.exports` estão.
2. Escrever `areaCirculo(raio)` e `celsiusParaFahrenheit(c)` em um arquivo separado e testá-las pelo terminal.
3. **Aplicar:** implementar `classificarIMC` só calculando o IMC e devolvendo o valor (a classificação vem na aula 4) e rodar o teste para ver o que muda.
