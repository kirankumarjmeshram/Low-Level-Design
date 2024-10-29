import Searchable from "./Searchable.js";

class PeoductsCatalog extends Searchable {
    constructor() {
        super();
        this.products = [];
        this.categoryProductMap = new Map();
    }

    addProduct(product) {
        this.products.push(product);
        const category = product.getCategory().getName().toLowerCase();
        if(!this.categoryProductMap.has(category)) {
            this.categoryProductMap.set(category, []);
        }
        this.categoryProductMap.get(category).push(product)
    }

    searchProduct(productName) {
        return this.products.filter(product => product.getName().toLowerCase().includes(productName.toLowerCase()));
    }

    searchCategory(categoryName) {
        return this.categoryProductMap.get(categoryName.toLowerCase()) || [];
    }

}

export default PeoductsCatalog;