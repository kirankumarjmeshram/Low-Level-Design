class Searchable {
    searchProduct(productName) {
        throw "Must be implemented by subclass"
    }

    searchCategory(categoryName) {
        throw "Must be implemented by subclass"
    }
}

export default Searchable