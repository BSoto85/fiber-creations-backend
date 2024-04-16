const express = require("express");
const cart = express.Router({ mergeParams: true });

const {
  getCartWithUserId,
  getAllCartItems,
  deleteItemFromCart,
} = require("../queries/cart");
const { authenticateToken } = require("../middlewares/authenticateToken");

//user id passed from front end will be useOutletContext
//run getCartWithUserId as an await, set to variable
//check if cart.id, if not return error
//if cart.id call getAllCartItems

//api/cart/id
cart.get("/:id", async (req, res) => {
  const { id } = req.params;
  const newCart = await getCartWithUserId(id);
  if (newCart.id) {
    const allItems = await getAllCartItems(newCart.id);
    res.status(200).json(allItems);
  } else {
    res.status(500).json({ error: "Cannot get cart items." });
  }
});

cart.delete("/:cart_item_id", async (req, res) => {
  const { cart_item_id } = req.params;
  const deletedItem = await deleteItemFromCart(cart_item_id);
  if (deletedItem.id) {
    res.status(200).json(deletedItem);
  } else {
    res.status(404).json({ error: "Item not found" });
  }
});

module.exports = cart;
