let tamaño = document.getElementById("tamaño");
let generar = document.getElementById("generar");
let pwd = document.getElementById("pwd");

const caracteres = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "{",
  "|",
  "}",
  "~",
];

console.log("ej7 cargado");

generar.addEventListener("click", (event) => {

  event.preventDefault();

  if (tamaño.value < 4) {
    alert("El tamaño debe ser mayor o igual que 4");
    tamaño.value = "";
  }
   
  let contraseña = ''
  for ( let i=0;i< tamaño.value ; i++){
    let caract =caracteres[Math.floor(Math.random() *94)]
    contraseña = `${contraseña}${caract}`
  }

  pwd.value= contraseña

});
