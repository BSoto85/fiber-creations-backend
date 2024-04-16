const express = require("express");
const { authenticateToken } = require("../middlewares/authenticateToken");

const {
  getUserAndAllCreations,
  getOneCreationAndUser,
  createCreation,
  deleteCreation,
  updateCreation,
} = require("../queries/creations");

const { addItemToCart, getCartWithUserId } = require("../queries/cart");

const creations = express.Router({ mergeParams: true });

// creations.use("/:id/cart", cart);

creations.get("/", async (req, res) => {
  const allCreations = await getUserAndAllCreations();
  if (allCreations.length > 0) {
    res.status(200).json(allCreations);
  } else {
    res.status(500).json({ error: "Server error" });
  }
});

creations.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneCreation = await getOneCreationAndUser(id);
  if (oneCreation) {
    res.status(200).json(oneCreation);
  } else {
    res.status(500).json({ error: "Creation not found" });
  }
});

creations.post("/", authenticateToken, async (req, res) => {
  const createOneCreation = await createCreation(req.body);
  if (createOneCreation.id) {
    res.status(200).json(createOneCreation);
  } else {
    res.status(500).json({ error: "Failed to add creation" });
  }
});

creations.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedCreation = await deleteCreation(id);
  if (deletedCreation.id) {
    res.status(200).json(deletedCreation);
  } else {
    res.status(404).json({ error: "Creation not found" });
  }
});

creations.put("/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  const updatedCreation = await updateCreation({ id, ...req.body });
  if (updatedCreation.id) {
    res.status(200).json(updatedCreation);
  } else {
    res.status(404).json({ error: "Creation not found" });
  }
});

//api/creations/id/cart/id
//URL}/api/creations/${oneCreation.id}/cart/${user.id
// creations.post("/addtocart/:cart_id/:creation_id", async (req, res) => {
//   console.log(req.params);
// });
creations.post(
  "/:creation_id/cart/:user_id",
  // authenticateToken,
  async (req, res) => {
    const { creation_id, user_id } = req.params;
    // console.log(creation_id, user_id);
    const getCartId = await getCartWithUserId(user_id);
    console.log(getCartId);
    // console.log(req.body);
    const addItem = await addItemToCart({
      cart_id: getCartId.id,
      creation_id,
    });
    console.log("------", addItem);
    if (addItem.id) {
      res.status(200).json(addItem);
    } else {
      res.status(500).json({ error: "Failed to add item" });
    }
  }
);

module.exports = creations;
