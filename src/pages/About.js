import React from "react";
import ShopContext from "../context/shop-context";
import Header from "../components/Header"
const About = props => {
  return (
    <ShopContext.Consumer>
      {context => (
        <React.Fragment>
          <Header />
          <main className="products">About Us</main>
        </React.Fragment>
      )}
    </ShopContext.Consumer>
  );
};

export default About;
