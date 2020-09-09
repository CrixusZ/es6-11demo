// 可选链
const user = {
  address: {
    street:'燕子岗南路',
    getNum(){
      return '34号'
    }
  }
}
// const street = user && user.address && user.address.street;
// console.log(street)

// es11
const street = user?.address?.street
console.log(street)
const num = user?.address?.getNum?.()
console.log(num)