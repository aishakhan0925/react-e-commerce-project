import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Product from "./components/product";
import ProductList from "./components/productList";
import Details from "./components/details";
import Cart from "./components/cart/cart";
import Default from "./components/defualt";
import Modal from "./components/modal";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Modal />
    </React.Fragment>
    // <div className="container">
    //   <div className="row">
    //     <div className="col-6">colunm number one</div>
    //     <div className="col-6"><span>
    //       <i className="fas fa-home" />
    //     </span>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
