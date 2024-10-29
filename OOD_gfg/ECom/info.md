# E-commerce Low-Level Design

## Project Overview

This project is a low-level design of an E-commerce system. It includes the implementation of various classes and their interactions to simulate the functionalities of an E-commerce platform. The design adheres to SOLID principles and employs several design patterns to ensure maintainability, scalability, and testability.

## Question

Design a low-level system for an E-commerce platform. The system should support the following functionalities:

1. **Customer** : A customer can add items to the cart, remove items, update item quantities, and place orders.
2. **Seller** : A seller can register products, update product quantities, and remove products.
3. **Product** : Products have attributes like name, description, price, category, available count, and ratings.
4. **Category** : Products are categorized, and categories have a name and description.
5. **Order** : Orders have a status, items, and shipping address.
6. **Cart** : A cart holds items that a customer wants to purchase.

## Design Principles and Patterns Used

### SOLID Principles

1. **Single Responsibility Principle (SRP)** :

* Each class has a single responsibility. For example, the [`Customer`](vscode-file://vscode-app/c:/Users/Redmi/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.esm.html) class handles customer-related operations, the [`Seller`](vscode-file://vscode-app/c:/Users/Redmi/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.esm.html) class handles seller-related operations, and the [`Product`](vscode-file://vscode-app/c:/Users/Redmi/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.esm.html) class handles product-related attributes.

1. **Open/Closed Principle (OCP)** :

* The system is designed to be open for extension but closed for modification. For example, new product categories can be added without modifying existing code.

1. **Liskov Substitution Principle (LSP)** :

* Subclasses should be substitutable for their base classes. For example, the [`Customer`](vscode-file://vscode-app/c:/Users/Redmi/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.esm.html) and [`Seller`](vscode-file://vscode-app/c:/Users/Redmi/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.esm.html) classes extend the [`User`](vscode-file://vscode-app/c:/Users/Redmi/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.esm.html) class and can be used interchangeably where a [`User`](vscode-file://vscode-app/c:/Users/Redmi/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.esm.html) is expected.

1. **Interface Segregation Principle (ISP)** :

* Interfaces are split into smaller, more specific ones. For example, the [`Searchable`](vscode-file://vscode-app/c:/Users/Redmi/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.esm.html) interface is implemented by the [`ProductsCatalog`](vscode-file://vscode-app/c:/Users/Redmi/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.esm.html) class to provide search functionality.

1. **Dependency Inversion Principle (DIP)** :

* High-level modules do not depend on low-level modules; both depend on abstractions. For example, the [`Customer`](vscode-file://vscode-app/c:/Users/Redmi/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.esm.html) class depends on the [`Cart`](vscode-file://vscode-app/c:/Users/Redmi/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.esm.html) abstraction rather than a specific cart implementation.

### Design Patterns

1. **Factory Pattern** :

* Used to create instances of products and categories. This ensures that the creation logic is centralized and can be easily modified.

1. **Singleton Pattern** :

* Ensures that there is only one instance of the [`ProductsCatalog`](vscode-file://vscode-app/c:/Users/Redmi/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.esm.html) class, which holds all the products in the system.

1. **Strategy Pattern** :

* Can be used to implement different search strategies in the [`ProductsCatalog`](vscode-file://vscode-app/c:/Users/Redmi/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.esm.html) class.

## Project Structure

OOD_gfg/
    ECom/
        Cart.js
        Category.js
        Customer.js
        MyECom.js
        Order.js
        OrderLog.js
        OrderStatus.js
        package.json
        Product.js
        ProductsCatalog.js
        Searchable.js
        Seller.js
        Shipment.js
        User.js
    	info.md


## How to Run

1. Clone the repository.
2. Navigate to the [ECom](vscode-file://vscode-app/c:/Users/Redmi/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.esm.html) directory.
3. Install dependencies (if any).
4. Run the project using the following command:

**npm** **start**

## Class Descriptions

### Customer

Handles customer-related operations such as adding items to the cart, removing items, updating item quantities, and placing orders.

### Seller

Handles seller-related operations such as registering products, updating product quantities, and removing products.

### Product

Represents a product with attributes like name, description, price, category, available count, and ratings.

### Category

Represents a product category with a name and description.

### Order

Represents an order with a status, items, and shipping address.

### Cart

Represents a cart that holds items that a customer wants to purchase.

### ProductsCatalog

Holds all the products in the system and provides search functionality.

## Example Usage

Here is an example of how the system can be used:
```js
import Customer from './Customer.js'
import Seller from './Seller.js'
import Product from './Product.js'
import Category from './Category.js'
import ProductsCatalog from './ProductsCatalog.js';

const MyECom = {
    productsCatalog: new ProductsCatalog()
}

const customer = new Customer("Alice", "1234567890", "Nagpur");
const seller = new Seller("Bob's Electronics", "0987654321");

const electronics = new Category("Electronics", "Electronic items");
const camera = new Product("Camera", "Digital Camera", 500, electronics, 10);

seller.registerProduct(MyECom.productsCatalog, camera);

const foundProduct = MyECom.productsCatalog.searchProduct("camera");
customer.addItemToCart({product: camera, count: 2});
customer.placeOrder();

console.log(foundProduct);
console.log(customer.getOrderHistory());

```

## Conclusion

This project demonstrates a low-level design of an E-commerce system using SOLID principles and design patterns. The design ensures that the system is maintainable, scalable, and testable.
