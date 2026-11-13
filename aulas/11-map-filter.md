# Aula 11 – `map` e `filter`

**Objetivo:** transformar e selecionar listas sem usar `for`/`while`.
**Pergunta motivadora:** "Como ver só os pratos disponíveis sem escrever um laço?"

## 1. Explicação
### `map`: transforma cada item (mesmo tamanho)
```js
const notas = [6, 8, 10];
const dobro = notas.map((n) => n * 2);   // [12, 16, 20]

turma.map((aluno) => aluno.nome);        // ['Lia', 'Davi']
```
### `filter`: mantém só quem passa no teste
```js
notas.filter((n) => n >= 7);             // [8, 10]
turma.filter((a) => a.ativo);
```
### Encadear
```js
turma.filter((a) => a.ativo).map((a) => a.nome);
```
### Anatomia
`lista.map((item, indice) => resultado)`; a função recebe o item (e opcionalmente o índice) e **devolve** o novo valor. Sem `return` (ou sem chaves na arrow function), vira `undefined`.
```js
// com chaves precisa de return
turma.map((a) => { return a.nome; });
// sem chaves, o return é implícito
turma.map((a) => a.nome);
```
### Outros úteis
`find` (primeiro que passa), `some` (algum passa?), `every` (todos passam?), `includes`.

### Como o robô confere "sem `for`/`while`"
Ele lê o código da função e procura essas palavras. Atenção também aos comentários.

## 2. Prática guiada
Com o `cardapio` de exemplo da aula 10:
- Listar nomes em maiúsculas.
- Listar pratos com preço < 30.
- Listar nomes dos pratos disponíveis da categoria `pizza`.

## 3. Exercício (aplicado ao web-09, R3)
1. `nomesDosPratos(cardapio)` com `map`.
2. `pratosDisponiveis(cardapio)` com `filter`.
3. Rodar o teste e conferir que a função não usa `for`/`while` e que não altera a lista de entrada.
