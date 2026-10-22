"use client";

import { useState } from "react";

export default function WasteCard({ id, titulo, descricao, pontos }) {
  const [visivel, setVisivel] = useState(false);

  return (
    <article className="card" data-tipo={id}>
      <h2>{titulo}</h2>
      <p>{descricao}</p>

      <button
        type="button"
        aria-expanded={visivel}
        aria-controls={`pontos-${id}`}
        onClick={() => setVisivel((atual) => !atual)}
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
