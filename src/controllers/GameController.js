import {
  shapesValue,
  gravityValue,
  shapeDec,
  shapeInc,
  gravityDec,
  gravityInc,
  root
} from "../elements.js";

export class GameController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    shapeInc.addEventListener("click", this.incShape.bind(this));
    shapeDec.addEventListener("click", this.decShape.bind(this));
    gravityDec.addEventListener("click", this.decGravity.bind(this));
    gravityInc.addEventListener("click", this.incGravity.bind(this));
    root.addEventListener("click", this.createCustomShape.bind(this));
  }

  incShape() {
    let shapesOnStage = this.model.shapesOnStageVal;
    shapesOnStage++;
    this.model.shapesOnStageVal = shapesOnStage;
    shapesValue.innerHTML = shapesOnStage;
  }

  decShape() {
    let shapesOnStage = this.model.shapesOnStage;
    if (shapesOnStage !== 1) {
      shapesOnStage--;
      this.model.shapesOnStage = shapesOnStage;
      shapesValue.innerHTML = shapesOnStage;
    }
  }

  decGravity() {
    let gravity = this.model.gravityVal;
    if (gravity !== 4) {
      gravity -= 4;
      this.model.gravityVal = gravity;
      gravityValue.innerHTML = gravity / 4;
    }
  }

  incGravity() {
    let gravity = this.model.gravityVal;
    gravity += 4;
    this.model.gravityVal = gravity;
    gravityValue.innerHTML = gravity / 4;
  }

  createCustomShape() {
    this.model.createCustomShape();
  }

  loadedGame() {
    this.view.viewGame();
  }

  static clearShape() {
    this.clear();
  }
}
