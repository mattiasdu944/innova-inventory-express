import express from "express";
import { getAllCategories, createNewCategory } from "../controllers/category.controller.js";

const router = express.Router();

router.route('/categories')
    .get(getAllCategories)
    .post(createNewCategory);

// router.route('/categories/:id')
//     .get(getServiceById)
//     .put(updateServiceById)
//     .delete(deleteOneService);


export default router;