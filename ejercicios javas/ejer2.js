

 // 1)
// function elMayorDeDos(num1,num2){
//     if(num1>num2){
//         return "el mayor es "+ num1
//     }
//     else{
//        return "el mayor es " + num2
//     }

// }
// console.log(elMayorDeDos(10,20));

// 2)

// function igualODiferente(numero,numero2){
//     if(numero===numero2){
//         return numero+" "+ "es igual a " + numero2
//     }
//     else{
//         return numero+" "+"y"+" " + numero2 +" son diferentes"
//     }
// }
// console.log(igualODiferente(10,15));

 // 3)
// function masGrandeODiferente (numer1,numer2){
//     if(numer1>numer2){
//         return numer1+" "+ "es mas grande que "+" " + numer2    }
//     else if (numer1<numer2){
//         return numer2 +" "+ "es mas grande que "+" "+numer1 
//     }
//     else{
//         return "son iguales"
//     }


// }
// console.log(masGrandeODiferente (50,20));
// // 4)

// function elMasChico(numerouno,numerodos,numerotres){
//     if(numerouno < numerodos && numerouno < numerotres){
//         return "el mas chico es "+" " + numerouno
//     }
//     else if(numerodos < numerouno && numerodos < numerotres){
//         "el mas chico es"+" "+ numerodos
//     }
//     else{
//         return "el mas chico es el numero "+" "+numerotres
//     }
// }

// // 5)

// const persona1={ 
// nombre:"Dario Garcia",
// altura:170 ,
// edad:32
// }

// const persona2={
//     nombre:"pedro",
//     altura:180,
//     edad:35
// }

//     if(persona1.altura > persona2.altura){
//         alert ("el mas alto es  "+ persona1.nombre)
//     }
//     else{ alert (  "el mas alto es " + persona2.nombre )
//     }
    
//     if(persona1.edad > persona2.edad){
//             alert (  "el mayor de edad es "+ persona1.nombre)
//         }
//         else{
//             alert  ("el mayor de edad es "+ persona2.nombre)
//         }
    




// // 6)


// let name= prompt("ingresa tu nombre ")
// let age= prompt("ingresa tu edad")
// let height= prompt("ingresa tu altura")
// let vision =prompt("ingresa tus puntos de vision")


        
//             if(age>17 && height>150 && vision>7){
//             alert  ("esta capacitado para conducir ")
//             }
//             else{
//                 alert ("usted no puede conducir ")
//             }
        
        


// 7)

// let nombre=prompt("ingrese su nombre")
// let pase=prompt("ingrese su pase (seas vip o normal)")
// let entrada=prompt("tiene entrada?")
// let miNombre="Dario"

// if(nombre===miNombre || pase==="vip"){
//     alert("tiene ingreso libre , Bienvenido..")
// }
// else if (entrada==="si"||entrada==="s"||entrada===true){
//     let respuesta=prompt("desea usarla?")
//     if(respuesta==="si"){
//         alert("bienvenido..")
//     }
// }
//     else{
//         let respuesta2=prompt("desea comprar una?")
//         if(respuesta2==="si"){
//             let respuesta3=prompt("ingrese su dindero disponible por favor")
//             if(respuesta3>=1000){
//                 alert("venta de entrada aprobada, Bienvenido")
                
//             }
//             else{
//                 alert("dindero insufiiente, hasta otra oprtiunidad")
//             }
//         }
//         else{
//             alert("rechazo de venta ,hasta luego disfrute su noche")
//         }
//     }






// //  8)           

// let numeroElegido=5

// for (let intentos =3;intentos>0;intentos--){
//     let numeroIncognita = prompt (  ("adivina el numero del 1 al 10 , tienes"+" ")+intentos+(" "+ "intentos") )
//     if(numeroIncognita>numeroElegido){
//         alert("el numero que ingresaste es mayor")

