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

var table = document.getElementsByTagName("table")[0];
var i = 1;
products.forEach((element, index) => {
  var row =
    `<tr>
    <td>` +
    i++ +
    `</td>
    <td>` +
    element["name"] +
    `</td>
    <td>` +
    element["price"] +
    `</td>
    <td><img width="50px" height="50px" src="` +
    element["img"] +
    `" /></td>
    <td><a href="#">Sua</a></td>
    <td><a href="#">Xoa</a></td>
  </tr>`;

  table.innerHTML += row;
});
