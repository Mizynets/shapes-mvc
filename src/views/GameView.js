import { game } from '../models/Game.js'

class GameView {
  constructor(game) {
    this.game = game;
  }
  loadedGame() {
    game.drawShape();
    setInterval(() => {
      for (let i = 0; i < game.shapesOnStage; i++) {
        game.drawShape();
      }
    }, 1000);
    app.ticker.add(game.tick.bind(game));
  }
}
const view = new GameView(game);
view.loadedGame();