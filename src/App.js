import { WIDTH, HEIGHT, WHITE } from "./constans/constans.js";
import { Game } from "./models/Game.js";
import { GameView } from "./views/GameView.js";
import { GameController } from "./controllers/GameController.js";

export class Application {
  constructor() {
    this.renderer = new PIXI.Renderer({
      width: WIDTH,
      height: HEIGHT,
      antialias: true,
      backgroundColor: WHITE
    });

    document.querySelector("#root").appendChild(this.renderer.view);

    this.ticker = new PIXI.Ticker();
    this.stage = new PIXI.Container();

    this.ticker.add(this.render.bind(this), PIXI.UPDATE_PRIORITY.LOW);
    this.ticker.start();
  }
  render() {
    this.renderer.render(this.stage);
  }
}

const app = (window.app = new Application());

const main = () => {
  const model = new Game(4, 1);
  const view = new GameView(model);
  const controller = new GameController(model, view);
  controller.loadedGame();
};

window.onload = main;
