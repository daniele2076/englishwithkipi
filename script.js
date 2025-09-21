// Carica dinamicamente i file HTML dalla cartella "pages"
fetch('pages/')
  .then(response => response.text())
  .then(text => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    const linksContainer = document.getElementById('linkList');
    linksContainer.innerHTML = '';

    // Estrai i nomi dei file HTML dalla directory (richiede supporto server)
    const files = text.match(/href="([^"]+\.html)"/g);
    if (files) {
      files.forEach(file => {
        const filename = file.match(/"([^"]+\.html)"/)[1];
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = filename.replace('.html', '');
        link.onclick = () => {
          document.getElementById('contentFrame').src = 'pages/' + filename;
        };
        linksContainer.appendChild(link);
      });
    } else {
      linksContainer.textContent = 'Nessun file trovato.';
    }
  })
  .catch(err => {
    document.getElementById('linkList').textContent = 'Errore nel caricamento.';
    console.error(err);
  });
