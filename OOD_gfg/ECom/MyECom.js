import Customer from './Customer.js'
import Seller from './Seller.js'
import Product from './Product.js'
import Category from './Category.js'
import ProductsCatalog from './ProductsCatalog.js';

const  MyECom =  {
    productsCatalog : new ProductsCatalog()
}

const customer1 = new Customer("Kiran Test 1", 99999999, "Keshori")
const seller1 = new Seller("Seller Test 1", 8888888888);

const electronics = new Category("Electronics", "Electronincs items");
// name, description, price, category, availableCount
const icamera = new Product("Iphone Camera", "12MP Digital Camera", 129000, electronics, 100);
const myCamera = new Product("MyPhone Camera", "120MP Digital Camera", 29000, electronics, 100);

seller1.registerProduct(MyECom.productsCatalog, icamera)
seller1.registerProduct(MyECom.productsCatalog, myCamera)

const foundProduct1 = MyECom.productsCatalog.searchProduct("Iphone Camera")
const foundProduct2 = MyECom.productsCatalog.searchProduct("MyPhone Camera")

console.log(foundProduct1)
console.log(foundProduct2)

customer1.placeOrder()

console.log(customer1.getOrderHistory())

