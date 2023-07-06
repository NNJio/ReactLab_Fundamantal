// const data = [10, 20, 30, 40];
const data = [
  { name: "New", salary: 28000, departmaent: "dav" },
  { name: "Jo", salary: 21000, departmaent: "market" },
  { name: "Nut", salary: 22000, departmaent: "dav" },
  { name: "Bell", salary: 23000, departmaent: "dav" },
  { name: "Joy", salary: 24000, departmaent: "dav" },
];
const result = data.filter(e=>e.salary>20000).filter(e=>e.departmaent=='market')
console.log(result)


//! Array Filter
// const result = data.filter((e) => e > 20);
// console.log(result)
