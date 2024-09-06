// page2.js

// Sample data for the products on Index Page 2
const products = [
    {
        name: "Pant5",
        brand: "Brand E",
        price: "$45",
        sizes: ["30", "32", "34"]
    },
    {
        name: "Pant6",
        brand: "Brand F",
        price: "$55",
        sizes: ["32", "34", "36"]
    },
    {
        name: "Pant7",
        brand: "Brand G",
        price: "$75",
        sizes: ["34", "36", "38"]
    },
    {
        name: "Pant8",
        brand: "Brand H",
        price: "$85",
        sizes: ["30", "32", "36"]
    },
];

// Function to display the products
function displayProducts() {
    const productContainer = document.getElementById("featured-products");

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const productName = document.createElement("h2");
        productName.textContent = product.name;

        const productBrand = document.createElement("p");
        productBrand.textContent = `Brand: ${product.brand}`;

        const productPrice = document.createElement("p");
        productPrice.textContent = `Price: ${product.price}`;

        const productSizes = document.createElement("p");
        productSizes.textContent = `Sizes: ${product.sizes.join(", ")}`;

        productDiv.appendChild(productName);
        productDiv.appendChild(productBrand);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productSizes);

        productContainer.appendChild(productDiv);
    });
}

// Call the function to display products when the page loads
window.onload = displayProducts;
