// Symbol独一无二
// let s1 = Symbol()
// console.log(s1)
// let s2 = Symbol()
// console.log(s2)
// console.log(s1 === s2)//false


// let s1 = Symbol('foo')
// console.log(s1)
// let s2 = Symbol('bar')
// console.log(s2)
// console.log(s1 === s2)//false

const obj = {
  name: 'zengjiahao',
  toString() {
    return this.name
  }
}
let s = Symbol()