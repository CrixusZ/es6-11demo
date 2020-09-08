const str = `
  <html>
    <body>
      <div>第一个div</div>
      <p>这是p</p>
      <div>第二个div</div>
      <span>这是span</span>
    </body>
  </html>
`
// exec g
function selectDiv(regExp, str){
  let matches = []
  while(true){
    const match = regExp.exec(str)
    if(match === null){
      break
    }
    console.log(match)
    matches.push(match[1])
  }
  return matches
}
// 括号是捕获组
const regExp = /<div>(.*)<\/div>/g
const res = selectDiv(regExp,str)
console.log(res)