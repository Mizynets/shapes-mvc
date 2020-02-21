import { WIDTH, HEIGHT } from "../constans/constans.js";
import { Utils } from "../Utils.js";
import { numOfShapes, surfaceArea } from "../elements.js";
import {
  Rectangle,
  Circle,
  Ellipse,
  Triangle,
  Pentagon,
  Hexagon,
  Custom
} from "../Shapes.js";
import { GameController } from "../controllers/GameController.js";

export class Game {
  constructor(gravity, shapesOnStage) {
    this.shapes = [];
    this.gravity = gravity;
    this.shapesOnStage = shapesOnStage;
    this.shapesCountInRec = [];
  }

  createShape() {
    const inAreaX = WIDTH - 100;
    const shapeY = -100;
    const shapeX = Utils.randomInt(100, inAreaX);

    const onClick = () => {
      this.shapes = this.shapes.filter(shape => shape.id !== randShape.id);
    };
    const shapesClasses = [
      Rectangle,
      Circle,
      Ellipse,
      Triangle,
      Pentagon,
      Hexagon
    ];
    const randShape = shapesClasses[
      Utils.randomInt(0, shapesClasses.length - 1)
    ].createAndDraw();
    randShape.x = shapeX;
    randShape.y = shapeY;
    randShape.id = uuid();
    randShape.interactive = true;
    randShape.on("pointerdown", onClick);
    randShape.on("pointerdown", GameController.clearShape);
    this.shapes.push(randShape);
    app.stage.addChild(randShape);
  }

  createCustomShape() {
    const customShape = Custom.createAndDraw();
    customShape.id = uuid();
    const mousePosition = app.renderer.plugins.interaction.mouse.global;
    this.shapesCountInRec.some(shape => {
      const isLeftTop =
        mousePosition.x + 100 < shape.x && mousePosition.y + 100 < shape.y;
      const isRightBottom =
        mousePosition.x > shape.x + 100 && mousePosition.y > shape.y + 100;
      if (isLeftTop || isRightBottom) {
        customShape.x = mousePosition.x;
        customShape.y = mousePosition.y;
        this.shapes.push(customShape);
        app.stage.addChild(customShape);
        return true;
      }
      return false;
    });
  }

  shapesCountAndArea() {
    this.shapesCountInRec = this.shapes.filter(
      shape => shape.y > 50 && shape.y < HEIGHT
    );
    numOfShapes.innerHTML = this.shapesCountInRec.length;
    let shapesArea = 0;
    shapesArea = this.shapesCountInRec.reduce((a, c) => a + c.area, 0);
    surfaceArea.innerHTML = shapesArea;
  }

  tick() {
    this.shapesCountAndArea();
    for (let i = 0; i < this.shapes.length; i++) {
      const shape = this.shapes[i];
      shape.y += this.gravity;
      if (HEIGHT + 100 < shape.y) {
        this.shapes = this.shapes.filter((el, indx) => indx !== i);
      }
    }
  }

  get shapesCountInRecVal() {
    return this.shapesCountInRec;
  }

  get gravityVal() {
    return this.gravity;
  }

  get shapesOnStageVal() {
    return this.shapesOnStage;
  }

  set gravityVal(value) {
    this.gravity = value;
    console.log(this.gravity);
  }

  set shapesOnStageVal(value) {
    this.shapesOnStage = value;
  }
}
