const router = require("express").Router();
const { createOrder, getUserOrders, getAllOrders } = require("../controllers/order");
const { verifyToken, verifyAdmin } = require("../middleware/authMiddleware");

router.post("/", verifyToken, createOrder);
router.get("/user/:userId", verifyToken, getUserOrders);
router.get("/", verifyAdmin, getAllOrders);

module.exports = router;