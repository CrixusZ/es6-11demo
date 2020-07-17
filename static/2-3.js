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
function foo(){
  console.log(123)
}
let [a = foo()] = [1]