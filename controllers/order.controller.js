import Product from "../models/Product.js";
import orderService from "../services/orderService.js";

export const getAllOrders = async (req, res) => {
    const orders = await orderService.findAll();
    return res.json( orders )
};

export const createOrder = async (req, res) => {
    if( Object.values(req.body).includes('') ){
        return res.status(400).json({ message: 'Todos los campos son obligatorios'});
    }

    const { details } = req.body;

    // details.map( async detail => {
    //     try {
    //         const product = await Product.findById( detail.product );
    //         if( product.stock < detail.amount ) {
    //             return;
    //         }
    //         product.stock = product.stock - detail.amount;
    //         product.save();
    //     } catch (error) {
    //         return error;
    //     }
    // })
    
    // const sale = await saleService.create(req.body);

    // return res.json({ 
    //     message: 'Venta exitosa',
    //     sale
    // })
};