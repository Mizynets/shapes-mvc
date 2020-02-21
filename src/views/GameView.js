export class GameView {
  constructor(game) {
    this.game = game;
  }
  viewGame() {
    this.game.createShape();

    const render = () => {
      for (let i = 0; i < this.game.shapesOnStage; i++) {
        this.game.createShape();
      }
    };
    setInterval(() => {
      requestAnimationFrame(render);
    }, 1000);
    app.ticker.add(this.game.tick.bind(this.game));
  }
}
