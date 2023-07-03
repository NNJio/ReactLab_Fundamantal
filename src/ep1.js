const data = [10, 20, 30, 40, 50];
// console.log(data[0])
// console.log(data[1])
// console.log(data[2])
// console.log(data[3])
// console.log(data[4])
//! Loop For
// for (let i = 0; i < data.length; i++) {
//   if (data[i] >= 40) break;
//   console.log(`Count Number ${i + 1} = ${data[i]}`);
// }
//! Loop ForEach
let sum = 0;
data.forEach((e) => {
  sum += e;
  console.log(`Summary = ${sum}`);

  // if(e>=30){
  //     console.log('Hello')
  // }
  console.log(`Number in Array data = ${e}`);
});
//! for of (Same Loop ForEach)
for (const e of data) {
  if (e >= 30) break;
  console.log(`Array number data = ${e}`);
}
