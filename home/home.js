document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { name: "Product 1", price: "$10" },
        { name: "Product 2", price: "$20" },
        { name: "Product 3", price: "$30" }
    ];

    const featuredProductsDiv = document.getElementById("featured-products");

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `<h3>${product.name}</h3><p>${product.price}</p>`;
        featuredProductsDiv.appendChild(productDiv);
    });
});
