import { ENDERECOS } from "@/data/enderecos";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const nome = searchParams.get("nome")?.trim().toLowerCase();
  const busca = searchParams.get("busca")?.trim().toLowerCase();

  let resultado = ENDERECOS;

  if (nome) {
    resultado = resultado.filter((item) => item.nome.toLowerCase() === nome);
  }

  if (busca) {
    resultado = resultado.filter((item) =>
      `${item.nome} ${item.endereco}`.toLowerCase().includes(busca)
    );
  }

  return Response.json(resultado);
}