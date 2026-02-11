
let añadir = document.getElementById('añadir');
let lista = document.getElementById('lista')



añadir.addEventListener('click', (event)=> {
    event.preventDefault();
    
    let elemento = document.getElementById('elemento')
    let newLi = document.createElement('li')
    newLi.innerHTML= `${elemento.value.charAt(0).toUpperCase() + elemento.value.slice(1)} <span class='button' >Eliminar</span>`
    let borrar = newLi.querySelector('.button')

    
    
    borrar.addEventListener('click' , (event) =>{
        event.target.parentElement.remove();
    })

    lista.appendChild(newLi);
    elemento.value = ''
    


})



