# Aula 19 – Promises e `async/await`

**Objetivo:** entender o tempo no JavaScript e controlar tarefas assíncronas.
**Pergunta motivadora:** "Como pedir um dado ao servidor sem travar a tela esperando?"

## 1. Explicação
### O problema
```js
console.log('A');
setTimeout(() => console.log('B'), 1000);
console.log('C');
// A  C  B
```
O JavaScript não espera: agenda o `setTimeout` e segue. O **event loop** executa o callback depois.

### Promise = promessa de um valor futuro
Estados: **pending** → **fulfilled** (deu certo, `resolve`) ou **rejected** (deu errado, `reject`).
```js
function esperarExemplo(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
esperarExemplo(500).then(() => console.log('passou'));
```
`.then(fn)` roda no sucesso; `.catch(fn)` no erro.

### `async/await`: Promises com cara de código normal
```js
async function main() {
  console.log('antes');
  await esperarExemplo(500);   // pausa só esta função
  console.log('depois');
}
```
- `async` faz a função sempre devolver uma Promise.
- `await` só funciona dentro de função `async`.
- Erros: `try { await ... } catch (e) { ... }`.
- `throw` dentro de `async` = rejeição da Promise.

### Combinadores
| Função | Faz |
|--------|-----|
| `Promise.all([...])` | espera todas; rejeita na primeira falha |
| `Promise.allSettled([...])` | espera todas; nunca rejeita: devolve `{status, value/reason}` |
| `Promise.race([...])` | a primeira que terminar (sucesso **ou** falha) |

### Timeout com `race`
Competir a promessa real com uma que rejeita após `ms`:
```js
Promise.race([promessa, rejeitarApos(ms)])
```
Detalhe: limpar o `setTimeout` (`clearTimeout`) quando a promessa vence, para o processo não ficar pendurado.

### Sequência vs. paralelo
```js
// Sequência: uma de cada vez
for (const tarefa of tarefas) resultados.push(await tarefa());
// Paralelo: todas já iniciadas
await Promise.all(tarefas.map((t) => t()));
```
Tempo total: sequência = soma; paralelo ≈ a maior.

### Medir tempo
```js
const t0 = Date.now();
await minhaFuncao();
console.log(Date.now() - t0);
```

## 2. Prática guiada
- Imprimir `A`, `B`, `C` em ordem com 300 ms entre elas usando `async/await`.
- Rodar 3 tarefas de 500 ms em sequência (~1500 ms) e depois em paralelo (~500 ms) e comparar.
- Provocar um erro e capturar com `try/catch` e com `.catch`.

## 3. Exercício (aplicado ao web-10, R10–R14)
1. `esperar(ms)` (R10): resolve sem valor.
2. `buscarComTimeout(promessa, ms)` (R11): `new Error('Timeout')`; repassa o erro da própria promessa.
3. `executarEmSequencia(tarefas)` (R12): uma de cada vez; se falhar, as seguintes **não rodam**.
4. `executarEmParalelo(tarefas)` (R13): `Promise.all`, ordem original.
5. `tratarErros(promessas)` (R14): `{ sucessos, falhas }` com `allSettled`; `falhas` guarda as **mensagens** dos erros.
