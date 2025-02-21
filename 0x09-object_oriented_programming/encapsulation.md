# Encapsulation

- Encapsulation refers to the practice of bundling data (variables) and methods (functions) that operate on the data into a single unit (object) while restricting direct access to some details of the object.

- Encapsulation in JavaScript can be achieved using private properties (with the # syntax) and getters/setter methods.

Below is an example using private fields and methods:

```js
class BankAccount {
  #balance = 0;

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
  }

  checkBalance() {
    console.log(`Current balance is: ${this.#balance}`);
  }
}

const account = new BankAccount("John");
account.deposit(500);
account.checkBalance();
// console.log(account.#balance); // Error: Private field '#balance' must be declared
```

In the example above:

- `#balance` is private, meaning it cannot be accessed directly from outside the class.

- `deposit()` and `checkBalance()` methods provide controlled access to modify `#balance`; this can help us to enforce the business logic when modifying `#balance`.

- `checkBalance()` safely retrieves the balance without exposing direct access.

- In the example above, we are bundling data (e.g., `#balance`) together with the methods that operate on the data (e.g., `deposit and checkBalance`) and we also restrict direct access to `#balance` using private properties.
