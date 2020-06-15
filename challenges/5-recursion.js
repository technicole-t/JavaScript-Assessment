// Implement a function deepKeys that will take an object
// as its argument and go through that object, including
// any nested objects, and collect all of the keys into a single array.
const deepKeys = object => {
  const array = [];
  for (let key in object) {
    if (typeof object[key] === "object") {
      array.push(key);
      array.push(deepKeys(object[key]));
    } else {
      array.push(key);
    }
  }
  return array.flat();
};

const deepRoute = () => {};
const flat = () => {};

module.exports = { deepRoute, deepKeys, flat };
