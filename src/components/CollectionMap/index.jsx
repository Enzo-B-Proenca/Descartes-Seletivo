"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { CENTRO_SP, ENDERECOS } from "../../data/enderecos";

export default function CollectionMap({ onMessage }) {
  const mapaRef = useRef(null);

  useEffect(() => {
    let mapa;
    let cancelado = false;

    function colocarPin(L, nome) {
      const item = ENDERECOS.find(
        (endereco) => endereco.nome.toLowerCase() === nome.toLowerCase()
      );

      if (!item || !item.coords) {
        onMessage?.(`Ponto sem coordenadas disponíveis: ${nome}`);
        return;
      }

      mapa.setView(item.coords, 16);
      L.marker(item.coords)
        .addTo(mapa)
        .bindPopup(`<strong>${item.nome}</strong><br>${item.endereco}`)
        .openPopup();

      onMessage?.(`Ponto exibido no mapa: ${item.nome}`);
    }

    function centralizarNaMinhaPosicao(L) {
      if (!navigator.geolocation) return;

      navigator.geolocation.getCurrentPosition(
        (pos) => {
          if (cancelado || !mapa) return;

          const minhaPosicao = [pos.coords.latitude, pos.coords.longitude];
          mapa.setView(minhaPosicao, 14);
          L.marker(minhaPosicao)
            .addTo(mapa)
            .bindPopup("Você está aqui")
            .openPopup();
        },
        () => {}
      );
    }

    async function iniciarMapa() {
      const L = await import("leaflet");

      if (cancelado || !mapaRef.current || mapaRef.current._leaflet_id) return;

      mapa = L.map(mapaRef.current).setView(CENTRO_SP, 12);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mapa);

      const nome = new URLSearchParams(window.location.search).get("ecoponto");

      if (nome) {
        colocarPin(L, nome);
        return;
      }

      centralizarNaMinhaPosicao(L);
    }

    iniciarMapa();

    return () => {
      cancelado = true;
      mapa?.remove();
    };
  }, [onMessage]);

  return (
    <section id="mapa-section">
      <h2>Mapa de pontos de coleta</h2>
      <div
        id="mapa"
        ref={mapaRef}
        role="application"
        aria-label="Mapa de São Paulo"
      />
    </section>
  );
}
