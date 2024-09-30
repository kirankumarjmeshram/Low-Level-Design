## **Open/Closed Principle (OCP)**

#### **Definition** :

The **Open/Closed Principle (OCP)** states that software entities (like classes, modules, or functions) should be  **open for extension but closed for modification** . This means you should be able to add new functionality to an existing class without modifying its existing code, thereby preventing regressions and making the system more maintainable.

#### **Why It’s Important** :

By adhering to OCP, you can add new features or functionality without altering existing code, which helps avoid introducing bugs into stable, tested parts of your system. This also makes it easier to extend the behavior of classes without rewriting them.

#### **Example:**

##### Without OCP (Direct Modification):

Let’s say we have a `Notification` class that sends notifications via email, and now we want to extend it to also send SMS notifications. Without OCP, we would modify the existing class:

```js
class Notification {
    sendNotification(type) {
        if (type === 'email') {
            console.log('Sending email...');
        } else if (type === 'sms') {
            console.log('Sending SMS...');
        }
    }
}

const notification = new Notification();
notification.sendNotification('email');
notification.sendNotification('sms');
```

In this example:

* Every time a new type of notification is added (e.g., push notifications), we would have to modify the `sendNotification` method.
* This violates OCP because we are **modifying** the class to add new behavior, which can potentially introduce bugs.

##### With OCP (Extending without Modifying):

Now, let’s refactor the code to adhere to the Open/Closed Principle. Instead of modifying the `Notification` class, we can extend it by creating new classes for each type of notification:

```js
// Base class
class Notification {
    send() {
        throw new Error('send() method must be implemented');
    }
}

// Email Notification class (extends Notification)
class EmailNotification extends Notification {
    send() {
        console.log('Sending email...');
    }
}

// SMS Notification class (extends Notification)
class SMSNotification extends Notification {
    send() {
        console.log('Sending SMS...');
    }
}

// We can now extend further without modifying existing classes
class PushNotification extends Notification {
    send() {
        console.log('Sending push notification...');
    }
}

const emailNotification = new EmailNotification();
emailNotification.send();  // Output: Sending email...

const smsNotification = new SMSNotification();
smsNotification.send();    // Output: Sending SMS...

const pushNotification = new PushNotification();
pushNotification.send();    // Output: Sending push notification...
```

In this refactored example:

* The base `Notification` class defines an interface (`send()` method) that each notification type must implement.
* Each new notification type is **extended** from the `Notification` base class, adhering to OCP. Now, if you want to add more notification types (like push notifications), you can do so by adding new classes without modifying existing ones.
* The existing code is **closed for modification** but **open for extension** through subclassing.
