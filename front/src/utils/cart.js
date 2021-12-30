export const addUnits = (data, product) => {
  if (product.quantity < product.countInStock) {
    return data.map((item) => ({
      ...item,
      quantity: item.quantity + (item._id === product._id ? 1 : 0),
    }));
  }
  return data
};
