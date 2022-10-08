SMALL_SIZE = { price: 50, callories: 20 };
MEDIUM_SIZE = { price: 75, callories: 30 };
BIGER_SIZE = { price: 100, callories: 40 };

TOPPING_CHEAZ = { price: 10, callories: 20 };
TOPPING_SALAD = { price: 20, callories: 5 };
TOPPING_POTATO = { price: 15, callories: 10 };
TOPPING_SPICE = { price: 15, callories: 0 };
TOPPING_MAYONNAISE = { price: 20, callories: 5 };
function Humburger(size) {
  valBurger(size);
  let arr = [size.price, size.callories];

  this.addTopping = function (additive) {
    return (arr = [
      (size.price += additive.price),
      (size.callories += additive.callories),
    ]);
  };
  this.getPrice = function () {
    return arr[0];
  };
  this.getCallories = function () {
    return arr[1];
  };
}
let humburger = new Humburger(SMALL_SIZE);
// console.log("Price with sauce: " + humburger.getPrice());
// console.log("Callories with sauce: " + humburger.getCallories());
function valBurger(topping) {
  if (
    topping !== SMALL_SIZE &&
    topping !== MEDIUM_SIZE &&
    topping !== BIGER_SIZE
  ) {
    return console.log("Not Burger");
  }
}

// class Humburger {
//   valBurger(size)
//   constructor(size) {
//     this.size = size;
//     this.arr = [size.price, size.callories];
//   }
//   addTopping(additive) {
//     this.arr = [
//       (this.size.price += additive.price),
//       (this.size.callories += additive.callories),
//     ];
//   }
//   getReadyBurger() {
//     return this.arr;
//   }
//   getPrice() {
//     return this.arr[0];
//   }
//   getCallories() {
//     return this.arr[1];
//   }
// }

// let humburger = new Humburger(SMALL_SIZE);
// // console.log("Price with sauce: " + humburger.getPrice());
// // console.log("Callories with sauce: " + humburger.getCallories());
// function valBurger(topping) {
//   if (
//     topping !== SMALL_SIZE &&
//     topping !== MEDIUM_SIZE &&
//     topping !== BIGER_SIZE
//   ) {
//     return console.log("Not Burger");
//   }
// }
