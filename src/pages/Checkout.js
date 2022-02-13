import React, { useState } from "react";
import { connect } from "react-redux";

function OrderSection({
  cart,
  cartTotal,
  cartLength,
  actionPlaceOrder,
  actionClearCart,
  orders,
}) {
  const [nameInput, setName] = useState("");
  const [lastNameInput, setLastName] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    actionPlaceOrder(nameInput, lastNameInput, cart);
    actionClearCart();
    setName("");
    setLastName("");
  };

  return cart.length !== 0 ? "" : "";
}

// const mapStateToProps = (state) => ({
//   cart: selectCart(state),
//   cartTotal: selectCartTotal(state),
//   cartLength: selectCartLength(state),
//   orders: selectOrders(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   actionPlaceOrder: (name, lastName, items) =>
//     dispatch(ACTION_PLACE_ORDER(name, lastName, items)),
//   actionClearCart: () => dispatch(ACTION_CLEAR_CART()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(OrderSection);