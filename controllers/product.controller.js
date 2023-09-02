import productService from "../services/productService.js";

import { createSlug } from "../utils/create-slug.js";
import { validateNewProduct } from "../utils/validate-new-product.js";



export const getAllProducts = async ( req, res ) => {
    const products = await productService.findAll();
    return res.json( products )
}

export const createNewProduct = async ( req, res ) => {
    const newProduct = req.body;
    
    const validate = validateNewProduct(newProduct, res);
    if ( !validate ) {
        return validate;
    }

    const slug = createSlug(newProduct.name);

    const productExist = await productService.findOneBySlug(slug);
    
    if( productExist ){
        return res.status(403).json({ message: 'El producto ya se encuentra registrado' })
    }

    const product = await productService.create({...newProduct, slug});

    return res.json({
        message: "Producto creado correctamente",
        product
    })
}

export const getProductBySlug = async (req, res) => {
    const { slug } = req.params;

    const product = await productService.findOneBySlug( slug );

    if( !product ){
        return res.status(404).json( { message: 'Producto no encontrada o no existe' } );
    }

    return res.json( product );
}

export const deleteProduct = async (req, res) => {
    const { slug } = req.params;
    
    const product = await productService.findOneBySlug( slug );

    if( !product ){
        return res.status(404).json({ message: 'Producto no encontrado o no existe' } );
    }

    await productService.remove(slug);

    return res.json({
        message: 'Producto eliminado correctamente',
    })
}   

export const updateOneProduct = async (req, res) => {
    const { slug } = req.params;
    const existProduct = await productService.findOneBySlug( slug );
    
    if( !existProduct ){
        return res.status(404).json({ message: 'Producto no encontrado o no existe' } );
    }

    const product = await productService.update(existProduct, req.body);
    return res.json({
        message: 'Producto actualizado correctamente',
        product
    })

}