# Aula 15 – Closures e composição

**Objetivo:** criar funções que "lembram" de dados privados e combinar funções pequenas em funções maiores.
**Pergunta motivadora:** "Como um contador guarda o valor sem que ninguém de fora possa mexer?"

## 1. Explicação
### Funções são valores
Podem ser guardadas em variáveis, passadas como argumento e devolvidas.
```js
function multiplicarPor(fator) {
  return (x) => x * fator;
}
const triplo = multiplicarPor(3);
triplo(5);  // 15
```
### Closure
A função interna **lembra** das variáveis do escopo onde nasceu, mesmo depois que a externa terminou.
```js
function criarVotos() {
  let votos = 0;                     // escondido
  return {
    votar() { votos += 1; return votos; },
    total() { return votos; },
  };
}
const a = criarVotos();
const b = criarVotos();   // independente de `a`
a.votar(); a.votar(); b.votar();
a.total(); // 2
b.total(); // 1
```
Quem está fora não vê `votos`: só os métodos acessam.
Objeto retornado só com as chaves permitidas (o robô confere `Object.keys`).

### Copiar para proteger o estado
Se um método devolve a lista interna, o chamador pode alterá-la. Devolva cópias (`[...lista]`, `{ ...item }`) e copie também o que entra.

### Composição
```js
const somar1 = (x) => x + 1;
const dobrar = (x) => x * 2;
const pipe2 = (f, g) => (x) => g(f(x));
pipe2(somar1, dobrar)(3);  // 8
```
- `pipe`: esquerda → direita.
- `compose`: direita → esquerda.
- Generalizar com `...funcoes` (rest) e `reduce`:
  ```js
  const pipe = (...fns) => (x) => fns.reduce((valor, fn) => fn(valor), x);
  ```
- Sem funções → devolve o próprio valor (o valor inicial do `reduce` cuida disso).
- `reduceRight` percorre da direita para a esquerda.

## 2. Prática guiada
- Criar `criarPlacar()` com `ponto()`, `valor()`, `zerar()`; criar dois placares e verificar a independência.
- Compor `limpar`, `maiusculas` e `exclamar` em um único `pipe`.

## 3. Exercício (aplicado ao web-09)
1. `criarContador(inicial = 0)` (R12): `incrementar(passo = 1)`, `decrementar(passo = 1)`, `valor()`, `resetar()`; só 4 chaves.
2. `criarCarrinho()` (R13): `adicionar`, `remover`, `total`, `itens`; itens do mesmo `id` somam quantidade; copiar na entrada e na saída; total arredondado.
3. `pipe` e `compose` (R14); a 1ª função do `pipe` pode receber vários argumentos (dica: `(...args)`).
