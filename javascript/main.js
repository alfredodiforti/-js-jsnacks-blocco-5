$(document).ready(function(){

var primoarray = [
    { name: 'Tom Ford', type: 'occhiali', color:'black'},
    { name: 'tommy', type: 't-shirt', color:'blue'},
    { name: 'puma', type: 'pantaloni', color:'green'},
    { name: 'nike', type: 'scarpe', color:'red'},
    { name: 'bucalo', type: 'suite', color:'grey'},
    { name: 'omega', type: 'watch', color:'allumimium'}, 
]; 

var newarray = [];

for (var i = 0; i < primoarray.length; i++) {
    var oggetto = {name: primoarray[i].name,
                   type: primoarray[i].type, 
                   color:primoarray[i].color,
                   position: generateletters(),
                }
                newarray.push(oggetto);
}
console.log(newarray);

function generateletters() {
    var letters = 'qwertyuioplkjhgfdsazxcvbnm';
    var letter = letters[random(0, letters.length - 1)]
    return letter;
}



function random(min, max) {
    return Math.floor(Math.random()* (max - min + 1)) + min;
}

})










// ESERCIZIO 2



/*
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
*/









//ESERCIZIO 1


/* funzione per caricare javascript dopo l'html e il CSS */
/*$(document).ready(function(){

    //Creare un array di oggetti
    //Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
    var catalogo = [
        {
            nome: 'Bianchi',
            peso: 6.7,
        },
        {
            nome: 'Coppi',
            peso: 6.8,
        },
        {
            nome: 'Lombardo',
            peso: 7.1,
        },
    ];
    // HANDBLEBARS
    // creo una variabile che fa riferimento al template da utilizzare
    var stargate = $('#biciclette-template').html();
    // riporto la funzione di hanblebars che mi aiuta a compilare e le attribuisco una var
    var template = Handlebars.compile(stargate);
    
    //valore di dafault
    var bicileggera = catalogo[0];
    //iterazione e  verifica
    for (var i = 1 ; i < catalogo.length ; i++) {
        if(bicileggera.peso > catalogo[i]) {
            catalogo[i] = bicileggera; 
        }
    }
    // console log bici più leggera
    console.log(bicileggera);
    
    
    // STAMPARE A SCHERMO I RISULTATI
    //preparazione placeholder
    var dati = {
        nome: bicileggera.nome,
        peso: bicileggera.peso,
    };
    
    var html = template(dati); 
    $('.container').append(html);  
    
    /* funzionamento di Handlblebars:
    1) creo una var che fa riferimento al template da utilizzare
    2)importo da handlebars il .compile al quale faccio compilare la mia variabile
    3) creo un oggetto al quale attribuisco le chiavi che voglio compilare 
    4)creo una variabile html che innestera i dati nel template
    5)mando la mia nuova variabile HTML con append nel container prescelto
    */
    
    
    
    
  
    









