// // ES5 代理
// let obj = {}
// let newVal = ''
// Object.defineProperty(obj, 'name', {
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

// ES6 代理
let obj1 = {}
let p = new Proxy(obj1, {})
p.name = 'zengjaihao'
console.log(obj1.name)
for(let key in obj1){
  console.log(key)
}

// get
let arr = [7,8,9]
arr = new Proxy(arr, {
  get(target, prop) {
    console.log(target, prop)
    return prop in target ? target[prop] : 'error'
  }
})
console.log(arr[1])
console.log(arr[10])

let dict = {
  'hello': '你好',
  'world': '世界'
}
dict = new Proxy(dict, {
  get(target, prop){
    return prop in target ? target[prop] : prop
  }
})
console.log(dict['world'])
console.log(dict['zengjiahao'])

// set
let arr1 = []
arr1 = new Proxy(arr1, {
  // 目标对象，属性，设置值
  set(target, prop, val) {
    if(typeof val === 'number') {
      target[prop] = val
      return true
    }else{
      // target[prop] = val
      return false
    }
  }
})
arr1.push(5)
arr1.push(6)
// arr1.push('6')
console.log(arr1[0],arr1[1],arr1[2],arr1.length)

// has
let range = {
  start: 1,
  end: 5
}

range = new Proxy(range, {
  has(target, prop){
    return prop >= target.start && prop <= target.end
  }
})

console.log(2 in range)
console.log(12 in range)

// ownKeys
let obj2 = {
  name: 'zengjiahao',
  [Symbol('es')]: 'es6'
}
console.log(Object.getOwnPropertyNames(obj2))
console.log(Object.getOwnPropertySymbols(obj2))
console.log(Object.keys(obj2))

let useInfo = {
  userName: 'zengjiahao',
  age: 31,
  _password: '****'
}
useInfo = new Proxy(useInfo, {
  ownKeys(target) {
    return Object.keys(target).filter(key => !key.startsWith('_'))
  }
})
for (let key in useInfo) {
  console.log(key)
}

let user = {
  userName: 'zengjiahao',
  age: 31,
  _password: '****'
}
user = new Proxy(user, {
  get(target, prop){
    if(prop.startsWith('_')){
      throw new Error('不可访问')
    }else{
      return target[prop]
    }
  },
  set(target,prop,val) {
    if(prop.startsWith('_')){
      throw new Error('不可访问')
    }else{
      target[prop] = val
      return true
    }
  },
  deleteProperty(target,prop) { // 拦截删除
    if(prop.startsWith('_')) {
      throw new Error('不可删除')
    } else {
      delete target[prop]
      return true
    }
  },
  ownKeys(target){
    return Object.keys(target).filter(key => !key.startsWith('_'))
  }
})
console.log(user.age)
try {
  user._password = 'xxx'
} catch(e) {
  console.log(e.message)
}
try {
  delete user._password
} catch(e) {
  console.log(e.message)
}
for(let key in user){
  console.log(key)
}

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
    return target(...args) * 2
  }
})
console.log(sum.call(null, 1, 2, 3))
console.log(sum.apply(null, [2,3,4]))

// construct 拦截new
let User = class {
  constructor(name) {
    this.name = name
  }
}
User = new Proxy(User, {
  construct(target,args,newTarget){
    return new target(...args)
  }
})
console.log(new User('zengjiahao'))