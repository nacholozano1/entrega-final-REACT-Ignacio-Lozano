import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";


const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext )
    const [itemStock, setItemStock] = useState(0);

    const onAdd = (quantity) => {
        setItemStock(itemStock - quantity);
        addItem(item, quantity)
    }

    useEffect(() => {
        setItemStock(item.stock);
    }, [item]);

    return (
        <div className="row4">
            <div className="col-md-4">
                <img src={item.img} alt={item.nombre} className="img-fluid" />
            </div>
            <div className="col-md-4">
                <h1>{item.nombre}</h1>
                <h5>{item.precio}</h5>
                <p>{item.description}</p>
                <ItemCount stock={item.stock} onAdd={onAdd} />
            </div> 
        </div>
    )
}

export default ItemDetail;