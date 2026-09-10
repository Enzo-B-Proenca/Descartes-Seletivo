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