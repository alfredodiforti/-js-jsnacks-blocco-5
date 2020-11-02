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