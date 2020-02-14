
export class Utils {
  static randomInt(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }
}
