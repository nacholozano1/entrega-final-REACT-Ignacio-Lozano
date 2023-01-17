import React from "react";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="stickyNav">
            <nav>
                <Link to={""}><img className="apol-logo" src="/img/apol-logo-white-cut-trans.png" alt="logo"/></Link>
                <div>
                    <li>
                        <NavLink to={"/category/mac"}>Mac</NavLink>
                        <NavLink to={"/category/ipad"}>iPad</NavLink>
                        <NavLink to={"/category/iphone"}>iPhone</NavLink>
                        <NavLink to={"/category/watch"}>Watch</NavLink>
                    </li>
                </div>
            </nav>
            <CartWidget />
        </div>
    );
}

export default NavBar;