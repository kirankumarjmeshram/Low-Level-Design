let idCounter = 0;
class Product {
  constructor(name, description, price, category, availableCount) {
    this.id = idCounter++;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.availableCount = availableCount;
    this.ratings = 0;
    this.seller = null;
  }

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getDescription() {
    return this.description;
  }
  getPrice() {
    return this.price;
  }
  getCategory() {
    return this.category;
  }
  getAvailableCount() {
    return this.availableCount;
  }
  getRatings() {
    return this.ratings;
  }
  getSeller() {
    return this.seller;
  }
  setSeller(seller) {
    this.seller = seller;
  }
  setPrice(price) {
    this.price = price;
  }
  setAvailableCount() {
    this.availableCount = availableCount;
  }

  toString() {
    return `Product: {id: ${this.id}, name: ${this.name}, description: ${this.description}, price: ${this.price}, availableCount: ${this.availableCount}}`;
  }
}

export default Product;