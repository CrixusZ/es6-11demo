const s = Symbol('zengjiahao')
console.log(s)
// Es10新特性,能获取Symbol的描述
console.log(s.description)// zengjiahao

const s2 = Symbol()
console.log(s2.description)// undefined