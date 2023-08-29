import express from "express";
import { createNewSale, getAllSales } from "../controllers/sale.controller.js";

const router = express.Router();

router.route('/sales')
    .get(getAllSales)
    .post(createNewSale);

router.route('/sales/:id')
    // .get(getProductBySlug)
    // .put(updateOneProduct)
    // .delete(deleteProduct);

export default router;
