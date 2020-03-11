import React from "react";

function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increament, decreament, removeItem } = value;
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Product : </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Price : </span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center"></div>
        <span className="btn btn-black mx-1 " onClick={() => decreament(id)}>
          -
        </span>
        <span className="btn btn-black mx-1 ">{count}</span>
        <span className="btn btn-black mx-1 " onClick={() => increament(id)}>
          +
        </span>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash"></i>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total : $ {total}</strong>
      </div>
    </div>
  );
}
export default CartItem;
