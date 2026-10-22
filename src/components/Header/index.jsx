// src/components/Header.jsx
export default function Header({ subtitle }) {
  return (
    <header>
      <h1>
        <span className="icone">♻️</span> Descartes Seletivo
      </h1>
      <p>{subtitle}</p>
    </header>
  );
}
