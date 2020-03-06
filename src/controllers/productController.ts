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
