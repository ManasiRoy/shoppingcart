import React from "react";
import { NavLink } from "react-router-dom";

import ShopContext from "../context/shop-context";

import MainNavigation from "../components/MainNavigation";
import { PersonCircle, Basket2, Heart, Search } from 'react-bootstrap-icons';


const HomePage = props => {
    return (
        <ShopContext.Consumer>
            {context => (
                <React.Fragment>
                    <header className="container">
                        <nav className="navbar navbar-expand-md ">
                            <NavLink to="/" className="logooutr">
                                <img src="images/logo.jpg" alt="" />
                            </NavLink>
                            <ul className="navbar-nav mr-md-auto align-self-center">

                                <li className="nav-item">
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/About">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/shop">Shop</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-md-auto rightNav">
                                <li className="nav-item"><Search /></li>

                                <li className="nav-item"><Heart /></li>
                                <li className="nav-item cartItem">
                                    <NavLink to="/cart"><Basket2 /></NavLink>
                                    <div className="navmums">
                                        <MainNavigation
                                            cartItemNumber={context.cart.reduce((count, curItem) => {
                                                return count + curItem.quantity;
                                            }, 0)}
                                        /></div>
                                </li>
                                <li className="nav-item"><PersonCircle /></li>
                            </ul>
                        </nav>
                    </header>


                </React.Fragment>
            )}
        </ShopContext.Consumer>
    );
};

export default HomePage;

