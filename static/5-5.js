const foo = (a,b,c,d) => {
  console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)
}

const name = 'zengjiahao'
const age = 31
foo`这是${name},他的年龄是${age}岁`

const foo1 = arg => {
  console.log(arg)
}
foo1`\u{61} and \u{62}`
// foo1`\u{61} and \unicode`

let str = ``