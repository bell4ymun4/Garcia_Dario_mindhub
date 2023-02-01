// // 1)
// let miNombre = "Dario"
// console.log(miNombre);
// // 2)
// let miApellido = "Garcia"
// console.log(miApellido);
// // 3)
// let miEdad = 32
// console.log(miEdad);
// // 4)
// let miMascota = "coquito"
// console.log(miMascota);
// // 5)
// let edadMascota = 2 
// console.log(edadMascota);
// // 6)
// console.log(miNombre);
// console.log(miApellido);
// console.log(miEdad);
// console.log(miMascota);
// console.log(edadMascota);

// // 7)
// let miNombreCompleto =  miNombre+" "+ miApellido
// console.log(miNombreCompleto);
// // 8)
// let textoPresentacion ="hola, mi nombre es "+ miNombreCompleto+" "+ "y tengo "+miEdad+" "+ "años, tengo un perro llamado "+miMascota+" "+"que tiene "+edadMascota
// console.log(textoPresentacion);
// // 9)
// let sumaEdades = miEdad + edadMascota
// console.log(sumaEdades);

// let restaEdades = miEdad - edadMascota
// console.log(restaEdades);

// let multiplicaEdades = miEdad * edadMascota
// console.log(multiplicaEdades);

// let divieEdades = miEdad / edadMascota
// console.log(divieEdades);

//  10)
// // let suNombre=prompt("ingrese su nombre ")// 
// // let suApellido=prompt("ingrese su apellido")
// // let suEdad=prompt("ingrese su edad")
// // let suMascota=prompt("ingrese el nombre de su mascota")
// // let edadSuMascota=prompt("ingree la edad de su mascota")

// // console.log(suNombre);
// // console.log(suApellido);
// // console.log(suEdad);
// // console.log(suMascota);
// // console.log(edadSuMascota);

// // let suNombreCompleto =  suNombre+" "+ suApellido
// // console.log(miNombreCompleto);

// // let suTextoPresentacion ="hola, mi nombre es "+ suNombreCompleto+" "+ "y tengo "+suEdad+" "+ "años, tengo un perro llamado "+suMascota+" "+"que tiene "+edadSuMascota
// // console.log(textoPresentacion);

// // let sumaSusEdades = suEdad + edadSuMascota
// // console.log(sumaSusEdades);

// // 11)
// const alumno={
//     nombre:"Dario",
//     edad: 32,
//     equipo:"san lorenzo",
//     provincia:"Buenos Aires",
//     signo: "acuario"

// }
// console.table(alumno)

// console.log(alumno.nombre);
// console.log(alumno.edad);
// console.log(alumno.provincia)
// console.log(alumno.equipo);
// console.log(alumno.signo);

// // 12)
// let mascota={
//     nombre:"coquito",
//     edad:2,
//     sexo:"macho",
//     color:"amarillo",
//     tamaño:"pequeño"
// }
// console.table(mascota)

// console.log(mascota.nombre);
// console.log(mascota.edad);
// console.log(mascota.sexo)
// console.log(mascota.color);
// console.log(mascota.tamaño);

// // 13)
// const frutas = [ "banana","naranja","manzana","tomate","durazno" ]
// console.log(frutas);
// console.log(frutas[0])
// console.log(frutas[1])
// console.log(frutas[2])
// console.log(frutas[3])
// console.log(frutas[4])

// // 14)
// let numeros=[5,4,3,2,1,]
// console.log(numeros);
// console.log(numeros[0])
// console.log(numeros[1])
// console.log(numeros[2])
// console.log(numeros[3])
// console.log(numeros[4])

// // 15)
// let familia=["papa","mama","hijo","hija","abuelo"]
// console.log(familia);
// console.log(familia[0])
// console.log(familia[1])
// console.log(familia[2])
// console.log(familia[3])
// console.log(familia[4])

// // 16)
// const textoAleatorio = frutas[1]+" " +numeros[3]+" "+familia[4]
// console.log(textoAleatorio);

// // 17)
// const edad1=prompt("ingrese su edad" );
// const edad2=prompt("ingrese la edad de su compañero");

// if(edad1===edad2){
//     console.log("Mi edad es igual a la de mi compañero: true");
//     console.log("mi edad es mayor a la de mi compañero:false");
//     console.log("mi edad es menor a la de mi compañero:false");
// }
// else if (edad1>edad2){
//     console.log("Mi edad es igual a la de mi compañero:false");
//     console.log("mi edad es mayor a la de mi compañero:true");
//     console.log("mi edad es menor a la de mi compañero:false");
// }
// else{
//     console.log("Mi edad es igual a la de mi compañero: false");
//     console.log("mi edad es mayor a la de mi compañero:false");
//     console.log("mi edad es menor a la de mi compañero:true");
// }

// // 18)
// if(edad1=>18){
//     console.log("soy mayor de edad, tengo ", edad1);
// }

// // 19)
// const edad=prompt("ingresa tu edad ")
// const altura=prompt("ingresa tu altura")


// const puedeSubir=("puede suber a la atraccion , tiene "+edad+" "+"y mide "+altura)

// if(edad>6&&altura>120){
//     console.log(puedeSubir);
// }
// else{
//     console.log("no puede subir , por no cumplir con los requisitos");

// }
// // 20)
// const pase=prompt("intriduzca su pase ya sea vip,normal o limitado ")
// const saldo=prompt("introduzca su saldo")
// const puedePasar=("ustedes tiene pase vip o saldo mayor a 1000 PUEDE PASAR")
// if (pase==="vip"|| saldo>1000){
//     console.log(puedePasar);
// }
// else{
//     console.log("NO PUEDE PASAR");
// }