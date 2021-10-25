// Definiendo y llamando
// Guardando en LocalStorage
const guardando = e => {
    let formData = {
        usuario : document.getElementById('usuario').value,
        email : document.getElementById('email').value,
        password : document.getElementById('password').value,
        password2 : document.getElementById('password2').value,
    }
    //console.log(formData); //Comprobando por consola
    localStorage.setItem(formData ,JSON.stringify(formData));
}


// Envento

form.addEventListener('submit', e => {
    e.preventDefault(); // No Recargar Pagina
    checkInputs(); //LLamando a la funcion de validacion
});



//Validando registro de nuestro usuario


function checkInputs() {
    const usuarioValue = usuario.value.trim();  //trim 'Elimina caracteres vacios'
    const emailValue = email.value.trim();  //trim 'Elimina caracteres vacios'
    const passwordValue = password.value.trim(); //trim 'Elimina caracteres vacios'
    const password2Value = password2.value.trim(); //trim 'Elimina caracteres vacios'

    // Validando usuario
    if (usuarioValue === '') {   // usuario = a nada -> error
        error(usuario, 'Debe ingresar su nombre');
    } else {    // usuario = ingreso correctamente -> todobien
        todoBien(usuario);
    }

    if (emailValue === '') { // Validando correo , no dejar en blanco
        error(email, 'Debe ingresar su correo');
    } else if (!emailCorrect(emailValue)) { // Comprobando si realmente es email con la funcion
        error(email, 'No ingreso un email valido');
    } else {
        todoBien(email);
    }

    if (passwordValue === '') { // Validando Contraseña
        error(password, 'Debe ingresar una contraseña');
    } else {
        todoBien(password);
    }

    if (password2Value === '') { // Validando si contraseña 1 es igual a contraseña 2
        error(password2, 'Debe ingresar una contraseña');
    } else if (passwordValue !== password2Value) {
        error(password2, 'Las contraseñas no coinciden');
    } else {
        todoBien(password);
    }
}

function error(input, mensaje) {  // Error = En caso el usuario no ingrese lo que indicamos
    const formControl = input.parentElement;  // Definiendo
    const small = formControl.querySelector('small');
    formControl.className = 'contenedorForm error';
    small.innerText = mensaje;
}

function todoBien(input) { // TodoBien = Cuando el usuario ingreso todo Correcto
    const formControl = input.parentElement;
    formControl.className = 'contenedorForm success';
}

function emailCorrect(email) { //Expresiones Regulares 
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}