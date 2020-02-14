import { BLACK, PI, colors } from "./constans/constans.js";
import { Utils } from "./Utils.js";

export class Shapes extends PIXI.Graphics {
  constructor() {
    super();
    this.lineStyle(2, BLACK, 1);
    this.beginFill(colors[Utils.randomInt(0, colors.length)]);
  }
  draw() {
    return new Error("base class");
  }
  static createAndDraw() {
    //   return new Error("base class");
    const shape = new this();
    shape.draw();
    return shape;
  }
}

export class Rectangle extends Shapes {
  constructor() {
    super();
  }
  draw() {
    const w = 100;
    const h = 100;
    this.drawRect(0, 0, w, h);
    this.area = w * h;
  }
}

export class Circle extends Shapes {
  constructor() {
    super();
  }
  draw() {
    const d = 50;
    this.drawCircle(0, 0, d);
    this.area = Math.floor((PI / 4) * Math.pow(d, 2));
  }
}

export class Ellipse extends Shapes {
  constructor() {
    super();
  }
  draw() {
    const w = 60;
    const h = 30;
    this.drawEllipse(0, 0, w, h);
    this.area = Math.floor(PI * (w / 2) * (h / 2));
  }
}

export class Triangle extends Shapes {
  constructor() {
    super();
  }
  draw() {
    const a = 32;
    const bc = 64;
    const p = (a + bc) / 2;
    this.drawPolygon([-a, bc, a, bc, 0, 0]);
    this.area = Math.floor(Math.sqrt(p * (p - a) * (p - bc) * (p - bc)));
  }
}

export class Pentagon extends Shapes {
  constructor() {
    super();
  }
  draw() {
    const w = 100;
    const h = 50;
    const p = (h + h + w) / 2;
    this.drawPolygon([0, 0, w, 0, w, h, h, w, 0, h]);
    this.area = Math.floor(w * h + Math.sqrt(p * (p - h) * (p - h) * (p - w)));
  }
}

export class Hexagon extends Shapes {
  constructor() {
    super();
  }
  draw() {
    const hexagonRadius = 60;
    const hexagonHeight = hexagonRadius * Math.sqrt(3);
    this.drawPolygon([
      -hexagonRadius,
      0,
      -hexagonRadius / 2,
      hexagonHeight / 2,
      hexagonRadius / 2,
      hexagonHeight / 2,
      hexagonRadius,
      0,
      hexagonRadius / 2,
      -hexagonHeight / 2,
      -hexagonRadius / 2,
      -hexagonHeight / 2
    ]);
    this.area = Math.floor((hexagonHeight * hexagonRadius) / 2);
  }
}

export class Custom extends Shapes {
  constructor() {
    super();
  }
  draw() {
    this.drawStar(0, 0, 4, 50);
    this.area = 777;
  }
}
