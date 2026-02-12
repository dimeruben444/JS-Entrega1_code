

let buscador = document.getElementById('buscar')
let listaElements = document.querySelectorAll('#lista li')
let lista = document.getElementById('lista')

//se guardan los elementos de la lista en arrlist
let arraylist = []
listaElements.forEach(element => {
    arraylist.push(element.textContent.toLowerCase())
});




//cada vez que se pulsa una tecla
buscador.addEventListener('keyup',(event)=>{
    let estan =[] //aray estan se inicia vacio
    lista.innerHTML=''//la lista del html se vacia



    //coje cada elemento de array list y comprueva si coincide con lo que ha metido el usuario y lo mete en el array estan 
    arraylist.forEach(element => {
        if(element.includes(buscador.value.toLowerCase().trim())){

            estan.push(element)
        } 
        
    });


    //por cada elemento del array estan crea un li y lo mete en el ul 
    estan.forEach(element => {
        let newli= document.createElement('li')

        newli.textContent = `${element.charAt(0).toUpperCase() + element.slice(1)}`;

        lista.appendChild(newli)
    });
})







