const colors = ["red", "green", "blue", "puple", "white"];
console.log(colors);
//! indexOf
// const i = colors.indexOf("white");
// console.log(i);
//! find
// const i = colors.find(e=>e=='blue');
const i = colors.findIndex((e) => e == "blue");
console.log(i);
