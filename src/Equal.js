class Equal {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  check() {
    return this.a === this.b;
  }
}

module.exports = Equal;
