// es10 catch的参数err是可以不写的，之前的版本是必填参数
const validJSON = json => {
  try{
    JSON.parse(json)
    return true
  // } catch(e){
  } catch {
    return false
  }
}
const json = '{"name":"zengjiahao","course":js"}'
console.log(validJSON(json))