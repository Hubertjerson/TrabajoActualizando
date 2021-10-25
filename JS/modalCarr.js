const contenedorModal = document.getElementsByClassName('modalContenedor')[0]
const botonAbrir = document.getElementById('botonCarrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modalCarrito')[0]

botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modalActive')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modalActive')
})
contenedorModal.addEventListener('click', ()=>{
    botonCerrar.click()
})
modalCarrito.addEventListener('click', (event)=>{
    event.stopPropagation()
})