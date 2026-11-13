# Aula 9 – Planejar antes de codar (desafios 🔥)

**Objetivo:** resolver problemas maiores quebrando em passos, sempre planejando antes de escrever código.
**Pergunta motivadora:** "Por que programadores experientes passam mais tempo pensando do que digitando?"

## 1. Método em 5 passos
1. **Entender**: reescrever o problema com suas palavras.
2. **Exemplos**: listar 3–5 entradas e saídas (incluindo bordas).
3. **Plano**: escrever em português (pseudocódigo) os passos.
4. **Codar** um passo de cada vez, testando com `console.log`.
5. **Revisar**: rodar os exemplos e o teste do robô.

## 2. Numerais romanos
### Tabela
```js
const tabela = [
  [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
  [100, 'C'],  [90, 'XC'],  [50, 'L'],  [40, 'XL'],
  [10, 'X'],   [9, 'IX'],   [5, 'V'],   [4, 'IV'], [1, 'I'],
];
```
### Ideia para `paraRomano`
Percorrer a tabela do maior para o menor; enquanto `n >= valor`, acrescentar o símbolo e subtrair o valor.
### Ideia para `deRomano`
Percorrer o texto; se o valor do símbolo atual é **menor** que o do próximo, subtrair; senão somar. Ex.: `XIV` = 10 + (−1 + 5) = 14.
Limites do R15: 1 a 3999; fora do intervalo ou não inteiro, `paraRomano` deve lançar `throw new Error(...)` (o robô testa os 3999 números).

## 3. CPF
- 11 dígitos; remover pontos e traços.
- Rejeitar tamanhos diferentes de 11 e sequências repetidas (`111.111.111-11`).
- **Dígito 1**: multiplicar os 9 primeiros dígitos por 10, 9, ..., 2; somar; `resto = (soma * 10) % 11`; se resto for 10, vira 0; comparar com o 10º dígito.
- **Dígito 2**: igual, mas com os 10 primeiros dígitos e pesos 11, 10, ..., 2; comparar com o 11º.
- Aceita com ou sem pontos/traço; qualquer valor que não seja texto (número, `null`...) devolve `false` **sem lançar erro**.

## 4. Prática guiada
Em duplas: resolver "converter número para extenso até 99" seguindo os 5 passos, **sem tocar no teclado nos primeiros 15 min**.

## 5. Exercício final do web-08
1. `paraRomano(n)` e `deRomano(texto)` (R15): conferir que `deRomano(paraRomano(n)) === n` para vários `n`.
2. `cpfValido(cpf)` (R16): usar CPFs válidos conhecidos de exemplo e variações inválidas.
3. Rodar todos os testes do web-08 e abrir o PR.

**Dica de revisão:** conferir R1 a R16 do README um por um e marcar com ✔ no `scripts/gerar-checklist.js` / tabela do PR.
