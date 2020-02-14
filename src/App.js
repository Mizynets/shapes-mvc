import { WIDTH, HEIGHT, WHITE } from "./constans/constans.js";

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
