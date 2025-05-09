let cartQuantity = 0;
const maxLimit = 100;

function updateCart(amount) {
    if (cartQuantity + amount > maxLimit) {
        document.querySelector('.warning-message').innerText = 'You Can\'t exceed 100 items in one Single cart Upgrade to Pro Cart.';
        return;
    };
    cartQuantity += amount;
    document.querySelector('.warning-message').innerText = '';
    updateDisplay();
}

function resetCart() {
    cartQuantity = 0;
    document.querySelector('.warning-message').innerText = 'The Cart has been Reset';
    console.log('Cart was reset');
    updateDisplay();
}

function showQuantity() {
    console.log(`cartQuantity: ${cartQuantity}`);
    updateDisplay();
}

function updateDisplay() {
    document.querySelector('.cart-display').innerText = `Cart: ${cartQuantity} item${cartQuantity !== 1 ? 's' : ''}`;
}