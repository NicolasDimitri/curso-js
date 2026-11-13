# Aula 10 – Arrays e objetos

**Objetivo:** modelar dados com objetos e listas, e copiar sem alterar o original.
**Pergunta motivadora:** "Como um app de delivery guarda o cardápio inteiro na memória?"

## 1. Explicação
### Objetos
```js
const aluno = { nome: 'Lia', nota: 8.5, ativo: true };
aluno.nome        // 'Lia'
aluno['nota']     // 8.5
aluno.idade = 20; // adiciona
```
### Arrays
```js
const lista = [10, 20, 30];
lista[0]; lista.length; lista.push(40);
```
### Array de objetos (o formato do web-09)
```js
const turma = [
  { id: 1, nome: 'Lia', nota: 8.5 },
  { id: 2, nome: 'Davi', nota: 6 },
];
turma[1].nome  // 'Davi'
```
### Desestruturação
```js
const { nome, nota } = aluno;
const [primeiro, segundo] = lista;
function mostrar({ nome, nota }) { ... }
```
### Spread (`...`): copiar sem alterar
```js
const copia = [...lista, 50];           // novo array
const alunoAtualizado = { ...aluno, nota: 9 };  // novo objeto
```
### Mutar vs. não mutar
| Muta o original | Não muta |
|-----------------|----------|
| `push`, `pop`, `sort`, `reverse`, `splice` | `map`, `filter`, `slice`, `concat`, spread |

⚠️ Vários requisitos do web-09 dizem "**não altere** a lista recebida"; o robô confere congelando os dados.
`[...lista].sort()` ordena uma cópia.

### `for...of` vs. métodos funcionais
O web-09 proíbe `for`/`while` em vários requisitos; as próximas aulas ensinam as alternativas.

## 2. Prática guiada
- Criar um array com 4 pratos (`id, nome, preco, categoria, disponivel`).
- Acessar o preço do terceiro; criar uma cópia com um prato extra e mostrar que o original não mudou.
- Congelar com `Object.freeze(lista)` e tentar `push` para ver o erro (em modo estrito) / a não alteração.

## 3. Exercício
1. Escrever `adicionarPrato(cardapio, prato)` que devolve uma **nova** lista.
2. Escrever `renomear(prato, novoNome)` que devolve um **novo** objeto.
3. Ler a seção "Os dados têm este formato" do README do web-09 e criar um `cardapio` de exemplo com 6 itens para usar nas próximas aulas.
