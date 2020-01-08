var listaNomi = ['carlo', 'fabio', 'alessio', 'agamennone', 'Fulvio', 'Carlo', 'patroclo', 'luigia', 'fulvio', 'marco', 'giorgia'];
var nomeUtente = prompt('Come ti chiami?');
listaNomi.push(nomeUtente);
var posizioneUtente;
for (var i = 0; i < listaNomi.length; i++) {
  listaNomi[i] = listaNomi[i].toLowerCase();
}
listaNomi.sort();
posizioneUtente = listaNomi.indexOf(nomeUtente);
for (i = 0; i < listaNomi.length; i++) {
document.getElementById('lista').innerHTML += '<li>' + listaNomi[i] + '</li>';
}
document.getElementById('lista').style.listStyle = 'none';
document.getElementById('posizione').innerHTML = 'Sei il numero ' + ++posizioneUtente + ' della lista';
console.log(listaNomi);
console.log('Sei il numero ' + ++posizioneUtente + ' della lista');
