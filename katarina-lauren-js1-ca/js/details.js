const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
  id = params.get("id");
} else {
  document.location.href = "/";
}

const detailsUrl =
  "http://makeup-api.herokuapp.com/api/v1/products/" + `${id}` + ".json";

const enabledUrl = "https://noroffcors.herokuapp.com/" + detailsUrl;

const container = document.querySelector(".detail-container");

fetch(enabledUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    createDetails(json);
  })
  .catch(function (error) {
    container.innerHTML = "<h1>Oops! something went wrong</h1>";
  });

function createDetails(details) {
  console.log(details);

  const image = document.querySelector("img");
  container.removeChild(image);

  const productImage = document.createElement("img");
  productImage.className = "details-image";
  productImage.src = details.image_link;
  productImage.alt = details.name;
  productImage.style.maxHeight = "200px";
  container.insertBefore(productImage, container.childNodes[0]);

  const productType = details.product_type;
  const formattedProduct = productType.replace("_", " ");
  const product = document.querySelector(".product");
  product.innerHTML = formattedProduct;
  product.style.textTransform = "Capitalize";

  const heading = document.querySelector("h1");
  heading.innerHTML = details.name;

  const description = document.querySelector(".description");
  description.innerHTML = details.description;

  const price = document.querySelector(".price");
  price.innerHTML = details.price;
}
