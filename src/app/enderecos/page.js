"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import { ENDERECOS } from "../../data/enderecos";

const CHAVE_FAVORITOS = "descartes:favoritos";
const EVENTO_FAVORITOS = "descartes:favoritos:alterado";
const MSG_FALHA_FAVORITOS =
  "Não foi possível atualizar os favoritos neste navegador.";

function assinarFavoritos(callback) {
  window.addEventListener("storage", callback);
  window.addEventListener(EVENTO_FAVORITOS, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(EVENTO_FAVORITOS, callback);
  };
}

function lerFavoritos() {
  try {
    return localStorage.getItem(CHAVE_FAVORITOS) ?? "[]";
  } catch {
    return "[]";
  }
}

function lerFavoritosNoServidor() {
  return "[]";
}

function desserializarFavoritos(json) {
  try {
    const dados = JSON.parse(json);
    return Array.isArray(dados) ? dados : [];
  } catch {
    return [];
  }
}

function salvarFavoritos(favoritos) {
  try {
    localStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(favoritos));
    return true;
  } catch {
    return false;
  }
}

function rotuloFavorito(favoritado) {
  return favoritado ? "Remover dos favoritos" : "Adicionar aos favoritos";
}

export default function EnderecosPage() {
  const router = useRouter();
  const [busca, setBusca] = useState("");
  const [mensagem, setMensagem] = useState("");
  const favoritosJson = useSyncExternalStore(
    assinarFavoritos,
    lerFavoritos,
    lerFavoritosNoServidor
  );
  const favoritos = useMemo(
    () => desserializarFavoritos(favoritosJson),
    [favoritosJson]
  );

  const termo = busca.trim().toLowerCase();

  const resultados = useMemo(() => {
    if (!termo) return ENDERECOS;

    return ENDERECOS.filter((item) =>
      `${item.nome} ${item.endereco}`.toLowerCase().includes(termo)
    );
  }, [termo]);

  function irParaMapa(nome) {
    router.push(`/?ecoponto=${encodeURIComponent(nome)}`);
  }

  function alternarFavorito(item) {
    const jaFavorito = favoritos.some(
      (favorito) => favorito.nome === item.nome
    );

    const atualizados = jaFavorito
      ? favoritos.filter((favorito) => favorito.nome !== item.nome)
      : [
          ...favoritos,
          { nome: item.nome, endereco: item.endereco, coords: item.coords },
        ];

    if (!salvarFavoritos(atualizados)) {
      setMensagem(MSG_FALHA_FAVORITOS);
      return;
    }

    window.dispatchEvent(new Event(EVENTO_FAVORITOS));
    setMensagem(
      `${jaFavorito ? "Removido dos favoritos: " : "Adicionado aos favoritos: "}${item.nome}`
    );
  }

  return (
    <>
      <Header subtitle="Busque pontos de coleta pelo endereço" />
      <Navigation active="enderecos" />

      <main>
        <p id="mensagem" aria-live="polite">
          {mensagem}
        </p>

        <form id="busca-section" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="busca">Buscar ponto de coleta:</label>
          <input
            type="search"
            id="busca"
            placeholder="Digite um bairro ou rua..."
            value={busca}
            onChange={(event) => setBusca(event.target.value)}
          />
        </form>

        <p id="contagem" aria-live="polite">
          Mostrando {resultados.length} de {ENDERECOS.length} ecopontos
        </p>

        <section id="lista-enderecos" aria-label="Pontos de coleta">
          {resultados.length > 0 ? (
            resultados.map((item) => {
              const ehFavorito = favoritos.some(
                (favorito) => favorito.nome === item.nome
              );
              const rotulo = rotuloFavorito(ehFavorito);

              return (
                <article className="endereco" key={item.nome}>
                  <h3>{item.nome}</h3>
                  <p>{item.endereco}</p>

                  <div className="acoes">
                    <button
                      type="button"
                      className="ver-mapa"
                      onClick={() => irParaMapa(item.nome)}
                    >
                      Ver no mapa
                    </button>

                    <button
                      type="button"
                      className={`favorito${ehFavorito ? " ativo" : ""}`}
                      title={rotulo}
                      aria-label={rotulo}
                      aria-pressed={ehFavorito}
                      onClick={() => alternarFavorito(item)}
                    >
                      {ehFavorito ? "★" : "☆"}
                    </button>
                  </div>
                </article>
              );
            })
          ) : (
            <p className="vazio">
              Nenhum ecoponto encontrado para essa busca.
            </p>
          )}
        </section>
      </main>

      <footer />
    </>
  );
}
