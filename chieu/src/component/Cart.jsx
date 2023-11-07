import React from "react";

function Cart({ cartProduct, updateQuantity, handleDelete }) {
  let totalPrice = cartProduct.reduce(function (price, product) {
    return price + product.quantity * product.price;
  }, 0);
  return (
    <div className="table_list-container">
      <div>
        <h2>List of selected products</h2>
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartProduct.map((item, index) => (
            <tr className="style-table" key={index}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>
                <img src={item.image} alt="" />
              </td>
              <div className="buttons_added" key={index}>
                <button
                  className="minus is-form"
                  type="button"
                  value="-"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <p
                  aria-label="quantity"
                  className="input-qty"
                  name=""
                  value={1}
                >
                  {item.quantity}
                </p>
                <button
                  className="plus is-form"
                  type="button"
                  value="+"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>

              <td>{item.price} $</td>
              <td>{item.price * item.quantity} $</td>
              <td>
                <button
                  className="btn-denger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Tổng tiền:{totalPrice} $ </h3>
    </div>
  );
}

export default Cart;
