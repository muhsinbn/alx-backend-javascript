// A class named HolbertonClass
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // method overriden to return attribute when is cast into a number
  valueOf() {
    return this._size;
  }

  // Method overriden to return attribute when class is cast to a string
  toString() {
    return this._location;
  }
}
