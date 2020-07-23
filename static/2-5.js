let divs = document.getElementsByTagName('div')
console.log(divs instanceof Array)// HTMLCollection

let divs2 = document.getElementsByClassName('xx')
console.log(divs2 instanceof Array)// HTMLCollection

let divs3 = document.querySelectorAll('.xx')
console.log(divs3 instanceof Array)// NodeList

// slice  es5通过slice方法把伪数组转换为数组
let arr = Array.prototype.slice.call(divs3)
console.log(arr)

let arrayLike = {
  0: 'es6',
  1: 'es9',
  2: 'es7',
  3: 'es8',
  length: 4
}
// Array.from 类数组转换成数组
let arr1 = Array.from(arrayLike)
console.log(arr1)
// Array.of 拼装成新数组
let arr2 = Array.of(1,2)
console.log(arr2)

let arr3 = Array.of(1,true,'zjh',[1,2,3],{name:'zengjiahao'})
console.log(arr3)
// copyWithin 数组里某些元素替换另外一些元素
let arr4 = [1,2,3,4,5]
console.log(arr4.copyWithin(1,3))

// fill 填充元素
let arr5 = new Array(3).fill(7)
console.log(arr5)
// 从下标为1开始替换，到下标3，不包括3
arr4.fill('zengjiahao',1,3)
console.log(arr4)

// include 
let arr6 = [1,2,3,NaN]
console.log(arr6.indexOf(2))
console.log(NaN==NaN)//false
console.log(arr6.includes(NaN))//true