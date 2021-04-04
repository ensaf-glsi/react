import { MemoryGame } from "./MemoryGame.js";

let game1 = document.getElementById("memoire1");
let game2 = document.getElementById("memoire2");
game1.append(new MemoryGame(6).element);
game2.append(new MemoryGame(4).element);
// game1.append(new Card(1, WINNED).element);
// game1.append(new Card(2, VISIBLE).element);
// game1.append(new Card(3).element);

// let card = document.createElement("span");
// card.append("span text");
// // game1.innerHTML = "chaine ...";
// game1.append("chaineeeee ..", card);

// game1.appendChild("chaine de caractere");

// function Card(prop1) {
//     this.prop1 = prop1;
// }

// Card.prototype.

// let x = 15;

// x = 10;

// const PI = 3.14;

// // PI = 10;

// console.log("a l interieur de la fonction ", x);

// (function ($) {
//   var x = 15;
//   if (x < 10) {
//     var a = 2;
//   } else {
//     var b = 10;
//   }
//   console.log("a l interieur de la fonction ", a, b);
// })();

// function test() {
//   // var, let, const
//   // var a, b, x;
//   var x = 15;
//   if (x < 10) {
//     var a = 2;
//   } else {
//     var b = 10;
//   }
//   console.log("a l interieur de la fonction ", a, b);
// }
// test();

// console.log(a, b);

// const arr = [1, 2, 4];
// // const a = arr[0];
// // const b = arr[1];
// // const d = arr[3];
// const [a, b, , d] = arr;

// console.log(a, b, d);

// const attr = {
//   src: "1.jpg",
//   class: "card-img",
//   alt: "image ...",
// };

// function sum(...args) {
//     console.log(args);
//   }

//   sum();
//   sum(1);
//   sum(23, 23, 4, 345, 534, 4);

let a = 12;
let b = 15;

const sum = function () {};

const obj = { a, b: b, c: 100, sum, toString() {} };
