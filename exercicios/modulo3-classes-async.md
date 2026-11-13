# Exercícios extras – Módulo 3: Classes e assincronismo (aulas 17–20)

Gabarito: `../gabaritos/modulo3-classes-async.js`. Para os exercícios assíncronos, crie a função `esperar(ms)` (resolve após `ms`).

1. **⭐ `Lampada`**: campo privado `#ligada`, getter `ligada`, `ligar()` e `desligar()` que devolvem `this`. `Object.keys(lampada)` deve ser `[]` e `JSON.stringify` → `'{}'`.
2. **⭐⭐ `Cofrinho` e `CofrinhoComMeta extends Cofrinho`**: `guardar(valor)` valida (número > 0, senão `Error('Valor inválido')`), `total` (getter) e `extrato()` (cópia). A versão com meta lança `Error('Meta ultrapassada')` se passar do limite, **sem alterar o total**.
3. **⭐⭐ `IdadeInvalidaError extends Error`** com `name`, `idade` e mensagem `Idade inválida: -5`; `validarIdade(idade)` aceita só inteiros ≥ 0.
4. **⭐⭐⭐ `FilaSimples` iterável**: `enfileirar` (devolve `this`), `desenfileirar`; `[...fila]` pode ser chamado várias vezes sem esvaziá-la.
5. **⭐⭐⭐ `pares()` e `pegar(iteravel, n)`**: gerador infinito de pares; `pegar` devolve os `n` primeiros e para (`n = 0` → `[]`).
6. **⭐⭐⭐ `comTimeout(promessa, ms)`**: rejeita com `Error('Timeout')` se demorar; limpa o `setTimeout` quando a promessa termina antes.
7. **⭐⭐⭐ `sequencia(tarefas)` e `paralelo(tarefas)`**: uma de cada vez *vs.* todas juntas; resultados sempre na ordem original. Prove a diferença pelo **tempo** e pela ordem de término.
8. **🔥 `tentar(fn, tentativas, atraso)`**: espera `atraso`, `2×atraso`... entre falhas, sem esperar depois da última; rejeita com o último erro.
9. **🔥 `limitar(tarefas, limite)`**: no máximo `limite` ao mesmo tempo, próxima começa assim que uma termina, ordem original, aceita lista vazia.
10. **🔥 `Emissor`**: `on(ev, fn)`, `off(ev, fn)` (devolvem `this`) e `emit(ev, ...args)` → `true` se havia ouvintes. Iterar sobre uma **cópia** da lista no `emit`.

**Como provar:** meça com `Date.now()`, registre a ordem de término e conte quantas tarefas rodam ao mesmo tempo.
