import Header from "../components/Header/";
import Navigation from "../components/Navigation/";
import WasteCard from "../components/WasteCard/";
import CollectionMap from "../components/CollectionMap/";

export default function Page() {
  return (
    <>
      <Header />
      <Navigation />

      <main>
        <p id="mensagem" aria-live="polite" />

        <section id="cards">
          <WasteCard
            id="reciclavel"
            titulo="Reciclável"
            descricao="Papel, plástico, vidro e metal. Separe e leve até um ecoponto."
            pontos={["Ecoponto Pinheiros", "Ecoponto Consolação"]}
          />

          <WasteCard
            id="eletronico"
            titulo="Eletrônico"
            descricao="Pilhas, celulares e aparelhos velhos. Não jogue no lixo comum!"
            pontos={["Shopping Eldorado", "Correios Centro"]}
          />

          <WasteCard
            id="outros"
            titulo="Outros"
            descricao="Óleo de cozinha, remédios vencidos e outros resíduos especiais."
            pontos={["Posto de Coleta de Óleo - Vila Sônia"]}
          />
        </section>

        <CollectionMap />
      </main>

      <footer />
    </>
  );
}
