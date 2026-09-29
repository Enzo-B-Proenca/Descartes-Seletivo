const ENDERECOS = [
  {"nome": "Aricanduva", "endereco": "Av. Aricanduva, 200 (Viaduto Eng. Alberto Badra) - Aricanduva", "coords": [-23.5780239, -46.511454]},
  {"nome": "Astarte", "endereco": "Rua Astarte, 500 - Vila Carrão", "coords": [-23.5522801, -46.5263316]},
  {"nome": "Nova York", "endereco": "Rua Amélia Vanso Magnoli, 480 - Barreira Grande", "coords": [-23.7720346, -46.6795252]},
  {"nome": "Aricanduva I", "endereco": "Rua Professora Alzira de Oliveira Gilioli, 400 - Jardim Nice", "coords": [-23.5780239, -46.511454]},
  {"nome": "Jardim Maria do Carmo", "endereco": "Rua Caminho do Engenho, 800 - Ferreira", "coords": [-23.5954153, -46.7468173]},
  {"nome": "Jardim Jaqueline", "endereco": "Parque Raposo Tavares, Rua Walter Brito Belletti, s/nº - Vila Albano", "coords": [-23.5945788, -46.7536592]},
  {"nome": "Politécnica", "endereco": "Rua Paulino Baptista Conti, 2 - Jardim Sarah", "coords": [-23.5603379, -46.7483233]},
  {"nome": "Giovani Gronchi", "endereco": "Av. Giovani Gronchi, 3413 - Morumbi", "coords": [-23.5993748, -46.7087119]},
  {"nome": "Vida Nova", "endereco": "Travessa Córrego da Independência, 2 - Conjunto Promorar", "coords": [-23.4923885, -46.579114]},
  {"nome": "Santo Dias", "endereco": "Travessa Rosifloras, 301 - Instituto Adventista", "coords": [-23.6633069, -46.7729147]},
  {"nome": "Parque Fernanda", "endereco": "Av. Dr. Salvador Rocco, 261 - Parque Fernanda", "coords": [-23.6767146, -46.7939672]},
  {"nome": "Olinda", "endereco": "Rua Nelson Brissac, 1235 - Parque Regina", "coords": [-23.0777492, -47.1939008]},
  {"nome": "Vila das Belezas", "endereco": "Rua Campo Novo do Sul, 500 - Vila Andrade", "coords": [-23.6402476, -46.7457694]},
  {"nome": "Paraisópolis", "endereco": "Rua Irapará, 73 - Paraíso do Morumbi", "coords": [-23.6225259, -46.7250662]},
  {"nome": "Cidade Saudável", "endereco": "Rua Ptolomeu, 869 - Vila Socorro", "coords": null},
  {"nome": "Geraldo Honório", "endereco": "Rua Geraldo Honório da Silva, 280 - Parque Grajaú", "coords": [-23.7483259, -46.6916562]},
  {"nome": "Parque Peruche", "endereco": "Av. Engenheiro Caetano Álvares, 3142 - Parque Peruche", "coords": [-23.6404612, -46.5107193]},
  {"nome": "Vila Nova Cachoeirinha", "endereco": "Rua Felix Alves Pereira, 113 - Jardim Centenário", "coords": [-23.4648808, -46.6424325]},
  {"nome": "Vila Santa Maria", "endereco": "Rua André Bolsena, com Travessa Luiz Sá - Vila Santista", "coords": [-23.6908899, -46.8000614]},
  {"nome": "Jardim Antártica", "endereco": "Rua Dom Aquino, 103 - Jardim Antártica", "coords": [-23.4639833, -46.687003]},
  {"nome": "São Leandro", "endereco": "Rua São Leandro, 13 - Vila Palmeiras", "coords": [-23.4972081, -46.6840217]},
  {"nome": "Alvarenga", "endereco": "Estrada do Alvarenga, 2475 - Balneário Mar Paulista", "coords": [-23.7469994, -46.6194954]},
  {"nome": "Cupecê", "endereco": "Rua Anália Maria de Jesus, 130 - Jardim Itacolomi", "coords": [-23.6692844, -46.6465495]},
  {"nome": "Nascer do Sol", "endereco": "Rua Nascer do Sol, 356 - Santa Etelvina II", "coords": [-23.5918537, -46.4126624]},
  {"nome": "Setor G", "endereco": "Rua Alfonso Asturaro, altura 600 - Barro Branco II", "coords": [-23.5161645, -46.6474589]},
  {"nome": "Inácio Monteiro", "endereco": "Rua Regresso Feliz, 1190 - Inácio Monteiro", "coords": [-23.5716262, -46.399928]},
  {"nome": "Fazenda do Carmo", "endereco": "Rua Paulo Gracindo, 10 - Fazenda do Carmo", "coords": [-23.5655942, -46.4231457]},
  {"nome": "Paulistinha", "endereco": "Rua Moacir Gomes de Almeida - Vila Paulista I", "coords": [-22.9024908, -47.1767807]},
  {"nome": "Jardim São Nicolau", "endereco": "Rua Agreste de Itabaiana, 590 - Vila União (Zona Leste)", "coords": [-23.827615, -46.6974912]},
  {"nome": "Boturussu", "endereco": "Rua Nélio Batista Guimarães, 183 - Parque Boturussu", "coords": [-23.4986599, -46.4838764]},
  {"nome": "Bandeirantes", "endereco": "Rua Itaiquara, 237 - Itaberaba", "coords": [-23.6015621, -46.7123833]},
  {"nome": "Freguesia do Ó", "endereco": "Rua Sousa Filho, 690 - Vila União (Zona Norte)", "coords": [-23.4874636, -46.6951317]},
  {"nome": "Vila Rica", "endereco": "Rua Jorge Mamede da Silva, 200 - Vila Souza", "coords": [-23.5291755, -47.503048]},
  {"nome": "Jardim São Paulo", "endereco": "Rua Utaro Kanai, 374 - Juscelino Kubitschek", "coords": [-23.4910142, -46.6187979]},
  {"nome": "Guaiaponto", "endereco": "Rua da Passagem Funda, 250 - Vila Santa Cruz", "coords": null},
  {"nome": "Lajeado", "endereco": "Rua Isabela, 405 - Jardim Lajeado", "coords": [-23.5362477, -46.4100218]},
  {"nome": "Padre Nildo do Amaral", "endereco": "Rua Padre Nildo do Amaral Júnior, 900 - Vila Nova Curuçá", "coords": [-23.522631, -46.421755]},
  {"nome": "Tereza Cristina", "endereco": "Rua Tereza Cristina, 10 - Vila Monumento", "coords": [-23.4705443, -46.5313506]},
  {"nome": "Santa Cruz", "endereco": "Rua Santa Cruz, 1452 - Vila Mariana", "coords": [-23.597742, -46.626005]},
  {"nome": "Vila das Mercês", "endereco": "Rua Italva, 86 - Saúde", "coords": [-23.6231613, -46.6085346]},
  {"nome": "Comandante Taylor", "endereco": "Rua Comandante Taylor, 690 - Ipiranga", "coords": [-23.600121, -46.601359]},
  {"nome": "Moreira", "endereco": "Rua João Batista de Godói, 1164 - Jardim das Oliveiras", "coords": [-23.6694655, -46.6358836]},
  {"nome": "Mãe Preta", "endereco": "Av. Dama Entre Verdes, 21 - Vila Curuçá", "coords": [-23.5429182, -46.6383075]},
  {"nome": "Pesqueiro", "endereco": "Rua Caiuás, 18 - Jardim Ida Guedes", "coords": [-23.8085103, -46.4893324]},
  {"nome": "Flamingo", "endereco": "Rua Alexandre Dias Nogueira, 353 - Vila Nova Curuçá", "coords": [-23.7129562, -46.5792997]},
  {"nome": "Itaim Paulista", "endereco": "Rua Barão de Almeida Galeão, altura 61 - Itaim Paulista", "coords": [-23.5017648, -46.3996091]},
  {"nome": "Jardim Indaiá", "endereco": "Rua Rossini Pinto, altura 214 - Jardim Indaiá", "coords": [-23.1076037, -47.2177377]},
  {"nome": "Parque Guarani", "endereco": "Rua Manuel Alves da Rocha, 584 - Parque Guarani", "coords": [-23.5181608, -46.4629905]},
  {"nome": "Oswaldo Valle Cordeiro", "endereco": "Av. Osvaldo Valle Cordeiro, 405 - Jardim Brasília", "coords": null},
  {"nome": "Cidade Líder", "endereco": "Rua Charles Manguin, 20 - Jardim Marília", "coords": [-23.5627696, -46.4943334]},
  {"nome": "Parque do Carmo", "endereco": "Rua Machado Nunes, 95 - N. Sra. do Carmo", "coords": [-23.5787082, -46.458056]},
  {"nome": "Corinthians", "endereco": "Rua Ana Perena, 155 - José Bonifácio", "coords": [-23.5453071, -46.474338]},
  {"nome": "Caldeirão", "endereco": "Rua Major Vitorino de Souza Rocha, 148 - Vila Santa Teresinha", "coords": [-23.5692876, -46.6503538]},
  {"nome": "Vila Carmosina", "endereco": "Av. Francisco Tranchesi, 32 - N. Sra. do Carmo", "coords": [-23.540372, -46.4541709]},
  {"nome": "Imigrantes", "endereco": "Rua Opixe, s/nº - Vila Guarani", "coords": [-23.5959667, -46.6205804]},
  {"nome": "Jabaquara", "endereco": "Rua Jupatis, 140 - Vila Mira", "coords": [-23.6487101, -46.645451]},
  {"nome": "Anselmo Machado", "endereco": "Av. Paulo Lincoln do Valle Pontin, 550 - Jaçanã", "coords": null},
  {"nome": "Silvio Bittencourt", "endereco": "Rua Maria Amália Lopes Azevedo, 4008 - Vila Albertina", "coords": null},
  {"nome": "Viaduto Antártica", "endereco": "Rua Robert Bosch, s/nº - Parque Industrial Tomas Edson", "coords": [-23.5255597, -46.6714715]},
  {"nome": "Vila Jaguara", "endereco": "Rua Agrestina, 189 - Vila Jaguara", "coords": [-23.5076149, -46.754978]},
  {"nome": "Piraporinha", "endereco": "Rua João de Abreu, 326 - Jardim Tupã", "coords": [-23.6822833, -46.5860072]},
  {"nome": "São Luis", "endereco": "Rua Pedro Armani, 252 - Jardim Letícia", "coords": [-23.54756, -46.644214]},
  {"nome": "Bresser", "endereco": "Praça Giuseppe Cesari, 54 - Brás", "coords": [-23.546504, -46.6069301]},
  {"nome": "Tatuapé", "endereco": "Av. Salim Farah Maluf, 179 - Tatuapé", "coords": [-23.5490161, -46.5784036]},
  {"nome": "Brás", "endereco": "Av. Presidente Wilson, 1 - Mooca", "coords": [-23.5451136, -46.6163224]},
  {"nome": "Mooca", "endereco": "Av. Pires do Rio, 600 - Belenzinho", "coords": [-23.5606808, -46.5971924]},
  {"nome": "Pari", "endereco": "Av. Carlos de Campos, 996 - Pari", "coords": [-23.5294248, -46.6140496]},
  {"nome": "Belém", "endereco": "Rua Belarmino Matos, 26 - Belenzinho", "coords": [-23.5348833, -46.5949387]},
  {"nome": "Vila Luisa", "endereco": "Praça Dante Maron, 92 - Guaiúna", "coords": null},
  {"nome": "Água Rasa", "endereco": "Av. Salim Farah Maluf, 1500 - Quarta Parada", "coords": [-23.5653715, -46.5736972]},
  {"nome": "Mendes Caldeira", "endereco": "Rua Monsenhor Andrade, 865 - Brás", "coords": [-23.5398921, -46.6247579]},
  {"nome": "Mooca II", "endereco": "Rua Pantojo, 1147 - Vila Regente Feijó", "coords": [-23.5620646, -46.6110994]},
  {"nome": "Condessa", "endereco": "Av. Condessa Elizabeth de Robiano, 930 - Parque São Jorge", "coords": [-23.5631795, -46.7520225]},
  {"nome": "Ecoponto Têxtil", "endereco": "Rua Cachoeira, 958 - Catumbi (recebe só tecido, 24h)", "coords": null},
  {"nome": "Penha I", "endereco": "Rua Doutor Heládio, 104 - Vila Esperança", "coords": [-23.5313312, -46.5254552]},
  {"nome": "Tiquatira", "endereco": "Rua Amorim Diniz, 415 - Jardim Jaú", "coords": [-23.5139521, -46.5271891]},
  {"nome": "Gamelinha", "endereco": "Rua Morfeu, 25 - Jardim Santo Antônio", "coords": [-23.5401031, -46.5147101]},
  {"nome": "Vila Matilde", "endereco": "Rua Mateus de Siqueira, 375 - Jardim Triana", "coords": [-23.536179, -46.524605]},
  {"nome": "Cangaíba", "endereco": "Rua Luciano Nogueira, 241 - Cangaíba", "coords": [-23.5058996, -46.5314253]},
  {"nome": "Franquinho", "endereco": "Rua Praia de Mucuripe, 685 - Jardim Artur Alvim", "coords": [-23.5441815, -46.4857353]},
  {"nome": "Dalila", "endereco": "Rua Inácio da Costa, 740 - Vila Dalila", "coords": [-23.5463973, -46.5203526]},
  {"nome": "COHAB Artur Alvim", "endereco": "Av. Padre Estanislau de Campos, 56 - P. M. da Nóbrega", "coords": [-23.5476525, -46.4871461]},
  {"nome": "Vila Talarico", "endereco": "Av. Bernardino Brito Fonseca de Carvalho, 1050 - Vila Talarico", "coords": [-23.5469026, -46.5047384]},
  {"nome": "Recanto dos Humildes", "endereco": "Rua Sales Gomes, 415 - Vila Perus", "coords": [-23.4098553, -46.7508255]},
  {"nome": "Jardim Santa Fé", "endereco": "Rua Salvador Albano, 156 - Jardim Santa Fé", "coords": [-23.8311875, -46.7125894]},
  {"nome": "Pinheiros", "endereco": "Praça do Cancioneiro, 15 - Cidade Monções", "coords": [-23.567249, -46.7019515]},
  {"nome": "Vila Madalena", "endereco": "Rua Girassol, 15 - Vila Madalena", "coords": [-23.5464956, -46.6911243]},
  {"nome": "Alto de Pinheiros", "endereco": "Praça Arcipreste Anselmo de Oliveira - Alto de Pinheiros", "coords": [-23.5499064, -46.7076422]},
  {"nome": "Cônego José Salomon", "endereco": "Av. Cônego José Salomon, 861 - Vila Portugal", "coords": [-23.4960473, -46.7176015]},
  {"nome": "Vigário Godói", "endereco": "Rua Vigário Godói, 480 - Vila Zat", "coords": [-23.4794971, -46.7173839]},
  {"nome": "Voith", "endereco": "Av. Atílio Brugnoli, 489 - Parque Nações Unidas", "coords": [-23.441558, -46.7420785]},
  {"nome": "Alexios Jafet", "endereco": "Rua Alexios Jafet, 233 - Jardim Ipanema", "coords": [-23.4390748, -46.7507398]},
  {"nome": "Tucuruvi", "endereco": "Rua Eduardo Vicente Nasser, 519 - Barro Branco (Zona Norte)", "coords": [-23.4796813, -46.6029076]},
  {"nome": "Santana", "endereco": "Av. Zaki Narchi, 375 - Carandiru", "coords": [-23.5110203, -46.6215486]},
  {"nome": "Alceu Maynard de Araújo", "endereco": "Av. Prof. Alceu Maynard de Araújo, 330 - Vila Cruzeiro", "coords": null},
  {"nome": "Vicente Rao", "endereco": "Av. Vicente Rao, 308 - Jardim Petrópolis", "coords": [-23.6336276, -46.6803396]},
  {"nome": "Pedro Bueno", "endereco": "Rua João de Lery, 503 - Parque Jabaquara", "coords": [-23.6333847, -46.6473538]},
  {"nome": "Vitor Manzini", "endereco": "Praça Dom Francisco de Sousa, 635 - Santo Amaro", "coords": [-23.6622762, -46.7066846]},
  {"nome": "Cipoaba", "endereco": "Rua Padre Luis de Siqueira, 947 - Jardim Rodolfo Pirani", "coords": null},
  {"nome": "Iguatemi", "endereco": "Rua Francisco de Melo Palheta, 1548 - Parque Boa Esperança", "coords": [-23.6181809, -46.418994]},
  {"nome": "Montalvania", "endereco": "Rua Montalvania, 195 - Jardim São Cristóvão", "coords": [-23.5792915, -46.4961705]},
  {"nome": "Lima Bonfante", "endereco": "Rua Capitão-mor Lázaro da Costa, 251 - Jardim São Francisco", "coords": [-23.6279027, -46.4463685]},
  {"nome": "Imperador", "endereco": "Av. Ribeirão Jacu, 201 - Jardim das Camélias", "coords": [-24.0448001, -46.5447371]},
  {"nome": "Carlito Maia", "endereco": "Rua Domingos Fernandes Nobre, 109 - Vila Itaim", "coords": [-23.4901586, -46.3934796]},
  {"nome": "Pedro Nunes", "endereco": "Rua da Polka, 100 - Pedro José Nunes", "coords": [-23.5015079, -46.465787]},
  {"nome": "Itaqueruna", "endereco": "Rua Domitila d'Abril, 88 - Cidade Nova São Miguel", "coords": null},
  {"nome": "Varre Vila", "endereco": "Rua Primeiro de Maio, 106 - União de Vila Nova", "coords": null},
  {"nome": "Vitória Popular", "endereco": "Rua El Rey, 508 - Jardim São Carlos", "coords": null},
  {"nome": "Jardim Helena", "endereco": "Rua Cosme dos Santos, 110 - Jardim Helena", "coords": [-23.479635, -46.4196826]},
  {"nome": "Jardim Romano", "endereco": "Rua Duarte Martins Mourão, 400 - Jardim Santa Margarida", "coords": [-23.4850264, -46.3857398]},
  {"nome": "Jardim Lapena", "endereco": "Rua Rafael Zimbard, 78 - Jardim Nair", "coords": null},
  {"nome": "Sapopemba", "endereco": "Rua Francesco Usper, 550 - Teotônio Vilela", "coords": [-23.6055115, -46.496937]},
  {"nome": "Vila Cardoso Franco", "endereco": "Rua dos Vorás, 25 - Sítio Oratório", "coords": [-23.6250707, -46.5061704]},
  {"nome": "Reynaldo José", "endereco": "Rua Silvestro Silvestre, 400 - Jardim Ângela (Zona Leste)", "coords": [-23.1540355, -47.0067424]},
  {"nome": "Joaquim Catuna", "endereco": "Rua Luca Conforti, 210 - Fazenda da Juta", "coords": null},
  {"nome": "Glicério", "endereco": "Praça Ministro Francisco Sá Carneiro, 6 - Liberdade", "coords": [-23.5530554, -46.6290085]},
  {"nome": "Liberdade", "endereco": "Rua Jaceguai, 67 - Bela Vista", "coords": [-23.5665942, -46.6318601]},
  {"nome": "Armênia", "endereco": "Rua General Carmona, 156 - Luz", "coords": [-23.5254103, -46.629259]},
  {"nome": "Barra Funda", "endereco": "Rua Cônego Vicente Miguel Marino, 76 - Barra Funda", "coords": [-23.5254616, -46.6675134]},
  {"nome": "Cambuci", "endereco": "Av. Dom Pedro I, 38 - Vila Monumento", "coords": [-23.5659114, -46.6136795]},
  {"nome": "Bela Vista", "endereco": "Rua Quatorze de Julho, 59 - Bela Vista", "coords": [-23.5601219, -46.6500338]},
  {"nome": "Vila Guilherme", "endereco": "Rua José Bernardo Pinto, 1480 - Vila Guilherme", "coords": [-23.5170972, -46.6079618]},
  {"nome": "Vila Sabrina", "endereco": "Av. do Poeta, 931 - Jardim Julieta", "coords": [-23.4912022, -46.5766581]},
  {"nome": "Vila Maria", "endereco": "Rua Curuçá, 1700 - Jardim Andaraí", "coords": [-23.5131836, -46.5891557]},
  {"nome": "Mirandópolis", "endereco": "Av. Senador Casemiro da Rocha, 1220 - Mirandópolis", "coords": [-23.608307, -46.6424478]},
  {"nome": "Vila Mariana", "endereco": "Rua Mauricio Francisco Klabin, 37 - Vila Mariana", "coords": [-23.5837, -46.6327408]},
  {"nome": "Saioa", "endereco": "Rua Mary Baida Salem, 1 - Vila Firmiano Pinto", "coords": [-23.5977922, -46.6170315]},
  {"nome": "Rubem Berta", "endereco": "Av. Rubem Berta, 1100 - Indianópolis", "coords": [-23.606932, -46.6523197]},
  {"nome": "Anhaia Mello", "endereco": "Rua da Prece, 296 - Vila Prudente", "coords": [-23.5831053, -46.5746096]},
  {"nome": "São Lucas", "endereco": "Rua Florêncio Sanches, 307 - Res. Oratório", "coords": [-23.5889614, -46.5446163]},
  {"nome": "Vila Industrial", "endereco": "Rua Lisa Ansorge, 645 - Jardim Guairacá", "coords": [-23.5207053, -46.2025841]}
];

