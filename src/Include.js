class Include {
  constructor(array, value) {
    this.array = array;
    this.value = value;
  }

  check() {
    return this.array.includes(this.value);
  }
}

module.exports = Include;
