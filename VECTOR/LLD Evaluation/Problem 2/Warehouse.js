const Product = require("./Product");

class Warehouse {
  constructor(id, location) {
    this.id = id;
    this.location = location;
    this.products = new Map();
  }

  addProducts(product, quantity) {
    if (this.products.has(product.getId())) {
      const existingProduct = this.products.get(product.getId());
      existingProduct.setQuantity(existingProduct.getQuantity() + quantity);
    } else {
      product.setQuantity(quantity);
      this.products.set(product.getId(), product);
    }
  }
  updateProductQuantity(productId, quantity) {
    if (this.products.has(productId)) {
      const product = this.products.get(productId);
      product.setQuantity(quantity);
    }else{
        console.log("Product not found in warehouse");
    }
}
    getProducttQuantity(productId){
        if(this.products.has(productId)){
            return this.products.get(productId).getQuantity();
        }else{
            return 0;
        }
    }
}

module.exports = Warehouse;
