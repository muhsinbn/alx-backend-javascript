// A Function that implements a class with attributes, getter and setter
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = HolbertonCourse.validateString(name, 'name');
    this._length = HolbertonCourse.validateNumber(length, 'length');
    this._students = HolbertonCourse.validateArray(students, 'students');
  }

  // Getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Setters
  set name(name) {
    this._name = HolbertonCourse.validateString(name, 'name');
  }

  set length(length) {
    this._length = HolbertonCourse.validateNumber(length, 'length');
  }

  set students(students) {
    this._students = HolbertonCourse.validateArray(students, 'students');
  }

  // Validation methods
  static validateString(value, name) {
    if (typeof value !== 'string') {
      throw new TypeError(`${name} must be a string`);
    }
    return value;
  }

  static validateNumber(value, name) {
    if (typeof value !== 'number') {
      throw new TypeError(`${name} must be a number`);
    }
    return value;
  }

  static validateArray(value, name) {
    if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
      throw new TypeError(`${name} must be an array of strings`);
    }
    return value;
  }
}
