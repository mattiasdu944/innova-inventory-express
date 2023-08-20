import multer from "multer";
import express from "express";
import { uploadImage } from "../controllers/upload.controller.js";

const router = express.Router();

const storage = multer.diskStorage({
    destination: ( req, file, cb ) => {
        cb(null,'./public/storage/images')
    },
    filename: ( req, file, cb ) => {
        const extension = file.originalname.split('.').pop();
        cb(null, file.originalname );
    },

});

const upload = multer({ storage })
router.post('/upload', upload.single('image'), uploadImage);

export default router;