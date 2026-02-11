
let camColor = document.getElementById('camColor')

function getRanColor() {
    var myRandomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return myRandomColor;
}

camColor.addEventListener('click', (event)=>{
    event.preventDefault()
    let color = getRanColor()
    document.body.style.backgroundColor= color;
    camColor.style.color =  color;
    
})