export const entries = [
  {
    saleId: 101,
    date: "2025-01-05",
    store: {
      storeId: 1,
      location: "Downtown",
    },
    items: [
      { itemId: "A101", name: "Shampoo", price: 5.99, quantity: 3 },
      { itemId: "A102", name: "Soap", price: 2.49, quantity: 5 },
    ],
    customer: {
      customerId: 501,
      name: "Alice",
      isMember: true,
    },
  },
  {
    saleId: 102,
    date: "2025-01-05",
    store: {
      storeId: 1,
      location: "Downtown",
    },
    items: [{ itemId: "A103", name: "Toothpaste", price: 3.99, quantity: 2 }],
    customer: {
      customerId: 502,
      name: "Bob",
      isMember: false,
    },
  },
  {
    saleId: 103,
    date: "2025-01-05",
    store: {
      storeId: 2,
      location: "Uptown",
    },
    items: [{ itemId: "A104", name: "Towel", price: 7.99, quantity: 1 }],
    customer: {
      customerId: 503,
      name: "Charlie",
      isMember: true,
    },
  },
  {
    saleId: 104,
    date: "2025-02-02",
    store: {
      storeId: 3,
      location: "toward Town",
    },
    items: [
      { itemId: "A105", name: "kurti", price: 4.77, quantity: 3 },
      { itemId: "A106", name: "pant", price: 5.34, quantity: 5 },
    ],
    customer: {
      customerId: 504,
      name: "barbie",
      isMember: false,
    },
  },
];
