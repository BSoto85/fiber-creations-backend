const db = require("../db/dbConfig");

const addCartToUser = async (user_id) => {
  try {
    const addedCartToUser = await db.one(
      "INSERT INTO cart (user_id) VALUES ($1) RETURNING *",
      user_id
    );
    return addedCartToUser;
  } catch (error) {
    return error;
  }
};

const getCartWithUserId = async (user_id) => {
  try {
    const getUserAndCart = await db.one(
      "SELECT cart.id FROM cart WHERE user_id = $1",
      [user_id]
    );
    return getUserAndCart;
  } catch (error) {
    return error;
  }
};

const getAllCartItems = async (cart_id) => {
  try {
    const getCartItems = await db.any(
      "SELECT creations.*, cart_items.id AS cart_item_id, cart.id AS cart_id FROM cart_items JOIN cart ON cart_items.cart_id = cart.id JOIN creations ON cart_items.creation_id = creations.id WHERE cart_items.cart_id=$1",
      [cart_id]
    );
    return getCartItems;
  } catch (error) {
    return error;
  }
};

const addItemToCart = async (cart_item) => {
  try {
    const addItem = await db.one(
      "INSERT INTO cart_items (cart_id, creation_id) VALUES($1, $2) RETURNING *",
      [cart_item.cart_id, cart_item.creation_id]
    );
    return addItem;
  } catch (error) {
    return error;
  }
};

const deleteItemFromCart = async (cart_item_id) => {
  try {
    const deleteItem = await db.one(
      "DELETE FROM cart_items WHERE id=$1 RETURNING *",
      cart_item_id
    );
    return deleteItem;
  } catch (error) {
    return error;
  }
};

module.exports = {
  addCartToUser,
  getCartWithUserId,
  getAllCartItems,
  addItemToCart,
  deleteItemFromCart,
};
