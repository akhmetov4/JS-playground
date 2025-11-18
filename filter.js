Array.prototype.myFilter = function (callback, thisArg) {
  if (typeof callback !== "function") {
    return console.error(callback + " is not function")
  }
  const result = []
  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i)) {
      result.push(this[i])
    }
  }
  return result
}

const context = {
  min: 2,
}

const arr = [1, 2, 3]

console.log(arr.myFilter(1))

console.log(arr.myFilter((i) => i === 1))

console.log(
  arr.myFilter(function (i) {
    return i >= this.min
  }, context),
)
