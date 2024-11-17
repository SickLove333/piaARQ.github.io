const personas = [
    {
        nombre: "Pedro Paez",
        imagen: "assets/img/bueno.jpg",
        parametros: ["Entregó su teléfono", "Registrado", "Cuenta con autorización"],
        acceso: true,
        mensajePermitir: "Perfecto. Acceso permitido.",
        mensajeDenegar: "¿Estás seguro? Pedro estaba autorizado."
    },
    {
        nombre: "Salvador GPT",
        imagen: "assets/img/salvador-gpt.jpg",
        parametros: ["No entregó su teléfono", "No fue registrado", "No tiene autorización"],
        acceso: false,
        mensajePermitir: "Aunque solo queria cargar sus baterias, al conectarse causo un corto-circuito y provoco un incendio.",
        mensajeDenegar: "Acceso denegado. Buen trabajo, los robots no tienen permitido el acceso (Aún)."
    },
    {
        nombre: "Jack Erman",
        imagen: "assets/img/hacker-og.jpg",
        parametros: ["No entregó su teléfono", "Intentó acceder sin autorización", "Se detectó actividad sospechosa"],
        acceso: false,
        mensajePermitir: "Ahora toda la información del Data Center se encuentra a la venta",
        mensajeDenegar: "Acceso denegado, bien hecho."
    },
    {
        nombre: "Firulais Maxwell",
        imagen: "assets/img/lentes.jpg",
        parametros: ["Usa gafas y bigote falso", "No fue registrado", "Intentó evadir seguridad", "Posiblemente un perro"],
        acceso: false,
        mensajePermitir: "Aúnque no lo parezca, Firulais Maxwell es un espía chino, por tu culpa China ahora tiene información privada del País",
        mensajeDenegar: "Correcto, Firulais no tiene autorización de acceso."
    },
    {
        nombre: "Catherine Flores",
        imagen: "assets/img/pdrz.jpg",
        parametros: ["Entregó su teléfono", "Registrado", "Cuenta con autorización"],
        acceso: true,
        mensajePermitir: "Correcto, acceso liberado",
        mensajeDenegar: "Asegúrate de verificar correctamente."
    }
];

let personaActual = 0;
let respuestasCorrectas = 0;

function mostrarPersona() {
    const persona = personas[personaActual];
    document.getElementById("persona-imagen").src = persona.imagen;
    document.getElementById("persona-nombre").textContent = `${persona.nombre}`;
    
    const parametrosList = document.getElementById("persona-parametros");
    parametrosList.innerHTML = "";
    persona.parametros.forEach(parametro => {
        const li = document.createElement("li");
        li.textContent = parametro;
        parametrosList.appendChild(li);
    });
    
    document.getElementById("resultado").textContent = "";
}

function permitirAcceso() {
    const persona = personas[personaActual];
    if (persona.acceso) {
        document.getElementById("resultado").textContent = persona.mensajePermitir;
        respuestasCorrectas++;
        setTimeout(siguientePersona, 2000);
    } else {
        document.getElementById("resultado").textContent = persona.mensajePermitir;
        setTimeout(reiniciarJuego, 2000);
    }
}

function denegarAcceso() {
    const persona = personas[personaActual];
    if (!persona.acceso) {
        document.getElementById("resultado").textContent = persona.mensajeDenegar;
        respuestasCorrectas++;
        setTimeout(siguientePersona, 2000);
    } else {
        document.getElementById("resultado").textContent = persona.mensajeDenegar;
        setTimeout(reiniciarJuego, 2000);
    }
}

function siguientePersona() {
    if (respuestasCorrectas === personas.length) {
        window.location.href = "Password.html"; // Redirige al siguiente índice si todas las respuestas son correctas
    } else {
        personaActual = (personaActual + 1) % personas.length;
        mostrarPersona();
    }
}

function reiniciarJuego() {
    respuestasCorrectas = 0;
    personaActual = 0;
    mostrarPersona();
}

// Iniciar con la primera persona
mostrarPersona();
