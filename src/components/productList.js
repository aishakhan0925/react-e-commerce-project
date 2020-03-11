import React, { Component } from "react";
import Title from "./title";
import Product from "./product";
import { ProductConsumer } from "../context";
import { storeProducts } from "../data";
export default class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    console.log(this.state.products);
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Our  " title="Products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
