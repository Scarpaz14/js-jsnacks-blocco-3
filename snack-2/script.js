// l utente inserisce un numero
const N = Number(prompt('Inserisci un numero'))

// generiamo tot array in base al numero inserito dall'utente

let arrayList= [];


for( let i = 0; i < 10; i++ ) {
    arrayList.push(Math.floor(Math.random() * 100) + 1);
}

console.log(arrayList);