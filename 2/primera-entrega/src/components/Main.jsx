import React from "react";

const Main = () => {
    return(
        <div className="main">
            <div className="contenedor1">
            <img src="/img/ipads.jpeg" alt="" />
            <div className="centrado1">
                <h2>iPad</h2>
                <h3>Ultramágico. Megaquerible. Superfachero</h3>
                <div className="links">
                    <a href="#">Más información</a>
                    <a href="#">Comprar</a>
                </div>
            </div>
            </div>
            <div className="contenedor2">
            <img src="/img/iphone14pro.jpeg" alt="" />
            <div className="centrado2">
                <h2>iPhone 14 Pro</h2>
                <h3>Pro, demasiado Pro.</h3>
                <div className="links">
                    <a href="#">Más información</a>
                    <a href="#">Comprar</a>
                </div>
            </div>
            </div>
            <div className="contenedor3">
            <img src="/img/hero_iphone14__fjmsqstr1ceq_mediumtall_2x.jpeg" alt="" />
            <div className="centrado3">
                <h2>iPhone 14</h2>
                <h3>Cada vez mas grande.</h3>
                <div className="links">
                    <a href="#">Más información</a>
                    <a href="#">Comprar</a>
                </div>
            </div>
            </div>
            <div className="contenedor4">
            <img className="contenedor4img" src="/img/ipad-pro.jpeg" alt="" />
            <div className="centrado4">
                <h2>iPad Pro</h2>
                <h3>Supercargado por el <img className="m2logo" src="/img/chipm2.png" alt="" /></h3>
                <div className="links">
                    <a href="#">Más información</a>
                    <a href="#">Comprar</a>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Main;