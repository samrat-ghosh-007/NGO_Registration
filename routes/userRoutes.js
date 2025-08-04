const express = require("express");
const router = express.Router();
const { register, login, getUsers } = require("../controllers/userController");
const { authMiddleware, adminOnly } = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.get("/users", authMiddleware, adminOnly, getUsers);

module.exports = router;
