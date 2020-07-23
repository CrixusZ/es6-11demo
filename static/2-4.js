let arr = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,6]

// for
for(let i = 0; i<arr.length;i++){
  if (arr[i] === 2) {
    break
    //continue
  }
  console.log(arr[i])
}

// forEach
arr.forEach((elem, index,array)=>{
  // 三个参数分别的数组的元素，数组元素的下标，还有数组本身
  // 不支持break，continue等关键字
})

// map
let res = arr.map((item)=>{
  return item+1
})
console.log(arr,res)

// filter
let res1 = arr.filter((value)=>{
  return value === 2
})
console.log(arr,res1)

//some 
let res2 = arr.some((value)=>{
  return value === 2
})
console.log(arr,res2)

// every
let res3 = arr.every((value)=>{
  return value === 2
})
console.log(arr,res3)

// reduce两个参数，一个方法一个初始值
let sum = arr.reduce((prev, cur, index, array)=>{
  // 方法接受4个参数,
  // 1.上一次调用的返回值,第一次对应的就是初始值
  // 2.当前正在处理的元素
  // 3.当前处理元素的索引
  // 4.原数组
  return prev + cur
}, 0)
// 获取数组最大值
let maxNum = arr.reduce((prev, cur)=>{
  return Math.max(prev,cur)
})
console.log(maxNum)
// 去重
let arr1 = arr.reduce((prev, cur)=>{
  prev.indexOf(cur) === -1 && prev.push(cur)
  return prev
}, [])
console.log(arr1)

Array.prototype.foo = function() {
  console.log('foo')
}
for(let index in arr) {
  console.log(index,arr[index])
}

// es6 的数组遍历方式
