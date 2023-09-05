import express from "express";
import { seed } from "../controllers/seed.controller.js";

const router = express.Router();


router.get('/seed', seed)

export default router