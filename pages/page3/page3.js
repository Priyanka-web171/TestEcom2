// page3.js

// Sample data for the products on Product 3 page
const products = [
    {
        name: "Shoe1",
        brand: "Brand A",
        price: "$50",
        sizes: ["7", "8", "9"]
    },
    {
        name: "Shoe2",
        brand: "Brand B",
        price: "$70",
        sizes: ["8", "9", "10"]
    },
    {
        name: "Shoe3",
        brand: "Brand C",
        price: "$90",
        sizes: ["7", "8", "10"]
    },
    {
        name: "Shoe4",
        brand: "Brand D",
        price: "$100",
        sizes: ["6", "8", "11"]
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
        productSizes.textContent = `Size: ${product.sizes.join(", ")}`;

        productDiv.appendChild(productName);
        productDiv.appendChild(productBrand);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productSizes);

        productContainer.appendChild(productDiv);
    });
}

// Call the function to display products when the page loads
window.onload = displayProducts;
