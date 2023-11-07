import React from "react";

function Item({ elementProduct, addToCart, cartProduct }) {
  console.log(cartProduct);
  return (
    <div className="product-1">
      <div className="image">
        <img src={elementProduct.image} alt="" />
      </div>
      <div className="content-product">
        <h4>{elementProduct.title}</h4>
        <h2>{elementProduct.price}$</h2>
        <div className="button-addtocart">
          <div className="add-to-cart">
            <button onClick={() => addToCart(elementProduct)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
