import "./globals.css";

export const metadata = {
  title: "Descartes Seletivo",
  description: "Descubra o ponto de coleta mais perto de você.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
