// creo una array di numeri 
const list = [1,2,4,5,6,7,8,9,10,11,12]

// assegno a delle variabili il proprio id dell html 
const divRed = document.getElementById("red");
const divGreen = document.getElementById("green");

// verifico se per ogni numero appartente alla lista otteniamo modulo==0 
// se risualto vero stampo i numeri pari nel div verde
// se risualto falso stampo i numeri dispari nel div rosso
for( i=0; i<list.length; i++){
    if(list[i] % 2 === 0){
       divGreen.innerText += list[i];
    } else{
        divRed.innerText += list[i];
    }
}

// cambiamo colore del testo 
divRed.style.color = "red";
divGreen.style.color = "green"; 