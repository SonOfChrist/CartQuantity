let cartQuantity = 0;
const maxLimit = 10;

function updateCart(amount) {
    if (cartQuantity + amount > maxLimit) {
        document.getElementById('warning-message').textContent = 'Cannot exceed 10 items in cart.';
        return;
    }
    cartQuantity += amount;
    document.getElementById('warning-message').textContent = '';
    updateDisplay();
}

function resetCart() {
    cartQuantity = 0;
    document.getElementById('warning-message').textContent = '';
    updateDisplay();
    console.log('Cart was reset');
}

function showQuantity() {
    console.log(`cartQuantity: ${cartQuantity}`);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('cart-display').textContent = `Cart: ${cartQuantity} item${cartQuantity !== 1 ? 's' : ''}`;
}