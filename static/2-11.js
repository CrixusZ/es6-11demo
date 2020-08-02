// es5 类
function People(name, age) {
  // 实例属性在原型上定义
  this.name = name
  this.age = age
  // 静态属性,类直接定义直接调用，不需要在原型上定义
  People.count++
  // 方法不应该定义在父类,每次对象实例化都会带上这个方法
  // 应该定义在对象的原型下
  // this.showName = function(){
  //   console.log(`我的名字是${this.name}`)
  // }
}
// 静态属性
People.count = 0
People.getCount = function(){
  console.log(`当前共有${People.count}人`)
}
// 静态
// prototype 原型
People.prototype.showName = function(){
  console.log(`我的名字是${this.name}`)
}
let p1 = new People('zengjiahao', 31)
console.log(p1)
p1.showName()
People.getCount()

// 静态方法Math
// let str = new String('zengjiahao')
// console.log(str)
// let arr = new Array(1,2,3)
// console.log(arr)

// let obj = new Object()
// obj.name = 'zengjiahao'
// console.log(obj)

// console.log(Math.max(4,5))
// console.log(Math.random())

// 父类
function Animal(name){
  this.name = name
}
Animal.prototype.showName = function() {
  console.log(`名字是${this.name}`)
}

// 子类
function Dog(name,color) {
  // 构造函数继承,只能继承父类的属性,不能继承方法
  Animal.call(this, name)//继承属性
  this.color = color
}
// 原型继承
Dog.prototype = new Animal()
Dog.prototype.constructor = Dog

let d1 = new Dog('wangcai','white')
console.log(d1)
d1.showName()
