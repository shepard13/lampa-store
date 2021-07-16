// Set  the value(number) of total amount of items in cart in the localStorage
const setItemsAmount = (amountOfItems) => {
  localStorage.setItem('itemsTotalAmount', JSON.stringify(amountOfItems));
};

// Set the value(number) of total price of items in cart in the localStorage
const setItemsPrice = (itemsPrice) => {
  localStorage.setItem('itemsTotalPrice', JSON.stringify(itemsPrice));
};

// Set the arr of items(objects) in cart in the localStorage
const setItemsCart = (itemsCart) => {
  localStorage.setItem('itemsList', JSON.stringify(itemsCart));
};

export { setItemsAmount, setItemsPrice, setItemsCart };
