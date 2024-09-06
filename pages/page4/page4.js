// page4.js

// Sample data for the products on Product 4 page
const products = [
    {
        name: "Shirt1",
        brand: "Brand A",
        price: "$25",
        sizes: ["Small", "Medium", "Large"]
    },
    {
        name: "Shirt2",
        brand: "Brand B",
        price: "$40",
        sizes: ["Medium", "Large", "X-Large"]
    },
    {
        name: "Shirt13",
        brand: "Brand C",
        price: "$60",
        sizes: ["Medium", "Large", "X-Large"]
    },
    {
        name: "Shirt4",
        brand: "Brand D",
        price: "$20",
        sizes: ["Small", "Medium"]
    },
    
];

// Function to display the products
function displayProducts() {
    const productContainer = document.getElementById("product-details");

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
