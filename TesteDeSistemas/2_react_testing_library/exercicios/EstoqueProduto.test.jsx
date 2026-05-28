import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EstoqueProduto from "./EstoqueProduto"; // teste ao lado do componente

describe("<EstoqueProduto />", () => {
  // NIVEL 1 — estado inicial: "Em estoque: 10" e "🟢 Normal"
  test.todo("comeca com 10 unidades e nivel Normal");

  // NIVEL 2 — primeira venda: clicar "Vender" -> "Em estoque: 9"
  test.todo('clicar em "Vender" diminui o estoque');

  // NIVEL 3 — alerta (role="alert" = "🛒 Repor urgente!"): ausente no inicio;
  //           aparece ao "Zerar estoque", quando a faixa vira "❌ Esgotado"
  test.todo('o alerta "Repor urgente" so aparece quando zera');

  // NIVEL 4 — vender e repor volta a "Em estoque: 10" e "🟢 Normal"
  test.todo('"Repor" depois de vender devolve a quantidade');

  // DESAFIO — vender 5x -> "🔴 Estoque baixo" aparece e "🟢 Normal" some
  test.todo("o nivel muda de faixa conforme o estoque baixa");
});
