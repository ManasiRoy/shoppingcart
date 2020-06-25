import React, { useContext, useEffect } from "react";

import ShopContext from "../context/shop-context";
import "./Cart.scss";
import Header from "../components/Header"


const CartPage = props => {
  const context = useContext(ShopContext);

  useEffect(() => {
    console.log(context);
  });

  return (
    <React.Fragment>
      <Header />

      <main className="cart">
        {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {context.cart.map(cartItem => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.name}</strong> - ${cartItem.price} (
                {cartItem.quantity})
              </div>
              <div>
                <button
                  onClick={context.removeProductFromCart.bind(
                    this,
                    cartItem.id
                  )}
                >
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </React.Fragment>
  );
};

export default CartPage;
