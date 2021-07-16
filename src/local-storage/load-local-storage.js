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

//Set the arr of lamps(objects) in listItems: in the localStorage
const setLampsList = (lamps) => {
  localStorage.setItem('lampsList', JSON.stringify(lamps));
};
export { setItemsAmount, setItemsPrice, setItemsCart, setLampsList };
