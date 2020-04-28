const url =
  "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
const corsUrl = "https://noroffcors.herokuapp.com/" + url;

const heading = document.querySelector("h1");
const row = document.querySelector(".row");

async function fetchMakeup() {
  try {
    const response = await fetch(corsUrl);
    const makeUp = await response.json();
    displayMakeup(makeUp);
  } catch (error) {
    heading.innerHTML = "An error has occurred";
    heading.style.color = "red";
    row.style.display = "none";
  }
}
fetchMakeup();

function displayMakeup(makeUp) {
  let html = "";

  for (let i = 0; i < makeUp.length; i++) {
    let name = "Product name not available";
    if (makeUp[i].name) {
      name = makeUp[i].name;
    }

    let productType = makeUp[i].product_type;
    const formattedProduct = productType.replace("_", " ");

    html += `<div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card">
    <img class="image" src="${makeUp[i].image_link}" alt="${name}" />
    <div class="details">
        <h4 class="name">${name}</h4>
        <p><b>Price:</b> ${makeUp[i].price} $</p>
        <p class="product"><b>Product type:</b> ${formattedProduct}</p>
        <a class="btn btn-primary" href="details.html?id=${makeUp[i].id}">Details</a>
        </div>
        </div>
    </div>
</div>`;
  }
  row.innerHTML = html;
}
