const grid = document.querySelector(".grid");
let productsInLocalStorage = [];
let categorySelector = localStorage.getItem("categorySelector") || "";

function renderCard(pr) {
  const item = document.createElement("div");
  item.className = "card";

  item.innerHTML = `
          <div class="image-div">
            <img src=${pr.images[0]}  alt="">
          </div>
          <div class="description">
          <p class="category"> ${pr.category.toUpperCase()} </p>
            <p class="title"> ${pr.title.slice(0, 30)}</p>
          </div>
          <div class="price-rating">
            <span class="price">$${pr.price}</span>
            <div class="rating">
              <img src="/assets/icons/star.svg" alt="">
              <span>${pr.rating} </span>
            </div>
          </div>
          <div class="two-btns">
            <button class="add-btn" data-id=${pr.id}>
              <img src="/assets/icons/addToCart.svg" alt="">
              <span>Add</span>
            </button>
            <button class="view-btn">
              Quick View
            </button>
          </div>    `;

  return item;
}

function renderAllCards(products) {
  if (!products) {
    console.log("products not recieved in render all method");
    return;
  }
  // console.log("products", products);

  products.map((product) => {
    if (product.category === categorySelector)
      grid.appendChild(renderCard(product));
  });
}

productsInLocalStorage = JSON.parse(localStorage.getItem("allProducts"));
// console.log("product in ls", productsInLocalStorage);
// in no data in local storage then fetch this
if (!productsInLocalStorage) {
  //  fetching all the products
  fetch("https://dummyjson.com/products")
    .then((res) => {
      console.log("response is ", res);

      if (!res.ok) {
        console.log("response is not ok ");

        throw new Error("fetch is not properly done");
      }
      return res.json();
    })
    .then((products) => {
      console.log("products fetched ", products);
      localStorage.setItem("allProducts", JSON.stringify(products.products));

      renderAllCards(products.products);
    })
   .catch((err) => {
      console.log("error occured ", err.message);
    });
} else {
  // if there is data in local storage
  renderAllCards(productsInLocalStorage);
}

// adding cart items in local storage

let itemsInCart = JSON.parse(localStorage.getItem("cartInLocalStorage")) || [];
try {
  if (!itemsInCart) {
    let emptyCart = [];
    localStorage.setItem("cartInLocalStorage", JSON.stringify(emptyCart));
  }
} catch (error) {
  console.log("error", error.message);
}

document.addEventListener("click", (e) => {
  const productButton = e.target.closest(".add-btn");
  const productId = Number(productButton.dataset.id);
console.log("product id is", productsInLocalStorage);
  const product = productsInLocalStorage.find((p) => p.id === productId);

  addToCart(product);
});

function addToCart(newItem) {
  itemsInCart = JSON.parse(localStorage.getItem("cartInLocalStorage")) || [];
  console.log("cart in local storage", itemsInCart);

  if (itemsInCart.length === 0) {
    alert("cart is empty");
  }

  let indexOfItem = itemsInCart.findIndex((item) => item.id === newItem.id);
  if (indexOfItem === -1) {
    // add this item with a prop quantity set to 1
    itemsInCart.push({ ...newItem, quantity: 1 });
  } else {
    //  add this item and increase 1 to quantity
    itemsInCart[indexOfItem] = {
      ...itemsInCart[indexOfItem],
      quantity: itemsInCart[indexOfItem].quantity + 1,
    };
  }

  localStorage.setItem("cartInLocalStorage", JSON.stringify(itemsInCart));
}

const beautyBtn = document.querySelector("#beauty-id");
const fragranceBtn = document.querySelector("#fragrances-id");
const furnitureBtn = document.querySelector("#furniture-id");

beautyBtn.addEventListener("click", () => {
  // categorySelector = "beauty";
  updateCategorySelector("beauty")

  console.log("btns clicked is", categorySelector);
});

fragranceBtn.addEventListener("click", () => {
  //  categorySelector ="fragrances"
  updateCategorySelector("fragrances")

  console.log("btns clicked is", categorySelector);
});

furnitureBtn.addEventListener("click", () => {
  //  categorySelector ="furniture"
  updateCategorySelector("furniture")
  console.log("btns clicked is", categorySelector);
});
console.log("btns clicked is", categorySelector);

function updateCategorySelector(category) {
  localStorage.setItem("categorySelector", category);
  window.location.reload();
}
