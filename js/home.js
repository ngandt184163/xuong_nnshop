function Product(name, price, img) {
  this.name = name;
  this.price = price;
  this.img = img;
}

var products = [
  new Product("Thinkpad T490s", 25000000, "./img/thinkpad.jfif"),
  new Product("Thinkpad X1 Cacbon", 50000000, "./img/thinkpad.jfif"),
  new Product("Thinkpad T470s", 30000000, "./img/thinkpad.jfif"),
  new Product("Thinkpad T490s 16G", 20000000, "./img/thinkpad.jfif"),
  new Product("Asus", 15000000, "./img/thinkpad.jfif"),
];

var list_product = document.getElementsByClassName("list-product")[0];
products.forEach((element, index) => {
  var product =
    `<div class="product">
    <div class="img">
      <img
        src="` +
    element["img"] +
    `"
        alt=""
      />
    </div>
    <div class="info">
      <h3><a href="product_detail.html?index=` +
    index +
    `">` +
    element["name"] +
    `</a></h3>
      <i>Price: ` +
    element["price"] +
    `</i>
    </div>
    <div class="xxx">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <b>Đã bán 15.6k</b>
    </div>
  </div>`;

  //   innerHTML, appendChild()
  list_product.innerHTML += product;
});

// xu li tim kiem

var form = document.getElementById("form-search");

form.onsubmit = function (e) {
  e.preventDefault();
  var search_key = form.search.value.trim();
  if (search_key) {
    var item;
    var i;
    products.forEach((element, index) => {
      if (search_key == element["name"]) {
        item = element;
        i = index;
        return;
      }
    });

    if (item) {
      var product =
        `<div class="product">
      <div class="img">
        <img
          src="` +
        item["img"] +
        `"
          alt=""
        />
      </div>
      <div class="info">
        <h3><a href="product_detail.html?index=` +
        i +
        `">` +
        item["name"] +
        `</a></h3>
        <i>Price: ` +
        item["price"] +
        `</i>
      </div>
      <div class="xxx">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <b>Đã bán 15.6k</b>
      </div>
    </div>`;

      //   innerHTML, appendChild()
      list_product.innerHTML = product;
    } else {
      alert("khong co san pham nao");
    }
  }
};
