// function foo() {
//   for(let i = 0;i<3;i++){
//     console.log(i)
//   }
// }
//generator函数
function* foo() {
  for(let i = 0;i<3;i++) {
    // yield生成器只能在generator函数内部使用
    yield i
  }
}
// 不能作为构造函数使用，就是不能new出来
console.log(foo())
let f = foo()
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())

function* gen(x) {
  // 每个next执行一个yield
  let y = 2 * (yield(x+1))
  let z = yield(y/3)
  return x + y + z
}
let g = gen(5)
console.log(g.next())//6
console.log(g.next(12))//传递值就是上一次执行的返回值 // 8
console.log(g.next(13)) // z=13, x=5, y=24 //42

function* count(x=1){
  while(true) {
    if(x % 7 === 0) {
      yield x
    }
    x++
  }
}
let n = count()
console.log(n.next().value)
console.log(n.next().value)
console.log(n.next().value)
console.log(n.next().value)
console.log(n.next().value)

// Ajax的原理
function ajax(url,callback){
  var xmlhttp
  if(window.XMLHttpRequest){
    xmlhttp = new XMLHttpRequest()
  }else{// 兼容早期浏览器ie6
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
  }
  // 2.发送请求
  xmlhttp.open('GET',url,true)
  xmlhttp.send()
  // 3.服务器响应
  xmlhttp.onreadystatechange = function(){
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      var obj = JSON.parse(xmlhttp.responseText)
      console.log(obj)
      callback(obj)
    }
  }
}
function request(url){
  ajax(url, res => {
    getData.next(res)
  })
}
function* gen1() {
  let res1 = yield request('static/a.json')
  console.log(res1)
  let res2 = yield request('static/b.json')
  console.log(res2)
  let res3 = yield request('static/c.json')
  console.log(res3)
}

let getData = gen1()
getData.next()