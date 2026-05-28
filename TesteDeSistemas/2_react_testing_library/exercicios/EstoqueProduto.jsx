import { useState } from "react";

// Funcao pura: dada a quantidade, devolve a faixa de estoque.
export function nivelEstoque(quantidade) {
  if (quantidade === 0) return "❌ Esgotado";
  if (quantidade <= 5) return "🔴 Estoque baixo";
  if (quantidade <= 20) return "🟢 Normal";
  return "📦 Cheio";
}

// O componente JA vem pronto — sua tarefa e ESCREVER OS TESTES (EstoqueProduto.test.jsx).
export default function EstoqueProduto() {
  const [quantidade, setQuantidade] = useState(10);

  function repor() {
    setQuantidade(quantidade + 1);
  }
  function vender() {
    if (quantidade > 0) setQuantidade(quantidade - 1);
  }
  function zerar() {
    setQuantidade(0);
  }

  return (
    <div>
      <p>Em estoque: {quantidade}</p>
      <p>{nivelEstoque(quantidade)}</p>
      {quantidade === 0 && <p role="alert">🛒 Repor urgente!</p>}
      <button onClick={repor}>Repor</button>
      <button onClick={vender}>Vender</button>
      <button onClick={zerar}>Zerar estoque</button>
    </div>
  );
}
