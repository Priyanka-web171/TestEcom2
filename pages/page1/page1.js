document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { name: "Product 1", price: "$10", description: "This is product 1" },
        { name: "Product 2", price: "$20", description: "This is product 2" },
        { name: "Product 3", price: "$30", description: "This is product 3" }
    ];

    const productListDiv = document.getElementById("product-list");

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `<h3>${product.name}</h3><p>${product.price}</p><p>${product.description}</p>`;
        productListDiv.appendChild(productDiv);
    });
});
