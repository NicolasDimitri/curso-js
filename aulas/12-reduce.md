# Aula 12 – `reduce`

**Objetivo:** reduzir uma lista a um único valor (soma, maior, objeto agrupado).
**Pergunta motivadora:** "Como a calculadora do caixa soma a comanda inteira?"

## 1. Explicação
```js
const total = [10, 20, 30].reduce((acc, n) => acc + n, 0);   // 60
```
- `acc` = acumulador (o que já foi calculado).
- `n` = item atual.
- O 2º argumento (`0`) é o **valor inicial**. Sempre informe!
- A função **devolve o novo acumulador**.

### Passo a passo (desenhar na lousa)
| volta | acc | n | novo acc |
|-------|-----|---|----------|
| 1 | 0 | 10 | 10 |
| 2 | 10 | 20 | 30 |
| 3 | 30 | 30 | 60 |

### O acumulador pode ser qualquer coisa
- Número: soma, contagem.
- Item: o maior (começa em `null` ou no primeiro item).
- Objeto: agrupar.
```js
const porIdade = turma.reduce((grupos, a) => {
  const chave = a.ativo ? 'ativos' : 'inativos';
  return { ...grupos, [chave]: [...(grupos[chave] || []), a] };
}, {});
```
`[chave]: valor` é uma **chave computada**.

### Maior item (empate: primeiro)
Comparar com `>` (e não `>=`), para manter o primeiro em caso de empate. Lista vazia → valor inicial `null`.

### Dinheiro e ponto flutuante
`0.1 * 3 === 0.30000000000000004`. Para arredondar em 2 casas:
```js
Math.round(valor * 100) / 100
```

### Não mutar
Dentro do `reduce`, não faça `acc.push(...)` num acumulador vindo de fora; use spread ou crie o objeto no valor inicial.

## 2. Prática guiada
- Soma dos preços do cardápio.
- Contar quantos pratos estão disponíveis (acumulador número).
- Achar o prato mais barato.

## 3. Exercício (aplicado ao web-09)
1. `totalDoPedido(itens)` (R4): `preco × quantidade`, arredondado, lista vazia → `0`.
2. `pratoMaisCaro(cardapio)` (R5): empate → o primeiro; vazia → `null`; não altera a lista.
3. `agruparPorCategoria(cardapio)` (R7): `{ pizza: [...], bebida: [...] }`; vazia → `{}`.
Todos com `reduce`, sem `for`/`while`.