//     }
//     else if(numeroIncognita<numeroElegido){ 
//         alert("el numero que ingresaste en menor")
//     }
//     else if (numeroIncognita==numeroElegido){
//         alert("felicidades!!! acertaste...")
//         break;
//     }
//      if (intentos===1) {
//         alert ("te quedaste sin posibilidades, gracias por participar ")
//     }
// }

// 9)

// let edad=prompt("inrese su edad por favor")

// if(edad>=0 && edad<13){
//     alert ("eres un infante")

// }
// else if (edad>12 && edad<19){
//     alert ("eres un adolecente")
// }
// else if (edad>18 && edad<46){
//     alert ("eres un adolecente")
// }
// else if (edad>100){ 
//     alert ("esa es realmente tu edad ?")
// }
// else{
//     alert ("eres un anciano")
// }

// 10)

// let jugador1=prompt("jugador 1, eliga piedra , papel o tijera")
// let jugador2=prompt("jugador 2, eliga piedra , papel o tijera")

// if(jugador1==="piedra" && jugador2 ==="tijera" ||jugador1==="papel" && jugador2 ==="piedra"||jugador1==="tijera" && jugador2=== "papel" ){
//     alert("el jugador 1 es el ganador ")
// }
// else if(jugador2==="piedra" && jugador1 ==="tijera" ||jugador2==="papel" && jugador1 ==="piedra"||jugador2==="tijera" && jugador1=== "papel" ){
//     alert("el jugador 2 es el ganador ")
// }
// else if (jugador1==="piedra" && jugador2 ==="piedra" ||jugador1==="papel" && jugador2 ==="papel"||jugador1==="tijera" && jugador2=== "tijera" ){
//     alert("el resultado es EMPATE ")
// }
// else{
//     alert("uno de los jugadore ha hecho trampa")
// }

// 11)

// let color=prompt("seleccione un color ")

// switch (color) {
//     case "blanco" || "negro" :
//         alert("falta de color ")
//         break;

//     case "verde":
//         alert("el color de la naturaleza")
//         break;
//     case "verde":
//         alert("el color de la naturaleza")
//         break;
//     case "azul":
//         alert("el color del agua")
//         break;
//     case "amarillo":
//         alert("el color del sol")
//         break;
//     case "rojo":
//         alert("el color del fuego")
//         break;
//     case "marron":
//         alert("el color de la tierra")
//         break;
//     default:
//         alert("exelente eleccion , no lo teniamos pensado ")
//         break;
// }
// 12)

// let valor1=parseInt(prompt("ingrese un numero "))
// let valor2=parseInt(prompt("ingrese el segundo numero "))
// let operacion=prompt("seleccione una operacion")

// if(operacion==="suma"){
//     let total=valor1 + valor2
//     alert("la suma de los numeros es "+total)
// }
// else if (operacion==="resta"){
//     total=valor1 - valor2
//     alert("la resta de la operacion es "+total)
// }
// else if (operacion==="multiplicacion") {
//     total=valor1 * valor2
//     alert("la multiplicacion de los numeros es "+total)
// }else if(operacion==="division"){
//     total=valor1/valor2
//     if(valor1===0||valor2===0 ){
//         alert("ERROR, la division es imposible")
//     }
//     else{
//         alert("la division de los numeros es "+total)
//     }
// }

// 13)

// let nombre=prompt("ingrese sus datos , para llenar el dni. empezemos con su nombre ")
// let nombre2=prompt("ahora su segundo nombre ")
// let apellido=prompt("ahora su apelldio")
// let dninum=prompt("ingrese su numero de DNI")
// let ciudad=prompt("ingrese su ciudad")
// let calle=prompt("ingrese el nombre de la calle donde vive ")
// let numDireccion=prompt("ingrese su direccion ")

// const dni={
//     nombre,
//     nombre2,
//     apellido,
//     dninum,
//     ciudad,
//     calle,
//     numDireccion

// }
// alert("registro existoso, verifique por consola")
// console.table(dni)
