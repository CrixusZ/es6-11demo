const arr = [
  1,2,[[[3,4,5],6],7,8,9],
  [10,11,13]
]
// 把多维数组结构成一维数组
console.log(arr.flat(3))//参数为数据的维度
console.log(arr.flat(Infinity))//用Infinity(无限)也能

const arr1 = [1,2,3,4,5,6]
const res = arr1.map(x => [x+1]).flat()
const res1 = arr1.flatMap(x => [x+1])
console.log(res)
console.log(res1)