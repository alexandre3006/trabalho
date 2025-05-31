const router = require("express").Router();
const { createProduct, getAllProducts, getProductById } = require("../controllers/product");
const { verifyAdmin } = require("../middleware/authMiddleware");

router.post("/", verifyAdmin, createProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);

module.exports = router;