import React from "react";
import ShopContext from "../context/shop-context";
import { Heart } from 'react-bootstrap-icons';

const Listing = props => {
    return (
        <ShopContext.Consumer>
            {context => (
                <React.Fragment>
                    <main className="products pt-5 pb-5">
                        <div className="container">
                            <div className="row mb-4">
                                <div className="col-md-6 text-left"><h3>Features Listing</h3></div>
                                <div className="col-md-6 text-right">
                                    <button className="btn btn-red">View all</button>
                                </div>
                            </div>

                            <div className="row">
                                {context.products.slice(19, 31).map(product => (
                                    <div key={product.id} className="col-lg-2 col-md-3 mb-3 pro-outr">
                                        <div className="proInr">
                                            <div className="text-right">
                                                <button className="wisthlist-area"><Heart /></button>
                                            </div>
                                            <figure>
                                                <img src={product.img} alt={product.id} />
                                            </figure>
                                        </div>

                                        <div className="onhover">
                                            <h4>{product.name}</h4>
                                            <span>${product.price}</span>
                                            <button className="btn w-100 btn-red"
                                                onClick={context.addProductToCart.bind(this, product)}
                                            >
                                                Add to Cart
                    </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>
                </React.Fragment>
            )}
        </ShopContext.Consumer>
    );
};

export default Listing;
