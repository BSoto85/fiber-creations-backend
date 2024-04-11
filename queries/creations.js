const db = require("../db/dbConfig");

const getUserAndAllCreations = async () => {
  try {
    const userAndAllCreations = await db.any(
      "SELECT creations.*, users.username FROM creations LEFT JOIN users ON creations.user_id = users.id"
    );
    return userAndAllCreations;
  } catch (error) {
    return error;
  }
};

const getOneCreationAndUser = async (id) => {
  try {
    const oneCreationAndUser = await db.one(
      "SELECT creations.*, users.username FROM creations LEFT JOIN users ON creations.user_id = users.id WHERE creations.id=$1",
      id
    );
    return oneCreationAndUser;
  } catch (error) {
    return error;
  }
};

const createCreation = async (creation) => {
  try {
    const {
      creation_type,
      stitch,
      material,
      image,
      description,
      for_sale,
      price,
      created_at,
      user_id,
    } = creation;
    const newCreation = await db.one(
      "INSERT INTO creations (creation_type, stitch, material, image, description, for_sale, price, created_at, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [
        creation_type,
        stitch,
        material,
        image,
        description,
        for_sale,
        price,
        created_at,
        user_id,
      ]
    );
    return newCreation;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const deleteCreation = async (id) => {
  try {
    const deletedCreation = await db.one(
      "DELETE FROM creations WHERE id=$1 RETURNING *",
      id
    );
    return deletedCreation;
  } catch (error) {
    return error;
  }
};

const updateCreation = async (creation) => {
  try {
    const {
      creation_type,
      stitch,
      material,
      image,
      description,
      for_sale,
      price,
      updated_at,
      id,
    } = creation;
    const updatedCreation = await db.one(
      "UPDATE creations SET creation_type=$1, stitch=$2, material=$3, image=$4, description=$5, for_sale=$6, price=$7, updated_at=$8 WHERE id=$9 RETURNING *",
      [
        creation_type,
        stitch,
        material,
        image,
        description,
        for_sale,
        price,
        updated_at,
        id,
      ]
    );
    return updatedCreation;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getUserAndAllCreations,
  getOneCreationAndUser,
  createCreation,
  deleteCreation,
  updateCreation,
};
