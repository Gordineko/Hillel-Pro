function Calc(a = 0) {
  this.add = function (b) {
    return (a += b);
  };
  this.min = function (b) {
    return (a -= b);
  };
  this.devision = function (b) {
    return (a /= b);
  };
  this.multiply = function (b) {
    return (a *= b);
  };
  this.result = function (b) {
    return a;
  };
}

const work = new Calc(100);
