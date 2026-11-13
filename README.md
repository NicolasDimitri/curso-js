# Curso: JavaScript do zero aos projetos web-08, web-09 e web-10

20 aulas de ~2h. Cada aula tem: objetivo, explicação com exemplos, prática guiada (fazer junto) e exercício (fazer sozinho, aplicado aos repositórios).

**Regra de ouro:** os exemplos das aulas usam situações *parecidas* com os projetos, mas nunca a resposta pronta. O aluno aplica o que aprendeu nas funções do `solucao.js`.

**Ritmo sugerido:** 5 semanas, 4 aulas por semana. Estrutura de cada aula: 30 min explicação, 60 min prática guiada, 30 min exercício sozinho.

| # | Aula | Projeto |
|---|------|---------|
| 1 | [Ambiente e primeiro contato](aulas/01-ambiente.md) | todos |
| 2 | [Variáveis e tipos](aulas/02-variaveis-tipos.md) | web-08 |
| 3 | [Funções e module.exports](aulas/03-funcoes.md) | web-08 |
| 4 | [Condicionais](aulas/04-condicionais.md) | web-08 |
| 5 | [Laços](aulas/05-lacos.md) | web-08 |
| 6 | [Strings](aulas/06-strings.md) | web-08 |
| 7 | [Matemática algorítmica](aulas/07-matematica.md) | web-08 |
| 8 | [Bases numéricas e pilhas](aulas/08-bases-pilhas.md) | web-08 |
| 9 | [Planejar antes de codar (🔥)](aulas/09-desafios-logica.md) | web-08 |
| 10 | [Arrays e objetos](aulas/10-arrays-objetos.md) | web-09 |
| 11 | [map e filter](aulas/11-map-filter.md) | web-09 |
| 12 | [reduce](aulas/12-reduce.md) | web-09 |
| 13 | [Ordenação e formatação](aulas/13-sort-formatacao.md) | web-09 |
| 14 | [Set e Map](aulas/14-set-map.md) | web-09 |
| 15 | [Closures e composição](aulas/15-closures-composicao.md) | web-09 |
| 16 | [Funções avançadas (🔥)](aulas/16-funcoes-avancadas.md) | web-09 |
| 17 | [Classes](aulas/17-classes.md) | web-10 |
| 18 | [Estruturas de dados e geradores](aulas/18-estruturas-geradores.md) | web-10 |
| 19 | [Promises e async/await](aulas/19-promises.md) | web-10 |
| 20 | [Assíncrono avançado (🔥)](aulas/20-assincrono-avancado.md) | web-10 |

## Exercícios extras com gabarito
Exercícios diferentes das tarefas dos projetos, para treinar as mesmas técnicas. Os gabaritos são executáveis: rodar `node gabaritos/modulo1-logica.js` imprime "OK" se tudo passa.

| Módulo | Enunciados | Gabarito |
|--------|-----------|----------|
| 1 – Lógica (aulas 2–9) | [exercicios/modulo1-logica.md](exercicios/modulo1-logica.md) | [gabaritos/modulo1-logica.js](gabaritos/modulo1-logica.js) |
| 2 – Dados e funções (aulas 10–16) | [exercicios/modulo2-dados.md](exercicios/modulo2-dados.md) | [gabaritos/modulo2-dados.js](gabaritos/modulo2-dados.js) |
| 3 – Classes e async (aulas 17–20) | [exercicios/modulo3-classes-async.md](exercicios/modulo3-classes-async.md) | [gabaritos/modulo3-classes-async.js](gabaritos/modulo3-classes-async.js) |

## Como o professor deve conduzir
1. Abrir a aula com a pergunta motivadora.
2. Mostrar o exemplo, **prever o resultado em voz alta** antes de rodar.
3. Fazer a prática guiada junto, com o aluno digitando.
4. Deixar o aluno resolver o exercício sozinho; só dar dica (nunca a resposta) após 10 minutos travado.
5. Fechar rodando `npx playwright test` e lendo a tabela de falhas.

## Dicas de depuração (repetir em todas as aulas)
- `console.log(variavel)` para ver valores no meio do código.
- Rodar a função isolada: `node -e "console.log(require('./solucao').minhaFuncao(5))"`.
- Ler a mensagem do teste: ela diz qual chamada falhou e o que era esperado.
