"use strict";
//FUNCTION//

//Function per generare numeri random//
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }