import React from "react";
import Item from "./Item";

function Product({ dataProduct, addToCart, cartProduct }) {
  return (
    <div className="product-hunt">
      {dataProduct.map((element, index) => (
        <Item
          key={index}
          elementProduct={element}
          addToCart={addToCart}
          cartProduct={cartProduct}
        />
      ))}
    </div>
  );
}

export default Product;
