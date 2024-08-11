// A function that implements a class Building
export default class Building {
  constructor(sqft) {
    if (
      new.target !== Building
      && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage
    ) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  // Getter
  get sqft() {
    return this._sqft;
  }

  // Setter
  set sqft(value) {
    this._sqft = value;
  }

  /* eslint-disable class-methods-use-this */
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
  /* eslint-enable class-methods-use-this */
}
