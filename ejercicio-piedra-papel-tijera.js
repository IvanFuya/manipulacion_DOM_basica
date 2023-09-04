var opc1 = "Piedra";
var opc2 = "Papel";
var opc3 = "Tijera";

function validarJuego(seleccionUsuario){
    seleccionMaquina = "Tijera";
    if(seleccionUsuario == "Piedra"){
        console.log("Ganaste con piedra!!! seleccioné "+ seleccionMaquina)
    } else if(seleccionUsuario == "Papel"){
        console.log("Perdiste con Papel!!! seleccioné "+ seleccionMaquina)
    }else if(seleccionUsuario == "Tijera"){
        console.log("Es empate con Tijera!!! seleccioné "+ seleccionMaquina)
    } else{
        console.log("Opción inválida")
    }

}


var op1Piedra = "Piedra";
var op2Papel = "Papel";
var op3Tijera = "Tijera";



function validarJuegoCpu(usuario, cpu) {
    if (usuario != cpu) {
        if (usuario == op1Piedra && cpu == op3Tijera) {
            console.log("Usuario ganó con " + op1Piedra)
        } else if (usuario == op2Papel && cpu == op1Piedra) {
            console.log("Usuario ganó con " + op2Papel)
        }else if (usuario==op3Tijera && cpu==op2Papel){
            console.log("Usuario ganó con " + op3Tijera)
        }else{
            console.log("La CPU ganó")
        }

    } else if (usuario === cpu) {
        console.log("Es empate!!!")
    }
}


function validarPPTSwitch(usuario, pc){
    switch(usuario){
        case pc:{
            console.log("Es un empate");
            break;
        }
        case "Piedra":{
            if (pc=="Tijera"){
                console.log("Usuario GANÓ con Piedra");
            }
             else{
                console.log("usuario perdió")
            }
            break;
        }
        case "Papel":{
            if(pc=="Piedra"){
                console.log("Usuario ganó con Papel");
            }
             else{
                console.log("usuario perdió")
            }
            break;
        }
        case "Tijera":{
            if (pc == "Papel"){
                console.log("Usuario ganó con Tijera")
            }
            else{
                console.log("usuario perdió")
            }
            break;
        }
        default:{
            console.log("Opción inválida")
        }
    }
}

function validarArticulo(articulo){
    switch(articulo){
        case "computadora": {
            return "Con mi computadora puedo programar usando JavaScript";
            break;
        }
        case "celular":{
            return "En mi celular puedo aprender usando la app de Platzi";
            break;
        }
        case "cable":{
            return"¡Hay un cable en mi bota!";
            break;
        }

        default: {
            return "Artículo no encontrado"
        }

    }
}

if (false == a) {
    console.log(false == true)
} else {
    console.log(true === !false)
}

export function solution(arraySecreto) {
    // Tu código aquí 👈
    if (typeof arraySecreto[0]=="string")
    return typeof arraySecreto[0]=="string" ? true : false 
  }

  for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante)
  }



//   En este desafío tu función solution recibirá 3 parámetros:

// estudiantes: un array de strings con varios nombres de estudiantes.
// deathCount: un número entero.
// nuevo: un string con el nombre de un nuevo estudiante (que no aparecía antes en el array).
// Tu función debe retornar un array de elementos con las siguientes indicaciones:
export function solution(estudiantes, deathCount, nuevo) {
    // Tu código aquí 👈
    var arrayEstudiantes=[];
    arrayEstudiantes = estudiantes;
    
    if (deathCount>0){
        for(i=0; i<deathCount; i++){
            arrayEstudiantes.pop;
        }
        return arrayEstudiantes.push(nuevo)
    }
    else{
        return arrayEstudiantes.push(nuevo)
    }

  }
  
// Si el parámetro deathCount es igual a 0, debes retornar un array con los mismos elementos que tenía el 
// array de estudiantes y agregando el elemento nuevo al final.

