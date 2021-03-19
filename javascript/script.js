// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo a schermo in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

var biglietto = parseInt (prompt('Chilometri da percorrere') );
console.log(biglietto);
console.log( typeof(biglietto) );

var costoBiglietto = 0.21;

var sommaChilometri = 10;
var chilometriFuturi = sommaChilometri * costoBiglietto;
console.log(chilometriFuturi);