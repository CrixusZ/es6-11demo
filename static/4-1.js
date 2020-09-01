// ES8 异步操作流程 async await
// function foo () {
//   return 'zengjiahao'
// }

// async function foo () {
//   return 'zengjiahao'
// }
// console.log(foo())
function timeout() {
  return new Promise(resolve=>{
    setTimeout(()=>{
      console.log(1)
      resolve(1)
    },1000)
  })
}

async function foo () {
  const res = await timeout()
  console.log(res)
  console.log(2)
}

foo()
