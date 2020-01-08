var listaNomi = ['carlo', 'fabio', 'alessio', 'agamennone', 'Fulvio', 'Carlo', 'patroclo', 'luigia', 'fulvio', 'marco', 'giorgia'];
var nomeUtente = prompt('Come ti chiami?');
listaNomi.push(nomeUtente);
for (var i = 0; i < listaNomi.length; i++) {
  listaNomi[i] = listaNomi[i].toLowerCase();
}
listaNomi.sort();
console.log(listaNomi);
