# **Factory Method**

**Factory Method** is a creational design pattern that provides an interface for creating objects in a superclass, but lets subclasses decide which class to instantiate..

**Solves the problem of creating product objects without specifying their concrete classes**

**delegates object creation to subclasses** instead of creating objects directly

Factory Method **follows Open/Closed Principle** by allowing extension without modifying existing code, and **follows Dependency Inversion** by depending on abstraction instead of concrete implementation

* It **avoids direct use of `new`** for creating objects.
* Instead, it uses a  **method (`factoryMethod`) to create objects** .
* The  **parent class defines the method** , but doesn’t decide the object.
* **Subclasses override the method** to decide which object to create.
* This **removes tight coupling** with concrete classes.
* The main class works with a  **common interface (Product)** .
* It follows **Open/Closed Principle** (easy to add new types).
* It follows **Dependency Inversion** (depends on abstraction, not concrete class).
* In short: **“Parent uses object, child decides object.”**

## ⚡ Ultra Simple Analogy

* `Creator` → Boss
* `factoryMethod()` → “Bring me a worker”
* `CreatorA` → brings Worker A
* `CreatorB` → brings Worker B

Boss doesn’t care who — just uses them.

## Example 1

```jsx
// Product (common interface)
class Product {
  operation() {
    throw new Error("Implement this");
  }
}

// Concrete Products
class ProductA extends Product {
  operation() {
    return "I am Product A";
  }
}

class ProductB extends Product {
  operation() {
    return "I am Product B";
  }
}

// Creator
class Creator {
  factoryMethod() {
    throw new Error("Override this");
  }

  // Business logic
  run() {
    const product = this.factoryMethod(); // 🔑 key line
    console.log(product.operation());
  }
}

// Concrete Creators
class CreatorA extends Creator {
  factoryMethod() {
    return new ProductA();
  }
}

class CreatorB extends Creator {
  factoryMethod() {
    return new ProductB();
  }
}

// Usage
new CreatorA().run(); // I am Product A
new CreatorB().run(); // I am Product B
```

```jsx
/**
 * The Creator class defines a method (factoryMethod)
 * that returns a Product object.
 * Subclasses will decide WHICH product to create.
 */
class Creator {
  /**
   * Factory Method (to be overridden by subclasses)
   */
  factoryMethod() {
    throw new Error("factoryMethod() must be implemented");
  }

  /**
   * This is the main business logic.
   * IMPORTANT: Creator is NOT just for creating objects.
   * It uses the object returned by factoryMethod().
   */
  someOperation() {
    // Instead of using "new ConcreteProduct", we call factoryMethod()
    const product = this.factoryMethod();

    // Use the product without knowing its exact type
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

/**
 * ConcreteCreator1 decides to create ConcreteProduct1
 */
class ConcreteCreator1 extends Creator {
  factoryMethod() {
    // This class decides which product to create
    return new ConcreteProduct1();
  }
}

/**
 * ConcreteCreator2 decides to create ConcreteProduct2
 */
class ConcreteCreator2 extends Creator {
  factoryMethod() {
    return new ConcreteProduct2();
  }
}

/**
 * Product interface (simulated in JS)
 * All products must implement operation()
 */
class Product {
  operation() {
    throw new Error("operation() must be implemented");
  }
}

/**
 * ConcreteProduct1 implementation
 */
class ConcreteProduct1 extends Product {
  operation() {
    // Real-world logic could be:
    // - API call
    // - DB operation
    // - Business processing

    return "{Result of the ConcreteProduct1}";
  }
}

/**
 * ConcreteProduct2 implementation
 */
class ConcreteProduct2 extends Product {
  operation() {
    return "{Result of the ConcreteProduct2}";
  }
}

/**
 * Client code works with Creator abstraction
 * It does NOT know which product is being created
 */
function clientCode(creator) {
  console.log("Client: I'm not aware of the creator's class, but it still works.");
  console.log(creator.someOperation());
}

/**
 * Application decides which Creator to use
 * (based on config, environment, etc.)
 */
console.log("App: Launched with the ConcreteCreator1.");
clientCode(new ConcreteCreator1());

console.log("");

console.log("App: Launched with the ConcreteCreator2.");
clientCode(new ConcreteCreator2());
```
