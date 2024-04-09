const express = require("express");

const {
  getUserAndAllCreations,
  getOneCreation,
  createCreation,
  deleteCreation,
  updateCreation,
} = require("../queries/creations");

const creations = express.Router({ mergeParams: true });

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
  const oneCreation = await getOneCreation(id);
  if (oneCreation) {
    res.status(200).json(oneCreation);
  } else {
    res.status(500).json({ error: "Creation not found" });
  }
});

creations.post("/", async (req, res) => {
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

creations.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedCreation = await updateCreation({ id, ...req.body });
  if (updatedCreation.id) {
    res.status(200).json(updatedCreation);
  } else {
    res.status(404).json({ error: "Creation not found" });
  }
});

module.exports = creations;
