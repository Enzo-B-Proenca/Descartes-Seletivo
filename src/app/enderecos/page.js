// src/app/enderecos/page.jsx
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";

export default function EnderecosPage() {
  return (
    <>
      <Header subtitle="Busque pontos de coleta pelo endereço" />
      <Navigation active="enderecos" />

      <main>
        <p id="mensagem" aria-live="polite" />

        <form id="busca-section">
          <label htmlFor="busca">Buscar ponto de coleta:</label>
          <input
            type="search"
            id="busca"
            placeholder="Digite um bairro ou rua..."
          />
        </form>

        <p id="contagem" />
        <section id="lista-enderecos" aria-label="Pontos de coleta" />
      </main>

      <footer />
    </>
  );
}
