





/*
* Chiedo i chilometri da percorrere come stringa "kmString"; nel caso il format numerico 
* sia "xx,xx", anziché "xx.xx" come di default, lo converto in "xx.xx"; converto la stringa 
* "kmString", con la "," convertita in ".", in un numero ("kmNumber"); conservo i chilometri
* come const e la stampo nel tag con id "chilometri".
*/
//const kmString = prompt("Quanti chilometri vorresti percorrere?");
//const kmNumber = kmString.replace(/,/g, ".");
//const km = parseFloat(kmNumber);
//document.getElementById("chilometri").innerHTML = `${km.toFixed(2)}` + " " +  "km";

/* Chiedo l'età ("age") come numero grazie a "parseInt" e la stampo in tag con id "age" */ 
//const age = parseInt(prompt("Quanti anni hai?"));
//document.getElementById("age").innerHTML = `${age}` + " " + "anni";

/* Imposto il calcolo del prezzo originale, ossia "km" * 0.21 (ossia €/km) */
//const price = km * 0.21;
//document.getElementById("prezzo-originale").innerHTML = `${price.toFixed(2)}` + "€";

/* 
* Imposto il blocco condizionale dove controllo prima se l'utente è minore,
* se non lo è controllo se è over 65 e se non soddisfa nemmeno questa condizione
* allora ricade nell'intervallo 18 < x < 64.
*/
//if (age < 18){
    //Se l'utente è minore conservo lo sconto di 20 (che userò dopo come percentuale)
    const discountPercent = 20;
    //Calcolo lo sconto nominale dividendo il prezzo / 100 e moltiplicandolo per la percentuale di sconto
    const discount = ((price / 100) * discountPercent);
    //Trovo il prezzo scontato facendo prezzo - sconto nominale
    const discountedPrice = (price - discount);
    //Stampo in console il risultato per validarlo manualmente
    console.log(
        `
        Il cliente percorrerà ${km}km, ha ${age} anni, pertanto riceverà uno sconto del ${discountPercent}% arrivando a pagare ${discountedPrice}€ sui ${price}€ inizialmente dovuti.
        `
    )
    //Sostitusco il contenuto dei tag con id "sconto" e "prezzo-finale" con i valori trovati sopra
    document.getElementById("sconto").innerHTML = `${discount.toFixed(2)}` + "€";
    document.getElementById("prezzo-finale").innerHTML = `${discountedPrice.toFixed(2)}` + "€";
}
//else if (age > 64){
    //Se l'utente è over65 conservo lo sconto di 40 (che userò dopo come percentuale)
    const discountPercent = 40;
    //Calcolo lo sconto nominale dividendo il prezzo / 100 e moltiplicandolo per la percentuale di sconto
    const discount = ((price / 100) * discountPercent);
    //Trovo il prezzo scontato facendo prezzo - sconto nominale
    const discountedPrice = (price - discount);
    //Stampo in console il risultato per validarlo manualmente
    console.log(
        `
        Il cliente percorrerà ${km}km, ha ${age} anni, pertanto riceverà uno sconto del ${discountPercent}% arrivando a pagare ${discountedPrice}€ sui ${price}€ inizialmente dovuti.
        `
    )
    //Sostitusco il contenuto dei tag con id "sconto" e "prezzo-finale" con i valori trovati sopra
    document.getElementById("sconto").innerHTML = `${discount.toFixed(2)}` + "€";
    document.getElementById("prezzo-finale").innerHTML = `${discountedPrice.toFixed(2)}` + "€";
}
//else{
    //Se l'utente ha un'età compresa tra 18 e 64 applico lo sconto 0
    const discountPercent = 0;
    //Calcolo lo sconto nominale dividendo il prezzo / 100 e moltiplicandolo per la percentuale di sconto
    const discount = ((price / 100) * discountPercent);
    //Trovo il prezzo scontato facendo prezzo - sconto nominale
    const discountedPrice = (price - discount);
    //Stampo in console il risultato per validarlo manualmente
    console.log(
        `
        Il cliente percorrerà ${km}km, ha ${age} anni, pertanto riceverà uno sconto del ${discountPercent}% arrivando a pagare ${discountedPrice}€ sui ${price}€ inizialmente dovuti.
        `
    )
    //Sostitusco il contenuto dei tag con id "sconto" e "prezzo-finale" con i valori trovati sopra
    document.getElementById("sconto").innerHTML = `${discount.toFixed(2)}` + "€";
    document.getElementById("prezzo-finale").innerHTML = `${discountedPrice.toFixed(2)}` + "€";
}
