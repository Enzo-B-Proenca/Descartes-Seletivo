import Link from "next/link";

export default function Navigation({ active }) {
  return (
    <nav id="menu" aria-label="Menu principal">
      <Link href="/" className={active === "inicio" ? "ativo" : ""}>
        Início
      </Link>
      <Link
        href="/enderecos"
        className={active === "enderecos" ? "ativo" : ""}
      >
        Buscar Endereços
      </Link>
      <Link
        href="/favoritos"
        className={active === "favoritos" ? "ativo" : ""}
      >
        Favoritos
      </Link>
    </nav>
  );
}