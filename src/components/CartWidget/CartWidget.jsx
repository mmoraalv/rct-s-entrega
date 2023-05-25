import "./CartWidget.css"

const CartWidget = () => {
    const imgCarrito = "https://st2.depositphotos.com/1114422/5830/v/600/depositphotos_58300529-stock-illustration-check-out-icon-symbol.jpg"
  return (
    <div>
        <img className= "imgCarrito" src={imgCarrito} alt="Carrito de Compras"/>
        <strong> 3 </strong>
    </div>
  )
}

export default CartWidget