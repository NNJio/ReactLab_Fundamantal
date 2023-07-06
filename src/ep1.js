// const data = [10, 20, 30, 40];
const cart = [
  {
    name: "Bag",
    price: 500,
  },
  {
    name: "Book",
    price: 900,
  },
  {
    name: "Camera",
    price: 5000,
  },
];
//! Array Reduce
const sum = cart.reduce((value, e) => e.price + value, 0);
console.log(sum);

// const result = data.reduce((value, e) => e + value, 0);
// console.log(result);
