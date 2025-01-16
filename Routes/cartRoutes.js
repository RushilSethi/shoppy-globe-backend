const express = require("express");
const { addToCart, updateCart, deleteFromCart, getCart } = require("../Controllers/cartController");
const { auth } = require("../Middleware/authMiddleware");


const router = express.Router();

router.post("/", auth, addToCart);
router.put("/:id", auth, updateCart);
router.delete("/:id", auth, deleteFromCart);
router.get("/", auth, getCart);

module.exports = router;
