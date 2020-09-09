// 就算有失败也会顺利得到结果
Promise.allSettled([
  Promise.resolve({
    code:200,
    data:[1,2,3]
  }),
  Promise.reject({
    code:500,
    data:[]
  }),
  Promise.resolve({
    code:200,
    data:[7,8,9]
  }),
]).then(res=>{
  console.log(res)
  const data = res.filter(item => item.status === 'fulfilled')
  console.log(data)
}).catch(err=>{
  console.log('失败')
})

// 有一个失败都显示失败
Promise.all([
  Promise.resolve({
    code:200,
    data:[1,2,3]
  }),
  Promise.reject({
    code:500,
    data:[]
  }),
  Promise.resolve({
    code:200,
    data:[7,8,9]
  }),
]).then(res=>{
  console.log(res)
 
  console.log(data)
}).catch(err=>{
  console.log('失败')
})