// 状态管理
// let p = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     if(1){
//       resolve()
//     }else{
//       reject()
//     }
//   },0)
// }).then(()=>{
//   console.log('成功')
// },()=>{//第二个方法不是必填
//   console.log('失败')
// })

// let p = new Promise((resolve,reject)=>{
//   console.log(1)
//   resolve()
// })
// console.log(2)
// p.then(res=>{
//   console.log(3)
// })
// // 打印出1,2,3.先执行同步任务，再执行异步then的任务

// let p1 = new Promise((resolve,reject)=>{
//   resolve(1)
// })
// let p2 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve(2)
//   },100)
// })
// let p3 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     reject(3)
//   },100)
// })
// console.log(p1)
// console.log(p2)
// console.log(p3)
// setTimeout(()=>{
//   console.log(p2)
// },2000)
// setTimeout(()=>{
//   console.log(p3)
// },2000)
// p1.then(res=>{
//   console.log(res)
// })
// p2.then(res=>{
//   console.log(res)
// })
// p3.catch(err=>{
//   console.log(err)
// })

function ajax(url,successCallback,fallCallback){
  var xmlhttp
  if(window.XMLHttpRequest){
    xmlhttp = new XMLHttpRequest()
  }else{// 兼容早期浏览器ie6
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
  }
  // 2.发送请求
  xmlhttp.open('GET',url,true)
  xmlhttp.send()
  // 3.服务器响应
  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var obj = JSON.parse(xmlhttp.responseText)
      successCallback && successCallback(obj)
    } else if(xmlhttp.readyState == 4 && xmlhttp.status !== 200){
      fallCallback && fallCallback(xmlhttp.statusText)
    }
  }
}

// new Promise((resolve,reject)=>{
//   ajax('static/a.json', res => {
//     console.log(res)
//     resolve(res)
//   })
// }).then(res => {
//   console.log('a成功')
//   return new Promise((resolve,reject)=>{
//     ajax('static/b.json', res => {
//       console.log(res)
//       resolve(res)
//     })
//   })
// }).then(res => {
//   console.log('b成功')
//   return new Promise((resolve,reject)=>{
//     ajax('static/c.json', res => {
//       console.log(res)
//       resolve(res)
//     })
//   })
// }).then(res => {
//   console.log('c成功')
// })

// new Promise((resolve,reject)=>{
//   console.log(1)
//   resolve(1)
// })
function getPromise(url) {
  return new Promise((resolve,reject)=>{
    ajax(url, res=>{
      resolve(res)
    }, err => {
      reject(err)
    })
  })
}
getPromise('static/a1.json')
  .then(res=>{
    console.log(res)
    return getPromise('static/b.json')
  }, 
  // err => {
  //   console.log(err)
  //   return getPromise('static/b.json')
  // }
  ).then(res=>{
    console.log(res)
    return getPromise('static/c.json')
  }).then(res=>{
    console.log(res)
  }).catch(err => {
    console.log(err)
  })