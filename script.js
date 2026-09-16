function mostrarPontos(tipo) {
      var lista = document.getElementById('pontos-' + tipo);

      if (lista.style.display === 'block') {
        lista.style.display = 'none';
      } else {
        lista.style.display = 'block';
      }

      var texto = document.getElementById('mensagem');
      texto.innerText = 'Pontos de coleta de ' + tipo;
    }

function filtrarEnderecos() {
  var termo = document.getElementById('busca').value.toLowerCase();
  var enderecos = document.getElementsByClassName('endereco');

  for (var i = 0; i < enderecos.length; i++) {
    var texto = enderecos[i].innerText.toLowerCase();

    if (texto.indexOf(termo) !== -1) {
      enderecos[i].style.display = 'block';
    } else {
      enderecos[i].style.display = 'none';
    }
  }
}

    