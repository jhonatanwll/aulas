# Aula 02 — React Testing Library (RTL)

Código-base para praticar testes de componentes React com a React Testing Library (RTL) + Jest.

## Como rodar

```bash
npm install          # baixa React + RTL + Jest + Babel
npm test             # roda todos os testes uma vez
npm run test:watch   # re-roda sozinho quando você salva um arquivo
```

Precisa de **Node 20+**.

## Estrutura

O teste fica **ao lado** do componente que ele testa (padrão de mercado React — `Componente.jsx` e `Componente.test.jsx` na mesma pasta).

```
2_react_testing_library/
├─ jest.config.js        # ambiente jsdom + setupTests
├─ babel.config.js       # traduz JSX para o Jest
├─ setupTests.js         # liga os matchers do jest-dom
├─ exemplo/              # JÁ PRONTO — estude para aprender o padrão
│  ├─ FilaAtendimento.jsx
│  └─ FilaAtendimento.test.jsx
├─ exercicios/           # VOCÊ FAZ — troque cada test.todo por um teste real
│  ├─ EstoqueProduto.jsx
│  └─ EstoqueProduto.test.jsx
└─ desafio/              # VOCÊ FAZ — depois dos exercícios
   ├─ PainelPedidos.jsx
   └─ PainelPedidos.test.jsx
```

## Por onde começar

1. `npm install` e `npm run test:exemplo` — veja os 3 testes do `exemplo/` passando (verde). Leia o `.test.jsx` ao lado do componente para entender o fluxo: **montar → achar → interagir → afirmar**.
2. Abra `exercicios/EstoqueProduto.test.jsx`. Cada `test.todo("...")` é um exercício: troque por um `test("...", ...)` de verdade e rode `npm run test:exercicios` até ficar verde. Faça na ordem (Nível 1 → 4).
3. Por último, o `desafio/PainelPedidos.test.jsx` (`jest.fn()`).

## Como entregar

Suba seu fork/branch com os arquivos `*.test.jsx` preenchidos e todos os testes verdes (`npm test` sem falhas).

## Comandos úteis

| Comando | O que faz |
|---|---|
| `npm test` | roda tudo |
| `npm run test:exemplo` | só o `exemplo/` (referência pronta) |
| `npm run test:exercicios` | só os exercícios |
| `npm run test:desafio` | só o desafio |
| `npm run test:watch` | re-roda ao salvar |
