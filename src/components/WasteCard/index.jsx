"use client";

import { useState } from "react";

export default function WasteCard({ id, titulo, descricao, pontos, onToggle }) {
  const [visivel, setVisivel] = useState(false);

  function alternarVisibilidade() {
    const proximo = !visivel;
    setVisivel(proximo);
    onToggle?.(id);
  }

  return (
    <article className="card" data-tipo={id}>
      <h2>{titulo}</h2>
      <p>{descricao}</p>

      <button
        type="button"
        aria-expanded={visivel}
        aria-controls={`pontos-${id}`}
        onClick={alternarVisibilidade}
      >
        {visivel ? "Ocultar pontos de coleta" : "Ver pontos de coleta"}
      </button>

      {visivel && (
        <ul className="pontos" id={`pontos-${id}`}>
          {pontos.map((ponto) => (
            <li key={ponto}>{ponto}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
