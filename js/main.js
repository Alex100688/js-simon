"use strict";
//FUNCTION//

//Function per generare numeri random//
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
function game() {
  numbers.classList.add("gioco");
}

  //MAIN//
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
   setTimeout(game, 30000);
 