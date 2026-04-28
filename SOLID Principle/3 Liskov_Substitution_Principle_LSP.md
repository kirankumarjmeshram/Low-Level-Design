### **Liskov Substitution Principle (LSP)**

* **Definition** : Objects of a **superclass** should be **replaceable** with **objects of a subclass without affecting the correctness of the program**.
* **Explanation** :
  * This principle ensures that subclasses can stand in for their parent classes without breaking the application. In other words, derived classes should enhance functionality but never compromise the behavior expected from the base class.
  * Parent class should have only that methods **only** which alligns with child classes.
  * Violating LSP leads to brittle, tightly coupled code that is difficult to extend or modify.
* **JavaScript Example** :

**Violates LSP: Penguin cannot fly like other birds**

```js
  class Bird {
    fly() {
      console.log('Flying');
    }
    makeSound(){}
  }

  class Penguin extends Bird {
    fly() {
      throw new Error('Penguins cannot fly');
    }
    makeSound(){
	console.log("Penguine Sound")
	}
  }

  // Using Bird objects
  const bird = new Bird();
  bird.fly(); // Works

  const penguin = new Penguin();
  penguin.fly(); // Throws an error
```

**Solution: Reorganize the inheritance hierarchy**

```js

  class BasicBird {
  	makeSound(){}
   }
  class Bird extends BasicBird {
   // move() {
     // console.log('Moving');
   // }
    fly() {
      console.log('Flying');
    }
  }

  class FlyingBird extends Bird {
    fly() {
      console.log('Flying');
    }
  }

  class Penguin extends BasicBird {
    fly() {
      console.log('Penguins swim but cannot fly');
    }
  }

  const flyingBird = new FlyingBird();
  flyingBird.fly(); // Works

  const penguin2 = new Penguin();
  penguin2.move(); // Correct behavior for penguin
```

In the corrected version, we respect LSP by ensuring subclasses (`Penguin`) don’t break the functionality expected from the parent class (`Bird`). Penguins still "move," but in their specific way (swimming instead of flying).
