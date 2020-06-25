import React from "react";
import ShopContext from "../context/shop-context";
import Header from "../components/Header"

const Contact = props => {
  return (
    <ShopContext.Consumer>
      {context => (
        <React.Fragment>
          <Header />
          <main className="products">Contact</main>
        </React.Fragment>
      )}
    </ShopContext.Consumer>
  );
};

export default Contact;
