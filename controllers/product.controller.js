import { db } from "../config/index.js";
import Product from "../models/Product.js";
import { createProduct, getProduct, getProducts } from "../services/productServices.js";

import { createSlug } from "../utils/create-slug.js";
import { validateNewProduct } from "../utils/validate-new-product.js";

export const getAllProducts = async ( req, res ) => {
    const products = await getProducts();
    return res.json( products )
}

export const createNewProduct = async ( req, res ) => {
    const newProduct = req.body;
    const validate = validateNewProduct(newProduct, res);

    if ( validate.statusCode !== 200 ) {
        return validate;
    }

    const slug = createSlug(newProduct.name);

    await db.connect()
    const productExist = await Product.findOne({ slug });
    await db.disconnect()
    
    if( productExist ){
        return res.status(403).json({ message: 'El producto ya se encuentra registrado' })
    }

    const product = await createProduct({...newProduct, slug});
    

    return res.json({
        message: "Producto creado correctamente",
        product
    })
}

export const getProductBySlug = async (req, res) => {
    const { slug } = req.params;

    const product = await getProduct( slug );

    if( !product ){
        return res.status(404).json( { message: 'Producto no encontrada o no existe' } );
    }

    return res.json( product );
}