const b = false // 0, false,或者空字符串，null, undefined在js是表示false
// const a = b || 5
// 用es11 空值合并运算符只有null或者undefined才取默认值
const a = b ?? 6
console.log(a)