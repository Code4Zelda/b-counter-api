import mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    categoryId: {
      type: String,
      required: true
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    collection: "product"
  }
);

export interface IProduct extends mongoose.Document {
  name: string;
  price: string;
  rating: string;
  link: string;
  categoryId: string;
  isActive: boolean;
}

module.exports = mongoose.model<IProduct>("Product", Schema);
