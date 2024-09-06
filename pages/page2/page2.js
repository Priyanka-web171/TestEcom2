document.addEventListener("DOMContentLoaded", () => {
    const product = { 
        name: "Product 1", 
        price: "$10", 
        description: "This is product 1",
        details: "Additional product details go here."
    };

    const productDetailsDiv = document.getElementById("product-details");
    productDetailsDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <p>${product.description}</p>
        <p>${product.details}</p>
    `;
});
