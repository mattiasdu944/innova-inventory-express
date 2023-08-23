import express from "express";
import { createNewProduct, getAllProducts } from "../controllers/product.controller.js";

const router = express.Router();

router.route('/products')
    .get(getAllProducts)
    .post(createNewProduct);

// router.route('/categories/:term')
//     .get(getCategoryByTerm)
//     .put(updateCategoryById)
//     .delete(deleteOneCategory);

export default router;