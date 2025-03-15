let amigos = [];

//Funcion para agragar amigo
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

//funcion actualizar la lista de  amigos
function mostrarListaAmigos(){
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";

    for(let index = 0; index < amigos.length; index++){
        const element = amigos[index];

        let listaHTML = document.createElement("li");
        listaHTML.textContent = element;
        listaAmigos.appendChild(listaHTML);
    }
}

//funcion para actualizar lista de amigos
function actualizarListaAmigos() {
    let listaHTML = document.querySelector(listaAmigos);
    listaHTML.innerHTML = "";
    amigos.forEach (amigo => {
        let li = DocumentFragment.createElement ("li");
        li.textContent = amigo;
        listaHTML.appendChild (li);
    });
}

//funcion para sortear amigos
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
