// Object.values() Object.entries()
const obj = {
  name: 'zengjiahao',
  web:'www.zengjiahao.com',
  course:'webdevelop'
}
console.log(Object.keys(obj))
const res = Object.keys(obj).map(key => obj[key])
console.log(res)

console.log(Object.values(obj))
console.log(Object.entries(obj))
for(let [key, val] of Object.entries(obj)){
  console.log(`${key}:${val}`)
}
console.log(Object.entries(['a','b','c']))
