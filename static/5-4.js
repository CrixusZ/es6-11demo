new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log(1)
    resolve(1)
  }, 1000)
}).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
}).finally(()=>{
  console.log('finally')
})