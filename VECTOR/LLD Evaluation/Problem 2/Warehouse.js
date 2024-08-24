const Product = require("./Product");

class Warehouse {
  constructor(id, location) {
    this.id = id;
    this.location = location;
    this.products = new Map()
  }

  addProducts(product, quantity){
    if(this.products.has(product.getId())){
        this.products.get(product.getId()).quantity += quantity;
    }else{
        this.products.set(product.getId(), {product, quantity});
    }
  }
  updateProductQuantity(productId, quantity) {
    if (this.products.has(productId)) {
        const product = this.products.get(productId);   
        product.quantity += quantity;
  }
  getProducttQuantity;
}
