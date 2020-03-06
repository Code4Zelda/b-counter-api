const get = url => {
  return Promise.resolve({
    data: { name: "Nike", price: "50", rating: "2", category: "Shoes" }
  });
};

exports.get = get;
