const products = [
    {
        id: 1,
        title: "Fresh Red Fruit Punch",
        price: 4,
        image: "glass-punch-juice.jpg",
        category: "Juice",
        shortDescription: "Refreshing red fruit punch served chilled.",
        details: "A refreshing fruit punch with a rich fruity flavor and vibrant red color. Perfect for parties, gatherings and a refreshing evening drink.",
        stock: 25,
        rating: 4.7
    },

    {
        id: 2,
        title: "Freash Orange Juice",
        price: 3.0,
        image: "images.jpg",
        category: "Beverage",
        shortDescription: "Fresh and refreshing orange juice with a naturally citrusy taste.",
        details: "Freshly prepared orange juice made from ripe and juicy oranges. It has a naturally sweet and tangy citrus flavor and is best served chilled for a refreshing experience.",
        stock: 15,
        rating: 4.5
    },

    {
        id: 3,
        title: "Classic Beer",
        price: 5.0,
        image: "istockphoto-1165339040-612x612.jpg",
        category: "Beverage",
        shortDescription: "A selection of classic beverages served chilled.",
        details: "A carefully presented collection of classic beverages with different colors and styles. Best served chilled for a refreshing experience.",
        stock: 20,
        rating: 4.6
    },

    {
        id: 4,
        title: "Signature Orange Cocktail",
        price: 4.0,
        image: "istockphoto-2159060475-612x612.jpg",
        category: "Cocktail",
        shortDescription: "A stylish orange-colored signature cocktail.",
        details: "A beautifully presented signature cocktail with a vibrant orange color and refreshing taste. Perfect for evening gatherings and special occasions.",
        stock: 18,
        rating: 4.8
    },
    {
    id: 5,
    title: "Fresh Apple Juice",
    price: 3.0,
    image: "istockphoto-503096289-612x612.jpg",
    category: "Juice",
    shortDescription: "Fresh apple juice with a naturally sweet and refreshing taste.",
    details: "Freshly prepared apple juice made from ripe apples, offering a naturally sweet flavor and refreshing taste. Perfect for breakfast, afternoon refreshment, or a healthy drink option.",
    stock: 22,
    rating: 4.7
},

{
    id: 6,
    title: "Fresh Lemon Juice",
    price: 2.0,
    image: "glass-cup-fresh-lemon-juice-wooden-board_114579-53580.avif",
    category: "Juice",
    shortDescription: "Refreshing lemon juice with a light and tangy flavor.",
    details: "A refreshing lemon juice made with fresh lemons, offering a naturally tangy and citrusy flavor. Best served chilled and perfect for a refreshing summer drink.",
    stock: 30,
    rating: 4.8
}
];
const cartButtons = document.getElementsByClassName("add-to-cart");

for (const button of cartButtons) {

    button.addEventListener("click", () => {
        const cartcount = parseInt(
            document.getElementById("count").innerText
        );

        if (cartcount >= 7) {
            alert("You can add maximum 5 products to the cart.");
            return;
        }

        const id = button.dataset.id;

        const product = products.find(
            product => product.id == id
        );

        handleaddtocart(
            product.title,
            product.price,
            product.image
        );
        button.innerText = "Added ✓";
        button.classList.add("selected");
        button.disabled = true;

    });

}
const singleproduct = (id) => {

    console.log("singleproduct called");
    console.log("id =", id);

    const product = products.find(product => product.id == id);

    console.log("product =", product);

    const detailsContainer =
        document.getElementById("product-details");

    console.log("detailsContainer =", detailsContainer);

    detailsContainer.innerHTML = `
        <h2>${product.title}</h2>
        <img src="${product.image}" width="250">
        <h3>$${product.price}</h3>
        <p>${product.details}</p>
        <p>Category: ${product.category}</p>
        <p>Stock: ${product.stock}</p>
        <p>Rating: ⭐ ${product.rating}</p>
    `;

    console.log("Details inserted");

    const modalElement =
        document.getElementById("productModal");

    console.log("modalElement =", modalElement);

    const modal = new bootstrap.Modal(modalElement);

    modal.show();
};
const searchProduct = () => {

    const searchText = document
        .getElementById("search-input")
        .value
        .toLowerCase();

    const cards = document.querySelectorAll(".card");

    let found = false;

    cards.forEach(card => {

        const productName = card
            .getAttribute("data-name")
            .toLowerCase();

        if (productName.includes(searchText)) {

            card.style.display = "block";
            found = true;

        } else {

            card.style.display = "none";

        }

    });

    if (!found) {
        alert("Product Not Found!");
    }

};
const handleaddtocart = (title, price, image) => {

    const cartcount = document.getElementById("count").innerText;

    let convertedcount = parseInt(cartcount);
    convertedcount++;

    document.getElementById("count").innerText = convertedcount;

    const container = document.getElementById("cart-main-container");

    const div = document.createElement("div");

    div.classList.add("cart-info");

    div.innerHTML = `
        <div class="cart-row">

            <span class="cart-sl">
                ${convertedcount}
            </span>

            <img 
                src="${image}" 
                class="cart-image"
            >

            <span class="cart-name">
                ${title}
            </span>
            <span class="price">
                $${price}
            </span>

        </div>

        <hr>
    `;

    container.appendChild(div);

    updatetotal();
};


const updatetotal = () => {

    const allprices = document.getElementsByClassName("price");

    let total = 0;

    for (const element of allprices) {

        const price = parseFloat(
            element.innerText.replace("$", "")
        );

        total = total + price;
    }

    document.getElementById("total").innerText = "$" + total;
};