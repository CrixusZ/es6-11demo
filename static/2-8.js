let oBtn = document.querySelector('#btn')
// 箭头函数不能获取到对应的this
oBtn.addEventListener('click', function(){
  console.log(this)
  console.log(11111)
  // setTimeout是window下的方法
  setTimeout(function(){
    console.log(this)//window
  // call和apply会立即执行，bind是延时以后执行
  }.bind(this),100)
})

// 类
function People(name,age){
  console.log(this)
  this.name = name
  this.age = age
}
let p1 = new People('zengjiahao',31)
console.log(p1)

// 箭头函数的this指向window
let People1 = (name, age)=>{
  console.log(this)
  this.name = name
  this.age = age
}

let foo2 = (...args) => {
  // console.log(arguments)// 报错
  console.log(args)
}