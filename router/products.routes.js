import express from "express";
import { createNewProduct, deleteProduct, getAllProducts, getProductBySlug, updateOneProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.route('/products')
    .get(getAllProducts)
    .post(createNewProduct);

router.route('/products/:slug')
    .get(getProductBySlug)
    .put(updateOneProduct)
    .delete(deleteProduct);

export default router;