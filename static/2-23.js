let p1 = Promise.resolve('success')
p1.then(res => {
  console.log(res)
})

let p2 = Promise.reject('fail')
console.log(p2)
p2.catch(err => {
  console.log(err)
})