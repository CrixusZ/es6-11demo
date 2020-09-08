// JSON 超集 就是能在es加上分隔符 \u2029段分隔符，\u2028 行分隔符
eval('var str = "zengjiahao";\u2029 function foo(){return str}')
console.log(foo())

// ES10之前，JSON.stringfy()显示只能取值0xD800~0xDfff
// ES10以后能支持更大范围的字符
console.log(JSON.stringify('\uD83D\uDE0E'))