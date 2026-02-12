

let horas = document.getElementById('horas')
let minutos = document.getElementById('minutos')
let segundos = document.getElementById('segundos')

let start = document.getElementById('start')
let stop = document.getElementById('stop')
let reset = document.getElementById('reset')


let contHoras = 0
let contMinutos = 0
let contSegundos = 0


segundos.value=contSegundos
minutos.value=contMinutos
horas.value=contHoras

start.addEventListener('click', (event)=>{
    event.preventDefault()
    
    let segundero = setInterval(()=>{
        contSegundos++
        segundos.value= contSegundos

        if(contSegundos === 60){
            contSegundos = 0
            contMinutos++
            minutos.value=contMinutos
        }

        if(contMinutos === 60){
            contMinutos = 0
            minutos.value=contMinutos
            contHoras++
            horas.value=contHoras
        }
        
    },1000)

    stop.addEventListener('click', (event)=>{
        event.preventDefault()
        clearInterval(segundero)
    })

    reset.addEventListener('click', (event)=>{
        event.preventDefault()
        clearInterval(segundero)
        contHoras = 0
        contMinutos = 0
        contSegundos = 0
        segundos.value=contSegundos
        minutos.value=contMinutos
        horas.value=contHoras

    })
})



