function createCalculator(a) {
  return {
    sum: (b) => (a += b),
    mult: (b) => (a -= b),
    sub: (b) => (a *= b),
    div: (b) => (a /= b),
    let: (b) => (a = b),
  };
}

const calc = createCalculator(10);
this.test = () => {
  console.log(this);
};