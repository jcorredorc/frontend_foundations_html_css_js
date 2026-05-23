

const url_cafeteria = "https://gist.githubusercontent.com/jhonatan89/8208704bb51625c3ffa2f36d741c2adc/raw/1790af9d9faf39328056d41e2c2eef8550ab8758/cafeteria.json";
let allproducts = [];


const FAVORITES_KEY = "cafeteria_favorites";
const favoritesIds = new Set(loadFavoritesFromLocalStorage()); // {'product-id1', 'product-id2',}


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
}; 


mostrarCafeteria();


function setCafteriaDataSection(data) {
    const cafeteriaContainer = document.querySelector("#cafeteria");
    allproducts= data.results; // Asegúrate de que 'results' es la clave correcta en tu JSON
    for (let item of allproducts) {
        buildItemFromData(item, cafeteriaContainer);
    }
    renderFavorites();
    syncHeartButtons();
};   


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

    const favoriteButton = document.createElement("button");
    favoriteButton.className = "btn btn-secondary btn-favorite";
    favoriteButton.dataset.productId = item.id;
    favoriteButton.setAttribute("aria-label", "Agregar a favoritos")
    const isFav = favoritesIds.has(item.id); // item.id
    favoriteButton.textContent = isFav ? "♥" : "♡";

    favoriteButton.addEventListener("click", () => {
        toggleFavorite(item.id);// item.id
    });

    buttonContainer.appendChild(BuyButton);
    buttonContainer.appendChild(favoriteButton);

    articleElement.appendChild(buttonContainer);

    container.appendChild(articleElement);

}

// favorites

function loadFavoritesFromLocalStorage(){
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
}

function saveFavoritesToLocalStorage(){
  localStorage.setItem(
    FAVORITES_KEY, 
    JSON.stringify([...favoritesIds])
  )
}

function renderFavorites() {
    const container = document.querySelector(".favorites__container");
    const emptyMsg = document.querySelector(".favorites__empty");

    // Wipe the previous render. Resetting innerHTML is fine here
    // because we own every element inside the container.
    container.innerHTML = "";

    // Filter the catalog down to the favorited items.
    const favoritesItems = allproducts.filter(producto => favoritesIds.has(producto.id));

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
    buttons.forEach(btn => {
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

