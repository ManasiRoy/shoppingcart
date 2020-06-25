import React from "react";
import ShopContext from "../context/shop-context";
import { Heart, Basket2 } from 'react-bootstrap-icons';

const ProductsPage = props => {
  return (
    <ShopContext.Consumer>
      {context => (
        <React.Fragment>

          <main className="products bg-grey pt-5 pb-5">
            <div className="container">
              <div className="row mb-4">
                <div className="col-md-6 text-left"><h3>Our Organics Products</h3></div>
                <div className="col-md-6 text-right">
                  <button className="btn btn-red">View all</button>
                </div>
              </div>

              <div className="row">
                {context.products.slice(7, 19).map(product => (
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
                        <Basket2 /> <span>Add to Cart</span>
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

export default ProductsPage;
