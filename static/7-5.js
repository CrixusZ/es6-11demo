// node 全局对象 global
// web 全局对象 window 和 self 都是一样的全局对象

window.setTimeout(()=>{
  console.log('dada')
},1000)
self.setTimeout(()=>{
  console.log('dada')
},1000)

const getGlobal = () => {
  if(typeof self !== 'undefined'){
    return self
  }
  if(typeof window !== 'undefined'){
    return window
  }
  if(typeof global !== 'undefined'){
    return global
  }
  throw new Error('无法找到全局对象')
}

const global = getGlobal()
console.log(global)

console.log(globalThis)