let CENTRO_SP = [-23.5505, -46.6333];

const CHAVE_FAVORITOS = 'descartes:favoritos';
const MSG_FALHA_FAVORITOS = 'Não foi possível atualizar os favoritos neste navegador.';

function criarElemento(tag, classe, texto) {
  let elemento = document.createElement(tag);

  if (classe) elemento.className = classe;
  if (texto) elemento.textContent = texto;

  return elemento;
}

function criarBotao(classe, texto, aoClicar) {
  let botao = criarElemento('button', classe, texto);
  botao.type = 'button';
  botao.addEventListener('click', aoClicar);
  return botao;
}

function criarAcoes(...botoes) {
  let acoes = criarElemento('div', 'acoes');
  acoes.append(...botoes);
  return acoes;
}

function mostrarMensagem(texto) {
  let mensagem = document.getElementById('mensagem');
  if (mensagem) mensagem.innerText = texto;
}

function mostrarPontos(tipo) {
  let lista = document.getElementById('pontos-' + tipo);
  if (!lista) return;

  let visivel = lista.style.display === 'block';
  lista.style.display = visivel ? 'none' : 'block';

  mostrarMensagem('Pontos de coleta de ' + tipo);
}

function combinarComTermo(item, termo) {
  return (item.nome + ' ' + item.endereco).toLowerCase().includes(termo);
}

