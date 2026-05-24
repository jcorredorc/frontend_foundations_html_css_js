const url_cafeteria =
  "https://gist.githubusercontent.com/jhonatan89/8208704bb51625c3ffa2f36d741c2adc/raw/1790af9d9faf39328056d41e2c2eef8550ab8758/cafeteria.json";
let allproducts = [];

const FAVORITES_KEY = "cafeteria_favorites";
const favoritesIds = new Set(loadFavoritesFromLocalStorage()); // {'product-id1', 'product-id2',}

const CART_KEY = "cafeteria_cart";
const cartItems = loadCartFromLocalStorage();

function mostrarCafeteria() {
  fetch(url_cafeteria)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la petición: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      setCafteriaDataSection(data);
    })
    .catch((error) => {
      console.error("Problema con la petición:", error);
    });
}

mostrarCafeteria();

function setCafteriaDataSection(data) {
  const cafeteriaContainer = document.querySelector("#cafeteria");
  allproducts = data.results; // Asegúrate de que 'results' es la clave correcta en tu JSON
  for (let item of allproducts) {
    buildItemFromData(item, cafeteriaContainer);
  }
  renderFavorites();
  syncHeartButtons();
  renderCart();
  updateCartCounter();
}

function buildItemFromData(item, container) {
  const articleElement = document.createElement("article");
  articleElement.className = "menu-card";

  const headerElement = document.createElement("header");
  headerElement.className = "menu-card__header";

  const tagElement = document.createElement("span");
  tagElement.className = "menu-card__tag";
  tagElement.textContent = item.id;

  const titleElement = document.createElement("h3");
  titleElement.className = "menu-card__title";
  titleElement.textContent = item.name;

  headerElement.appendChild(tagElement);
  headerElement.appendChild(titleElement);

  const imageElement = document.createElement("img");
  imageElement.className = "menu-card-image";
  imageElement.src = item.image;
  imageElement.alt = item.description;
  imageElement.width = 300;
  imageElement.height = 200;

  articleElement.appendChild(headerElement);
  articleElement.appendChild(imageElement);

  const priceElement = document.createElement("p");
  priceElement.className = "menu-card-price";
  priceElement.textContent = `$${item.price}`;

  articleElement.appendChild(priceElement);

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "menu-card-button";

  const BuyButton = document.createElement("button");
  BuyButton.className = "btn btn-primary";
  BuyButton.textContent = "Comprar";
  BuyButton.addEventListener("click", () => {
    addToCart(item.id);
  });

  const favoriteButton = document.createElement("button");
  favoriteButton.className = "btn btn-secondary btn-favorite";
  favoriteButton.dataset.productId = item.id;
  favoriteButton.setAttribute("aria-label", "Agregar a favoritos");
  const isFav = favoritesIds.has(item.id); // item.id
  favoriteButton.textContent = isFav ? "♥" : "♡";

  favoriteButton.addEventListener("click", () => {
    toggleFavorite(item.id); // item.id
  });

  buttonContainer.appendChild(BuyButton);
  buttonContainer.appendChild(favoriteButton);

  articleElement.appendChild(buttonContainer);

  container.appendChild(articleElement);
}

// favorites

function loadFavoritesFromLocalStorage() {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
}

function saveFavoritesToLocalStorage() {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favoritesIds]));
}

function renderFavorites() {
  const container = document.querySelector(".favorites__container");
  const emptyMsg = document.querySelector(".favorites__empty");

  // Wipe the previous render. Resetting innerHTML is fine here
  // because we own every element inside the container.
  container.innerHTML = "";

  // Filter the catalog down to the favorited items.
  const favoritesItems = allproducts.filter((producto) =>
    favoritesIds.has(producto.id),
  );

  // Show the empty state only when there are no favorites.
  if (emptyMsg) {
    emptyMsg.style.display = favoritesItems.length === 0 ? "block" : "none";
  }

  for (const item of favoritesItems) {
    buildItemFromData(item, container);
  }
}

function syncHeartButtons() {
  const buttons = document.querySelectorAll(".btn-favorite");
  buttons.forEach((btn) => {
    const productId = Number(btn.dataset.productId);
    const isFav = favoritesIds.has(productId);
    btn.textContent = isFav ? "♥" : "♡";
    btn.classList.toggle("is-active", isFav);
  });
}

function toggleFavorite(productId) {
  if (favoritesIds.has(productId)) {
    favoritesIds.delete(productId);
  } else {
    favoritesIds.add(productId);
  }
  saveFavoritesToLocalStorage();
  renderFavorites();
  syncHeartButtons();
}

// Cart
function loadCartFromLocalStorage() {
  const cart = localStorage.getItem(CART_KEY);
  const parsedCart = cart ? JSON.parse(cart) : [];
  return Array.isArray(parsedCart) ? parsedCart : [];
}

function saveCartToLocalStorage() {
  localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
}

function addToCart(productId) {
  const product = allproducts.find((item) => item.id === productId);
  const cartItem = cartItems.find((item) => item.id === productId);

  if (!product) return;

  if (cartItem) {
    cartItem.quantity++;
  } else {
    cartItems.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  }

  saveCartToLocalStorage();
  renderCart();
  updateCartCounter();
}

function renderCart(){
  const cartContainer = document.querySelector(".cart__container");
  const emptyMsg = document.querySelector(".cart__empty");
  const totalElement = document.querySelector(".cart__total");

  cartContainer.innerHTML = "";

  if (emptyMsg) {
    emptyMsg.style.display = cartItems.length === 0 ? "block" : "none";
  }

  cartItems.forEach((item) => {
    buildItemFromCart(item, cartContainer);
  });

  const total = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  totalElement.textContent = `Total: $${total}`;

}


function buildItemFromCart(item, container){
  const articleElement = document.createElement("article");
  articleElement.className = "cart-item";

  const titleElement = document.createElement("h3");
  titleElement.className = "cart-item__title";
  titleElement.textContent = item.name;

  const priceElement = document.createElement("p");
  priceElement.className = "cart-item__price";
  priceElement.textContent = `Precio: $${item.price}`;

  const quantityElement = document.createElement("p");
  quantityElement.className = "cart-item__quantity";
  quantityElement.textContent = `Cantidad: ${item.quantity}`;

  const subtotalElement = document.createElement("p");
  subtotalElement.className = "cart-item__subtotal";
  subtotalElement.textContent = `Subtotal: $${item.price * item.quantity}`;

  articleElement.appendChild(titleElement);
  articleElement.appendChild(priceElement);
  articleElement.appendChild(quantityElement);
  articleElement.appendChild(subtotalElement);

  container.appendChild(articleElement);  

}

function updateCartCounter(){
  const counterElement = document.querySelector(".cart__counter");

  if (!counterElement) return;

  const totalItems = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  counterElement.textContent = totalItems;
}