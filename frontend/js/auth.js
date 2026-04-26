document.addEventListener('DOMContentLoaded', () => {

    const formRegistro = document.getElementById('form-registro');
    const formLogin = document.getElementById('form-login');

    // --- LÓGICA DE REGISTRO ---
    if (formRegistro) {
        formRegistro.addEventListener('submit', async (e) => {
            e.preventDefault();

            const nombre = document.getElementById('reg-nombre').value;
            const apellido = document.getElementById('reg-apellido').value;
            const email = document.getElementById('reg-email').value;
            const password = document.getElementById('reg-password').value;
            const mensajeDiv = document.getElementById('reg-mensaje');

            try {
                const response = await fetch('http://localhost:3000/api/auth/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nombre, apellido, email, password })
                });

                const data = await response.json();

                if (response.ok) {
                    mensajeDiv.innerHTML = `<span style="color: green;">${data.message} ¡Ya podés iniciar sesión!</span>`;
                    formRegistro.reset();
                } else {
                    mensajeDiv.innerHTML = `<span style="color: red;">${data.message}</span>`;
                }
            } catch (error) {
                console.error("Error:", error);
                mensajeDiv.innerHTML = `<span style="color: red;">Error al conectar con el servidor.</span>`;
            }
        });
    }

    // --- LÓGICA DE LOGIN ---
    if (formLogin) {
        formLogin.addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const mensajeDiv = document.getElementById('login-mensaje');

            try {
                const response = await fetch('http://localhost:3000/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();

                if (response.ok) {
                    // Guardamos el pase VIP en el navegador
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('usuario', JSON.stringify(data.user));

                    mensajeDiv.innerHTML = `<span style="color: green;">${data.message} Redirigiendo...</span>`;

                    // Redirigimos al área protegida
                    setTimeout(() => {
                        window.location.href = 'mis-cursos.html';
                    }, 1500);

                } else {
                    mensajeDiv.innerHTML = `<span style="color: red;">${data.message}</span>`;
                }
            } catch (error) {
                console.error("Error:", error);
                mensajeDiv.innerHTML = `<span style="color: red;">Error al conectar con el servidor.</span>`;
            }
        });
    }
});