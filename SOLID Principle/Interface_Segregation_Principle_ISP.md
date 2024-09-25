### **Interface Segregation Principle (ISP)**

* **Definition** : Clients should not be forced to implement interfaces they don’t use. This means you should **split large interfaces into smaller**, more specific ones.
* **Explanation** :
* Large interfaces force clients to implement methods they don't need. This leads to bloated and hard-to-maintain code. Instead, split these interfaces into smaller, cohesive ones to keep things focused.
* In JavaScript, this translates to having smaller, more specific classes or objects with clear responsibilities.
* **JavaScript Example** :

 **Violates ISP: Printer class has unnecessary methods**

```js
  class Machine {
    print() {}
    scan() {}
    fax() {}
  }

  class OldPrinter extends Machine {
    print() {
      console.log('Printing');
    }

    scan() {
      // Old printer does not support scanning
    }

    fax() {
      // Old printer does not support faxing
    }
  }
```

**Solution: Segregate interfaces into smaller specific ones**

```js
  class Printer {
    print() {
      console.log('Printing');
    }
  }

  class Scanner {
    scan() {
      console.log('Scanning');
    }
  }

  class FaxMachine {
    fax() {
      console.log('Faxing');
    }
  }

  // OldPrinter now only implements what it needs
  const printer = new Printer();
  printer.print(); // Works
```

By separating the concerns (`Printer`, `Scanner`, `FaxMachine`), we ensure that classes like `OldPrinter` are not burdened with unnecessary methods like `scan` or `fax`.
