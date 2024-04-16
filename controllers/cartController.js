const express = require("express");
const cart = express.Router({ mergeParams: true });

const { getCartWithUserId, getAllCartItems } = require("../queries/cart");
const { authenticateToken } = require("../middlewares/authenticateToken");

//user id passed from front end will be useOutletContext
//run getCartWithUserId as an await, set to variable
//check if cart.id, if not return error
//if cart.id call getAllCartItems

//api/cart/id
cart.get("/:id", async (req, res) => {
  const { id } = req.params;
  const newCart = await getCartWithUserId(id);
  // console.log(newCart);
  if (newCart.id) {
    const allItems = await getAllCartItems(newCart.id);
    res.status(200).json(allItems);
  } else {
    res.status(500).json({ error: "Cannot get cart items." });
  }
});

cart.delete("/:creation_id", async (req, res) => {});

module.exports = cart;
