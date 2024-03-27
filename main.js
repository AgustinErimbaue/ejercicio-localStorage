
const usuariosArray = JSON.parse(localStorage.getItem('users')) || [];


const nombre = document.querySelector('#nombre');

const email = document.querySelector('#email');

const comentario = document.querySelector('#comentario');

const boton = document.querySelector('button');

const pName = document.querySelector('#p-1');

const pEmail = document.querySelector('#p-2');

const pComentario = document.querySelector('#p-3');

const pArray = document.querySelector('#usuario-array');

const pArrayEmail = document.querySelector("#usuario-array-email");

const pArrayComentario = document.querySelector("#usuario-array-comentario")

const borrarBoton = document.querySelector('#borrar-info')

function sendInfo(e) {

    e.preventDefault();
    const usuario = {};

    // console.log(nombre.value);

    // console.log(comentario.value);

    // localStorage.setItem('usuario', nombre.value);

    // localStorage.setItem('email', email.value);

    // localStorage.setItem('comentario', comentario.value)

    // pName.innerHTML = nombre.value;

    // pEmail.innerHTML = email.value;

    // console.log(email.value);

    // pComentario.innerHTML = comentario.value;

    usuario.name = nombre.value;

    usuario.email = email.value;

    usuario.comentario = comentario.value;
    console.log(usuario);
    usuariosArray.push(usuario)
    localStorage.setItem('users', JSON.stringify(usuariosArray))
    console.log(usuariosArray);

    for (const usuario of usuariosArray) {
        pArray.innerHTML += usuario.name;
        pArrayEmail.innerHTML += usuario.email;
        pArrayComentario.innerHTML += usuario.comentario
    }

}

function clear(e) {
    e.preventDefault();
    console.log('ee');
    localStorage.clear();
    pArray.innerHTML = '';
    pArrayEmail.innerHTML = '';
    pArrayComentario.innerHTML = '';
}

pName.innerHTML = nombre.value;

pEmail.innerHTML = email.value;

pComentario.innerHTML = comentario.value

boton.addEventListener('click', sendInfo)

borrarBoton.addEventListener('click', clear)