let edad = parseInt(prompt("¿Qué edad tienes?"))
if (edad < 18) {
    while(true){
    alert("¡Eres menor! No puedes entrar")
}
}
else{
    alert("Adentro! Eres mayor")
}


let rand = Math.round((Math.random))

let numbers = Math.random()
let captcha = prompt("Ingresa los siguientes números para comprobar que no eres un robot: " + numbers)


while(captcha != numbers){
alert("El intento ha sido erroneo")
captcha = prompt("Intentalo de nuevo: " + numbers)
}
nombre = prompt("¿Cuál es tu nombre?")
welcome = alert("Bienvenid@ a Panzo " + nombre)
let i = 0;
for(i = 0; i < 4; i++){
options = prompt("Ahora dinos " + nombre + " qué acción deseas realizar? \n1. Saluda\n2. Reir\n3. Llorar\n4. Jugar ")


switch (options) {
    case "1":
        saludar(nombre)
        break;

        case "2":
        reir(nombre)
            break;

            case "3":
        llorar(nombre)
                break;

                case "4":
        jugar(nombre)
                    break;

    default:
        alert("Hemos detectado un error")
        break;
}
}
//FUNCION SALUDAR
function saludar(name){
    alert(name + " los saluda")
    }

//FUNCION REIR
function reir(name){
    alert(name + " comienza a reirse")
    }
    //FUNCION LLORAR
function llorar(name){
    alert(name + " peló cebolla")
    }

    //FUNCION JUGAR
function jugar(name){
    alert(name + " abrió el lol")
    }

