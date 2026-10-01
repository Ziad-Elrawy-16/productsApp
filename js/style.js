const btn = document.querySelector(".myBtn");
const loading = document.querySelector(".loading");
const products = document.querySelector(".products");
const erorrMassege = document.querySelector(".erorrMassege");

btn.addEventListener("click", () => {
  loading.classList.remove("d-none");

  showProducts();
});

function showProducts() {
  fetch("https://dummyjson.com/products")
    .then((resp) => resp.json())
    .then((data) => {
      products.innerHTML = "";

      data.products.forEach((product) => {
        products.innerHTML += `
            <div class="col-lg-3 col-md-4 col-12 myCardStyle">
              <div class="card bg-body-tertiary shadow-lg h-100">
                <img
                  src="${product.thumbnail}"
                  class="card-img-top"
                  alt="${product.images}"
                />
                <div class="card-body">
                  <h5 class="card-title">${product.title}</h5>
                  <p class="text-secondary">${product.category}</p>
                  <p class="card-text">${product.description}</p>
                  <p class="text-success fs-5 fw-bold">$${product.price}</p>

                  <a href="#" class="btn btn-primary w-100">View Product</a>
                </div>
              </div>
            </div>
        `;
      });

      loadingMessage();
    })
    .catch((error) => {
      console.log(error);
      erorrMassege.innerHTML = `
    <h3 class="text-danger text-center">
      Something went wrong. Please try again.
    </h3>
  `;
      loadingMessage();
    });
}

function loadingMessage() {
  if (!loading.classList.contains("d-none")) {
    loading.classList.add("d-none");
  }
}
