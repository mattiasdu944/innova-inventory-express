import express from "express";
import { createNewProduct, getAllProducts, getProductBySlug } from "../controllers/product.controller.js";

const router = express.Router();

router.route('/products')
    .get(getAllProducts)
    .post(createNewProduct);

router.route('/products/:slug')
    .get(getProductBySlug)
//     .put(updateCategoryById)
//     .delete(deleteOneCategory);

export default router;