import stock from '/js/productos.js';
import { agregarAlCarrito } from '/js/carrito.js';

function retornarCardHTML(producto) {
    return `
    <div class="card">
        <div class="card-image">
            ${producto.imagen}
        </div>
        <div class="card-name">
            ${producto.nombre}
        </div>
        <div class="card-price">
            ${producto.precio}
        </div>
        <div class="card-button">
            <button class="button button-outline button-add" data-id="${producto.id}" title="Clic para agregar al carrito">+</button>
        </div>
    </div>`;
}

function cargarProductos(arrayStock) {
    const container = document.querySelector('.container');
    arrayStock.forEach((producto) => {
        const cardHTML = retornarCardHTML(producto);
        container.innerHTML += cardHTML;
    });
}

cargarProductos(stock);

// Manejo de eventos para agregar productos al carrito
const buttons = document.querySelectorAll('.button-add');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const frutaId = parseInt(button.getAttribute('data-id'));
        agregarAlCarrito(frutaId);
    });
});
