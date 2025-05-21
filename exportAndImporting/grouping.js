import { isOdd, group, array, display } from "./mainExporting.js";

const byReduce = function (array) {
  return array.reduce(group(isOdd), {});
};

display(byReduce(array).false);

display("array before mutating", array);

display("array after mutating", array);

display("mutating", byReduce(array).false);
