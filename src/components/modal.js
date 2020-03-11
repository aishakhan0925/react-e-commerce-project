import React, { Component } from "react";
import { ProductConsumer, ProductProvider } from "../context";
import styled from "styled-components";
import ButtonContainer from "./button";
import { Link } from "react-router-dom";
class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="p-5 col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"
                    >
                      <h5>Item Added to the Cart </h5>
                      <img src={img} className="img-fluid" />
                      <h5> {title} </h5>
                      <h5 className="text-muted">Price : $ {price} </h5>
                      <Link to="/">
                        <ButtonContainer onClick={() => closeModal()}>
                          Continue to Shopping
                        </ButtonContainer>
                      </Link>
                      {/* add to cart btn */}
                      <Link to="/cart">
                        <ButtonContainer cart onClick={() => closeModal()}>
                          Add to Cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;

export default Modal;
