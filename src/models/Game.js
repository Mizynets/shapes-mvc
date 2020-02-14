import { WIDTH, HEIGHT, WHITE } from "../constans/constans.js";
import { Utils } from "../Utils.js";
import {
  numOfShapes,
  surfaceArea,
  shapesValue,
  gravityValue,
  shapeDec,
  shapeInc,
  gravityDec,
  gravityInc,
  root
} from "../elements.js";
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
  
    drawShape() {
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
  
    drawCustomShape() {
      const customShape = Custom.createAndDraw();
      customShape.id = uuid();
      const mousePosition = app.renderer.plugins.interaction.mouse.global;
      customShape.x = mousePosition.x;
      customShape.y = mousePosition.y;
      this.shapes.push(customShape);
      app.stage.addChild(customShape);
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

    get shapesCountInRecVal(){
        return this.shapesCountInRec
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

export const game = new Game(4, 1);

  shapeDec.addEventListener("click", () => {
    let shapesOnStage = game.shapesOnStage;
    if (shapesOnStage !== 1) {
      shapesOnStage--;
      game.shapesOnStage = shapesOnStage;
      shapesValue.innerHTML = shapesOnStage;
    }
  });
  shapeInc.addEventListener("click", () => {
    let shapesOnStage = game.shapesOnStageVal;
    shapesOnStage++;
    game.shapesOnStageVal = shapesOnStage;
    shapesValue.innerHTML = shapesOnStage;
  });
  
  gravityDec.addEventListener("click", () => {
    let gravity = game.gravityVal;
    if (gravity !== 4) {
      gravity -= 4;
      game.gravityVal = gravity;
      gravityValue.innerHTML = gravity / 4;
    }
  });
  
  gravityInc.addEventListener("click", () => {
    let gravity = game.gravityVal;
    gravity += 4;
    game.gravityVal = gravity;
    gravityValue.innerHTML = gravity / 4;
  });
  
  root.addEventListener("click", e => {
    //   const { offsetX, offsetY } = e
      game.drawCustomShape()

  /* attempt to solve the bug with removing the main figures */
    
  // game.shapesCountInRecVal.some(shape => {
    //   const isLeftTop = offsetX + 100 < shape.x && offsetY + 100 < shape.y;
    //   const isRightBottom = offsetX > shape.x + 100 && offsetY > shape.y + 100;
    //   if (isLeftTop || isRightBottom) {
    //     game.drawCustomShape();
    //     return true;
    //   }
    //   return false;
    // });
  });