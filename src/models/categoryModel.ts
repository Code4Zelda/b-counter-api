import mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    name: {
      type: String
    }
  },
  {
    collection: "category"
  }
);

export interface ICategory extends mongoose.Document {
  _id: string;
  name: string;
}

module.exports = mongoose.model<ICategory>("Category", Schema);
