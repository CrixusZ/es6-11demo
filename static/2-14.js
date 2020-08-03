// let s = new Set([1,2,3,2])
// //Set数据不会重复

// s.add('es').add('zengjiahao')
// s.delete(2)//删除对应下标的值
// console.log(s.has('es'))
// console.log(s.size)//长度
// console.log(s)
// s.forEach(item => console.log(item))
// // const arr = Array.from(s)
// // console.log(arr)
// for(let item of s){
//   console.log(item)
// }
// for(let item of s.keys()){
//   console.log(item)
// }
// for(let item of s.values()){
//   console.log(item)
// }
// for(let item of s.entries()){
//   // key 和 value是同一个值
//   console.log(item)
// }
// s.clear()//清空

// 数组去重
let arr = [1,2,3,2]
let s = new Set(arr)
console.log(s)
// 数组合并
let arr1 = [1,2,3,2]
let arr2 = [3,4,5,6]
let s1 = new Set([...arr1,...arr2])
console.log(Array.from(s1))
console.log([...s1])
//获取交集
let s2 = new Set(arr1)
let s3 = new Set(arr2)
let res = new Set(arr1.filter(item => s3.has(item)))
console.log(res)
//获取差集
let arr3 = new Set(arr1.filter(item => !s3.has(item)))
let arr4 = new Set(arr2.filter(item => !s2.has(item)))
console.log([...arr3,...arr4])

//WeakSet只能添加对象
let ws = new WeakSet()
const obj1 = {
  name:'zengjiahao'
}
const obj2 = {
  age: 31
}
ws.add(obj1)
ws.add(obj2)
console.log(ws)
ws.delete(obj1)
console.log(ws)
console.log(ws.has(obj2))
// ws不能被遍历
// ws属于弱引用

// 垃圾回收机制 GC
// 当前的值不再被引用就不会被删除掉
// 一直被引用不被回收，就会引发内存泄露
// weakset 弱引用不会被垃圾回收机制
// weakset 实用临时被存储的一些对象