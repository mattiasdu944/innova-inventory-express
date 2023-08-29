import saleService from "../services/saleService.js";

export const getAllSales = async (req, res) => {
    const clients = await saleService.findAll()
    return res.json( clients )
};

export const getSalesById = async (req, res) => {};

export const createNewSale = async (req, res) => {
    console.log(req.body);
};

export const updateSale = async (req, res) => {};

export const deleteSaleById = async (req, res) => {};