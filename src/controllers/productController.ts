const productModel = require("../models/productModel");
const categoryModel = require("../models/categoryModel");

import { Request, Response, NextFunction } from "express";

export const createProduct = async (
  req: Request,
  res: Response
  // next: NextFunction
) => {
  try {
    const { name, price, rating, link, category } = req.body;

    // handles if  input doesn't follow Schema
    if (!name || !price || !rating || !link || !category) {
      res.status(400).send("Bad Request");
      return;
    }

    const findCategory = await categoryModel.findOne({ name: category });

    if (!findCategory) {
      const newCatergory = new categoryModel({
        name: category
      });

      await newCatergory.save();

      const { _id: categoryId } = newCatergory;

      const newProduct = new productModel({
        name,
        price,
        rating,
        link,
        categoryId
      });

      await newProduct.save();

      return res.status(200).json({
        _id: newProduct._id,
        name: newProduct.name,
        price: newProduct.price,
        raing: newProduct.rating,
        link: newProduct.link,
        category
      });
    }

    const { _id: categoryId } = findCategory;

    const newProduct = new productModel({
      name,
      price,
      rating,
      link,
      categoryId
    });

    await newProduct.save();

    return res.status(200).json({
      _id: newProduct._id,
      name: newProduct.name,
      price: newProduct.price,
      rating: newProduct.rating,
      link: newProduct.link,
      category
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;

    const item = await productModel.findOne({ name: name });

    if (!item) {
      return res
        .status(500)
        .send("This item does not exist. Please create new Product.");
    }

    return res.status(200).json({
      item
    });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

export const getByCategory = async (req: Request, res: Response) => {
  try {
    const { category } = req.params;

    const findCategory = await categoryModel.findOne({ name: category });
    console.log("Found category: ", findCategory);

    if (!findCategory) {
      return res.status(500).send("Category does not Exist");
    }

    const products = await productModel
      .find({ categoryId: findCategory._id })
      .sort({ rating: -1 });

    return res.status(200).send({ products });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
