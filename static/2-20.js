// let obj = {}
// let newVal = ''
// // js设计初期把大量的方法定义在Object对象里面0.
// Reflect.defineProperty(obj, 'name', {
//   get(){
//     return newVal
//   },
//   set(val){
//     console.log('set')
//     newVal = val
//   }

// })
// obj.name = '111'
// console.log(obj.name)

// try{

// }catch(e){

// }
// if(Reflect.defineProperty()){// 返回boolean

// }else{

// }
console.log('assign' in Object)//true
console.log(Reflect.has(Object, 'assign'))//true

let user = {
  userName: 'zengjiahao',
  age: 31,
  _password: '****'
}
// Reflect跟Proxy方法能一一对应
user = new Proxy(user, {
  get(target, prop){
    if(prop.startsWith('_')){
      throw new Error('不可访问')
    }else{
      // return target[prop]
      return Reflect.get(target, prop)
    }
  },
  set(target,prop,val) {
    if(prop.startsWith('_')){
      throw new Error('不可访问')
    }else{
      // target[prop] = val
      Reflect.set(target, prop, val)
      return true
    }
  },
  deleteProperty(target,prop) { // 拦截删除
    if(prop.startsWith('_')) {
      throw new Error('不可删除')
    } else {
      // delete target[prop]
      Reflect.defineProperty(target,prop)
      return true
    }
  },
  ownKeys(target){
    // return Object.keys(target).filter(key => !key.startsWith('_'))
    return Reflect.ownKeys(target).filter(key => !key.startsWith('_'))
  }
})

// apply 拦截函数操作
let sum = (...args) => {
  let num = 0
  args.forEach(item => {
    num += item
  })
  return num
}

sum = new Proxy(sum, {
  apply(target, ctx, args) {
    return Reflect.apply(target, target, [...args]) * 2
    // return target(...args) * 2
  }
})
console.log(sum(1,2))
console.log(sum.call(null,1,2,3))
console.log(sum.apply(null,[1,2,3]))