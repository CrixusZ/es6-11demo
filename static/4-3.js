const obj = {
  name: 'zengjiahao',
  web:'www.zengjiahao.com',
  course:'webdevelop'
}
// 获取对象自身属性的描述
const desc = Object.getOwnPropertyDescriptors(obj)
console.log(desc)
//getOwnPropertyDescriptors(obj)//输出所有属性
//getOwnPropertyDescriptor(obj, 对应属性)//输出对应属性
const obj1 = {}
//设置属性
Object.defineProperty(obj1, 'name', {
  value:'hahaha',
  writable:false,//是否可以改变
  configurable:false,//是否可以通过delete删除属性
  enumerable:false,//是否通过for in 遍历

})
Reflect.defineProperty(obj1, 'age', {
  value:'hahaha',
  writable:true,//是否可以改变
  configurable:true,//是否可以通过delete删除属性
  enumerable:true,//是否通过for in 遍历
})
const desc1 = Object.getOwnPropertyDescriptors(obj1)
console.log(desc1)