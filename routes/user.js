const express = require("express");
const { check, validationResult } = require("express-validator");
const db = require("../models/User");
const paginatedResults = require("../middleware/pagination");
const { getUserId, getUserWithBookId } = require("../controllers/user");
const verifyToken = require("../middleware/authenticate");
const Admin = require("../middleware/Admin");
const {
  getUser,
  deleteUser,
  postUser,
  getSortedUser,
  editUser,
  getUserWithId,
} = require("../controllers/user");

const {
  postsuperAdmin,
  getsuperAdmin,
  postAdmin,
  getAdmin,
} = require("../controllers/admin");

const router = express.Router();
router.get("/book_id/:id/user/:user_id", getUserWithBookId);
router.get("/", getUser);
router.get("/:id", getUserWithId);
router.get("/mybooks/:id", getUserId);
router.delete("/:id", deleteUser);
router.post(
  "/",
  [
    check("name", "please include name").not().isEmpty().isLength({ min: 3 }),
    check("email", "please mention a valid email").isEmail(),
    check(
      "password",
      "please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  postUser
);
router.post("/superadmins", postsuperAdmin);
router.get("/superadmins", getsuperAdmin);
router.post("/admins", postAdmin);
router.get("/admins", getAdmin);
router.put(
  "/:id",
  [
    check("name", "please include name").not().isEmpty().isLength({ min: 3 }),
    check("email", "please mention a valid email").isEmail(),
    check(
      "password",
      "please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  editUser
);
router.get("/filters", paginatedResults(db), getSortedUser);

module.exports = router;
