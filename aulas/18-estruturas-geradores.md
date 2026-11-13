# Aula 18 – Estruturas de dados e geradores

**Objetivo:** implementar pilha e fila em classes e criar sequências com iteradores/geradores.
**Pergunta motivadora:** "Como gerar a lista infinita 0, 1, 1, 2, 3, 5... sem estourar a memória?"

## 1. Pilha e Fila
| | Regra | Entra | Sai |
|--|-------|-------|-----|
| Pilha | último a entrar, primeiro a sair (LIFO) | `push` | `pop` |
| Fila | primeiro a entrar, primeiro a sair (FIFO) | `push` | `shift` |

```js
class Pilha {
  #itens = [];
  empilhar(x) { this.#itens.push(x); return this; }   // encadeável
  get tamanho() { return this.#itens.length; }
}
new Pilha().empilhar(1).empilhar(2).tamanho;  // 2
```
- Pilha/fila vazia: `desempilhar()`/`topo()`/`desenfileirar()`/`frente()` devolvem `undefined` (leia o README).
- `topo()`/`frente()` **só olham**, não removem.

## 2. Iteráveis
Um objeto é **iterável** se tem o método `[Symbol.iterator]()` que devolve um iterador (`{ next() }`). Isso habilita `for...of` e `[...obj]`.

Forma simples com gerador:
```js
class Caixa {
  #itens = [1, 2, 3];
  *[Symbol.iterator]() {
    for (const x of this.#itens) yield x;
  }
}
[...new Caixa()]   // [1, 2, 3], sem consumir/alterar nada
```
A fila deve ser iterável **do primeiro ao último, sem consumir**.

## 3. Geradores
```js
function* contagem() {
  let i = 0;
  while (true) {
    yield i;      // pausa e entrega um valor
    i++;
  }
}
const g = contagem();
g.next();   // { value: 0, done: false }
g.next();   // { value: 1, done: false }
```
- `function*` + `yield` = função que pode ser **pausada**.
- Cada chamada cria um gerador independente (estado próprio).
- Gerador infinito é seguro porque só calcula quando alguém pede.

### Pegar os `n` primeiros de qualquer iterável (inclusive infinito)
```js
const itens = [];
if (n <= 0) return itens;          // não consome nada
for (const x of iteravel) {
  itens.push(x);
  if (itens.length >= n) break;    // para sem pedir o item n+1
}
```
Pergunta para a turma: por que o `break` fica *depois* do `push`? (Para não pedir ao gerador um item a mais.)
`[...gerador]` num gerador infinito trava o programa; nunca use.

## 4. Prática guiada
- Gerador de números pares infinito e `pegar(iteravel, n)`.
- Tornar uma classe `Playlist` iterável.
- Experimentar: o que acontece com `for...of` + `break` em um gerador?

## 5. Exercício (aplicado ao web-10)
1. `Pilha` (R7): `empilhar`, `desempilhar`, `topo`, `vazia`, `tamanho`.
2. `Fila` (R8): `enfileirar`, `desenfileirar`, `frente`, `vazia`, `tamanho`, iterável sem consumir.
3. `fibonacci()` e `primeiros(iteravel, n)` (R9): testar com a fila, com um array e com o `fibonacci()` infinito.
