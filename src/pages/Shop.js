import React from "react";
import ShopContext from "../context/shop-context";
import Header from "../components/Header"

const Shop = props => {
  return (
    <ShopContext.Consumer>
      {context => (
        <React.Fragment>
          <Header />
          <main className="products">Shop</main>
        </React.Fragment>
      )}
    </ShopContext.Consumer>
  );
};

export default Shop;
