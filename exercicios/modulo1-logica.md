# Exercícios extras – Módulo 1: Lógica (aulas 2–9)

Faça cada exercício em um arquivo seu, exporte as funções e teste com `console.log`. Só olhe o gabarito (`../gabaritos/modulo1-logica.js`) depois de tentar por pelo menos 15 minutos.

Os exercícios **não repetem** as funções do web-08; treinam as mesmas técnicas.

1. **⭐ `classificarTemperatura(c)`**: abaixo de 15 → `'Frio'`; abaixo de 25 → `'Agradável'`; senão `'Quente'`. *(Aula 4)*
2. **⭐ `seculo(ano)`**: devolve o século. `1900` → `19`, `1901` → `20`. *(Aulas 2 e 4)*
3. **⭐ `tabuada(n)`**: array de 10 textos, ex.: `'7 x 3 = 21'`. *(Aula 5)*
4. **⭐⭐ `fatorial(n)`**: `fatorial(5)` → `120`; `fatorial(0)` → `1`. *(Aula 5)*
5. **⭐⭐ `contarPalavrasTexto(texto)`**: conta palavras ignorando espaços extras. `'  olá   mundo  '` → `2`; `''` → `0`. *(Aula 6)*
6. **⭐⭐ `capitalizar(texto)`**: cada palavra com a primeira letra maiúscula e o resto minúsculo. `'jOÃO da sILVA'` → `'João Da Silva'`. *(Aula 6)*
7. **⭐⭐⭐ `ehAnagrama(a, b)`**: ignora maiúsculas, acentos e espaços. `'Amor'`/`'Roma'` → `true`; `'Pão'`/`'opa'` → `true`. *(Aula 6)*
8. **⭐⭐⭐ `ehPerfeito(n)`**: `true` se a soma dos divisores menores que `n` é igual a `n` (`6`, `28`). Percorra só até √n. `1` → `false`. *(Aula 7)*
9. **🔥 `passosCollatz(n)`**: enquanto `n !== 1`: se par, `n / 2`; se ímpar, `3n + 1`. Devolve quantos passos. `6` → `8`. *(Aulas 5 e 9)*
10. **🔥 `cesar(texto, chave)`**: desloca cada letra `chave` posições no alfabeto (a-z e A-Z), mantendo o resto. Aceita chave negativa. `cesar('abc xyz', 3)` → `'def abc'`. *(Aulas 6 e 9)*

**Dica de planejamento (aula 9):** para os dois últimos, escreva primeiro 3 exemplos à mão e o plano em português.
