import { useState } from "react";

// Painel de chamados de suporte. Demonstra os 4 passos da RTL no HTML do Exemplo.
export default function FilaAtendimento() {
  const [fila, setFila] = useState(0); // quantos chamados na fila
  const lotada = fila >= 8; // regra de negocio: 8 = lotado

  return (
    <section>
      <h2>Chamados na fila: {fila}</h2>

      <button onClick={() => setFila(fila + 1)}>Novo chamado</button>
      <button onClick={() => setFila(Math.max(0, fila - 1))}>Resolver</button>

      {fila === 0 && <p>🟢 Fila vazia</p>}
      {fila > 0 && !lotada && <p>🟡 {fila} em atendimento</p>}
      {lotada && <p role="alert">⚠️ Fila lotada</p>}
    </section>
  );
}
