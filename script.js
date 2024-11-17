function verificarCodigo() {
    const codigoInput = document.getElementById('codigoInput').value;
    const mensaje = document.getElementById('mensaje');

    if (codigoInput === "SEGU1R1D4DC0MPUT0") {
        mensaje.textContent = "¡Correcto! Has completado la búsqueda.";
        mensaje.style.color = "green";
    } else {
        mensaje.textContent = "Código incorrecto. Intenta nuevamente.";
        mensaje.style.color = "red";
    }
}