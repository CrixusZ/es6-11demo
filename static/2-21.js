const a = 2
const b = 3
// 同步任务
console.log(a+b)
// 异步任务
setTimeout(() => {
  console.log(a+b)
}, 0)

// Ajax的原理
function ajax(url,callback){
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
  xmlhttp.onreadstatechange = function(){
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      var obj = JSON.parse(xmlhttp.responseText)
      console.log(obj)
      callback(obj)
    }
  }
}

// 1.创建XMLHttpRequest对象
var url = 'http://musicapi.xiecheng.live/personalized'
ajax(url,res=>{
  console.log(res)
})