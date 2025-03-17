let amigos = [];

//Función para agregar amigo
function agregarAmigo() {
    let nombre = document.getElementById ("amigo").value;
     if (nombre === "") {
     alert("Por favor, inserte un nombre");
    }else {
     amigos.push(nombre);
     document.querySelector("#amigo").value = "";
     mostrarListaAmigos();
    }
}

//Función para mostrar la lista de  amigos
function mostrarListaAmigos(){
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        const element = amigos[i];

        let listaHTML = document.createElement("li");
        listaHTML.textContent = element;
        listaAmigos.appendChild(listaHTML);
    }
}

//Función para actualizar la lista de amigos
function actualizarListaAmigos() {
    let listaHTML = document.querySelector(listaAmigos);
    listaHTML.innerHTML = "";
    amigos.forEach (amigo => {
        let li = DocumentFragment.createElement ("li");
        li.textContent = amigo;
        listaHTML.appendChild (li);
    });
}

//Función para sortear amigos
function sortearAmigo() {
    let cantidadAmigos = amigos.length;
    if (cantidadAmigos === 0) {
        alert("Por favor, inserte un nombre antes de sortear");
       }else {
        let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
        let resultadoHTML = document.querySelector("#resultado");
        resultadoHTML.innerHTML = amigos[indiceAmigo];   
    }  
}