function termoBusca() {
  let campo = document.getElementById('busca');
  return campo ? campo.value.trim().toLowerCase() : '';
}

function contarCorrespondentes(termo) {
  return ENDERECOS.reduce((total, item) => total + (combinarComTermo(item, termo) ? 1 : 0), 0);
}

function atualizarContagem(termo) {
  let contagem = document.getElementById('contagem');
  if (!contagem) return;

  contagem.textContent = 'Mostrando ' + contarCorrespondentes(termo) + ' de ' + ENDERECOS.length + ' ecopontos';
}

function renderizarLista(itens) {
  let lista = document.getElementById('lista-enderecos');
  if (!lista) return;

  lista.replaceChildren(...itens.map(criarCardEndereco));

  if (!itens.length)
    lista.appendChild(criarElemento('p', 'vazio', 'Nenhum ecoponto encontrado para essa busca.'));
}

function construirLista() {
  renderizarLista(ENDERECOS);
  atualizarContagem('');
}

function filtrarEnderecos() {
  let termo = termoBusca();
  renderizarLista(ENDERECOS.filter((item) => combinarComTermo(item, termo)));
  atualizarContagem(termo);
}

function irParaMapa(nome) {
  window.location.href = 'descartes.html?ecoponto=' + encodeURIComponent(nome);
}

