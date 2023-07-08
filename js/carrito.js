import stock from '/js/productos.js';


let carritoFrutas = [];

const agregarAlCarrito = (frutaId) => {
    const encontrado = stock.find(producto => producto.id === frutaId);
    if (encontrado) {
        carritoFrutas.push(encontrado);
        almacenarCarrito();
        console.log("Producto agregado al carrito.");
    } else {
        console.log("Producto no encontrado en el stock.");
    }
};

const almacenarCarrito = () => {
    if (carritoFrutas.length > 0) {
        let carritoConvertido = JSON.stringify(carritoFrutas);
        localStorage.setItem("carritoFrutas", carritoConvertido);
    }
};

const recuperarCarrito = () => {
    return JSON.parse(localStorage.getItem("carritoFrutas")) || [];
};

carritoFrutas = recuperarCarrito();

export { agregarAlCarrito };







