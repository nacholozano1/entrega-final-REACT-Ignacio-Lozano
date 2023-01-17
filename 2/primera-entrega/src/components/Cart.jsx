import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, cartTotal, removeItem, clear, sumTotal} = useContext(CartContext)

    if (cartTotal() === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger" role="alert"> No se encontraron productos en el carrito!</div>
                        <Link to={"/"} className="btn btn-warning">Volver a la página principal.</Link>
                    </div>
                </div>
            </div>
        )
    }

   

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" colSpan={5} className="text-end"><Link onClick={clear} className="btn btn-warning">Vaciar Carrito</Link></th>
                            </tr>
                            <tr>
                                <th>&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="align-middle"><img src={item.img} alt={item.nombre} width={80} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="align-middle">{item.quantity}</td>
                                    <td className="align-middle">{item.quantity * item.precio}</td>
                                    <td className="align-middle text-end"><Link onClick={() => {removeItem(item.id)}}><img src={"/img/trash3.svg"} alt={"Eliminar Producto"} width="32" /></Link></td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td>Total a pagar: </td>
                                <td>${sumTotal()}</td>
                                <td className="text-end"><Link to={"/checkout"} className="btn btn-warning">Finalizar Compra</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;