import User from "./User.js";

class Seller extends User {
    constructor(name, phone) {
        super(name, phone);
        this.products = [];
    }

    registerProduct(productCatalog, product) {
        product.setSeller(this);
        productCatalog.addProduct(product);
        this.products.push(product);
    }

    updateProductQuantity(productCatalog, product, newQuantity) {
        productCatalog.updateProductQuantity(product, newQuantity);
    }

    removeProduct(productCatalog, product){
        productCatalog.removeProduct(product);
        this.products = this.products.filter(p => p.getId() !== product.getId());
    }

    toString() {
        return `Seller: ${super.toString()}`
    }
}

export default Seller;