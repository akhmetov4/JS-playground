Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    return console.error(callback + " is not function");
  }

  let i = 0;
  let accumulator;
  const len = this.length >>> 0;

  if (arguments.length > 1) {
    accumulator = initialValue;
  } else {
    while (i < len && !(i in this)) {
      i++;
    }

    if (i >= len) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = this[i];
    i++;
  }

  for (; i < len; i++) {
    if (i in this) {
      accumulator = callback(accumulator, this[i], i);
    }
  }
  return accumulator;
};

const arr = [1, 2, 3];

console.log(arr.myReduce((acc, i) => acc + i));
