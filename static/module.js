// export const a = 1
// export const b = 5
// export const sum = (a,b)=>{
//   return a+b
// }
// const obj = {
//   name: 'zengjiahao'
// }

// export class People {
//   constructor(name){
//     this.name = name
//   }
//   showName(){
//     console.log(this.name)
//   }
// }
// const a = 1
// export default a
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
export default ajax

