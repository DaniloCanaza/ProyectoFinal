document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores de los campos del formulario
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simular un registro de usuario
    // Aquí deberías enviar los datos a tu servidor para procesar el registro
    if (username && email && password) {
        // Lógica de autenticación simulada
        // Aquí puedes agregar validaciones y enviar una petición a tu backend

        // Simulación de un registro exitoso
        document.getElementById('mensaje').textContent = 'Registro exitoso';
        document.getElementById('mensaje').style.color = 'green';

        // Limpiar el formulario
        document.getElementById('registroForm').reset();
    } else {
        document.getElementById('mensaje').textContent = 'Por favor, completa todos los campos.';
        document.getElementById('mensaje').style.color = 'red';
    }
});
