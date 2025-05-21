const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 3, c: 4, d: 5 };
const mergeObjects = function (obj1, obj2) {
  const merged = { ...obj1 };
  for (const ele in obj2) {
    if (ele in merged) {
      merged[ele] += obj2[ele];
    } else {
      merged[ele] = obj2[ele];
    }
  }
  return merged;
};

console.log(mergeObjects(obj1, obj2));
