// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo a schermo in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


//COSTO BIGLIETTO SENZA SCONTO
var costoBigliettoPerKm = 0.21;
var kmDaPercorrere = parseInt (prompt('Chilometri da percorrere') );

var costoTotaleSenzaSconto = kmDaPercorrere * costoBigliettoPerKm;
console.log("Costo senza sconti:", costoTotaleSenzaSconto);

//MINORENNI
var age1 = prompt("Qual'è la tua età?");

//SCONTO BIGLIETTO
var b = 20;
var costoFinale = costoTotaleSenzaSconto - ( costoTotaleSenzaSconto / 100 * b);
var periodico = costoFinale.toFixed(2);
console.log('Costo con sconto:',  costoFinale);

