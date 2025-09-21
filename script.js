// Elenco statico dei file HTML presenti nella cartella "pages"
const files = [
  { name: 'Hallowen 1', file: 'pages/Hallowen 1.html' },
  { name: 'Hallowen 2', file: 'pages/Hallowen 2.html' },
  { name: 'School Subjects 1', file: 'pages/materie 1.html' }
  { name: 'Animals 1', file: 'pages/inglese1.html' }
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



