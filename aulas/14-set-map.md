# Aula 14 – `Set` e `Map`

**Objetivo:** usar as coleções certas para remover duplicados, juntar por chave e contar.
**Pergunta motivadora:** "Como saber rapidamente se um id já apareceu na lista?"

## 1. Explicação
### `Set`: coleção sem repetidos
```js
const s = new Set([1, 2, 2, 3]);   // {1, 2, 3}
s.add(4); s.has(2); s.size;
[...s]  // volta para array
```
- Mantém a **ordem de inserção** (primeira aparição).
- `[...new Set(lista)]` remove duplicados de valores simples.

### `Map`: chave → valor (qualquer tipo de chave)
```js
const m = new Map();
m.set(1, 'Pizza');
m.get(1);        // 'Pizza'
m.has(2);        // false
m.size;
[...m.values()]  // array dos valores
```
- Ao fazer `set` numa chave existente, o valor é **substituído**, mas a posição original na ordem é mantida. É exatamente o que o `unirCardapios` precisa (vale o de `b`, ordem da 1ª aparição).

### Objeto como contador
```js
const contagem = {};
for (const p of palavras) contagem[p] = (contagem[p] || 0) + 1;
```
Em estilo funcional: `reduce` com `{ ...acc, [p]: (acc[p] || 0) + 1 }`.

### Texto → palavras
```js
'Pão pão, PÃO!'.toLowerCase().replace(/[^\p{L}\s]/gu, '').split(/\s+/).filter(Boolean)
```
- `\p{L}` = qualquer letra Unicode (**mantém acentos**); flag `u` obrigatória.
- `filter(Boolean)` remove strings vazias.

## 2. Prática guiada
- Remover números repetidos de `[3, 1, 3, 2, 1]` mantendo a ordem.
- Dado dois arrays de alunos com `id`, juntar por `id` com `Map`.
- Contar letras de uma palavra num objeto.

## 3. Exercício (aplicado ao web-09)
1. `removerDuplicados(lista)` (R9) com `Set`.
2. `unirCardapios(a, b)` (R10) com `Map`, sem alterar `a` nem `b`.
3. `contarPalavras(texto)` (R11): `'Pão pão PÃO'` → `{ pão: 3 }`; texto vazio → `{}`.
