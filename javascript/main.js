$(document).ready(function(){
//Partendo da un array di nomi (scelti da voi) creiamo un nuovo array.
var arraynomi = [ 'luigi', 'andrea','luca','antonio','gabriele'];

var nuovalista = [];

//Chiedere due numeri all'utente per definire la posizione iniziale e finale dal quale estrarre i valori dall'array originale.
//Il nuovo array deve contenere gli elementi dell'array originale aventi la posizione (indice array) compresa tra i due numeri inseriti dall'utente.

var min = parseInt(prompt('inserisci l\'indice minimo'));
var max = parseInt(prompt('inserisci\'indice massimo'));

for (var i = 0; i < arraynomi.length; i++ ) {
    if (min <= i && i  >= max ) {
        nuovalista.push(arraynomi[i]);
    } 
}
console.log(nuovalista);

















});