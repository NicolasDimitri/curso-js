# Aula 20 – Assíncrono avançado (desafios 🔥) e encerramento

**Objetivo:** resolver `retry`, `limitarConcorrencia` e `EventEmitter`, e fechar os três projetos.
**Pergunta motivadora:** "Como baixar 100 arquivos sem abrir 100 conexões de uma vez?"

## 1. Retry com espera dobrando (R15)
Plano:
1. Para `tentativa` de 1 até `tentativas`:
   - tentar `await fn()`; se der certo, devolver;
   - se falhar, guardar o erro;
   - se **não for a última** tentativa, esperar `atrasoMs * 2 ** (tentativa - 1)`.
2. Depois da última falha, rejeitar com o **último** erro.

Esperas: `atrasoMs`, `2×`, `4×`... Não espera depois da última tentativa. Teste medindo o tempo total.

## 2. Limitar concorrência (R16)
Ideia: **workers** que puxam a próxima tarefa de uma fila.
```js
async function limitarSimples(tarefas, limite) {
  const resultados = new Array(tarefas.length);
  let proximo = 0;

  async function worker() {
    while (proximo < tarefas.length) {
      const i = proximo++;            // pega o índice (seguro: JS é single-thread)
      resultados[i] = await tarefas[i]();
    }
  }

  const qtd = Math.min(limite, tarefas.length);
  await Promise.all(Array.from({ length: qtd }, worker));
  return resultados;
}
```
Entender e discutir:
- Por que cada worker começa a próxima tarefa **assim que** termina a sua (não espera o grupo)?
- Resultados na **ordem original** (gravar em `resultados[i]`).
- Lista vazia e `limite` maior que o número de tarefas.
- Falha: `Promise.all` rejeita; analisar o que deveria acontecer com as tarefas que ainda não começaram (o README diz só "rejeita com o erro dela").

Medir: com 6 tarefas de 200 ms e limite 2, o total deve ficar ≈ 600 ms.

## 3. EventEmitter (R17)
Estrutura: `Map` evento → array de ouvintes.
- `on(evento, fn)` / `off(evento, fn)` devolvem `this`.
- `once(evento, fn)`: um embrulho que se remove e chama `fn`. Cuidado: `off(evento, fn)` também deve conseguir remover um `once` pela `fn` original (guardar a referência).
- `emit(evento, ...args)`: chama os ouvintes na ordem de registro; devolve `true` se havia ouvintes, `false` senão.
- **Armadilha:** se um ouvinte se remove durante o `emit`, o seguinte não pode ser pulado. Solução: iterar sobre uma **cópia** do array de ouvintes.
- `listenerCount(evento)`.

## 4. Exercício final
1. `retry` (R15), `limitarConcorrencia` (R16), `EventEmitter` (R17).
2. Rodar `npx playwright test` no web-10 e conferir R1–R17.

## 5. Encerramento do curso
Checklist final para cada repositório:
- [ ] Todas as funções exportadas (R1).
- [ ] Sem `var`.
- [ ] Testes passando localmente.
- [ ] PR aberto; tabela de checklist do robô toda ✔.

**Revisão geral (30 min):** cada aluno escolhe a função que mais deu trabalho nos 3 projetos e explica em voz alta, passo a passo, como pensou. Depois reflete: "Que técnica da aula X me ajudou mais?"

**Próximos passos:** DOM e eventos no navegador, `fetch` e APIs reais, TypeScript, testes unitários com Jest/Vitest, Git/GitHub avançado.
