const { getProduct } = require("../__mocks__/http");
// jest.mock("../modules/requestRoutes");

describe("get product", () => {
  it("should load object", () => {
    getProduct().then(response => {
      const name = response.name;
      const transformedName = name.toUpperCase();
      expect(transformedName).toStrictEqual("NIKE");
    });
  });
  it("should have price of 50", () => {
    getProduct().then(response => {
      console.log("testing", response.price);

      expect(response.price).toBe("50");
    });
  });
});
