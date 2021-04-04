const HIDDEN = 1;
const VISIBLE = 2;
const WINNER = 3;

class MemoryGame {
  constructor(level) {
    this.level = level;
    this.cards = [];
    this.game = {
      current: null,
      count: 0,
    };
    for (let i = 0; i < level; i++) {
      const o1 = Math.floor(Math.random() * this.level * 2);
      const o2 = Math.floor(Math.random() * this.level * 2);
      const c1 = new Card(i, this.game);
      c1.element.style.order = o1;
      this.cards.push(c1);
      const c2 = new Card(i, this.game);
      c2.element.style.order = o2;
      this.cards.push(c2);
    }
    const elements = this.cards.map((card) => card.element);
    this.element = DomBuilder.createElement(
      "div",
      {
        class: "row row-cols-4 g-3",
      },
      ...elements
    );

    // this.cards.forEach((card) => {
    //   this.element.append(card.element);
    // });
  }
}

class Card {
  constructor(imageId, game, state = HIDDEN) {
    this.imageId = imageId;
    this.game = game;

    this.image = DomBuilder.createElement("img", {
      class: "card-img",
    });
    this.state = state;
    // this.card = document.createElement("div");
    // this.card.className = "card";
    this.card = DomBuilder.createElement("div", { class: "card" }, this.image);
    this.element = DomBuilder.createElement("div", { class: "col" }, this.card);

    this.click = this.handleClick.bind(this);
    this.element.addEventListener("click", this.click);
    // this.element = document.createElement("div");
    // this.element.className = "col";
    // this.element.append(this.card);
    /* 
    <div class="col">
        <div class="card">
            <img src="..." class="card-img">
        </div>
    </div> 
    */
  }
  set state(value) {
    console.log("appel stter ", value);
    this._state = value;

    this.image.src = `images/${this.getImageSrc()}.jpg`;
  }
  get state() {
    console.log("appel getter ");
    return this._state;
  }
  getImageSrc() {
    switch (this.state) {
      case WINNER:
        return "winned";
      case VISIBLE:
        return this.imageId;
      default:
        return "hidden";
    }
  }

  markAsWinned() {
    setTimeout(() => {
      this.state = WINNER;
      this.game.count--;
    }, 300);
    this.element.removeEventListener("click", this.click);
  }
  hide() {
    setTimeout(() => {
      this.state = HIDDEN;
      this.game.count--;
    }, 1000);
  }
  show() {
    this.state = VISIBLE;
    this.game.count++;
  }

  handleClick() {
    console.log(this);
    const { game, imageId } = this;
    if (game.count < 2) {
      if (this.state === HIDDEN) {
        this.show();
      }
      // this.state === HIDDEN && this.show();
      // aucun element n est visible
      if (game.current === null) {
        game.current = this;
        game.count = 1;
      } else {
        game.count = 2;
        if (game.current.imageId === imageId) {
          this.markAsWinned();
          game.current.markAsWinned();
        } else {
          this.hide();
          game.current.hide();
        }
        game.current = null;
      }
    }
  }
}

class DomBuilder {
  static createElement(tagName, attributes = {}, ...children) {
    const element = document.createElement(tagName);

    Object.entries(attributes).forEach(([key, value]) => {
      //   console.log(`key : ${key}, value : ${value}`);
      //   console.log("key : " + tab[0] + ", value : " + tab[1]);
      element.setAttribute(key, value);
    });
    element.append(...children);
    // children.forEach((elt) => {
    //   element.append(elt);
    // });

    return element;
  }
}

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