function criarCardEndereco(item) {
  let artigo = criarElemento('article', 'endereco');

  artigo.append(
    criarElemento('h3', '', item.nome),
    criarElemento('p', '', item.endereco),
    criarAcoes(
      criarBotao('ver-mapa', 'Ver no mapa', () => irParaMapa(item.nome)),
      criarBotaoFavorito(item)
    )
  );

  return artigo;
}

function carregarFavoritos() {
  try {
    let dados = JSON.parse(localStorage.getItem(CHAVE_FAVORITOS));
    return Array.isArray(dados) ? dados : [];
  } catch (erro) {
    return [];
  }
}

function salvarFavoritos(favoritos) {
  try {
    localStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(favoritos));
    return true;
  } catch (erro) {
    return false;
  }
}

function ehFavorito(nome) {
  return carregarFavoritos().some((favorito) => favorito.nome === nome);
}

function alternarFavorito(item) {
  let favoritos = carregarFavoritos();
  let indice = favoritos.findIndex((favorito) => favorito.nome === item.nome);
  let favoritou = indice === -1;

  if (favoritou)
    favoritos.push({ nome: item.nome, endereco: item.endereco, coords: item.coords });
  else
    favoritos.splice(indice, 1);

  return { salvou: salvarFavoritos(favoritos), favoritou };
}

