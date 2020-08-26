// 十进制 => 二进制
const a = 5 // 101
console.log(a.toString(2))

// 二进制 => 十进制
const b = 101
// console.log(parent(5.5))
console.log(parseInt(b, 2))//parseInt第二个参数是多少进制

// es6 0B二进制  0O八进制
const c = 0B0101
console.log(c)

const d = 0O777
console.log(d)

console.log(Number.isFinite(5))// 判断是否有限
console.log(Number.isFinite(0.5))
console.log(Number.isFinite(Infinity))// Infinity表示无限
console.log(Number.isFinite('zengjiahao'))
console.log(Number.isFinite(true))

console.log(Number.isNaN(NaN))//true
console.log(Number.isNaN(15))//false

console.log(Number.parseInt(5.5))//跟全局的window.parseInt一样。把全局方法慢慢转移到局部实现模块化
console.log(Number.parseFloat(5.5))

console.log(Number.isInteger(5))// 判断是否整数

console.log(0.1+0.2===0.3) // false
// 0.1转化二进制存储到计算机不会变成0.1000000000000001，存在精度丢失
// 计算机存储数字的标准IEEE 754 双精度标准
// 35 => 00100011
// 0.375 => 0.011
// 0.1 => 0.000110011
console.log(0.1000000000000001)
console.log(0.10000000000000001)//超出16位超出存储空间会被舍弃掉=>0.1

const max = Math.pow(2, 53)
console.log(max)
console.log(max+1)

console.log(Number.MAX_SAFE_INTEGER)// 安全状态下能输出最大的整数
console.log(Number.MIN_SAFE_INTEGER)// 安全状态下能输出最小的整数
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER))// 判断是否安全状态整数

console.log(Math.trunc(5.5))// 去除小数部分
console.log(Math.trunc(true))// 1
console.log(Number.parseInt(true))// NaN

console.log(Math.sign(5))// 判断是否正数 //1
console.log(Math.sign(-5))// -1
console.log(Math.sign(0))// 0
console.log(Math.sign(NaN))// NaN
console.log(Math.sign(true))// 1
console.log(Math.sign(false))// 0

console.log(Math.cbrt(8))// 立方根 2
console.log(Math.cbrt('dasdad'))// NaN
