# Aula 1 – Ambiente e primeiro contato

**Objetivo:** deixar tudo instalado e rodar os testes de um projeto pela primeira vez.
**Pergunta motivadora:** "Como um robô consegue corrigir o seu código sozinho?"

## 1. Explicação
- **Programa** = lista de instruções que o computador segue, na ordem.
- **JavaScript** roda no navegador e também no **Node.js** (usaremos o Node, no terminal).
- **Terminal**: comandos úteis
  - `pwd` (onde estou), `ls` (o que há aqui), `cd pasta` (entrar), `cd ..` (voltar).
- **Git**: `git clone <url>` baixa um repositório.
- **npm**: gerenciador de pacotes. `npm install` baixa as dependências do `package.json`.
- **Teste automatizado**: um código que chama as suas funções e compara com o esperado (Playwright, neste curso).

## 2. Prática guiada
1. Verificar as instalações:
   ```bash
   node --version
   git --version
   ```
2. Criar `ola.js`:
   ```js
   console.log('Olá, mundo!');
   console.log(2 + 3);
   ```
   Rodar com `node ola.js`.
3. Clonar o web-08 e entrar na pasta:
   ```bash
   gh repo clone NicolasDimitri/web-08-js-logica
   cd web-08-js-logica
   npm install
   npx playwright install   # só na primeira vez
   ```
4. Abrir `solucao.js` e `README.md` no VS Code. Identificar as funções vazias e o `module.exports` no final.
5. Rodar `npx playwright test` e **ler a saída**: tudo falha, e isso é esperado.

## 3. Exercício
1. Nos três repositórios, localizar o arquivo que o aluno edita (`solucao.js`).
2. Abrir o `README.md` do web-08 e responder por escrito: quantas funções existem? Qual é o requisito R2?
3. Escolher uma falha da saída dos testes e explicar com suas palavras o que ela diz.

## Fechamento
Perguntar: "Qual é a diferença entre rodar `node solucao.js` e rodar `npx playwright test`?" (O primeiro só executa o arquivo; o segundo chama cada função com vários valores e confere os resultados.)
