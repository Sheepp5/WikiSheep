import listar from "./app/ciudades/listar.js";
import documento from "./app/tipo_documento/documento.js";
import insertar from "./app/usuarios/crear.js";

const ciudades = await listar();
const ciudad = document.querySelector("#ciudad")
const button = document.querySelector('button')
const nombre = document.querySelector('#nombre')
const apellidos = document.querySelector('#apellidos')
const telefono = document.querySelector('#telefono')
const direccion = document.querySelector('#direccion')
// const $ciudad = document.querySelector('#ciudad')
const tipo = document.querySelector('#tipo')
const $documento = document.querySelector('#documento')
const email = document.querySelector('#email')
const politicas = document.querySelector('#politicas')
const formulario = document.querySelector('.form')

const tipoDeDocumento = await documento();
const tipo_documento = document.querySelector("#tipo")

const llenadoCiudad = (ciudades, elemento) => {
    const fragmento = document.createDocumentFragment();
    const option = document.createElement('option');
    option.textContent = "Seleccione...";
    fragmento.append(option);
    ciudades.forEach(({id, nombre}) => {
    const option = document.createElement('option');
    option.textContent = nombre;
    option.value = id;
    fragmento.append(option);
    });
    elemento.append(fragmento);
}

const documentType = (documento, elemento) => {  
    const fragmento = document.createDocumentFragment();
    const option = document.createElement('option');
    option.textContent = "Seleccione...";
    fragmento.append(option);
    documento.forEach(({id, tipo}) => {
    const option = document.createElement('option');
    option.textContent = tipo;
    option.value = id;
    fragmento.append(option);
    });
    elemento.append(fragmento);
}


const guardarUsuario = (event) => {
    
    event.preventDefault()
    const data = {
        nombre: nombre.value,
        apellidos: apellidos.value,
        ciudad: ciudad.selectedIndex,
        telefono: telefono.value,
        direccion: direccion.value,
        tipo_documento: tipo_documento.selectedIndex,
        documento: documento.value,
        email: email.value
    }
    insertar(data)
}

llenadoCiudad(ciudades, ciudad)
documentType(tipoDeDocumento, tipo_documento)


formulario.addEventListener("submit", guardarUsuario);


// funcion expresada primero se declara después de llama