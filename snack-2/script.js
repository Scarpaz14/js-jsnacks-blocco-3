// l utente inserisce un numero
const n = Number(prompt('Inserisci un numero'))

// generiamo tot array in base al numero inserito dall'utente

let arrayList= [];

for( let i = 0; i < 10; i++ ) {
    arrayList.push(Math.floor(Math.random() * 100) + 1);
}

for( let arrayTwo= 0; arrayTwo < n; arrayTwo++){
    console.log(arrayList);
}





