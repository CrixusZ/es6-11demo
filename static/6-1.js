// Object.fromEntries
const obj = {
  name: 'zengjiahao',
  course: 'js'
}
const entries = Object.entries(obj)
console.log(entries)

// ES10 互相转化
const fromEntries = Object.fromEntries(entries)
console.log(fromEntries)

// 把map结构转化成对象结构
const map = new Map()
map.set('name', 'zengjiahao')
map.set('course', 'js')
console.log(map)
const fromEntries1 = Object.fromEntries(map)
console.log(fromEntries1)

// 数组和对象可以互相转化,用彼此的方法进行数据的优化
const course = {
  math:90,
  english:85,
  chinese:70
}
const res = Object.fromEntries(Object.entries(course).filter(([key,val])=>val>80))
console.log(res)