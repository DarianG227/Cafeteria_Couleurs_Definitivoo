document.addEventListener('DOMContentLoaded', function() {
    function usoBotones() {
        
        const lugarMenuPrin = document.getElementById("bF");
        const lugarMenuBlue = document.getElementById("bFM");
        const lugarReserva = document.getElementById("bFR");
        const lugarContacto = document.getElementById("bFC");
        const lugarNosotros = document.getElementById("bFN");

        /* PANTALLAS PEQUE */
        const lugarMenuBluePeque = document.getElementById("bFMP");
        const lugarNosotrosPeque = document.getElementById("bFNP");
        const lugarReservaPeque = document.getElementById("bFRP");
        const lugarContactoPeque = document.getElementById("bFCP");
        

        const botonMenuBlue = document.createElement("button");
        const botonMenu = document.createElement("button");
        const botonContacto = document.createElement("button");
        const botonNosotros = document.createElement("button");
        const botonReserva = document.createElement("button");
        
        /* PANTALLAS PEQUE */
        const botonMenuBluePeque = document.createElement('button');
        const botonContactoPeque = document.createElement('button');
        const botonNosotrosPeque = document.createElement('button');
        const botonReservaPeque = document.createElement('button');


        botonMenu.classList.add("botonInicial");
        botonMenu.classList.add("botonInicial-style");
        botonMenu.classList.add("botonInicial-design");
        botonMenu.classList.add("botonInicial-behavior");
        botonMenu.textContent = "¡VER MENÚ!";

        botonMenuBlue.classList.add("botonOpcionesBlue");
        botonMenuBlue.classList.add("botonOpcionesBlue-style");
        botonMenuBlue.classList.add("botonOpcionesBlue-design");
        botonMenuBlue.classList.add("botonOpcionesBlue-position");
        botonMenuBlue.classList.add("botonOpcionesBlue-behavior");
        botonMenuBlue.classList.add("satisfy-regular");
        botonMenuBlue.textContent = "MENÚ";

        botonContacto.classList.add('botonOpciones');
        botonContacto.classList.add('botonOpciones-style');
        botonContacto.classList.add('botonOpciones-design');
        botonContacto.classList.add('botonOpciones-position');
        botonContacto.classList.add('botonOpciones-behavior');
        botonContacto.classList.add('satisfy-regular');
        botonContacto.textContent = "CONTACTO";

        botonNosotros.classList.add('satisfy-regular');
        botonNosotros.classList.add('botonOpciones');
        botonNosotros.classList.add('botonOpciones-style');
        botonNosotros.classList.add('botonOpciones-design');
        botonNosotros.classList.add('botonOpciones-position');
        botonNosotros.classList.add('botonOpciones-behavior');
        botonNosotros.textContent = "NOSOTROS";

        botonReserva.classList.add('botonOpcionesBlue');
        botonReserva.classList.add('botonOpcionesBlue-style');
        botonReserva.classList.add('botonOpcionesBlue-design');
        botonReserva.classList.add('botonOpcionesBlue-position');
        botonReserva.classList.add('botonOpcionesBlue-behavior');
        botonReserva.classList.add('satisfy-regular');
        botonReserva.textContent = "RESERVA";


        /* PANTALLAS PEQUE */
        botonMenuBluePeque.classList.add("botonOpcionesBlue");
        botonMenuBluePeque.classList.add("botonOpcionesBlue-style");
        botonMenuBluePeque.classList.add("botonOpcionesBlue-design");
        botonMenuBluePeque.classList.add("botonOpcionesBlue-position");
        botonMenuBluePeque.classList.add("botonOpcionesBlue-behavior");
        botonMenuBluePeque.classList.add("satisfy-regular");
        botonMenuBluePeque.textContent = "MENÚ";

        botonContactoPeque.classList.add('botonOpcionesBlue');
        botonContactoPeque.classList.add('botonOpcionesBlue-style');
        botonContactoPeque.classList.add('botonOpcionesBlue-design');
        botonContactoPeque.classList.add('botonOpcionesBlue-position');
        botonContactoPeque.classList.add('botonOpcionesBlue-behavior');
        botonContactoPeque.classList.add('satisfy-regular');
        botonContactoPeque.textContent = "CONTACTO";

        botonNosotrosPeque.classList.add('satisfy-regular');
        botonNosotrosPeque.classList.add('botonOpciones');
        botonNosotrosPeque.classList.add('botonOpciones-style');
        botonNosotrosPeque.classList.add('botonOpciones-design');
        botonNosotrosPeque.classList.add('botonOpciones-position');
        botonNosotrosPeque.classList.add('botonOpciones-behavior');
        botonNosotrosPeque.textContent = "NOSOTROS";

        botonReservaPeque.classList.add('botonOpciones');
        botonReservaPeque.classList.add('botonOpciones-style');
        botonReservaPeque.classList.add('botonOpciones-design');
        botonReservaPeque.classList.add('botonOpciones-position');
        botonReservaPeque.classList.add('botonOpciones-behavior');
        botonReservaPeque.classList.add('satisfy-regular');
        botonReservaPeque.textContent = "RESERVA";


        botonMenu.addEventListener('click', function() {
            window.location.href = "menu.html";
        });

        botonMenuBlue.addEventListener('click', function(){
            window.location.href = "menu.html";
        })

        botonContacto.addEventListener('click', function(){
            window.location.href = "contacto.html"
        })

        botonNosotros.addEventListener('click', function(){
            window.location.href = "nosotros.html"
        })

        botonReserva.addEventListener('click', function(){
            window.location.href = "nosotros.html"
        })


        /* PANTALLAS PEQUE */
        botonMenuBluePeque.addEventListener('click', function() {
            window.location.href = "menu.html";
        });

        botonContactoPeque.addEventListener('click', function() {
            window.location.href = "contacto.html";
        });

        botonNosotrosPeque.addEventListener('click', function(){
            window.location.href = "nosotros.html"
        })

        botonReservaPeque.addEventListener('click', function(){
            window.location.href = "nosotros.html"
        })


        lugarMenuPrin.appendChild(botonMenu);
        lugarMenuBlue.appendChild(botonMenuBlue);
        lugarReserva.appendChild(botonReserva);
        lugarContacto.appendChild(botonContacto);
        lugarNosotros.appendChild(botonNosotros);

        /* PANTALLAS PEQUE */
        lugarMenuBluePeque.appendChild(botonMenuBluePeque);
        lugarReservaPeque.appendChild(botonReservaPeque);
        lugarContactoPeque.appendChild(botonContactoPeque);
        lugarNosotrosPeque.appendChild(botonNosotrosPeque);

    }

    usoBotones();
});
