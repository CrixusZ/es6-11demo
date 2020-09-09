// es11 新的原始数据类型 BigInt
const max = 2 ** 53
console.log(max)// js number类型能显示的最大值9007199254740992
console.log(Number.MAX_SAFE_INTEGER)// 安全的最大值

console.log(max === max + 1)

const bigInt = 9007199254740994n
console.log(bigInt)
console.log(typeof bigInt)
// *n就代表bigInt,只能改变类型
console.log(1n == 1)
console.log(1n === 1)

const bigInt2 = BigInt(9007199254740994n)
console.log(bigInt2 === bigInt)
// 超出最大的数字得用字符串才能存储
console.log((bigInt2 + bigInt).toString)
