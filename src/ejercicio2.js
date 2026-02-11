
let cont = document.getElementById('contador')
let reset = document.getElementById('reset')
let conteo = 0

cont.textContent='Clics: 0'

cont.addEventListener('click', (event)=>{
    event.preventDefault()
    conteo++
    cont.textContent=`Clics: ${conteo} `

})

reset.addEventListener('click', (event)=>{
    event.preventDefault()
    conteo = 0
    cont.textContent=`Clics: ${conteo} `

})