import Card from "./Card.js";

import * as constants from "./constants.js";
import { DomBuilder as DocumentBuilder } from "./DomBuilder.js";

export class MemoryGame {
  constructor(level) {
    console.log(constants, constants.VISIBLE);
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
    this.element = DocumentBuilder.createElement(
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
