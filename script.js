const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const p = document.querySelector('p');
const pResult= document.querySelector('#result')
const btn = document.querySelector('#btnCalcular');
const form = document.querySelector('#form')
// h1.innerText= 'Prueba inserción HTML <br> puse un br';
// h1.innerHTML += 'otra linea dentro de H1';

// console.log(h1);
// console.log(h1.getAttribute('pantalla')); //obtiene e imprime el vlr del atributo pantalla
// h1.setAttribute('pantalla','verde'); //cambia e valor del atributo pantalla a 'verde'
// console.log(h1.getAttribute('pantalla'));//obtiene e imprime el vlr del atributo pantalla

// h1.classList.add('rojo', 'azul') //Añade rojo y azul al atributo class
// h1.classList.remove('rojo')// Elimina la clase rojo del attr class

// input.value='7654';//Cambiar el valor del input.
// const img = document.createElement('img')
// img.setAttribute('src', 'https://img.icons8.com/?size=2x&id=JgMkyDIhH9gy&format=png')
// console.log(img);
// p.append(img);
//Crear un nuevo elemento desde javascript 


//Añadir evenLisetener cuando se hace clic a un btn sin usar la etiqueta HTL form.

// btn.addEventListener('click', btnCalcular);

// function btnCalcular(){
//     const resultado = parseInt(input1.value) + parseInt(input2.value);
//     pResult.innerHTML = resultado;
// }

//Hacer clic al boton para enviar información con la etiqueta HTML <form>

form.addEventListener('submit', sumarValuesInput)

function sumarValuesInput(event) {
    console.log(event);
    event.preventDefault(); // Evita que la página se recargue cuando se usa un form.
    const resultado = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerHTML = resultado;
}
