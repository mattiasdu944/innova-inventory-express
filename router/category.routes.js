import express from "express";
import { getAllCategories, createNewCategory, getCategoryByTerm, updateCategoryById, deleteOneCategory } from "../controllers/category.controller.js";

const router = express.Router();

router.route('/categories')
    .get(getAllCategories)
    .post(createNewCategory);

router.route('/categories/:term')
    .get(getCategoryByTerm)
    .put(updateCategoryById)
    .delete(deleteOneCategory);

export default router;