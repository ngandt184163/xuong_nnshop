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

var search_url = window.location.search;

console.log(search_url);

var params = new URLSearchParams(search_url);

console.log(params);

var index = params.get("index");
console.log(index);

var product = products[index];

var title = document.getElementsByClassName("title")[0];

title.innerText = product["name"];

var price = document.getElementById("price");
price.innerText = product["price"];

var img = document.getElementById("img");

img.setAttribute("src", product["img"]);

//

var minus = document.getElementsByClassName("minus")[0];

var plus = document.getElementsByClassName("plus")[0];

var num = document.getElementById("num");

minus.onclick = function () {
  var number = num.value;

  if (number > 1) {
    number--;
    num.value = number;
  }
};

plus.onclick = function () {
  var number = num.value;
  number++;
  num.value = number;
};
