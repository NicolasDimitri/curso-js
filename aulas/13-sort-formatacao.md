# Aula 13 – Ordenação e formatação

**Objetivo:** ordenar com critérios (e desempate) e montar textos formatados.
**Pergunta motivadora:** "Como a lista do app aparece do mais barato ao mais caro?"

## 1. Explicação
### `sort` com comparador
```js
[10, 2, 33].sort();                // [10, 2, 33]  ❌ ordena como texto!
[10, 2, 33].sort((a, b) => a - b); // [2, 10, 33]  ✔
```
- Comparador devolve **negativo** (a vem antes), **positivo** (b vem antes) ou **0**.
- `sort` **muta** o array: ordene uma cópia (`[...lista].sort(...)`).

### Desempate
```js
lista.sort((a, b) => (a.preco - b.preco) || a.nome.localeCompare(b.nome));
```
`||` usa o segundo critério quando o primeiro dá `0`.
`localeCompare` ordena texto respeitando acentos.

### Ordem ascendente ou descendente
Multiplicar por `-1` (ou trocar `a` e `b`). Atenção: o desempate pelo nome continua A→Z mesmo no `'desc'`? Leia o R6 e confira.

### Template strings
```js
const msg = `${aluno.nome}: ${aluno.nota}`;
```
### Juntar itens
```js
['2x Pizza', '1x Suco'].join(', ')   // '2x Pizza, 1x Suco'
```
### Número com vírgula
```js
(104.5).toFixed(2)               // '104.50'
(104.5).toFixed(2).replace('.', ',')  // '104,50'
```
O texto esperado no R8: `Maria: 2x Pizza, 1x Suco | Total: R$ 104,50` (sem separador de milhar).

### Valores opcionais
`pedido.taxaEntrega ?? 0` usa `0` se for `undefined`/`null`. Ou valor padrão na desestruturação: `{ taxaEntrega = 0 }`.

## 2. Prática guiada
- Ordenar a turma por nota e, no empate, por nome.
- Montar a linha `Lia: 8.5 (aprovado)` para cada aluno e juntar com `\n`.

## 3. Exercício (aplicado ao web-09)
1. `ordenarPorPreco(cardapio, ordem = 'asc')` (R6): devolve lista **nova**; desempate pelo nome; não altera a original.
2. `resumoPedido(pedido)` (R8): o texto do README. Usar `map`, `join`, template strings; o total inclui a taxa.
