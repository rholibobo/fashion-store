const express = require("express");
const { isAuthenticated } = require('../utils/isAuthenticatedCookies')
const {
    createOrder,
    getAllProducts,
    getOrderStatus,
    createProduct
} = require('../controllers/productController');

const router = express.Router();


router.post("/create-product", isAuthenticated, createProduct);
router.post("/buy", isAuthenticated, createOrder);
router.get("/all-products", isAuthenticated, getAllProducts);
router.get("/order-status/:orderId", isAuthenticated, getOrderStatus);


module.exports = { router };
