// tslint:disable no-console
import mongoose = require("mongoose");

import { MONGO, PORT } from "../config";
import app from "../routes";

export default mongoose.connect(
  MONGO,
  { useNewUrlParser: true, useUnifiedTopology: true },
  error => {
    if (error) {
      console.log("Error: ", error);
      process.exit(1);
    } else {
      console.log(`🥳 Connected to database!🥳`);
    }
    app.listen(PORT, () => {
      console.log(`⚡ Running on port ${PORT}⚡️`);
    });
  }
);
