//! OLD
// const colors = ["green", "red", "yallow"];
// const green = colors[0];
// const red = colors[1];
// const yallow = colors[2];
//! Destructuring
// const [green, red, yallow] = colors;
// const [, , yallow] = colors;
// const [green, ,] = colors;
// const [,red ,] = colors;

// console.log(green);
// console.log(red);
// console.log(yallow);
const product = {
  productName: "Conputer",
  price: 3000,
  stock: 10,
};
//! old
// const productName = product.productName;
// const price = product.price;
// const stock = product.stock;

//!Destructuring

const { productName, price, stock } = product;

console.log(product);
console.log(productName);
console.log(price);
console.log(stock);
