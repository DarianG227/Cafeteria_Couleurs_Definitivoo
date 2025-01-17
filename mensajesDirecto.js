
const formuMensajesUsuarios = document.getElementById('formuMen');

formuMensajesUsuarios.addEventListener('submit', (event) =>{
    event.preventDefault(); //Evita que la página se recargue al enviar el formulario

    const nombreUsu = document.getElementById('nombreUs').value;
    const emailUsu = document.getElementById('correoEUs').value;
    const mensajeUsu = document.getElementById('mensajeCaf').value;

    fetch('https://cafeteria-2025-default-rtdb.firebaseio.com/mensajesDirectos.json', {
        method: 'POST',
        body: JSON.stringify({
            nombreUsuario: nombreUsu,
            correoElectronicoUsuario: emailUsu,
            mensajeUsuario: mensajeUsu,
        })
    })
    .then(response => {
        if(!response.ok){
            throw new Error('Error al guardar el mensaje.');
        }
        alert('Se ha enviado con éxito.');
    })
    .catch(error => {
        console.error('Error al enviar los datos: ', error);
        alert('Hubo un problema al enviar los datos.');
    });
    formuMensajesUsuarios.reset();
})

const boton = document.getElementById('botonInicio');

const botonIn = document.createElement('button');

botonIn.textContent = 'INICIO';

botonIn.addEventListener('click', function(){
    window.location.href = "index.html"
})

boton.appendChild(botonIn);