function obtenerDatos(){

if(window.matchMedia("(min-width:768px)").matches){

    /* CAFÉS ESPECIALES */
    fetch('https://cafeteria-2025-default-rtdb.firebaseio.com/caf%C3%A9s.json')

    .then(response => response.json())
    .then(data => {

        const divisor = document.getElementById('cafJuntos');
        divisor.innerHTML = '';

        let row;
        let count = 0;

        for(let key in data){
            const objeto = data[key];

            if(count %4 === 0){
                row = document.createElement('div');
                row.classList.add('row');
                divisor.appendChild(row);
            }

            /*CREO LOS ELEMENTOS*/
            const bloquePresentacion = document.createElement('div');
            const nombreCaf = document.createElement('h4');
            const precioCaf = document.createElement('span');
            const imgCaf = document.createElement('img');

            /*AÑADO ESTILOS*/
            bloquePresentacion.classList.add('presentacion');
            bloquePresentacion.classList.add('presentacion-style');
            bloquePresentacion.classList.add('presentacion-design');
            bloquePresentacion.classList.add('presentacion-behavior');
            precioCaf.classList.add('precio');
            precioCaf.textContent = "$" + objeto.precio;
            nombreCaf.classList.add('nomCafes');
            nombreCaf.textContent = objeto.nombre;
            imgCaf.classList.add('nonagon');
            imgCaf.src = objeto.imgCafe;
            row.classList.add('row');


            //ARMO LA PRESENTACIÓN
            bloquePresentacion.appendChild(imgCaf);
            bloquePresentacion.appendChild(nombreCaf);
            bloquePresentacion.appendChild(precioCaf);

            row.appendChild(bloquePresentacion);

            count++;
        }
    })

    /* BEBIDAS FRÍAS */
    fetch('https://cafeteria-2025-default-rtdb.firebaseio.com/bebidasFrias.json')
    .then(response => response.json())
    .then(data => {

        const divisor = document.getElementById('bebJuntas');
        divisor.innerHTML = '';

        let row;
        let count = 0;

        for(let key in data){
            const objeto = data[key];

            if(count %4 === 0){
                row = document.createElement('div');
                row.classList.add('row');
                divisor.appendChild(row);
            }

            /*CREO LOS ELEMENTOS*/
            const bloquePresentacion = document.createElement('div');
            const nombreCaf = document.createElement('h4');
            const precioCaf = document.createElement('span');
            const imgCaf = document.createElement('img');

            /*AÑADO ESTILOS*/
            bloquePresentacion.classList.add('presentacion');
            bloquePresentacion.classList.add('presentacion-style');
            bloquePresentacion.classList.add('presentacion-design');
            bloquePresentacion.classList.add('presentacion-behavior');
            precioCaf.classList.add('precioBlue');
            precioCaf.textContent = "$" + objeto.precio;
            nombreCaf.classList.add('nomCafes');
            nombreCaf.textContent = objeto.nombre;
            imgCaf.classList.add('nonagon');
            imgCaf.src = objeto.imgCafe;
            row.classList.add('row');


            //ARMO LA PRESENTACIÓN
            bloquePresentacion.appendChild(imgCaf);
            bloquePresentacion.appendChild(nombreCaf);
            bloquePresentacion.appendChild(precioCaf);

            row.appendChild(bloquePresentacion);

            count++;
        }
    })

    /* POSTRES Y DULCES */
    fetch('https://cafeteria-2025-default-rtdb.firebaseio.com/postresDulces.json')
    .then(response => response.json())
    .then(data => {

        const divisor = document.getElementById('postJuntos');
        divisor.innerHTML = '';

        let row;
        let count = 0;

        for(let key in data){
            const objeto = data[key];

            if(count %4 === 0){
                row = document.createElement('div');
                row.classList.add('row');
                divisor.appendChild(row);
            }

            /*CREO LOS ELEMENTOS*/
            const bloquePresentacion = document.createElement('div');
            const nombreCaf = document.createElement('h4');
            const precioCaf = document.createElement('span');
            const imgCaf = document.createElement('img');

            /*AÑADO ESTILOS*/
            bloquePresentacion.classList.add('presentacion');
            bloquePresentacion.classList.add('presentacion-style');
            bloquePresentacion.classList.add('presentacion-design');
            bloquePresentacion.classList.add('presentacion-behavior');
            precioCaf.classList.add('precio');
            precioCaf.textContent = "$" + objeto.precio;
            nombreCaf.classList.add('nomCafes');
            nombreCaf.textContent = objeto.nombre;
            imgCaf.classList.add('nonagon');
            imgCaf.src = objeto.imgCafe;
            row.classList.add('row');


            //ARMO LA PRESENTACIÓN
            bloquePresentacion.appendChild(imgCaf);
            bloquePresentacion.appendChild(nombreCaf);
            bloquePresentacion.appendChild(precioCaf);

            row.appendChild(bloquePresentacion);

            count++;
        }
    })


    /* SALADO */
    fetch('https://cafeteria-2025-default-rtdb.firebaseio.com/salados.json')
    .then(response => response.json())
    .then(data => {

        const divisor = document.getElementById('salJuntos');
        divisor.innerHTML = '';

        let row;
        let count = 0;

        for(let key in data){
            const objeto = data[key];

            if(count %4 === 0){
                row = document.createElement('div');
                row.classList.add('row');
                divisor.appendChild(row);
            }

            /*CREO LOS ELEMENTOS*/
            const bloquePresentacion = document.createElement('div');
            const nombreCaf = document.createElement('h4');
            const precioCaf = document.createElement('span');
            const imgCaf = document.createElement('img');

            /*AÑADO ESTILOS*/
            bloquePresentacion.classList.add('presentacion');
            bloquePresentacion.classList.add('presentacion-style');
            bloquePresentacion.classList.add('presentacion-design');
            bloquePresentacion.classList.add('presentacion-behavior');
            precioCaf.classList.add('precioBlue');
            precioCaf.textContent = "$" + objeto.precio;
            nombreCaf.classList.add('nomCafes');
            nombreCaf.textContent = objeto.nombre;
            imgCaf.classList.add('nonagon');
            imgCaf.src = objeto.imgCafe;
            row.classList.add('row');


            //ARMO LA PRESENTACIÓN
            bloquePresentacion.appendChild(imgCaf);
            bloquePresentacion.appendChild(nombreCaf);
            bloquePresentacion.appendChild(precioCaf);

            row.appendChild(bloquePresentacion);

            count++;
        }
    })

    const lugarBot = document.getElementById('finalizarP');
    lugarBot.innerHTML = '';

    const bottonF = document.createElement('bottom');

    bottonF.classList.add('botonOpciones');
    bottonF.classList.add('botonOpciones-style');
    bottonF.classList.add('botonOpciones-design');
    bottonF.classList.add('botonOpciones-behavior');
    bottonF.textContent = "FINALIZAR PEDIDO";

    bottonF.addEventListener('click', function(){
        window.location.href = "index.html";
    })

    lugarBot.appendChild(bottonF);
} 

/* SI NO ES DE 768px O MÁS, SE EJECUTA ESTO */
else{
    /* CAFÉS ESPECIALES */
    fetch('https://cafeteria-2025-default-rtdb.firebaseio.com/caf%C3%A9s.json')

    .then(response => response.json())
    .then(data => {

        const divisor = document.getElementById('cafJuntos');
        divisor.innerHTML = '';

        let row;
        let count = 0;

        for(let key in data){
            const objeto = data[key];

            if(count %2 === 0){
                row = document.createElement('div');
                row.classList.add('row');
                divisor.appendChild(row);
            }

            /*CREO LOS ELEMENTOS*/
            const bloquePresentacion = document.createElement('div');
            const nombreCaf = document.createElement('h4');
            const precioCaf = document.createElement('span');
            const imgCaf = document.createElement('img');

            /*AÑADO ESTILOS*/
            bloquePresentacion.classList.add('presentacionElse');
            bloquePresentacion.classList.add('presentacionElse-style');
            bloquePresentacion.classList.add('presentacionElse-design');
            bloquePresentacion.classList.add('presentacionElse-behavior');
            precioCaf.classList.add('precio');
            precioCaf.textContent = "$" + objeto.precio;
            nombreCaf.classList.add('nomCafes');
            nombreCaf.textContent = objeto.nombre;
            imgCaf.classList.add('nonagon');
            imgCaf.src = objeto.imgCafe;
            row.classList.add('row');


            //ARMO LA PRESENTACIÓN
            bloquePresentacion.appendChild(imgCaf);
            bloquePresentacion.appendChild(nombreCaf);
            bloquePresentacion.appendChild(precioCaf);

            row.appendChild(bloquePresentacion);

            count++;
        }
    })

    /* BEBIDAS FRÍAS */
    fetch('https://cafeteria-2025-default-rtdb.firebaseio.com/bebidasFrias.json')
    .then(response => response.json())
    .then(data => {

        const divisor = document.getElementById('bebJuntas');
        divisor.innerHTML = '';

        let row;
        let count = 0;

        for(let key in data){
            const objeto = data[key];

            if(count %2 === 0){
                row = document.createElement('div');
                row.classList.add('row');
                divisor.appendChild(row);
            }

            /*CREO LOS ELEMENTOS*/
            const bloquePresentacion = document.createElement('div');
            const nombreCaf = document.createElement('h4');
            const precioCaf = document.createElement('span');
            const imgCaf = document.createElement('img');

            /*AÑADO ESTILOS*/
            bloquePresentacion.classList.add('presentacionElse');
            bloquePresentacion.classList.add('presentacionElse-style');
            bloquePresentacion.classList.add('presentacionElse-design');
            bloquePresentacion.classList.add('presentacionElse-behavior');
            precioCaf.classList.add('precioBlue');
            precioCaf.textContent = "$" + objeto.precio;
            nombreCaf.classList.add('nomCafes');
            nombreCaf.textContent = objeto.nombre;
            imgCaf.classList.add('nonagon');
            imgCaf.src = objeto.imgCafe;
            row.classList.add('row');


            //ARMO LA PRESENTACIÓN
            bloquePresentacion.appendChild(imgCaf);
            bloquePresentacion.appendChild(nombreCaf);
            bloquePresentacion.appendChild(precioCaf);

            row.appendChild(bloquePresentacion);

            count++;
        }
    })

    /* POSTRES Y DULCES */
    fetch('https://cafeteria-2025-default-rtdb.firebaseio.com/postresDulces.json')
    .then(response => response.json())
    .then(data => {

        const divisor = document.getElementById('postJuntos');
        divisor.innerHTML = '';

        let row;
        let count = 0;

        for(let key in data){
            const objeto = data[key];

            if(count %2 === 0){
                row = document.createElement('div');
                row.classList.add('row');
                divisor.appendChild(row);
            }

            /*CREO LOS ELEMENTOS*/
            const bloquePresentacion = document.createElement('div');
            const nombreCaf = document.createElement('h4');
            const precioCaf = document.createElement('span');
            const imgCaf = document.createElement('img');

            /*AÑADO ESTILOS*/
            bloquePresentacion.classList.add('presentacionElse');
            bloquePresentacion.classList.add('presentacionElse-style');
            bloquePresentacion.classList.add('presentacionElse-design');
            bloquePresentacion.classList.add('presentacionElse-behavior');
            precioCaf.classList.add('precio');
            precioCaf.textContent = "$" + objeto.precio;
            nombreCaf.classList.add('nomCafes');
            nombreCaf.textContent = objeto.nombre;
            imgCaf.classList.add('nonagon');
            imgCaf.src = objeto.imgCafe;
            row.classList.add('row');


            //ARMO LA PRESENTACIÓN
            bloquePresentacion.appendChild(imgCaf);
            bloquePresentacion.appendChild(nombreCaf);
            bloquePresentacion.appendChild(precioCaf);

            row.appendChild(bloquePresentacion);

            count++;
        }
    })


    /* SALADO */
    fetch('https://cafeteria-2025-default-rtdb.firebaseio.com/salados.json')
    .then(response => response.json())
    .then(data => {

        const divisor = document.getElementById('salJuntos');
        divisor.innerHTML = '';

        let row;
        let count = 0;

        for(let key in data){
            const objeto = data[key];

            if(count %2 === 0){
                row = document.createElement('div');
                row.classList.add('row');
                divisor.appendChild(row);
            }

            /*CREO LOS ELEMENTOS*/
            const bloquePresentacion = document.createElement('div');
            const nombreCaf = document.createElement('h4');
            const precioCaf = document.createElement('span');
            const imgCaf = document.createElement('img');

            /*AÑADO ESTILOS*/
            bloquePresentacion.classList.add('presentacionElse');
            bloquePresentacion.classList.add('presentacionElse-style');
            bloquePresentacion.classList.add('presentacionElse-design');
            bloquePresentacion.classList.add('presentacionElse-behavior');
            precioCaf.classList.add('precioBlue');
            precioCaf.textContent = "$" + objeto.precio;
            nombreCaf.classList.add('nomCafes');
            nombreCaf.textContent = objeto.nombre;
            imgCaf.classList.add('nonagon');
            imgCaf.src = objeto.imgCafe;
            row.classList.add('row');


            //ARMO LA PRESENTACIÓN
            bloquePresentacion.appendChild(imgCaf);
            bloquePresentacion.appendChild(nombreCaf);
            bloquePresentacion.appendChild(precioCaf);

            row.appendChild(bloquePresentacion);

            count++;
        }
    })

    const lugarBot = document.getElementById('finalizarP');
    lugarBot.innerHTML = '';

    const bottonF = document.createElement('bottom');

    bottonF.classList.add('botonOpciones-style');
    bottonF.classList.add('botonOpciones-design');
    bottonF.classList.add('botonOpciones-behavior');
    bottonF.textContent = "FINALIZAR PEDIDO";

    bottonF.addEventListener('click', function(){
        window.location.href = "index.html";
    })

    lugarBot.appendChild(bottonF);
} 

}

obtenerDatos();

// Agregar un "listener" para el evento resize
window.addEventListener('resize', obtenerDatos);
