import stock from "./productos";

//CREAMOS LA FUNCION AGREGAR AL CARRITO

let agregarAlCarrito = (frutaId) => {
    if(frutaId > 0){
        const encontrado = stock.find(producto => producto.id === parseInt(frutaId))
        if(typeof encontrado !=='undefined') carritoFrutas.push(encontrado)
        almacenarCarrito()
    }
}

const almacenarCarrito = () => {
    if(carritoFrutas.length > 0){
        let carritoConvertido = JSON.stringify(carritoFrutas)
        localStorage.setItem("carritoFrutas", carritoConvertido)
    }
}

const recuperarCarrito = () => {
    return JSON.parse(localStorage.getItem("carritoFrutas")) || []
}

const carritoFrutas = recuperarCarrito();







