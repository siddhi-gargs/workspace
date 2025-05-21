class User {
  #name;
  #id;
  #email;
  #differentiator;
  constructor(id, name, email, differentiator) {
    this.#id = id;
    this.#name = name;
    this.#email = email;
    this.#differentiator = differentiator;
  }

  getUserType() {
    return this.#differentiator;
  }
}

class Customer extends User {
  #address;
  constructor(id, name, email, address) {
    super(name, id, email, "customer");
    this.#address = address;
    this.orderHistory = [];
  }

  placeOrder(order) {
    this.orderHistory.push(order);
  }
  viewHistory() {
    return this.orderHistory;
  }
}

const cust1 = new Customer(1, "A", "saloni@gmail.com", "670 kn");
console.log(cust1);

console.log(cust1.getUserType());
