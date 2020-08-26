// i(忽略大小写) m(多行匹配) g(全局匹配)
// y修饰符 粘粘修饰符
const str = 'aaa_aa_a'
//+(出现一次或多次)
const reg1 = /a+/g //  每次匹配剩余的
const reg2 = /a+/y //  剩余的第一个开始匹配
console.log(reg1.exec(str))
console.log(reg2.exec(str))

console.log(reg1.exec(str))
console.log(reg2.exec(str))

console.log(reg1.exec(str))
console.log(reg2.exec(str))


// u修饰符 unicode
// \u0000~\uffff
const str1 = '\uD842\uDFB7'//表示一个字符
console.log(/^\uD842/u.test(str1))

// .

