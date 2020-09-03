// const arr1 = [1,2,3]
// const arr2 = [3,4,5,6]
// const a = new Set([...arr1,...arr2])
// console.log(a)
// const arr3 = Array.from(a)
// console.log(arr3)
const obj1 = {
  name:'zengjiahao',
  age:31,
  school:'imooc',
  course:'es'
}
const obj2 = {
  school:'imooc',
  age:18
}
const obj3 = {...obj1}
obj1.age = 18
// 确实深拷贝
console.log(obj3)
//属性相同，后面会把前面覆盖掉
const obj4 = {...obj1,...obj2}
console.log(obj4)
// rest 剩余参数 跟数组...argmens差不多意思
const {name,age,...rest} = obj1
console.log(name)
console.log(age)
console.log(rest)