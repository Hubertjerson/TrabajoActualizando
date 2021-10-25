// LLAMANDO PRODUCTO

const productosCar = document.getElementById('contenedorProductos')
const carritoVen = document.getElementById('carritoContenedor')
// LLAMANDO CARRITO
const carritoContando = document.getElementById('contadorCarrito')
const totalCarrito = document.getElementById('precioTotal')

const carrito = []
let pintandoProducto = []



const fechData = async () => {
    const res = await fetch('JS/productos.json')
    const data = await res.json()
    //console.log(data)
    pintandoProducto = data
    pintarProducto(pintandoProducto)

}

fechData()

//MOSTRAR PRODUCTOS EN HTML

const pintarProducto = array => {

    productosCar.innerHTML = ''

    array.forEach(producto => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
        <div class="wrapper">
            <div class="container">
            <img src=${producto.img} alt="">
                <div class="bottom">
                    <div class="left">
                        <div class="details">
                        <h3>${producto.nombre}</h3>
                        <p>Categoria: ${producto.categoria}</p>
                        <p class="precioProducto">Precio: $${producto.precio}</p>
                        </div>
                        <div class="buy">
                        <button onclick="agregarAlCarrito(${producto.id})" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="inside">
                <div class="icon">
                    <i class="far fa-eye"></i>
                </div>
                <div class="contents">
                <h3>${producto.nombre}</h3>
                <p>${producto.desc}</p>
                </div>
            </div>
        </div>
    </div>
        `
        productosCar.appendChild(div)
    });
}

// AGRANDO PRODUCTOS AL CARRITO :3
const agregarAlCarrito = (itemId) => {

    const productoEnCarrito = carrito.find((prod) => prod.id === itemId)

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++
    } else {

        const producto = pintandoProducto.find((prod) => prod.id === itemId)

        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        })
    }
    actualizarCarrito()

}

const actualizarCarrito = () => {
    carritoVen.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')

        div.innerHTML = `
                <p>${prod.nombre}</p>
                <p>Precio: $${prod.precio}</p>
                <p>Cantidad: ${prod.cantidad}</p>
                <button onclick="eliminarProducto(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
             `
        carritoVen.appendChild(div)
    })

    carritoContando.innerText = carrito.reduce((acc, prod) => acc += prod.cantidad, 0)
    totalCarrito.innerText = carrito.reduce((acc, prod) => acc += prod.precio * prod.cantidad, 0)

}


// ELIMINAR PRODUCTO

const eliminarProducto = (itemId) => {
    const producto = carrito.find((prod) => prod.id === itemId)

    producto.cantidad--

    if (producto.cantidad === 0) {
        const index = carrito.indexOf(producto)
        carrito.splice(index, 1)
    }
    actualizarCarrito()
}
