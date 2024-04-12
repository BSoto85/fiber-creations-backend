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

module.exports = { addCartToUser };
