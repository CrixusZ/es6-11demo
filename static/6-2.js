const str = '   imooc   '
// 正则
console.log(str.replace(/^\s+/g, ''))// 去掉前面空格
console.log(str.replace(/\s+$/g, ''))// 去掉后面空格

console.log(str.trimStart())
console.log(str.trimEnd())
console.log(str.trimLeft())
console.log(str.trimRight())
console.log(str.trim())