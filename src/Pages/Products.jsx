import React, { PureComponent } from "react";
import Products from "../Components/Products/products"
import A1 from "../images/slider/banner.jpg";

class Product extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
      <Products></Products>
      </>
    );
  }
}

export default Product;
