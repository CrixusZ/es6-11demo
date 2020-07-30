// let target = {
//   a: 1,
//   b: 2,
//   c: {
//     d:{
//       e:4,
//       g:6
//     }
//   }
// }
// let source = {
//   a: 1,
//   b: 2,
//   c: {
//     d:{
//       e:4
//     }
//   }
// }
// Object.assign(target,source)
// console.log(target)

let obj1 = {
  name:'zengjiahao',
  age:31
}
// 浅拷贝:指向同一个内存地址，改变其中一个两个同时改变
let obj2 = obj1
obj1.age = 19
console.log(obj1)
console.log(obj2)
// '{}'
// JSON.stringify()
// JSON.parse()


let checkType = data => {
  console.log(Object.prototype.toString.call(data).slice(8, -1))
  return Object.prototype.toString.call(data).slice(8, -1)
}
checkType([])
let deepClone = target => {
  let targetType = checkType(target)
  let result
  if(targetType === 'Object'){
    result = {}
  } else if(targetType === 'Array') {
    result = []
  } else {
    return target
  }
  for(let i in target) {
    let value = target[i]
    let valueType = checkType(value)
    if(valueType === 'Object' || valueType === 'Array'){
      result[i] = deepClone(value)// 递归 
    }else {
      result[i] = value
    }
  }
  return result
}
let arr1 = [1,2,{age:12}]
let arr2 = deepClone(arr1)
arr2[2].age = 31
console.log(arr1)
console.log(arr2)