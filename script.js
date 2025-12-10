/* --- 1. BANNER SLIDER (Homepage Only) --- */
const bannerImage = document.getElementById('banner-img');
const images = [
    "https://icms-image.slatic.net/images/ims-web/bfe8de2c-b737-4265-b191-5c6ddf7f2891.jpg", // 12.12 Banner
    "https://icms-image.slatic.net/images/ims-web/0732df35-64f7-4363-9529-6531d2799279.jpg", // Lifestyle
    "https://icms-image.slatic.net/images/ims-web/8895c808-166d-476b-a25e-39965d18d45f.jpg"  // Tech
];
let currentIndex = 0;

function changeBanner() {
    // Check if the banner exists before trying to change it
    if (bannerImage) {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        bannerImage.src = images[currentIndex];
    }
}

// Change image every 3 seconds
setInterval(changeBanner, 3000);


/* --- 2. FLASH SALE COUNTDOWN TIMER --- */
// Set the date we're counting down to (24 hours from now)
let countDownDate = new Date().getTime() + (24 * 60 * 60 * 1000);
let timerElement = document.getElementById("countdown-timer");

// Only run the timer if the element exists
if (timerElement) {
    let x = setInterval(function() {
        let now = new Date().getTime();
        let distance = countDownDate - now;

        // Time calculations
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        timerElement.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            timerElement.innerHTML = "EXPIRED";
        }
    }, 1000);
}


/* --- 3. SHOPPING CART FUNCTIONALITY --- */
let cartCount = 0;
const cartCountElement = document.getElementById('cart-count');

function addToCart() {
    cartCount++;
    if (cartCountElement) {
        cartCountElement.innerText = cartCount;
    }
    
    // Add a small animation to the cart icon
    let cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.style.transform = "scale(1.2)";
        setTimeout(() => {
            cartIcon.style.transform = "scale(1)";
        }, 200);
    }
}

function toggleCart() {
    if(cartCount > 0) {
        alert(`You have ${cartCount} items in your ZK Store cart.`);
    } else {
        alert("Your cart is empty!");
    }
}


/* --- 4. SEARCH FUNCTIONALITY --- */
function searchProducts() {
    let input = document.getElementById('search-input');
    // If search bar doesn't exist (e.g. on login page), stop here
    if (!input) return;

    let filter = input.value.toLowerCase();
    let cards = document.getElementsByClassName('product-card');

    for (let i = 0; i < cards.length; i++) {
        // Safe check to make sure the card has a title
        let titleElement = cards[i].querySelector(".product-title");
        if (titleElement) {
            let title = titleElement.innerText.toLowerCase();
            if (title.includes(filter)) {
                cards[i].style.display = ""; // Show
            } else {
                cards[i].style.display = "none"; // Hide
            }
        }
    }
}

// Allow search on pressing "Enter" key
let searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            searchProducts();
        }
    });
}


/* --- 5. PRODUCT DETAIL PAGE FUNCTIONS --- */

// Change the main image when a thumbnail is clicked
function changeImage(element) {
    let mainImg = document.getElementById('main-product-img');
    if (mainImg) {
        mainImg.src = element.src;
    }
}

// Quantity Counter
let productQty = 1;
function updateQty(change) {
    productQty += change;
    if (productQty < 1) productQty = 1; // Prevent going below 1
    
    let qtyDisplay = document.getElementById('qty-display');
    if (qtyDisplay) {
        qtyDisplay.innerText = productQty;
    }
}