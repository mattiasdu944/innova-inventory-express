import Order from "../models/Order.js";
import Product from "../models/Product.js";
import orderService from "../services/orderService.js";

export const getAllOrders = async (req, res) => {
    const orders = await orderService.findAll();
    return res.json( orders )
};

export const createOrder = async (req, res) => {

    const { orderItems } = req.body;
    
    const productsIds = orderItems.map( product => product._id );

    const dbProducts = await Product.find({ _id: { $in: productsIds  } })

    try {
        let subTotal = 0;

        orderItems.map(( item )  => {
            subTotal += item.quantity * item.price;
            return subTotal
        })

        if( subTotal !== req.body.total ){
            throw new Error('Manipulacion de datos')
        }
        
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: error.message || 'Revise logs del servidor'
        })
    }


    const newOrder = new Order( req.body );
    newOrder.total = Math.round( newOrder.total * 100) / 100;
    await newOrder.save();

    return res.status(201).json({
        message: 'Orden creada',
        order: newOrder
    })
};