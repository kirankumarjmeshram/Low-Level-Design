import Customer from './Customer.js'
import Seller from './Seller.js'
import Product from './Product.js'
import Category from './Category.js'
import ProductsCatalog from './ProductsCatalog.js';

const  MyECom =  {
    productsCatalog : new ProductsCatalog()
}

const customer = new Customer("Alice", "1234567890","Nagpur");
const seller = new Seller("Bob's Electronics", "0987654321");

const electronics = new Category("Electronics", "Electronic items");
const camera = new Product("Camera", "Digital Camera", 500, electronics, 10);

seller.registerProduct(MyECom.productsCatalog, camera);

const foundProduct = MyECom.productsCatalog.searchProduct("camera");
customer.addItemToCart({product: camera, count: 2});
customer.placeOrder();

console.log(foundProduct);
console.log(customer.getOrderHistory());