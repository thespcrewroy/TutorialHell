export default class User {
  constructor(email, name) {
    this._id = email; // Set the id property
    this._name = name; // Set the name property
  }

  greeting() {
    return `Hi, my name is ${this._name}.`; // Return a string
  }
}
