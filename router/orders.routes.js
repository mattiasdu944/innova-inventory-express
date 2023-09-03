import express from "express";
import { createOrder, getAllOrders } from "../controllers/order.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.route('/orders')
    .get(getAllOrders)
    .post(authMiddleware, createOrder);

// router.route('/sales/:id')
    // .get(getProductBySlug)
    // .put(updateOneProduct)
    // .delete(deleteProduct);

export default router;
