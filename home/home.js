document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { name: "Product 1", price: "$10" },
        { name: "Product 2", price: "$20" },
        { name: "Product 3", price: "$30" }
    ];
<<<<<<< HEAD

    const featuredProductsDiv = document.getElementById("featured-products");

=======
    const featuredProductsDiv = document.getElementById("featured-products");
>>>>>>> 33acdd6f37a0464cd720e6e48dce062a1c1ecfbe
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `<h3>${product.name}</h3><p>${product.price}</p>`;
        featuredProductsDiv.appendChild(productDiv);
    });
<<<<<<< HEAD
});
=======
});
>>>>>>> 33acdd6f37a0464cd720e6e48dce062a1c1ecfbe
