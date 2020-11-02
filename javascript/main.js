/* funzione per caricare javascript dopo l'html e il CSS */
$(document).ready(function(){

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




})