function removerFavorito(nome) {
  return salvarFavoritos(carregarFavoritos().filter((favorito) => favorito.nome !== nome));
}

function limparFavoritos() {
  return salvarFavoritos([]);
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

function rotuloFavorito(favoritado) {
  return favoritado ? 'Remover dos favoritos' : 'Adicionar aos favoritos';
}

function atualizarBotaoFavorito(botao, favoritado) {
  botao.classList.toggle('ativo', favoritado);
  botao.textContent = favoritado ? '★' : '☆';
  botao.title = rotuloFavorito(favoritado);
  botao.setAttribute('aria-label', rotuloFavorito(favoritado));
  botao.setAttribute('aria-pressed', favoritado);
}

function criarBotaoFavorito(item) {
  let botao = criarElemento('button', 'favorito', '☆');
  botao.type = 'button';
  atualizarBotaoFavorito(botao, ehFavorito(item.nome));
  botao.addEventListener('click', () => alternarFavoritoNaLista(item, botao));
  return botao;
}

function alternarFavoritoNaLista(item, botao) {
  let { salvou, favoritou } = alternarFavorito(item);

  if (!salvou) {
    mostrarMensagem(MSG_FALHA_FAVORITOS);
    return;
  }

  atualizarBotaoFavorito(botao, favoritou);
  mostrarMensagem((favoritou ? 'Adicionado aos favoritos: ' : 'Removido dos favoritos: ') + item.nome);
}

function criarCardFavorito(favorito) {
  let artigo = criarElemento('article', 'endereco');
  let semMapa = !favorito.coords;

  let botaoMapa = criarBotao('ver-mapa', 'Ver no mapa', () => irParaMapa(favorito.nome));
  botaoMapa.disabled = semMapa;
  if (semMapa) botaoMapa.title = 'Este ponto não tem coordenadas cadastradas.';

  let botaoRemover = criarBotao('remover', 'Remover', () => removerFavoritoDaLista(favorito));

  artigo.append(criarElemento('h3', '', favorito.nome), criarElemento('p', '', favorito.endereco));

  if (semMapa) artigo.appendChild(criarElemento('p', 'aviso-coords', 'Sem coordenadas disponíveis no mapa.'));

  artigo.appendChild(criarAcoes(botaoMapa, botaoRemover));

  return artigo;
}

function removerFavoritoDaLista(favorito) {
  if (!removerFavorito(favorito.nome)) {
    mostrarMensagem(MSG_FALHA_FAVORITOS);
    return;
  }

  mostrarMensagem('Removido dos favoritos: ' + favorito.nome);
  listarFavoritos();
}

function atualizarContagemFavoritos(favoritos) {
  let contagem = document.getElementById('contagem-favoritos');
  if (!contagem) return;

  if (!favoritos.length) {
    contagem.textContent = 'Nenhum favorito salvo ainda.';
    return;
  }

  let { comMapa } = resumirFavoritos(favoritos);
  let total = favoritos.length + (favoritos.length === 1 ? ' favorito salvo' : ' favoritos salvos');
  contagem.textContent = total + ' · ' + comMapa + ' com ponto no mapa';
}

function listarFavoritos() {
  let lista = document.getElementById('lista-favoritos');
  if (!lista) return;

  let favoritos = carregarFavoritos();

  lista.replaceChildren(...favoritos.map(criarCardFavorito));

  if (!favoritos.length)
    lista.appendChild(criarElemento('p', 'vazio', 'Você ainda não favoritou nenhum ecoponto. Na busca de endereços, toque em ☆ para salvar um endereço.'));

  atualizarContagemFavoritos(favoritos);

  let botaoLimpar = document.getElementById('limpar-favoritos');
  if (botaoLimpar) botaoLimpar.hidden = favoritos.length === 0;
}

function iniciarFavoritos() {
  let botaoLimpar = document.getElementById('limpar-favoritos');
  if (!botaoLimpar) return;

  botaoLimpar.addEventListener('click', limparListaDeFavoritos);
}

function limparListaDeFavoritos() {
  if (!window.confirm('Remover todos os favoritos salvos neste navegador?')) return;
  if (!limparFavoritos()) {
    mostrarMensagem(MSG_FALHA_FAVORITOS);
    return;
  }

  mostrarMensagem('Todos os favoritos foram removidos.');
  listarFavoritos();
}

function iniciarMapa() {
  let container = document.getElementById('mapa');
  if (!container || typeof L === 'undefined') return;

  let mapa = L.map('mapa').setView(CENTRO_SP, 12);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(mapa);

  let nome = new URLSearchParams(window.location.search).get('ecoponto');
  if (nome) return colocarPin(mapa, nome);
  if (!navigator.geolocation) return;

  centralizarNaMinhaPosicao(mapa);
}

function centralizarNaMinhaPosicao(mapa) {
  navigator.geolocation.getCurrentPosition(function (pos) {
    let minhaPosicao = [pos.coords.latitude, pos.coords.longitude];
    mapa.setView(minhaPosicao, 14);
    L.marker(minhaPosicao).addTo(mapa).bindPopup('Você está aqui').openPopup();
  }, function () {});
}

function colocarPin(mapa, nome) {
  let item = ENDERECOS.find(function (e) {
    return e.nome.toLowerCase() === nome.toLowerCase();
  });

  if (!item || !item.coords) {
    mostrarMensagem('Ponto sem coordenadas disponíveis: ' + nome);
    return;
  }

  mapa.setView(item.coords, 16);
  L.marker(item.coords).addTo(mapa)
    .bindPopup('<strong>' + item.nome + '</strong><br>' + item.endereco)
    .openPopup();

  mostrarMensagem('Ponto exibido no mapa: ' + item.nome);
}

document.addEventListener('DOMContentLoaded', () => {
  construirLista();
  listarFavoritos();
  iniciarFavoritos();
  iniciarMapa();
});
