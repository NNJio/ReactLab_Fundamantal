// summation = (x, y) => x + y;
// summation = (x, y, z) => x + y + z;
// const summation = (x, y, z) => (z != undefined ? x + y + z : x + y);
const summation = (...numberArr) => {
  let total = 0;
  for (let number of numberArr) total += number;
  return total;
};

// console.log(summation(50, 100));
console.log(summation(500, 100, 50, 400, 50, 100, 250, 50));
