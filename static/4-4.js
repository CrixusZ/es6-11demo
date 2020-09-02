const str = 'zengjiahao'
// 从字符串开始填充，padStart(长度,'填充的字符串')
console.log(str.padStart(18,'hahaha'))
// 从字符串结尾填充，padStart(长度,'填充的字符串')
console.log(str.padEnd(18,'hahaha'))
// 第二个参数不填默认为空格

// yyyy-mm-dd 2020-04-01
const now = new Date()
const year = now.getFullYear()
const month = (now.getMonth()+1).toString().padStart(2,'0')
const day = (now.getDate()).toString().padStart(2,'0')
console.log(`${year}-${month}-${day}`)

const tel = '13411112222'
const templateTel = tel.slice(-4).padStart(11,'*')
console.log(templateTel)

console.log(new Date().getTime())// 13位时间戳 ms
// 后端返回的长度可能是秒为单位 10位时间戳,需要在结尾补0
const time =(new Date().getTime().toString()).padEnd(13,'0')
console.log(time)
