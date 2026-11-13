# Aula 8 – Bases numéricas e pilhas

**Objetivo:** converter números entre bases e usar uma pilha para checar estruturas aninhadas.
**Pergunta motivadora:** "Como o computador transforma 255 em `FF`?"

## 1. Explicação
### Bases numéricas
Decimal usa dígitos 0–9. Binário usa 0–1; hexadecimal usa 0–9 e A–F.
Conversão por **divisões sucessivas**:
```
13 em base 2:
13 / 2 = 6  resto 1
 6 / 2 = 3  resto 0
 3 / 2 = 1  resto 1
 1 / 2 = 0  resto 1
Restos de baixo pra cima: 1101
```
Passos: repetir `resto = n % base`, `n = Math.floor(n / base)` até `n` ser 0; **juntar os restos na ordem inversa**.

### Tabela de símbolos
```js
const simbolos = '0123456789ABCDEF';
simbolos[11]  // 'B'
```
Caso especial: `0` deve virar `'0'`.
O R13 proíbe `toString(base)` e `parseInt` com base — precisa fazer na mão.

### Pilha (LIFO: último a entrar, primeiro a sair)
Com um array: `push` empilha, `pop` desempilha, `pilha[pilha.length - 1]` olha o topo.

### Parênteses balanceados
Algoritmo:
1. Percorrer cada caractere.
2. Se abre (`(`, `[`, `{`): empilhar.
3. Se fecha: a pilha não pode estar vazia, e o topo tem de ser o par correspondente; desempilhar.
4. No fim a pilha tem de estar vazia.

Usar um objeto de pares:
```js
const pares = { ')': '(', ']': '[', '}': '{' };
```
Ignorar os caracteres que não são delimitadores.

## 2. Prática guiada
- Converter 10, 255 e 0 para a base 2 manualmente no papel e depois com código.
- Simular na lousa a pilha para `"{[()]}"` e `"([)]"`.

## 3. Exercício (aplicado ao web-08)
1. `converterBase(n, base)` (R13), bases 2–16, maiúsculas.
2. `parentesesBalanceados(texto)` (R14): testar texto vazio, `'(()'`, `'())'`, `'([)]'`.
