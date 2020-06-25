import React from "react";
import ShopContext from "../context/shop-context";

const CategoryPage = props => {
    return (
        <ShopContext.Consumer>
            {context => (
                <React.Fragment>

                    <main className="category pt-5 pb-5">
                        <div className="container">
                            <div className="row mb-4">
                                <div className="col-md-6 text-left"><h3>Browse by category</h3></div>
                            </div>

                            <div className="row">
                                {context.products.slice(0, 6).map(product => (
                                    <div key={product.id} className="col-lg-2 col-md-3 mb-3 pro-outr">
                                        <div className="proInr">
                                            <figure>
                                                <img src={product.img} alt={product.id} />
                                            </figure>
                                        </div>
                                        <h4>{product.name}</h4>

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

export default CategoryPage;
