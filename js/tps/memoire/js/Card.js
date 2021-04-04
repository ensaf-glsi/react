import { DomBuilder } from "./DomBuilder.js";

import { HIDDEN, VISIBLE, WINNER } from "./constants.js";
export const defaultImage = "hidden";

export default class Carte {
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
      console.log(this);
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
