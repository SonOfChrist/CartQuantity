let cartQuantity = 0;
const maxLimit = 10;

function updateCart(amount) {
    if (cartQuantity + amount > maxLimit) {
        document.querySelector('.warning-message').innerText = 'Cannot exceed 10 items in cart.';
        return;
    };
    cartQuantity += amount;
    document.querySelector('.warning-message').innerText = '';
    updateDisplay();
}

function resetCart() {
    cartQuantity = 0;
    document.querySelector('.warning-message').innerText = '';
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