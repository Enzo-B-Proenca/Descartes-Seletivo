"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";

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

function resumirFavoritos(favoritos) {
  return favoritos.reduce(
    (resumo, favorito) => {
      if (favorito.coords) resumo.comMapa += 1;
      else resumo.semMapa += 1;
      return resumo;
    },
    { comMapa: 0, semMapa: 0 }
  );
}

function textoContagem(favoritos) {
  if (!favoritos.length) return "Nenhum favorito salvo ainda.";

  const { comMapa } = resumirFavoritos(favoritos);
  const total =
    favoritos.length +
    (favoritos.length === 1 ? " favorito salvo" : " favoritos salvos");

  return `${total} · ${comMapa} com ponto no mapa`;
}

export default function FavoritosPage() {
  const router = useRouter();
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

  function irParaMapa(nome) {
    router.push(`/?ecoponto=${encodeURIComponent(nome)}`);
  }

  function removerFavoritoDaLista(favorito) {
    const atualizados = favoritos.filter(
      (item) => item.nome !== favorito.nome
    );

    if (!salvarFavoritos(atualizados)) {
      setMensagem(MSG_FALHA_FAVORITOS);
      return;
    }

    window.dispatchEvent(new Event(EVENTO_FAVORITOS));
    setMensagem(`Removido dos favoritos: ${favorito.nome}`);
  }

  function limparListaDeFavoritos() {
    if (!window.confirm("Remover todos os favoritos salvos neste navegador?")) {
      return;
    }

    if (!salvarFavoritos([])) {
      setMensagem(MSG_FALHA_FAVORITOS);
      return;
    }

    window.dispatchEvent(new Event(EVENTO_FAVORITOS));
    setMensagem("Todos os favoritos foram removidos.");
  }

  return (
    <>
      <Header subtitle="Seus pontos de coleta favoritos" />
      <Navigation active="favoritos" />

      <main>
        <p id="mensagem" aria-live="polite">
          {mensagem}
        </p>
        <p id="contagem-favoritos">{textoContagem(favoritos)}</p>

        <section id="lista-favoritos" aria-label="Pontos favoritos">
          {favoritos.map((favorito) => {
            const semMapa = !favorito.coords;

            return (
              <article className="endereco" key={favorito.nome}>
                <h3>{favorito.nome}</h3>
                <p>{favorito.endereco}</p>

                {semMapa && (
                  <p className="aviso-coords">
                    Sem coordenadas disponíveis no mapa.
                  </p>
                )}

                <div className="acoes">
                  <button
                    type="button"
                    className="ver-mapa"
                    onClick={() => irParaMapa(favorito.nome)}
                    disabled={semMapa}
                    title={
                      semMapa
                        ? "Este ponto não tem coordenadas cadastradas."
                        : undefined
                    }
                  >
                    Ver no mapa
                  </button>

                  <button
                    type="button"
                    className="remover"
                    onClick={() => removerFavoritoDaLista(favorito)}
                  >
                    Remover
                  </button>
                </div>
              </article>
            );
          })}

          {!favoritos.length && (
            <p className="vazio">
              Você ainda não favoritou nenhum ecoponto. Na busca de endereços,
              toque em ☆ para salvar um endereço.
            </p>
          )}
        </section>

        <p className="centralizado">
          <button
            className="ver-mapa"
            id="limpar-favoritos"
            type="button"
            onClick={limparListaDeFavoritos}
            hidden={favoritos.length === 0}
          >
            Limpar todos
          </button>
        </p>
      </main>

      <footer />
    </>
  );
}
