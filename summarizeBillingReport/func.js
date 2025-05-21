import { entries } from "./data.js";
import { assertEquals } from "jsr:@std/assert";

const calculatePrize = (priceUntill, { price, quantity }) => {
  priceUntill += price * quantity;

  return priceUntill;
};

const IndividualStore = (object) => (currentStore) => {
  const {
    store: { storeId: storeNumber, location: place },
  } = currentStore;
  const storeSummarize = `${storeNumber}-${place}`;
  object[storeSummarize] = {};
  storeSummarize["location"] = place;
  storeSummarize["totalSales"] = currentStore.items.reduce(calculatePrize, 0);
  storeSummarize["totalItemsSold"] =
    currentStore.items.reduce(caluTotalItemsSold);

  return object;
};

const aggregateInvoice = function (data) {
  const object = {};
  const summarize = data.map(IndividualStore(object));
  console.log(summarize);
  return object;
};

console.log(aggregateInvoice(entries));

// Deno.test("generate Invoice", () => {
//   assertEquals(aggregateInvoice(entries), )
// });
