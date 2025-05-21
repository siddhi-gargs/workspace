// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     return `Hi, my name is ${this.name} and I am ${this.age} years old`;
//   }
// }

// const p1 = new Person("siddhi", 17);
// p1.greet();

class BankAccount {
  constructor(accountHolder, balance) {
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    return (this.balance += amount);
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance = this.balance - amount;
      return this.balance;
    }

    return "Insufficient funds";
  }

  checkBalance() {
    return this.balance;
  }
}

const acc1 = new BankAccount("kavita", 5000);

// here I created a class with named bankaccount:
// it has a constructor which is taking two argument "bankholder name" and balance these parameters are assigned to the properties of instance by this.bankHolder and this.balance

// this class is holding somefunctions some are taking arguments from outside and some are not and performing some functionality on that

// and then i created an instance of bankAccount class by const acc1 = new BankAccount("kavita", 5000);
