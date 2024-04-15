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
    const getUserAndCart = await db.any(
      "SELECT * FROM cart WHERE user_id = $1",
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
      "SELECT * FROM cart_items WHERE cart_id=$1",
      [cart_id]
    );
    return getCartItems;
  } catch (error) {
    return error;
  }
};
module.exports = { addCartToUser, getCartWithUserId, getAllCartItems };
