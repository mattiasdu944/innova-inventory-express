import express from "express";
import { createOrder, getAllOrders } from "../controllers/order.controller.js";

const router = express.Router();

router.route('/sales')
    .get(getAllOrders)
    .post(createOrder);

// router.route('/sales/:id')
    // .get(getProductBySlug)
    // .put(updateOneProduct)
    // .delete(deleteProduct);

export default router;
