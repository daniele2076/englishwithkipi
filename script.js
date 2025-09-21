// Elenco statico dei file HTML presenti nella cartella "pages"
const files = [
  { name: 'Hallowen 1', file: 'hallowen1.html' },
  { name: 'Hallowen 2', file: 'hallowne2.html' },
  { name: 'Scienza', file: 'scienza.html' }
];

// Riferimenti agli elementi HTML
const linkList = document.getElementById('linkList');
const frame = document.getElementById('contentFrame');

// Genera i link nella sidebar
files.forEach(item => {
  const link = document.createElement('a');
  link.textContent = item.name;
  link.href = '#';
  link.onclick = () => {
    frame.src = 'pages/' + item.file;
  };
  linkList.appendChild(link);
});
