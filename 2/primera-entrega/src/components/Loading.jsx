import React from "react";

const Loading = () => {
    return(
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Cargando ...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;