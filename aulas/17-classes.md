# Aula 17 – Classes

**Objetivo:** criar classes com encapsulamento, herança e erros customizados.
**Pergunta motivadora:** "Como garantir que ninguém consiga fazer `conta.saldo = 1000000`?"

## 1. Explicação
### Classe básica
```js
class Lampada {
  #ligada = false;           // campo privado

  constructor(potencia) {
    this.potencia = potencia; // campo público
  }
  get ligada() {             // getter: lido como propriedade
    return this.#ligada;
  }
  ligar() {
    this.#ligada = true;
    return this;             // permite encadear
  }
}
const l = new Lampada(60);
l.ligar();
l.ligada;        // true
l.ligada = false;  // sem setter: não funciona (ignorado ou erro em modo estrito)
```
- `this` = o objeto atual.
- `#campo` só existe dentro da classe. **Não aparece** em `Object.keys` nem em `JSON.stringify`.

### Validação e erros
```js
if (typeof valor !== 'number' || Number.isNaN(valor) || valor <= 0) {
  throw new Error('Valor inválido');
}
```
Validar **antes** de alterar qualquer estado ("sem alterar nada").

### Cópias
`extrato()` devolve `this.#movimentos.map((m) => ({ ...m }))`: mexer no resultado não afeta a conta.

### Herança
```js
class Animal {
  constructor(nome) { this.nome = nome; }
  falar() { return `${this.nome} faz barulho`; }
}
class Cachorro extends Animal {
  constructor(nome) {
    super(nome);            // obrigatório antes de usar this
  }
  falar() { return `${super.falar()} (au!)`; }
}
```
Campos privados da classe-mãe **não** são acessíveis na filha: use métodos protegidos/públicos da mãe (ex.: `depositar`) ou um método próprio da mãe.

### Erro customizado
```js
class ValorInvalidoError extends Error {
  constructor(valor) {
    super(`Valor inválido: ${valor}`);
    this.name = 'ValorInvalidoError';
    this.valor = valor;
  }
}
try { throw new ValorInvalidoError(-1); }
catch (e) { console.log(e.name, e.message, e instanceof Error); }
```

### Arredondar centavos
`Math.round(x * 100) / 100`.

## 2. Prática guiada
Construir `Cofrinho` com `#total`, `guardar(valor)`, `get total`, `extrato()` (cópia), erros para valores inválidos; depois `CofrinhoMeta extends Cofrinho` que lança erro ao passar do limite.

## 3. Exercício (aplicado ao web-10, R2–R6)
1. `ContaBancaria` (R3 + R6): `#saldo`, getter, `depositar`, `sacar`, `extrato`, validações.
2. `SaldoInsuficienteError` (R4): `name`, `saldoAtual`, `valorSolicitado` (nessa ordem), mensagem citando os dois valores. `sacar` lança esse erro quando falta saldo.
3. `ContaPoupanca extends ContaBancaria` (R5): `renderJuros(taxa)` com `tipo: 'juros'` no extrato; limite de 2 saques (mensagem com "limite"). Pensar: como registrar `'juros'` no extrato se o saldo é privado da mãe? Discutir e escolher uma solução.
4. Testar R2: sem `var`, usando `class`.
