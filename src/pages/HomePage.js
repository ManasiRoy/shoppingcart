import React from "react";
import ShopContext from "../context/shop-context";
import ProductsPage from "./Products";
import Header from "../components/Header";
import Listing from "./Listing";
import BannerSlider from "./Slider";
import CategoryPage from './Category'
import Footer from "../components/Footer";

const HomePage = props => {
  return (
    <ShopContext.Consumer>
      {context => (
        <React.Fragment>
          <Header />

          <BannerSlider />
          <CategoryPage />
          <ProductsPage />
          <Listing />
          <Footer />
        </React.Fragment>
      )}
    </ShopContext.Consumer>
  );
};

export default HomePage;
