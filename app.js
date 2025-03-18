// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Definición del esquema general de las interacciones de la aplicación, Aqui se empiezan a definir los pasos iniciales y llamar las funciones que se van a utilizar.

// 4. El usuario debe poder buscar un amigo en la lista.
// 5. El usuario debe poder eliminar un amigo de la lista.
// 6. El usuario debe poder editar un amigo de la lista.
// 7. El usuario debe poder visualizar un mensaje de error si intenta realizar una acción sin amigos en la lista.
// 8. El usuario debe poder visualizar un mensaje de error si intenta agregar un amigo sin nombre.
// 9. El usuario debe poder visualizar un mensaje de error si intenta buscar un amigo sin nombre.
// 10. El usuario debe poder visualizar un mensaje de error si intenta eliminar un amigo sin nombre.
// 11. El usuario debe poder visualizar un mensaje de error si intenta editar un amigo sin nombre.
// 12. El usuario debe poder visualizar un mensaje de error si intenta editar un amigo que no está en la lista.

let amigo = []; //Array de amigos

// 1. El usuario debe poder ingresar el nombre de un amigo en un input y agregarlo a una lista de amigos.
function agregarAmigo() {
   let inputAmigo = document.getElementById("amigo");
   let nombreAmigo = inputAmigo.value;

   if (!nombreAmigo) { 
    alert("Debes ingresar un nombre de amigo");
    return;
   }
   amigo.push(nombreAmigo);
   inputAmigo.value = "";
   inputAmigo.focus();
   renderizarAmigos();
}

// 2. El usuario debe poder visualizar la lista de amigos.
function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigo.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigo[i];
        listaAmigos.appendChild(li);
    }
}

// 3. El usuario debe poder sortear un amigo de la lista.
function sortearAmigo() {
    if (amigo.length === 0) {
        alert("Debes ingresar al menos un amigo");
        return;
        
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    alert("El amigo sorteado es: " + amigoSorteado);
    console.log(amigoSorteado);
}

/*
function buscarAmigo() {
    let inputBuscar = document.getElementById("buscar");
    let nombreBuscar = inputBuscar.value;
    let encontrado = false;

    for (let i = 0; i < amigo.length; i++) {
        if (nombreBuscar === amigo[i]) {
            encontrado = true;
            break;
        }
    }

    if (encontrado) {
        alert("Tu amigo está en la lista");
    } else {
        alert("Tu amigo no está en la lista");
    }
    inputBuscar.value = "";
    inputBuscar.focus();
}



function ( ) {
    let inputEliminar = document.getElementById("eliminar");
    let nombreEliminar = inputEliminar.value;
    let encontrado = false;

    for (let i = 0; i < amigo.length; i++) {
        if (nombreEliminar === amigo[i]) {
            amigo.splice(i, 1);
            encontrado = true;
            break;
        }
    }

    if (encontrado) {
        alert("Tu amigo ha sido eliminado");
    } else {
        alert("Tu amigo no está en la lista");
    }
    inputEliminar.value = "";
    inputEliminar.focus();
}

function () {
    let inputEditar = document.getElementById("editar");
    let nombreEditar = inputEditar.value;
    let nuevoNombre = prompt("Ingresa el nuevo nombre");

    let encontrado = false;

    for (let i = 0; i < amigo.length; i++) {
        if (nombreEditar === amigo[i]) {
            amigo[i] = nuevoNombre;
            encontrado = true;
            break;
        }
    }

    if (encontrado) {
        alert("Tu amigo ha sido editado");
    } else {
        alert("Tu amigo no está en la lista");
    }
    inputEditar.value = "";
    inputEditar.focus();
}
    */