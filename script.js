"use strict";
window.addEventListener("DOMContentLoaded", start);

const myArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function getNumerOfCustomers() {
  return Math.floor(Math.random() * 32);
}

function start() {
  const queueSize = getNumerOfCustomers();

  if (myArray.length > 20) {
    myArray.push(queueSize);
  } else {
    myArray.shift();
    myArray.push(queueSize);
  }

  console.log(queueSize);
  console.log(myArray);
  setHeights();
}

function setHeights() {
  //find the first bar
  for (let i = 0; i < myArray.length; i++) {
    let bar;
    bar = document.querySelector(`#container > div:nth-child( ${i + 1})`);

    // set the height of that bar
    bar.style.setProperty("--height", myArray[i]);
  }

  setTimeout(start, 300);
}

/// det andet
//document.querySelectorAll(".bar").forEach((bar,i)==>{
//bar.style.setProperty(--"height", myArray[i]);
//})
