let añadirBtn = document.getElementById('añadirBtn');
let lista = document.getElementById('lista')
let borrarBtn = document.getElementById('borrarBtn')
let tareaInput = document.getElementById('tarea')


let tareas = JSON.parse(localStorage.getItem("tareas")) || []; 

tareas.forEach(t => crearLi(t.texto, t.completada));

añadirBtn.addEventListener('click', (event)=> {
    event.preventDefault();
    
    const texto = tareaInput.value.trim();
    
    if (texto === ""){
        alert('No puede añadir una nueva tarea vacia')

    }else{

        const textoFormateado = texto.charAt(0).toUpperCase() + texto.slice(1);

        crearLi(textoFormateado, false); 

        tareas.push({ texto: textoFormateado, completada: false });
        localStorage.setItem("tareas", JSON.stringify(tareas));

        tareaInput.value = '';
    }
    
    
})

borrarBtn.addEventListener('click',(event)=>{
    event.preventDefault()

    const items = [...document.querySelectorAll('#lista li')];

    tareas = tareas.filter((t, index) => { 
        const li = items[index]; 
        const cb = li.querySelector("input[type='checkbox']"); 
        return !cb.checked; 
    }); 

    localStorage.setItem("tareas", JSON.stringify(tareas)); 

    lista.innerHTML = ""; 
    tareas.forEach(t => crearLi(t.texto, t.completada));
})


function crearLi(texto, completada) { 
    let newLi = document.createElement('li');

    newLi.innerHTML = `
        <input type="checkbox" ${completada ? "checked" : ""}> 
        <span>${texto}</span>
    `; 

    const checkbox = newLi.querySelector("input")
    
    checkbox.addEventListener("change", () => { 

        const index = [...lista.children].indexOf(newLi); 
        tareas[index].completada = checkbox.checked; 
        localStorage.setItem("tareas", JSON.stringify(tareas)); 
    }); 

    lista.appendChild(newLi); 
}






