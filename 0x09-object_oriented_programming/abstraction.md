# Abstraction

Abstraction is about hiding implementation details and exposing only the relevant parts to the user.

This helps in reducing complexity by providing a clean and simple interface.

Unlike encapsulation, which focuses on restricting access to data, abstraction is about making interactions with objects simpler while keeping the internal logic hidden.

For example, When you drive a car, you don’t need to know how the engine works internally. You just use the `accelerate()`, `brake()`, and `refuel()` functions without worrying about the underlying mechanics.

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

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log(`Please enter an amount that matches your balance`);
    } else {
      this.#balance -= amount;
      console.log(
        `Successful withdrawal of ${amount}. New balance: ${this.#balance}`,
      );
    }
  }
}

const account = new BankAccount("John");
account.deposit(500);
account.withdraw(900); // Please enter an amount that matches your balance
account.withdraw(200); // Successful withdrawal of 200. New balance: 300
```

In this case, the user only interacts with `withdraw()` without having to know how calculations are done internally.
