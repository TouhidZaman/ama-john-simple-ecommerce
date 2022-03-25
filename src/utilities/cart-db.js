//use local storage to manage cart data

//Getting cart data
const getCartData = () => {
    let cartItems = {};
    const dbCartItems = localStorage.getItem('shopping-cart');
    if(dbCartItems) {
        cartItems = JSON.parse(dbCartItems);
    }
    return cartItems;
}

//Setting cart data
const setCartData = id => {
    const cartItems = getCartData();
    id in cartItems ? cartItems[id] += 1 : cartItems[id] = 1;
    localStorage.setItem('shopping-cart', JSON.stringify(cartItems));
}

//Removing all cart items
const removeCartData = () => {
    localStorage.removeItem('shopping-cart');
}

//Removing single item from cart data
const removeCartItem = id => {
    const cartItems = getCartData();
    if(id in cartItems) delete cartItems[id];
}
export {
    getCartData, 
    setCartData,
    removeCartItem,
    removeCartData
}