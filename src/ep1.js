//! Map number
// const numbers = [10, 20, 30, 40];
// console.log(`Array Number = ${numbers}`);
// const result = numbers.map((e) => e * 2);
// console.log(`Array Map = ${result}`);
//! Map String
// const data = [
//   "rain",
//   "sun",
//   "storm",
//   "very sun",
//   "hard rain",
//   "good",
//   "cloudy",
// ];

// console.log(`All day Weater = ${data}`);
// const result = data.map((e, i) => {
//   return `Day ${i + 1} weater is ${e}`;
// });
// console.log(result);
//! Map Objects
const data = [
  { day: "01/06/2564", weather: "Sun", tem: 37 },
  { day: "02/06/2564", weather: "Rain", tem: 27 },
  { day: "03/06/2564", weather: "Cloudy", tem: 22 },
];
const result = data.map((e) => e.weather);
console.log(result);
