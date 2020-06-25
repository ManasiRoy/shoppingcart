import React from "react";
import { NavLink } from "react-router-dom";

import ShopContext from "../context/shop-context";

const Footer = props => {
    return (
        <ShopContext.Consumer>
            {context => (
                <React.Fragment>
                    <footer>
                        <div className="container">
                            <div className="row mb-5">
                                <div className="col-md-3 ftr-inr mb-3">
                                    <h3>Information</h3>
                                    <ul className="ftr-inr-ul align-self-center">
                                        <li className="nav-item">
                                            <NavLink to="/About">About Us</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/">My account</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/">Checkout</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/cart">Carts</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/contact">Contact</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/">Faq</NavLink>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-md-4 ftr-inr mb-3">
                                    <h3>
                                        <a href="tel+10987654321">+1 098 765 4321</a>
                                    </h3>
                                    <a href="mailto:dummy_email@mail.com" className="mail">dummy_email@mail.com</a>
                                    <p>
                                        Monday — Friday 7:00am — 5:00pm <br />
                            Saturday 8:00am — 5:00pm <br />
                            Closed Sunday
                        </p>
                                </div>

                                <div className="col-md-5 ftr-inr mb-3">
                                    <h3>
                                        Keep up to date
                        </h3>
                                    <div className="form-ftr">
                                        <input type="email" className="form-control" />
                                        <input type="submit" className="btn btn-red" />
                                    </div>
                                    <p>
                                        Delievered on time with <span>no hassle</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-center copyright">
                                    <p>&copy;2020 . All rights reserved</p>
                                </div>
                            </div>
                        </div>
                    </footer>

                </React.Fragment>
            )}
        </ShopContext.Consumer>
    );
};

export default Footer;

