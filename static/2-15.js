let m = new Map()
let obj = {
  name: 'zengjiahao'
}
m.set(obj, 'es')
console.log(m)
console.log(m.get(obj))
// m.delete(obj)
// console.log(m)
console.log(m.has(obj))
let map = new Map([
  ['name','zengjiahao'],
  ['age', 31]
])
console.log(map)
console.log(map.size)
console.log(map.has('name'))
console.log(map.get('age'))
map.set('name','zhangsan')
console.log(map)
