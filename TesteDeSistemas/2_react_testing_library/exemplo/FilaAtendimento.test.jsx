import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilaAtendimento from "./FilaAtendimento"; // teste ao lado do componente

// 01 — MONTAR: render + screen, conferir o estado inicial.
test("comeca com a fila vazia", () => {
  render(<FilaAtendimento />);
  expect(screen.getByText("Chamados na fila: 0")).toBeInTheDocument();
  expect(screen.getByText("🟢 Fila vazia")).toBeInTheDocument();
});

// 03 — INTERAGIR: userEvent clica e a tela atualiza (await obrigatorio).
test('clicar em "Novo chamado" aumenta a fila', async () => {
  const user = userEvent.setup();
  render(<FilaAtendimento />);

  const botaoNovo = screen.getByRole("button", { name: "Novo chamado" });
  await user.click(botaoNovo);
  await user.click(botaoNovo); // 2 cliques

  expect(screen.getByText("Chamados na fila: 2")).toBeInTheDocument();
});

// 04 — VARIAR: queryBy prova ausencia; getBy prova presenca depois.
test("o alerta de fila lotada so aparece a partir de 8", async () => {
  const user = userEvent.setup();
  render(<FilaAtendimento />);

  // no comeco o alerta NAO existe
  expect(screen.queryByRole("alert")).not.toBeInTheDocument();

  const botaoNovo = screen.getByRole("button", { name: "Novo chamado" });
  for (let i = 0; i < 8; i++) await user.click(botaoNovo); // enche ate 8

  expect(screen.getByRole("alert")).toBeInTheDocument();
});
