## Single Responsibility Principle (SRP)

#### **Definition** :

* The **Single Responsibility Principle (SRP)** states that a class or module should have only one responsibility or reason to change. This means each class should do only one thing, ensuring that it is focused and easier to maintain.
* Gather togather those things that chang for the same reason, and separate those things that change for different reason.
* In short, It  says that a subsystem, module, class, or even function should not have more than one reason to change the class.

#### **Why It’s Important** :

If a class does multiple things (like handling user data and sending emails), a change in one responsibility may introduce bugs in the other. A class adhering to SRP will only change if its specific r

#### **Example:**

##### Without SRP (Tightly Coupled Responsibilities):

Consider a class that handles both user data management and sending email notifications:

```js
// Class handling both user management and email notification
class UserService {
    createUser(name, email) {
        // Logic to create user
        console.log(`User ${name} created with email ${email}`);

        // Send email notification
        this.sendWelcomeEmail(email);
    }

    sendWelcomeEmail(email) {
        console.log(`Sending welcome email to ${email}`);
    }
}

const userService = new UserService();
userService.createUser("John", "john@example.com");


```

In this example, UserService class is doing two things:

1. Managing user creation.
2. Sending a welcome email.

These two responsibilities are tightly coupled, which violates SRP. If you later need to change how emails are sent or switch email providers, you’ll have to modify the `UserService` class, making it more prone to errors.

##### With SRP (Loosely Coupled Responsibilities):

Now, let’s refactor this code to adhere to SRP by separating the concerns:

```js
class UserService{
    constructor(emailService){
        this.emailService = emailService;
    }
    createUser(name, email) {
        // Logic to create user
        console.log(`User ${name} created with email ${email}`);

        // Delegating the responsibility of sending email to EmailService
        this.emailService.sendWelcomeEmail(email);
    }
}

class EmailService {
    sendWelcomeEmail(email) {
        console.log(`Sending welcome email to ${email}`);
    }
} 

const emailService = new EmailService();
const userService = new UserService(emailService);

userService.createUser("kirankumarjm", "kirankjm@gmail.com)

```

Now, the responsibilities are clearly divided:

* The `UserService` class only handles user management.
* The `EmailService` class only handles sending emails.

This makes the code more modular, and changing how emails are sent will only require modifying the `EmailService`, without affecting `UserService`.
