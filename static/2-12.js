class People {
  // 构造函数
  constructor(name,age){
    this.name = name
    this.age = age
    this._sex = -1
  }
  get sex(){
    if(this._sex === 1){
      return 'male'
    }else if(this._sex === 0){
      return 'female'
    }else{
      return 'console.error();'
    }
  }
  set sex(val){
    if(val===0||val===1){
      this._sex = val
    }
  }
  showName(){
    console.log(this.name)
  }
  // 静态方法
  static getCount(){
    return 5
  }
}
// 静态属性
People.count = 9
let p1 = new People('zengjiahao',31)
console.log(p1)
p1.sex=0
console.log(p1.sex)
class Coder extends People {
  constructor(name,age,company){
    super(name,age)
    this.company = company
  }
  showCompany(){
    console.log(this.company)
  }
}
let c1 = new Coder('haha', 1, 'lezi')
console.log(c1)
c1.showName()
c1.showCompany()
console.log(Coder.getCount())