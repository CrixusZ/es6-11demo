// function makeIterator(arr) {
//   // 指针对象
//   let nextIndex = 0
//   return {
//     next() {
//       return nextIndex < arr.length ? {
//         value:arr[nextIndex++],
//         done: false
//       }:{
//         value:undefined,
//         done:true
//       }
//     }
//   }
// }
// let it = makeIterator(['a','b','c'])
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// for(let c of courses){
//   console.log(c)
// }
// let arr = ['a','b','c']
// console.log(arr)
// let it = arr[Symbol.iterator]()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// let map = new Map()
// map.set('name','es')
// map.set('age',31)
// map.set('school','imooc')
// let it = map[Symbol.iterator]()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
let courses = {
  allCourse: {
    frontend: ['ES','小程序','Vue','React'],
    backend: ['Java','Python','SpringBoot'],
    webapp: ['Android','IOS','Webapp']
  },
  student: {
    zengjiahao: ['typeScript','性能优化','vue全家桶','Antd+React'],
    yangqianlin: ['erp项目','wms项目','tms项目'],
    linchunruo: ['商家端APP','性能优化','vue全家桶','Antd+React'],
  },
  leader: {
    gaotongjian: ['vue','react','js','html'],
    liaodunxi: ['java','数据库'],
    liaojiewei: ['Spring','python']
  }
}
// 可迭代协议: Symbol.iterator
// 迭代器协议: return { next(){return {value,done}} }
// courses[Symbol.iterator] = function(){
//   let allCourse = this.allCourse
//   let keys = Reflect.ownKeys(allCourse)
//   console.log(keys)
//   let values = []
//   return {
//     next() {
//       if(!values.length){
//         if(keys.length){
//           values = allCourse[keys[0]]
//           keys.shift()
//         }
//       }
//       return {
//         done: !values.length,
//         value: values.shift()
//       }
//     }
//   }
// }
// for(let c of courses) {
//   console.log(c)
// }

courses[Symbol.iterator] = function* () {
  // let allCourse = this.allCourse
  // let keys = Reflect.ownKeys(allCourse)
  // let parentKeys = Object.keys(this)
  // console.log(parentKeys)
  let values = []
  for(let key of Object.keys(this)){
    console.log(key)
    let keys = Reflect.ownKeys(this[key])
    console.log(keys)
    while(1){
      if(!values.length){
        if(keys.length){
          values = this[key][keys[0]]
          keys.shift()
          yield values.shift()
        }else{
          return false
        }
      }else{
        yield values.shift()
      }
    }
  }
}
for(let c of courses) {
  console.log(c)
}
console.log(courses)