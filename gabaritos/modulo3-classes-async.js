const assert = require('assert');

// 1. Lampada com campo privado e getter
class Lampada {
  #ligada = false;
  get ligada() {
    return this.#ligada;
  }
  ligar() {
    this.#ligada = true;
    return this;
  }
  desligar() {
    this.#ligada = false;
    return this;
  }
}

// 2. Cofrinho + herança com meta
class Cofrinho {
  #total = 0;
  #movimentos = [];
  guardar(valor) {
    if (typeof valor !== 'number' || Number.isNaN(valor) || valor <= 0) {
      throw new Error('Valor inválido');
    }
    this.#total += valor;
    this.#movimentos.push({ tipo: 'guardar', valor });
    return this.#total;
  }
  get total() {
    return this.#total;
  }
  extrato() {
    return this.#movimentos.map((m) => ({ ...m }));
  }
}
class CofrinhoComMeta extends Cofrinho {
  constructor(meta) {
    super();
    this.meta = meta;
  }
  guardar(valor) {
    if (this.total + valor > this.meta) throw new Error('Meta ultrapassada');
    return super.guardar(valor);
  }
}

// 3. Erro customizado
class IdadeInvalidaError extends Error {
  constructor(idade) {
    super(`Idade inválida: ${idade}`);
    this.name = 'IdadeInvalidaError';
    this.idade = idade;
  }
}
function validarIdade(idade) {
  if (!Number.isInteger(idade) || idade < 0) throw new IdadeInvalidaError(idade);
  return idade;
}

// 4. Fila iterável sem consumir
class FilaSimples {
  #itens = [];
  enfileirar(x) {
    this.#itens.push(x);
    return this;
  }
  desenfileirar() {
    return this.#itens.shift();
  }
  *[Symbol.iterator]() {
    yield* this.#itens;
  }
}

// 5. Gerador de pares e pegar n
function* pares() {
  let n = 0;
  while (true) {
    yield n;
    n += 2;
  }
}
function pegar(iteravel, n) {
  const r = [];
  if (n <= 0) return r;
  for (const x of iteravel) {
    r.push(x);
    if (r.length >= n) break;
  }
  return r;
}

// 6. Atraso e timeout
const esperar = (ms) => new Promise((r) => setTimeout(r, ms));
function comTimeout(promessa, ms) {
  let timer;
  const limite = new Promise((_, rej) => {
    timer = setTimeout(() => rej(new Error('Timeout')), ms);
  });
  return Promise.race([promessa, limite]).finally(() => clearTimeout(timer));
}

// 7. Sequência vs paralelo
async function sequencia(tarefas) {
  const r = [];
  for (const t of tarefas) r.push(await t());
  return r;
}
const paralelo = (tarefas) => Promise.all(tarefas.map((t) => t()));

// 8. Retry com espera dobrando
async function tentar(fn, tentativas, atraso) {
  let erro;
  for (let i = 0; i < tentativas; i++) {
    try {
      return await fn();
    } catch (e) {
      erro = e;
      if (i < tentativas - 1) await esperar(atraso * 2 ** i);
    }
  }
  throw erro;
}

// 9. Limitar concorrência
async function limitar(tarefas, limite) {
  const resultados = new Array(tarefas.length);
  let proximo = 0;
  async function worker() {
    while (proximo < tarefas.length) {
      const i = proximo++;
      resultados[i] = await tarefas[i]();
    }
  }
  await Promise.all(Array.from({ length: Math.min(limite, tarefas.length) }, worker));
  return resultados;
}

// 10. Emissor de eventos mínimo
class Emissor {
  #ouvintes = new Map();
  on(ev, fn) {
    this.#ouvintes.set(ev, [...(this.#ouvintes.get(ev) || []), fn]);
    return this;
  }
  off(ev, fn) {
    this.#ouvintes.set(ev, (this.#ouvintes.get(ev) || []).filter((f) => f !== fn));
    return this;
  }
  emit(ev, ...args) {
    const lista = [...(this.#ouvintes.get(ev) || [])];
    lista.forEach((f) => f(...args));
    return lista.length > 0;
  }
}

(async () => {
  const l = new Lampada();
  l.ligar();
  assert.strictEqual(l.ligada, true);
  assert.deepStrictEqual(Object.keys(l), []);
  assert.strictEqual(JSON.stringify(l), '{}');

  const c = new CofrinhoComMeta(100);
  c.guardar(60);
  assert.throws(() => c.guardar(50), /Meta/);
  assert.throws(() => c.guardar(-1), /inválido/);
  assert.strictEqual(c.total, 60);
  c.extrato().push('x');
  assert.strictEqual(c.extrato().length, 1);

  assert.throws(() => validarIdade(-5), (e) => e instanceof IdadeInvalidaError && e.idade === -5);

  const f = new FilaSimples().enfileirar(1).enfileirar(2);
  assert.deepStrictEqual([...f], [1, 2]);
  assert.deepStrictEqual([...f], [1, 2]);

  assert.deepStrictEqual(pegar(pares(), 4), [0, 2, 4, 6]);
  assert.deepStrictEqual(pegar(pares(), 0), []);

  await assert.rejects(comTimeout(esperar(200), 20), /Timeout/);
  assert.strictEqual(await comTimeout(Promise.resolve(7), 50), 7);

  const ordem = [];
  const t = (n, ms) => async () => {
    await esperar(ms);
    ordem.push(n);
    return n;
  };
  assert.deepStrictEqual(await sequencia([t(1, 30), t(2, 5)]), [1, 2]);
  assert.deepStrictEqual(ordem, [1, 2]);
  ordem.length = 0;
  assert.deepStrictEqual(await paralelo([t(1, 30), t(2, 5)]), [1, 2]);
  assert.deepStrictEqual(ordem, [2, 1]);

  let n = 0;
  const instavel = async () => {
    if (++n < 3) throw new Error('falhou');
    return 'ok';
  };
  assert.strictEqual(await tentar(instavel, 3, 5), 'ok');
  await assert.rejects(
    tentar(async () => {
      throw new Error('sempre');
    }, 2, 5),
    /sempre/
  );

  let ativas = 0;
  let maximo = 0;
  const tarefa = (v) => async () => {
    ativas++;
    maximo = Math.max(maximo, ativas);
    await esperar(20);
    ativas--;
    return v;
  };
  const res = await limitar([1, 2, 3, 4, 5, 6].map(tarefa), 2);
  assert.deepStrictEqual(res, [1, 2, 3, 4, 5, 6]);
  assert.strictEqual(maximo, 2);
  assert.deepStrictEqual(await limitar([], 3), []);

  const e = new Emissor();
  let soma = 0;
  const ouvinte = (x) => {
    soma += x;
  };
  e.on('a', ouvinte).on('a', ouvinte);
  assert.strictEqual(e.emit('a', 5), true);
  assert.strictEqual(soma, 10);
  e.off('a', ouvinte);
  assert.strictEqual(e.emit('a', 5), false);

  console.log('Gabarito do módulo 3: OK');
})();
