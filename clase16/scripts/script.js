"use strict";

let bloque1 = document.querySelector(".bloque1");
let bloque2 = document.querySelector(".bloque2");

bloque1.style.visibility = "visible";
bloque2.style.visibility = "hidden";

function botonVer() {
  if (bloque1.style.visibility === "hidden") {
    bloque1.style.visibility = "visible";
    bloque2.style.visibility = "hidden";
  } else {
    bloque1.style.visibility = "hidden";
    bloque2.style.visibility = "visible";
  }
}
let btn = bloque1.querySelector("button");
btn.addEventListener("click", botonVer);

let btn2 = bloque2.querySelector("button");
btn2.addEventListener("click", botonVer);
