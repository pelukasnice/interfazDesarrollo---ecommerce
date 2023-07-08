// RETORNAR CARD - HTML

import stock from "./js/productos";

function retornarCardHTML(producto) { /* el parametro es productoArray*/

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
            <button class="button button-outline button-add" id="" title="Clic para agregar al carrito">+</button>
        </div>
    </div>`;
  }
  
  //CARGAR PRODUCTOS

  function cargarProductos(arraystock) {  

    const container = document.querySelector('.container');
    
    arraystock.forEach((productoArray) => { /*el método forEach() itera sobre cada elemento del array productos. En cada iteración, se ejecuta una función de flecha  que recibe el elemento actual del array como parámetro */
      const cardHTML = retornarCardHTML(productoArray);
      container.innerHTML += cardHTML;
    });
  }
    
  cargarProductos(stock);