// Si el parámetro deathCount es mayor a 0, debes retornar un array con los mismos elementos del array estudiantes 
// pero eliminando la cantidad de estudiantes que indica el número deathCount y agregando el elemento nuevo al final.

// 💡 Aclaración: NO debes eliminar TODOS los elementos del array original de estudiantes, sino eliminar la cantidad 
// de estudiantes que indica el número deathCount.



//Función cosntructora:
function carro(marca, modelo, annio){
    this.marca = marca,
    this.modelo= modelo,
    this.annio= annio
}

//Vamos a crear los 30 carros

function crear30Carros(){
    var cantidadCarros = 0;
    var carrosNuevos=[];
    while(cantidadCarros<30){
        var carroNuevo = new carro("marca "+cantidadCarros,"modelo "+cantidadCarros,"19"+cantidadCarros);
        carrosNuevos.push(carroNuevo);
        cantidadCarros++;
    }

    console.log(carrosNuevos)
}


// En este desafío vas a recibir un objeto car como parámetro de la función solution.

// Este objeto puede contener diferentes propiedades. Debes asegurarte de que tenga la propiedad 
// licensePlate (la placa del auto). Si sí la tiene, devuelve el objeto original con la propiedad 
// drivingLicense como true. Si no la tiene, devuelve el objeto original con la propiedad drivingLicense 
// como false.
function car(color, brand, licensePlate, drivingLicense){
    this.color= color,
    this.brand = brand,
    this.licensePlate= licensePlate,
    this.drivingLicense = drivingLicense
}
function solution(car) {
    // Tu código aquí 👈
    if (car.licensePlate != undefined && car.licensePlate != null){
        car.drivingLicense= true;
    }else{
        car.drivingLicense = false
    }

    return car;
  }
// Nombre:  nombre string
// Apellido: apellido string
// Nombre de usuario en Platzi: nombreUsuario string
// Edad: edad int
// Correo electrónico: email string
// Mayor de edad: mayorDeEdad boolean
// Dinero ahorrado: dineroAhorrado int
// Deudas: deudas int

var nombre ="";
var apellido ="";
var nombreUsuario="";
var edad = 0;
var email = "";
var mayorDeEdad = false;
var dineroAhorrado = 0;
var deudas =0;

console.log(nombre+" "+apellido)
console.log(dineroAhorrado-deudas)


function pruebasSuscripcion(tipoSucripcion) {
    const tipoDeSuscripcion = tipoSucripcion;

    switch (tipoDeSuscripcion) {
        case "Free":
            console.log("Solo puedes tomar los cursos gratis");
            break;
        case "Basic":
            console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
            break;
        case "Expert":
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
            break;
        case "ExpertPlus":
            console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
            break;
    }
}

function pruebasSuscripcionIf(tipoSucripcion) {
    if (tipoSucripcion == "Free"){
        console.log("Solo puedes tomar los cursos gratis");
    }else if (tipoSucripcion == "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }else if (tipoSucripcion == "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }else{
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
}


for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
function i(){
    var i;
    while(i<5){
        console.log("El valor de i es "+i);
        i++;
    }
}



for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
function i2() {
    var i = 10
    while (i >= 2) {
        i--
        console.log("El valor de i es: " + i);
    }
}

const arrayPadre = [
                      ['Ivan','Fernando',3104779210],
                      ['Carlos','Andrés',3104779211],
                      ['Fredy','Alejandro',3104779212],
                      ['Nancy','Lorena',3104779213]
                    ];

//La función va a recibir el array previamente creado.
function recorrerArrayAnidado(array){
    for(let i = 0; i<array.length; i++){// Creamos un for que va a recorrer el "Array padre"

        // Creo una variable arrayHijo para que me almacene la lista que está en la posición *i* del array padre
        let arrayHijo = array[i]; 

        //Ahora lo que vamos a recorrer es el array hijo
        for(let j = 0; j<arrayHijo.length; j++){
            //Para imprimir sus valores uno a uno
            console.log(arrayHijo[j])
        
        }        
    }
}