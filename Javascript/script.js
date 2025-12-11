/* --- BANNER --- */
const bannerImage = document.getElementById('banner-img');
const images = [
    "https://icms-image.slatic.net/images/ims-web/bfe8de2c-b737-4265-b191-5c6ddf7f2891.jpg",
    "https://icms-image.slatic.net/images/ims-web/0732df35-64f7-4363-9529-6531d2799279.jpg"
];
let currentIndex = 0;
function changeBanner() {
    if (bannerImage) {
        currentIndex++;
        if (currentIndex >= images.length) currentIndex = 0;
        bannerImage.src = images[currentIndex];
    }
}
setInterval(changeBanner, 3000);

/* --- CART --- */
let cartCount = 0;
const cartCountElement = document.getElementById('cart-count');
function addToCart() {
    cartCount++;
    if (cartCountElement) cartCountElement.innerText = cartCount;
    let cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.style.transform = "scale(1.2)";
        setTimeout(() => { cartIcon.style.transform = "scale(1)"; }, 200);
    }
}
function toggleCart() {
    if(cartCount > 0) alert(`You have ${cartCount} items in your ZK Store cart.`);
    else alert("Your cart is empty!");
}

/* --- PRODUCT DETAIL --- */
function changeImage(element) {
    let mainImg = document.getElementById('main-product-img');
    if (mainImg) mainImg.src = element.src;
}
let productQty = 1;
function updateQty(change) {
    productQty += change;
    if (productQty < 1) productQty = 1;
    let qtyDisplay = document.getElementById('qty-display');
    if (qtyDisplay) qtyDisplay.innerText = productQty;
}