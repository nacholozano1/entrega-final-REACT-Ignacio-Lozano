import React from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect } from "react";
import { useState } from "react";

const Documento = () => {
    const [producto, setProducto] = useState({});

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, "productos", "vHjemfoll9SrJmi06SeQ")
        getDoc(item).then((snapShot) => {
            if (snapShot.exists()) {
                console.log(snapShot.data());
            } else {
                console.log("El producto no existe!");
            }
        });
    }, []);

    return (
        <h1>Documesssnto</h1>
    )
}

export default Documento;