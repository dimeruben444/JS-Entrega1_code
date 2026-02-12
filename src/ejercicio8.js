
let text = document.getElementById('text')
let ncaracteres = document.getElementById('ncaracteres')


document.addEventListener('keyup',()=>{
    
    ncaracteres.value=(text.value.replace(/\s/g, "").length)
})