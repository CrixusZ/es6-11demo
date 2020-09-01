// es7 includes
const arr = ['es6','es7','es8', NaN, 2]
// console.log(arr.includes('es8'))
// //Array.prototype.includes(searchElement,fromIndex)
// //第二个参数是指搜索开始的下标
// console.log(arr.includes('es6',1))
// // 负数是指倒叙，-1倒数第一个
// console.log(arr.includes('es6',-1))
// console.log(arr.includes('es9'))

// includes 与 indexOf
// console.log(arr.indexOf('es7'))
// console.log(arr.indexOf('es9'))
// console.log(arr.includes(['es7','es8']))//false
// console.log(arr.indexOf(['es7','es8']))//-1
console.log(arr.includes(NaN))//true
console.log(arr.indexOf(NaN))//-1
