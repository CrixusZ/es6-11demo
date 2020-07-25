// x,y是形参
function foo(x, y) {
  y = y || 'world'
  console.log(x,y)
}
// 0 在js里代表非
foo('zengjiahao', 0)

// 参数默认值
function foo1(x,y="world"){
  console.log(x,y)
}
foo1('hello',0)
console.log(foo1.length)

// es6 函数的默认形式
function ajax(url, {
  body = '',
  method = 'GET',
  headers = {}
} = {}) {
  console.log(method)
}
ajax('www.baidu.com', {
  method:'POST'
})

// 作用域往上级找
// let x = 1
// function foo2(x, y=x){
//   console.log(y) // 2
// }
// foo2(2)
let x = 1
function foo2(y=x){
  let x =2;
  console.log(y) // 1
}
foo2()

function foo3(){}
console.log(foo3.name) // foo3

console.log((new Function).name) //anonymous

function foo4(x,y) {
  console.log(this,x,y)
}
foo4.bind({name: 'zengjiahao'}, 1,2)()
console.log(foo4.bind({}).name) // bound foo4