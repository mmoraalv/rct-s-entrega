const productos = [
    { nombre: "Monitor Curvo", precio: 1000, id: "1", img: "../img/monitor1.jpg", idCat: "1" },
    { nombre: "Monitor", precio: 600, id: "2", img: "../img/monitor2.jpg", idCat: "1" },
    { nombre: "Portatil", precio: 2000, id: "3", img: "../img/portatil.jpg", idCat: "2" },
    { nombre: "Teclado", precio: 150, id: "4", img: "../img/teclado.jpg", idCat: "3" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}