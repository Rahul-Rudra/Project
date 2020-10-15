const express = require("express");
const mongoose = require("mongoose");
//const { check, validationResult } = require("express-validator/check");
const { body, validationResult } = require("express-validator");
const Admin = require("../middleware/Admin");
const verifyToken = require("../middleware/authenticate");
const db = require("../models/Book");
//const findbooks = require("../middleware/Search");
const paginatedResults = require("../middleware/pagination");
const {
  getBook,
  postBook,
  getSortedBook,
  deleteBook,
  getsearchBook,
} = require("../controllers/book");
const router = express.Router();

router.get("/searchbyname", getsearchBook);

router.get("/", getBook);

router.post(
  "/",
  [
    body("title", "Title not more than 10")
      .isString()
      .isLength({ max: 10 })
      .notEmpty(),
    body("ISBN").isString().isLength({ min: 6 }),
    body("stock").isNumeric(),
    body("author").isString(),
  ],
  postBook
);

router.get("/filters", verifyToken, paginatedResults(db), getSortedBook);

router.delete("/:id", deleteBook);

module.exports = router;
