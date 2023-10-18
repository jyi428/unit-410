// Input multiple orders one time

const input = [
  { type: "buy", price: 10.0, quantity: 0.3 },
  { type: "buy", price: 9.5, quantity: 2.9 },
  { type: "buy", price: 9.0, quantity: 0.1 },
  { type: "buy", price: 8.5, quantity: 1.2 },
  { type: "sell", price: 10.5, quantity: 2.4 },
  { type: "sell", price: 11.0, quantity: 1.4 },
  { type: "sell", price: 11.5, quantity: 1.3 },
  { type: "sell", price: 12.0, quantity: 0.9 },
];

// ouputs
const output = {
  bids: [
    // Buy orders
    { price: 10.0, quantity: 0.3 },
  ],
  asks: [
    // Sell orders
    { price: 10.5, quantity: 2.4 },
  ],
};
const order = (input) => {
  let bids = [];
  let asks = [];
  input.forEach((o) => {
    if (o.type === "buy") {
      bids.push({ price: o.price, quantity: o.quantity });
    } else {
      //
      asks.push({ price: o.price, quantity: o.quantity });
    }
  });
  return {
    bids,
    asks,
  };
};

console.log(order(input));

// ----------- ----------- ----------- ----------- -----------
// 2.7 to 2.2
const input1 = { type: "sell", price: 9.0, quantity: 0.5 };

const order2 = (input1) => {
  // input1.quantity
  // input1.type
  // add order sell
  // loop order type sell
  //    each bids make sure we have enough quantity
  //    IF there isn't go to the next bid
  //    return updatedOrderbook
  const orderBook = order(input);

  orderBook.forEach((o) => {});
};
