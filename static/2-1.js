// // var代表在当前作用域下声明一个变量
// var a = 5;
// console.log(a)
// console.log(window.a)
// // 不声明变量，表示在当前window这个全局对象上增加一个b的属性
// b = 6;
// console.log(b)
// console.log(window.b)
// // 用delect可以删除对线上的属性
// // 顶层对象的属性和全局变量挂钩，所以会污染全局变量
// delete b

let a = 5;
console.log(a) //5
console.log(window.a)//undefind

// 暂时性死区
var a=5
if( true) {
  // 在作用域内必须先声明了才能使用
  a = 6;
  let a
}
