// src/app/favoritos/page.jsx
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";

export default function FavoritosPage() {
  return (
    <>
      <Header subtitle="Seus pontos de coleta favoritos" />
      <Navigation active="favoritos" />

      <main>
        <p id="mensagem" aria-live="polite" />
        <p id="contagem-favoritos" />

        <section id="lista-favoritos" aria-label="Pontos favoritos" />

        <p className="centralizado">
          <button className="ver-mapa" id="limpar-favoritos" type="button">
            Limpar todos
          </button>
        </p>
      </main>

      <footer />
    </>
  );
}