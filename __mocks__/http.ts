const getProduct = () => {
  return Promise.resolve({
    name: "Nike",
    price: "50",
    rating: "2",
    link: "link", //link will be a string - testing purposes
    category: "shoes"
  });
};

exports.getProduct = getProduct;
