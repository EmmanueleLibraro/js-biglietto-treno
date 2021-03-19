// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo a schermo in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


//COSTO BIGLIETTO SENZA SCONTO
var costoBigliettoPerKm = 0.21;
var kmDaPercorrere = parseInt (prompt('Chilometri da percorrere') );

var costoTotaleSenzaSconto = kmDaPercorrere * costoBigliettoPerKm;


//MINORENNI
var age1 = prompt("Qual'è la tua età?");

//SCONTO BIGLIETTO MINORENNE
var sconto = null;

if (age1 < 18 ){
    sconto = 20;
}

if (age1 > 65 ){
    sconto = 40;
}

if (sconto === null){
    console.log("Costo senza sconti:", costoTotaleSenzaSconto.toFixed(2) );
} else{
    var costoFinaleSconto1 = costoTotaleSenzaSconto - ( costoTotaleSenzaSconto / 100 * sconto);
    console.log('Costo con sconto:',  costoFinaleSconto1.toFixed(2) );
}







