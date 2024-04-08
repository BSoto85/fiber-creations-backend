const express = require("express");

const {
  getAllCreations,
  getOneCreation,
  createCreation,
  deleteCreation,
  updateCreation,
} = require("../queries/creations");

const creations = express.Router();
