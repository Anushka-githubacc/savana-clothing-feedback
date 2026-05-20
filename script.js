let cartCount = 0;

function addToCart() {
    cartCount++;
    document.querySelectorAll("#cart-count").forEach(el => {
        el.innerText = cartCount;
    });
    alert("Product added to cart!");
}

function searchProducts() {
    const q = document.getElementById("search").value.toLowerCase();
    document.querySelectorAll(".product").forEach(p => {
        p.style.display = p.innerText.toLowerCase().includes(q) ? "block" : "none";
    });
}

function submitFeedback() {
    const thankYouMessage = document.getElementById("thankYouMessage");
    const form = event.target;
    
    if (thankYouMessage) {
        thankYouMessage.classList.add("show");
        form.style.display = "none";
        
        setTimeout(() => {
            thankYouMessage.classList.remove("show");
            form.style.display = "block";
            form.reset();
        }, 3000);
    } else {
        alert("Thank you for your feedback!");
    }
    
    return false;
}