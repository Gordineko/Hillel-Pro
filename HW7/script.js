function createCalculator() {
  let a = 0;

  return {
    sum: (b) => (a += b),
    mult: (b) => (a -= b),
    sub: (b) => (a *= b),
    div: (b) => (a /= b),
    let: (b) => (a = b),
  };
}

const calc = createCalculator();
