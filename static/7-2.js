const oBtn = document.querySelector('#btn')
oBtn.addEventListener('click',()=>{
  import('./module').then(mod => {
    console.log(mod)
    mod.default('static/a.json',res=>{
      console.log(res)
    })
  })
})