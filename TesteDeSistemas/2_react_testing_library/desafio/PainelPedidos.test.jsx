import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PainelPedidos from "./PainelPedidos"; // teste ao lado do componente

describe("<PainelPedidos />", () => {
  // DESAFIO — provar que o componente "avisa o pai" com o total de itens.
  // dica: const onFinalizar = jest.fn();
  //       render(<PainelPedidos onFinalizar={onFinalizar} />);
  //       clique "Adicionar item", depois "Finalizar pedido";
  //       expect(onFinalizar).toHaveBeenCalledTimes(1);
  //       expect(onFinalizar).toHaveBeenCalledWith(1);
  test.todo("avisa o pai (onFinalizar) com o total de itens ao finalizar");
});
