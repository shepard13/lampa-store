// Get  the value(number) of total amount of items in cart from the localStorage
const getItemsAmount = () => {
  return localStorage.getItem('itemsTotalAmount');
};

// Get the value(number) of total price of items in cart from the localStorage
const getItemsPrice = () => {
  return localStorage.getItem('itemsTotalPrice');
};

// Get the arr of items(objects) in cart from the localStorage
const getItemsCart = () => {
  return JSON.parse(localStorage.getItem('itemsList'));
};

const getLampsList = () => {
  return JSON.parse(localStorage.getItem('lampsList'));
};

export { getItemsAmount, getItemsPrice, getItemsCart, getLampsList };
