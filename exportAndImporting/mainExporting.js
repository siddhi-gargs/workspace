export const isOdd = (number) => (number & 1) === 0;
export const array = [5, 6, 7, 20, 31, 33, 43, 89];
export const display = console.log;
export const rangeBase = function (number) {
  return number % 4;
};

// display("array", array);

export const group = function (func) {
  return function (object, value) {
    const key = func(value);
    if (!object[key]) object[key] = [];
    object[key].push(value);

    return object;
  };
};
