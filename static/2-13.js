// //Symbol独一无二
// let s1 = Symbol()
// console.log(s1)
// let s2 = Symbol()
// console.log(s2)
// console.log(s1 === s2)//false


// let s1 = Symbol('foo')
// console.log(s1)
// let s2 = Symbol('bar')
// console.log(s2)
// console.log(s1 === s2)//false

// const obj = {
//   name: 'zengjiahao',
//   // 加上toString方法就会调用toString
//   toString() {
//     return this.name
//   }
// }
// let s = Symbol(obj)//对象解析成toString
// console.log(s)//[object Object]

// let s = Symbol('foo')//不是全局登记的描述
// //s.description标识解释
// console.log(s.description)

// let s1 = Symbol.for('foo')
// let s2 = Symbol.for('foo')//Symbol.for就是全局登记的描述
// console.log(s1 === s2)//true

// const s1 = Symbol('foo')
// console.log(Symbol.keyFor(s1))//undefind

// const s2 = Symbol.for('foo')
// console.log(Symbol.keyFor(s2))//foo

// //Symbol应用场景,某个key value对象key值有可能重名的时候
// //利用Symbol类型的独一无二解决key重名
// const student1 = '曾嘉昊'
// const student2 = '曾嘉昊'
// const student1 = Symbol('曾嘉昊')
// const student2 = Symbol('曾嘉昊')
// // key值中括号代表变量
// const grade = {
//   [student1]: {
//     address:'xxx',
//     tel:'1111111'
//   },
//   [student2]: {
//     address:'yyy',
//     tel:'2222222'
//   },
// }
// console.log(grade)
// console.log(grade[student1])
// console.log(grade[student2])

// const sym = Symbol('coder')
// class User {
//   constructor(name){
//     this.name = name
//     this[sym] = 'baidu.com'
//   }
//   getName() {
//     return this.name + this[sym]
//   }
// }
// const user = new User('zengjiahao')
// console.log(user.getName())
// // for in 不能取Symbol属性
// for(let key in user){
//   console.log(key)
// }
// for(let key of Object.keys(user)){
//   console.log(key)
// }
// for(let key of Object.getOwnPropertySymbols(user)){
//   console.log(key)
// }
// for(let key of Reflect.ownKeys(user)){
//   console.log(key)
// }

const shapeType = {
  triangle: Symbol(),//只要是唯一标识就可以不需要特定字符串
  circle: Symbol(),
}
// 用Symbol去除魔术字符串(就是多次出现的字符串)
function getArea(shape){
  let area = 0
  switch (shape) {
    case shapeType.triangle:
      area = 1
      break
    case shapeType.circle:
      area = 2
      break
  }
  return area
}
console.log(getArea(shapeType.triangle))