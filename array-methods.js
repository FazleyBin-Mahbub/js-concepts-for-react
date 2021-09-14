const products = [
  {
    name: "laptop",
    price: 72000,
    brand: "ASUS",
    color: "black",
  },
  {
    name: "phone",
    price: 15000,
    brand: "POCO M3",
    color: "blue",
  },
  {
    name: "Watch",
    price: 2000,
    brand: "Casio",
    color: "silver",
  },
  {
    name: "Glass",
    price: 950,
    brand: "Blue Card",
    color: "white",
  },
  {
    name: "Camera",
    price: 45000,
    brand: "Canon",
    color: "black",
  },
];

// map return the array of products objects
const brands = products.map((product) => product.brand);

// console.log(brands);

// forEach console all the product from products array
products.forEach((product) => console.log(product.name));

// filter returns the products value using condition
const specificName = products.filter((product) => product.price < 5000);
console.log(specificName);

// find returns the first products value using condition
const special = products.find((product) => product.price < 5000);
console.log(special);
