import React from "react";
import { useParams, Link } from "react-router-dom";

const Gracias = () => {
    const {id} = useParams();
    
    return(
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <h1>Gracias por tu compra!</h1>
                    <h3>Tu número de orden es: <b>{id}</b></h3>
                    <Link to={"/"} className="btn btn-warning">Volver a la página principal.</Link>
                </div>
            </div>
        </div>
    );
};

export default Gracias;