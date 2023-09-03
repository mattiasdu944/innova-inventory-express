import Order from "../models/Order.js";

const findAll = async () => {
    const orders = await Order.find()
        // .select('-__v')
        // .populate({
        //     path: 'details',
        //     populate: {
        //         path: 'product',
        //         select: '-__v'
        //     }
        // });

    return orders;
};

const findOneById = async ( id ) => {};

const create = async ( newSale ) => {
    const order = new Order( newSale );
    await order.save();
    return order;
};

const update = async ( id ) => {};

const remove = async ( id ) => {};

export default {
    findAll,
    findOneById,
    create,
    update,
    remove
};