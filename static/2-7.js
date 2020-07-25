function foo(a,b,c){
  console.log(a,b,c)
}
let arr = [1,2,3]
console.log(...arr)

let arr1 = [1,2,3]
let arr2 = [4,5,6]
// es5是用原型上进行方法的扩展
// Array.prototype.push.apply(arr1,arr2)
arr1.push(...arr2)
console.log(arr1)

// rest参数
function foo1(...args){
  console.log(arguments)
  let sum = 0
  Array.prototype.forEach.call(arguments, (item)=>{
    sum += item
  })
  return sum
}
console.log(foo1(1,2))
console.log(foo1(1,2,3,4))