import React from "react";
import products from "./Data";

export default React.createContext({
  products: products,
  cart: [],
  addProductToCart: product => { },
  removeProductFromCart: productId => { }
});
