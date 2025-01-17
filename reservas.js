const formuReservasUsuarios = document.getElementById('formuRes');

formuReservasUsuarios.addEventListener('submit', (event) =>{
    event.preventDefault(); //Evita que la página se recargue al enviar el formulario

    const nombreUsu = document.getElementById('nombre').value;
    const cantPers = document.getElementById('personas').value;
    const emailUsu = document.getElementById('email').value;
    const celularUsu = document.getElementById('telefono').value;
    const horaRes = document.getElementById('hora').value;
    const fechaRes = document.getElementById('fecha').value;
    const mensajeUsu = document.getElementById('mensaje').value;

    fetch('https://cafeteria-2025-default-rtdb.firebaseio.com/reservas.json', {
        method: 'POST',
        body: JSON.stringify({
            nombreUsuario: nombreUsu,
            correoElectronicoUsuario: emailUsu,
            mensajeUsuario: mensajeUsu,
            cantidadPersonas: cantPers,
            telefonoUsu: celularUsu,
            horaReserva: horaRes,
            fechaReserva: fechaRes
        })
    })
    .then(response => {
        if(!response.ok){
            throw new Error('Error al guardar la Reserva.');
        }
        alert('Se ha reservado con éxito.');
    })
    .catch(error => {
        console.error('Error al enviar los datos: ', error);
        alert('Hubo un problema al enviar los datos.');
    });
    formuReservasUsuarios.reset();
})

const boton = document.getElementById('botonInicio');

const botonIn = document.createElement('button');

botonIn.textContent = 'INICIO';

botonIn.addEventListener('click', function(){
    window.location.href = "index.html"
})

boton.appendChild(botonIn);


