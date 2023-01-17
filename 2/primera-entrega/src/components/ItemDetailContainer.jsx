import React, {useEffect, useState} from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams(); 

    // Consulto un documento pasado por ID

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, "items", id)
        getDoc(item).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
                setLoading(false); 
            } else {
                console.log("El producto no existe!");
            }
        });
    }, []);

    return (
        <div className="container">
            {loading ? <Loading /> : <ItemDetail item={item}/>};
        </div>
    )
}

export default ItemDetailContainer;