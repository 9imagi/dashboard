export const customers = [
  { id: "cust_001", name: "John Doe" },
  { id: "cust_002", name: "Jane Smith" }, //added this array yo make this a placeholder till i create a database
];

export const invoices = [
  {
    customer_id: customers[0].id, //now the custoner id dosent show erroes again
    amount: 15795,
    status: "pending",
    date: "2022-12-06",
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: "pending",
    date: "2022-11-14",
  },
];
