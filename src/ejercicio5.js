
let sumar = document.getElementById('sumar')
let restar = document.getElementById('restar')
let multiplicar = document.getElementById('multiplicar')
let dividir = document.getElementById('dividir')
let result = document.getElementById('result')
let signo = document.getElementById('signo')
let n1= document.getElementById('n1')
let n2= document.getElementById('n2')


sumar.addEventListener('click',(event)=>{
    event.preventDefault()
    signo.textContent= '+'
    let suma = Number(n1.value) + Number(n2.value)
    result.value= suma
})

restar.addEventListener('click',(event)=>{
    event.preventDefault()
    signo.textContent= '-'
    let resta = Number(n1.value) - Number(n2.value)
    result.value= resta
})


multiplicar.addEventListener('click',(event)=>{
    event.preventDefault()
    signo.textContent= 'x'
    let  multiplicar = Number(n1.value) * Number(n2.value)
    result.value= multiplicar
})

dividir.addEventListener('click',(event)=>{
    event.preventDefault()
    signo.textContent= '/'
    let division = Number(n1.value) / Number(n2.value)
    result.value= division
})

