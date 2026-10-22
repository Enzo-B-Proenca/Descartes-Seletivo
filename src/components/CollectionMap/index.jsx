"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

export default function CollectionMap() {
  const mapaRef = useRef(null);

  useEffect(() => {
    let mapa;

    async function iniciarMapa() {
      const L = await import("leaflet");

      if (!mapaRef.current || mapaRef.current._leaflet_id) return;

      mapa = L.map(mapaRef.current).setView([-23.5505, -46.6333], 11);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mapa);
    }

    iniciarMapa();

    return () => mapa?.remove();
  }, []);

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
