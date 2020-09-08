const oBtn = document.querySelector('#btn')
oBtn.addEventListener('click',()=>{
  import('./module').then(mod => {
    console.log(mod)
  })
})