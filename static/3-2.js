// 2 的 10次方
function pow(x,y){
  let res = 1
  for(let i =0;i<y;i++){
    res *= x
  }
  return res
}
console.log(pow(2,10))
console.log(Math.pow(2,10))
//** 幂运算符 底数**指数 === Math.pow(底数,指数)
console.log(2 ** 10)