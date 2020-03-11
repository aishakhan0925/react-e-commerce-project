import React, { Component } from "react";
import Title from "../title";
import CartColumns from "./cartColumns";
import EmptyCart from "./emptyCart";
import { ProductConsumer } from "../../context";
import CartList from "./cartList";
import CartTotals from "./cartTotals";
export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="Your " title="Cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} 
                  history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
