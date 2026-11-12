"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { CENTRO_SP } from "../../data/enderecos";

export default function CollectionMap({ onMessage }) {
  const mapaRef = useRef(null);

  useEffect(() => {
    let mapa;
    let cancelado = false;

    async function colocarPin(L, pinIcon, nome) {
      let item;

      // Busca o ecoponto pelo nome na API
      try {
        const res = await fetch(`/api/enderecos?nome=${encodeURIComponent(nome)}`);
        const dados = await res.json();
        item = dados[0];
      } catch {
        onMessage?.("Não foi possível carregar os ecopontos.");
        return;
      }

      if (cancelado || !mapa) return;

      if (!item || !item.coords) {
        onMessage?.(`Ponto sem coordenadas disponíveis: ${nome}`);
        return;
      }

      mapa.setView(item.coords, 16);
      L.marker(item.coords, {icon: pinIcon})
        .addTo(mapa)
        .bindPopup(`<strong>${item.nome}</strong><br>${item.endereco}`)
        .openPopup();

      onMessage?.(`Ponto exibido no mapa: ${item.nome}`);
    }

    function centralizarNaMinhaPosicao(L, pinIcon) {
      if (!navigator.geolocation) return;

      navigator.geolocation.getCurrentPosition(
        (pos) => {
          if (cancelado || !mapa) return;

          const minhaPosicao = [pos.coords.latitude, pos.coords.longitude];
          mapa.setView(minhaPosicao, 14);
          L.marker(minhaPosicao, {icon: pinIcon})
            .addTo(mapa)
            .bindPopup("Você está aqui")
            .openPopup();
        },
        () => { }
      );
    }

    async function iniciarMapa() {
      const L = await import("leaflet");
      const pinIcon = L.icon({
        iconUrl: "/images/leaflet/marker-icon.png",
        iconRetinaUrl: "/images/leaflet/marker-icon-2x.png",
        shadowUrl: "/images/leaflet/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      if (cancelado || !mapaRef.current || mapaRef.current._leaflet_id) return;

      mapa = L.map(mapaRef.current).setView(CENTRO_SP, 12);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        referrerPolicy: "strict-origin-when-cross-origin",
      }).addTo(mapa);

      const nome = new URLSearchParams(window.location.search).get("ecoponto");

      if (nome) {
        colocarPin(L, pinIcon, nome);
        return;
      }

      centralizarNaMinhaPosicao(L, pinIcon);
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
