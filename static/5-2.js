// dot www.zengjiahao.com dotAll
// . 可以匹配除了换行符，uicode编码以外所有的字符
// 
// const reg = /./
const reg = /./s //dotAll模式 就是任意字符都能匹配
console.log(reg.test('5'))
console.log(reg.test('x'))
console.log(reg.test('\n'))
console.log(reg.test('\r'))
console.log(reg.test(4))
console.log(reg.test('\u{2028}'))

// g 全局修饰符
// i ignore 忽略大小写修饰符
// m 跨行匹配
// y 粘性修饰符
// u 匹配uncode字符
// s 匹配任意单个


// 具名组匹配
const date = /(\d{4})-(\d{2})-(\d{2})/.exec('2020-09-03')
console.log(date)

const reg1 = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
console.log(reg1.exec('2020-09-03'))
const groups = reg1.exec('2020-09-03').groups
const {year,month,day} = groups
console.log(year)
console.log(month)
console.log(day)


// 后行断言
const str = 'zengjiahao';
// 先行断言,先行匹配zeng后面是jiahao的字符串
console.log(str.match(/zeng(?=jiahao)/))
// 后行断言,后面断言jiahao,前面匹配条件zeng
console.log(str.match(/(?<=zeng)jiahao/))
// 后行断言,不匹配条件!
console.log(str.match(/(?<!zeng)jiahao/))