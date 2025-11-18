const multiplier = {
  factor: 2,
  multiply(n) {
    return n * this.factor
  },
}
Array.prototype.myMap = function (callback, thisArg) {
  if (typeof callback !== "function") {
    return console.error(callback + " is not function")
  }
  
  let result = []
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result.push(callback.call(thisArg, this[i], i))
    }
  }
  return result
}

const arr = [1, , 3]

console.log(
  arr.myMap(function (n, index) {
    console.log(index)
    return this.multiply(n)
  }, multiplier),
)
