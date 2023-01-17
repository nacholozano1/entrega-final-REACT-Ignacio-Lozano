import React from "react";
import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div className="row3">
            <div className="store">
                <h1>Ananá Store</h1>
            </div>
            {
                items.map(item => <Item key={item.id} item={item} /> )
            }
        </div>
    )
}

export default ItemList;