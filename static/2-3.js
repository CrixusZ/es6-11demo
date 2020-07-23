// let arr = [1,2,[3, 4]]
// let [a,b,[c,d]] = arr
// console.log(a,b,c,d)

// let arr = [1,2,[3, 4]]
// let [a,b,c] = arr
// console.log(a,b,c)

// let user = {
//   name: 'zengjiahao',
//   age: 31
// }

// let {name:myname,age} = user;
// console.log(myname,age)
// let str = 'zengjiahao'
// for(let i =0;i<str.length;i++){
//   console.log(str[i])
// }
// function foo(){
//   console.log(123)
// }
// let [a = foo()] = [1]

// function foo([a,b,c]) {
//   console.log(a,b,c)
// }
// let arr = [1,2,3]
// foo(arr)

// function foo() {
//   let obj = {
//     name: 'zengjiahao',
//     age: 31
//   }
//   return obj
// }
// let {name,age} = foo()
// console.log(name,age)

let json = '{"a":"hello","b":"world"}'
let {a,b} = JSON.parse(json)