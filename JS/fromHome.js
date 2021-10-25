const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

const boton = document.querySelector('#formulario')
boton.addEventListener('submit', aplicar)

function aplicar(e) {
    e.preventDefault();
    const valor = document.querySelector('#nombre').value;
    if (valor === '') {
        Swal.fire({
            title: 'El Retiro es de 15 a 20 minutos',
        })
    } else {
        Swal.fire({
            title: 'El Retiro es de 15 a 20 minutos',
        })
    }
}

const botonDos = document.querySelector('#formularioDos')
botonDos.addEventListener('submit', aplicarDos)

function aplicarDos(e) {
    e.preventDefault();
    const valorDos = document.querySelector('#direccion').value;
    if (valorDos === '') {
        Swal.fire({
            title: 'Por favor ingrese una direccion',
        })
    } else {
        Swal.fire({
            title: 'El despacho tiene un tiempo de 40 a 50 minutos',
        })
    }
}

signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});
