import { getProducts } from "../services/productServices.js";

export const getAllProducts = async ( req, res ) => {
    const products = await getProducts();
    return res.json( products )
}

export const createNewProduct = async ( req, res ) => {
    
}