// Add your functions here
function map(obj, cb) {
    const arr = []
    for (const key in obj) {
      arr.push(cb(obj[key]))
    }
    return arr
  }

  function reduce(obj, cb, accumulator) {
    const keys = Object.keys(obj)
    let i = 0

    if (accumulator) {
      i = 1
    } else {
      accumulator = obj[keys[1]]
    }

    for (i; i < keys.length; i++) {
      accumulator = cb(accumulator, obj[keys[i]])
    }
    return accumulator
  } 