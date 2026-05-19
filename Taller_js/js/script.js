

const url_cafeteria = "https://gist.githubusercontent.com/jhonatan89/8208704bb51625c3ffa2f36d741c2adc/raw/1790af9d9faf39328056d41e2c2eef8550ab8758/cafeteria.json";


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
    const cafeteriaContainer = document.querySelector(".menu-container");
    const products= data.results; // Asegúrate de que 'results' es la clave correcta en tu JSON
    for (let item of products) {
        buildItemFromData(item, cafeteriaContainer);
    }   
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
    favoriteButton.className = "btn btn-secondary";
    favoriteButton.textContent = "♡";


    buttonContainer.appendChild(BuyButton);
    buttonContainer.appendChild(favoriteButton);

    articleElement.appendChild(buttonContainer);

    container.appendChild(articleElement);

}





// "id":1,
// "name":"Delicias Cola Giratoria",
// "price":19.99,
// "description":"Productos de panadería especializados para perros con gustos exigentes",
// "image":"http://dummyimage.com/600x400.png/ff4444/ffffff"
    
    
// const itemDiv = document.createElement("div");
//     itemDiv.classList.add("cafeteria-item");
//     itemDiv.innerHTML = `
//       <h3>${item.id}</h3>
//       <p>Precio: $${item.price}</p>
//       <p>Descripción: ${item.description}</p>
//       <img src="${item.image}" alt="${item.name}" />
//     `;
//     container.appendChild(itemDiv);



// fetch(url_cafeteria)
//   .then((response) => {
//     // Manejar la respuesta inicial
//     if (!response.ok) {
//       throw new Error("Error en la petición: " + response.status);
//     }
//     return response.json(); // Convertir a JSON
//   })
//   .then((data) => {
//     // Trabajar con los datos
//     console.log(data);
//   })
//   .catch((error) => {
//     // Manejar errores
//     console.error("Problema con la petición:", error);
//   });


// html original code id: "cafeteria"

//<!-- Categoría 1: Café de origen en grano o molido -->
//<article class="menu-card">
            //   <header class="menu-card__header">
            //     <span class="menu-card__tag">Grano</span>
            //     <h3>Café de origen en grano</h3>
            //   </header>
            //   <img
            //     class="menu-card-image"
            //     width="250"
            //     height="250"
            //     src="images/cafe.png"
            //     alt="Café de origen en grano"
            //     width="300"
            //   />
            //   <p class="menu-card-price">Price: $ 40.000</p>
            //   <div class="menu-card-button">
            //     <button class="btn btn-primary">Comprar</button>
            //     <button class="btn btn-secondary">♡</button>
            //   </div>
            // </article>

            // <!-- Categoría 2: Café de especialidad en taza -->
            // <article class="menu-card">
            //   <header class="menu-card__header">
            //     <span class="menu-card__tag">Molido</span>
            //     <h3>Café de origen molido</h3>
            //   </header>
            //   <img
            //     class="menu-card-image"
            //     width="250"
            //     height="250"
            //     src="images/cafe.png"
            //     alt="Café de origen molido"
            //     width="300"
            //   />
            //   <p class="menu-card-price">Price: $ 40.000</p>
            //   <div class="menu-card-button">
            //     <button class="btn btn-primary">Comprar</button>
            //     <button class="btn btn-secondary">♡</button>
            //   </div>
            // </article>

            // <!-- Categoría 3: Sabores de la casa -->
            // <article class="menu-card">
            //   <header class="menu-card__header">
            //     <span class="menu-card__tag">Bebida</span>
            //     <h3>Café de la casa</h3>
            //   </header>
            //   <img
            //     class="menu-card-image"
            //     width="250"
            //     height="250"
            //     src="images/cafe_taza.png"
            //     alt="Sabores de la casa"
            //     width="300"
            //   />
            //   <p class="menu-card-price">Price: $ 12.000</p>
            //   <div class="menu-card-button">
            //     <button class="btn btn-primary">Comprar</button>
            //     <button class="btn btn-secondary">♡</button>
            //   </div>
            // </article>
