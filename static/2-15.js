// let m = new Map()
// let obj = {
//   name: 'zengjiahao'
// }
// m.set(obj, 'es')
// console.log(m)
// console.log(m.get(obj))
// // m.delete(obj)
// // console.log(m)
// console.log(m.has(obj))
// // 数组对应就是key value
let map = new Map([
  ['name','hahahaa'],
  ['age', 31]
])
console.log(map)
console.log(map.size)
console.log(map.has('name'))
console.log(map.get('age'))
map.set('name','zhangsan')
// map.delete('name')
console.log(map)

// 遍历
map.forEach((value,key)=> console.log(value,key))

for(let [key,value] of map){
  console.log(key,value)
}

for(let key of map.keys()){
  console.log(key)
}

for(let value of map.values()){
  console.log(value)
}

for(let [key,value] of map.entries()){
  console.log(key,value)
}

// map.has 获取某一个属性
// map.size 获取属性的数量
// 频繁键值对增删，map性能更好

// weakmap 只支持引用数据类型：对象，数组,弱引用，不能遍历
let wm = new WeakMap()
wm.set([1],2)
wm.set({
  name: 'zengjiahao'
}, 'es')
console.log(wm)