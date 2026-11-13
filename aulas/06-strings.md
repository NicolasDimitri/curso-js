# Aula 6 – Strings

**Objetivo:** manipular texto: percorrer, transformar e comparar.
**Pergunta motivadora:** "Como um programa sabe que 'Ana' lida de trás para frente continua sendo 'ana'?"

## 1. Explicação
```js
const t = 'Banana';
t.length          // 6
t[0]              // 'B'
t.toLowerCase()   // 'banana'
t.toUpperCase()   // 'BANANA'
t.includes('nan') // true
t.slice(1, 3)     // 'an'
t.split('')       // ['B','a','n','a','n','a']
['a','b'].join('') // 'ab'
```
- Strings são **imutáveis**: os métodos devolvem uma nova string.
- Percorrer com `for...of`:
  ```js
  for (const letra of t) { ... }
  ```
- Inverter: `split('')` → inverter o array (`reverse()`) → `join('')`. Ou montar com um laço.

### Acentos
`'ô'` e `'o'` são caracteres diferentes. Para ignorar acentos:
```js
'Olá'.normalize('NFD').replace(/[\u0300-\u036f]/g, '')  // 'Ola'
```
`normalize('NFD')` separa a letra do acento; o `replace` remove os acentos.

### Regex básica
- `/[^a-z0-9]/g` = tudo que NÃO é letra minúscula ou número; `g` = todas as ocorrências.
```js
'a-b c!'.replace(/[^a-z]/g, '')  // 'abc'
```

### Verificar pertencimento
`'aeiou'.includes(letra)` — útil para vogais.

## 2. Prática guiada
- Contar quantas vezes aparece a letra `a` num texto.
- Deixar um texto só com letras e minúsculas.
- Comparar duas palavras ignorando maiúsculas e acentos.

## 3. Exercício (aplicado ao web-08)
1. `inverterTexto(texto)` (R7).
2. `contarVogais(texto)` (R9): inclui maiúsculas e acentuadas (`'Olá, você'` → 4). Dica: normalizar antes de contar.
3. `ehPalindromo(texto)` (R8): normalizar → minúsculas → só letras/números → comparar com o inverso. Texto vazio é palíndromo.
