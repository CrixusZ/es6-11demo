// 状态管理
let p = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    if(1){
      resolve()
    }else{
      reject()
    }
  },0)
}).then(()=>{
  console.log('成功')
},()=>{//第二个方法不是必填
  console.log('失败')
})