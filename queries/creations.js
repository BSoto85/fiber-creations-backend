const db = require("../db/dbConfig");

const getAllCreations = async () => {
  try {
    const allCreations = await db.any("SELECT * FROM creations");
    console.log(allCreations, "Get all creations");
    return allCreations;
  } catch (error) {
    return error;
  }
};

const getOneCreation = async (id) => {
  try {
    const oneCreation = await db.one("SELECT * FROM creations WHERE id=$1", id);
    return oneCreation;
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
      is_favorite,
      created_at,
      user_id,
    } = creation;
    const newCreation = await db.one(
      "INSERT INTO creations (creation_type, stitch, material, image, description, for_sale, price, is_favorite, created_at, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [
        creation_type,
        stitch,
        material,
        image,
        description,
        for_sale,
        price,
        is_favorite,
        created_at,
        user_id,
      ]
    );
    return newCreation;
  } catch (error) {
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
      is_favorite,
      updated_at,
      id,
    } = creation;
    const updatedCreation = await db.one(
      "UPDATE creations SET creation_type=$1, stitch=$2, material=$3, image=$4, description=$5, for_sale=$6, price=$7, is_favorite=$8, updated_at=$9 WHERE id=$10 RETURNING *",
      [
        creation_type,
        stitch,
        material,
        image,
        description,
        for_sale,
        price,
        is_favorite,
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
  getAllCreations,
  getOneCreation,
  createCreation,
  deleteCreation,
  updateCreation,
};
