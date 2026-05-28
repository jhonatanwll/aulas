import { useState } from "react";

// Recebe a funcao onFinalizar do "pai" e a chama ao finalizar, com o total de itens.
export default function PainelPedidos({ onFinalizar }) {
  const [itens, setItens] = useState(0);

  return (
    <section>
      <p>Itens: {itens}</p>
      <button onClick={() => setItens(itens + 1)}>Adicionar item</button>
      <button onClick={() => onFinalizar(itens)}>Finalizar pedido</button>
    </section>
  );
}
