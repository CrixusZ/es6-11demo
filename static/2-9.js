// 属性的简写方式
let name = 'zengjiahao'
let age = 31
let s = 'dadasd'
let obj = {
  name,
  age,
  // 中括号解析成外面的变量
  [s]: 'imooc',
  // 对象里面函数简写方法。(不能使用箭头函数)
  study () {
    console.log(this.name+'正在学习')
  }
}
console.log(obj)

// Object.is就是严格模式检验类型是否相等
console.log(Object.is(2,'2'))// false
console.log(Object.is(NaN,NaN))// true
console.log(Object.is(+0,-0))// false
let obj1 = { // new Object() 都会产生新的内存空间，地址就不一样
  name: 'zengjiahao',
  age: 31
}
let obj2 = {
  name: 'zengjiahao',
  age: 31
}
console.log(Object.is(obj1,obj2)) // false
let obj3 = obj1
console.log(Object.is(obj1,obj2)) // true

let x = {a:3,b:4}
let y = {c:5,a:6}
Object.assign(y,x);//把x合并到y，同样的属性会覆盖
console.log(y)
console.log('a' in x)// x里面有没有a属性
let arr = [1,2,3]
console.log(2 in arr)

// 对象遍历
for (let key in obj) {
  console.log(key, obj[key])
}

Object.keys(obj).forEach(key => {
  console.log(key, obj[key])
})

Object.getOwnPropertyDescriptor(obj).forEach(key => {
  console.log(key, obj[key])
})
Reflect.ownKeys(obj).forEach(key=>{
  console.log(key, obj[key])
})