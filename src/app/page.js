"use client";

import { useState } from "react";
import Header from "../components/Header/";
import Navigation from "../components/Navigation/";
import WasteCard from "../components/WasteCard/";
import CollectionMap from "../components/CollectionMap/";

export default function Page() {
  const [mensagem, setMensagem] = useState("");

  return (
    <>
      <Header subtitle="Descubra o ponto de coleta mais perto de você" />
      <Navigation active="inicio" />

      <main>
        <p id="mensagem" aria-live="polite">
          {mensagem}
        </p>

        <section id="cards">
          <WasteCard
            id="reciclavel"
            titulo="Reciclável"
            descricao="Papel, plástico, vidro e metal. Separe e leve até um ecoponto."
            pontos={["Ecoponto Pinheiros", "Ecoponto Consolação"]}
            onToggle={(tipo) => setMensagem(`Pontos de coleta de ${tipo}`)}
          />

          <WasteCard
            id="eletronico"
            titulo="Eletrônico"
            descricao="Pilhas, celulares e aparelhos velhos. Não jogue no lixo comum!"
            pontos={["Shopping Eldorado", "Correios Centro"]}
            onToggle={(tipo) => setMensagem(`Pontos de coleta de ${tipo}`)}
          />

          <WasteCard
            id="outros"
            titulo="Outros"
            descricao="Óleo de cozinha, remédios vencidos e outros resíduos especiais."
            pontos={["Posto de Coleta de Óleo - Vila Sônia"]}
            onToggle={(tipo) => setMensagem(`Pontos de coleta de ${tipo}`)}
          />
        </section>

        <CollectionMap onMessage={setMensagem} />
      </main>

      <footer />
    </>
  );
}
