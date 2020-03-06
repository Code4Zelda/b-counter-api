const axios = require("axios");

const productItem = "http://localhost:4000/Nike";
export = {};

const getProduct = () => {
  console.log("...Fetching data");
  return axios
    .get(productItem)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error.response);
    });
};

exports.getProduct = getProduct;
