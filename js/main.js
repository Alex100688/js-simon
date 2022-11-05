"use strict";
//FUNCTION//

//Function per generare numeri random//
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  //Function per rendere dopo 30 secondi la mia lista di numeri invisibile.
function game() {
  numbers.classList.add("gioco");
}
//Function per far apparire dopo 30 secondi un prompt()//
function askNumber() {
  const askNumber=Number(prompt("Inserisci cinque numeri"))
}

  //MAIN//
  //creo un ciclo while facendo in modo di non creare numeri doppi nel mio ciclo e appendo la mia lista al div con la classe numbers .//
  const numbers=document.getElementById("numbers");
  const numberCell=100;
  const listNumber=[];
  while (listNumber.length < 5) {
    const numberRandom=getRndInteger(1, numberCell);
    if (listNumber.includes(numberRandom)===false) {
      listNumber.push(numberRandom);  
    }
  };
  numbers.append(listNumber);
  //creo un setTimeout per far partire la funzione game dopo 30(s)//
  setTimeout(game, 30000);
  //creo un setiTimeout per far partire la funzione askNumber sunito dop la funzione game.//
    setTimeout(askNumber, 31000);
   