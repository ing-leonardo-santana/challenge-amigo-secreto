// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Definición del esquema general de las interacciones de la aplicación, Aqui se empiezan a definir los pasos iniciales y llamar las funciones que se van a utilizar.

let amigo = []; //Array de amigos

// 1. El usuario debe poder ingresar el nombre de un amigo en un input y agregarlo a una lista de amigos.
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let mensajeDiv = document.getElementById("mensaje");
    let nombreAmigo = inputAmigo.value;

    if (!nombreAmigo) { 
        mensajeDiv.textContent = "Debes ingresar un nombre de amigo";
        mensajeDiv.style.color = "red";
    } else {
        amigo.push(nombreAmigo);
        inputAmigo.value = "";
        inputAmigo.focus();
        renderizarAmigos();
        
        mensajeDiv.textContent = "Amigo agregado con éxito";
        mensajeDiv.style.color = "green";
    }

    // Borra el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeDiv.textContent = "";
    }, 3000);
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

// 5. El usuario debe poder eliminar un amigo de la lista.
function EliminarAmigo() {
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
        renderizarAmigos();
    } else {
        alert("Tu amigo no está en la lista");
    }
    inputEliminar.value = "";
    inputEliminar.focus();
}