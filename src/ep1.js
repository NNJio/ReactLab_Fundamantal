
const data = [10,20,30,40,50]
console.log(data)
//! push
data.push(...[500,1000,2000])
data.push(1000)
console.log(data)
//! pop
data.pop()
data.pop()
console.log(data)
//! shift
data.shift()
data.shift()
console.log(data)
//! unshift
data.unshift(999)
data.unshift(5000)
console.log(data)
//! splice
data.splice(1,2,999)
console.log(data)
//! slice
data.slice(1,3)
const lastData = data.slice(1,3)
console.log(lastData)


