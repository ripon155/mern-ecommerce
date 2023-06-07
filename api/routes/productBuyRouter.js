const express = require("express");
const productBuyController = require("./../controller/productBuyController");
const authController = require("./../controller/authController");

const router = express.Router();

const { getCheckoutSession } = productBuyController;
const { protectRoute, restricTo } = authController;

// router.get("/checkout-session/:poductId", protectRoute, getCheckoutSession);

router.post("/checkout-session", getCheckoutSession); //protectRoute,

module.exports = router;
